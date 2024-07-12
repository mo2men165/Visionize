"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "../ui/input"
import { diagnosisFormSchema } from "@/lib/validator"
import * as z from 'zod'
import { diagnosisFormDefaultValues } from "@/constants"
import Dropdown from "./Dropdown"
import { Textarea } from "@/components/ui/textarea"
import { FileUploader } from "./FileUploader"
import { useEffect, useState } from "react"
import DatePicker from "react-datepicker";
import { useUploadThing } from '@/lib/uploadthing'
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "../ui/checkbox"
import toast from 'react-hot-toast';
import { Progress } from "@/components/ui/progress"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Merriweather } from "next/font/google"
import Link from "next/link"

const merriweather = Merriweather ({
  weight: '300',
  subsets: ['latin']
})

type DiagnosisFormProps = {
  userId: string
}

interface Disease {
  name: string;
  confidence: number;
}


const DiagnosisForm = ({ userId }: DiagnosisFormProps) => {

  const [files, setFiles] = useState<File[]>([])
  const [imgURL, setImgURL] = useState<string | null>(null)
  const [open, setOpen] = useState(false);
  const [glaucomaConfidence, setGlaucomaConfidence] = useState(0)
  const [cataractConfidence, setCataractConfidence] = useState(0)
  const [drConfidence, setDRConfidence] = useState(0)
  const [glaucomaPrediction, setGlaucomaPrediction] = useState("")
  const [cataractPrediction, setCataractPrediction] = useState("")
  const [drPrediction, setDRPrediction] = useState("")
  const [diagnosisMessage, setDiagnosisMessage] = useState("");

  const { startUpload } = useUploadThing('imageUploader')
  const [formSubmitted, setFormSubmitted] = useState(false); 


  const initialValues = diagnosisFormDefaultValues

  const form = useForm<z.infer<typeof diagnosisFormSchema>>({
    resolver: zodResolver(diagnosisFormSchema),
    defaultValues: initialValues
  })
 
  
  async function onSubmit(values: z.infer<typeof diagnosisFormSchema>) {
    try {
      const formImg = new FormData();
      formImg.append('imgURL', files[0])

      const formData = new FormData();
      formData.append('id', userId);
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('dob', values.dob.toISOString()); // Assuming dob is a Date object
      formData.append('gender', values.gender);
      formData.append('symptoms', values.symptoms);
      formData.append('prevDiseases', values.prevDiseases);
      formData.append('hypertension', values.hypertension);
      formData.append('diabetes', values.diabetes);
      formData.append('mobile', values.mobile);
      formData.append('imgURL', files[0]); // Assuming files[0] is the selected image file
        
      const fundusResponse = await fetch('http://127.0.0.1:5000/check_fundus', {
        method: "POST",
        body: formImg,
      });

      const fundusResult = await fundusResponse.json();

      console.log(fundusResult)

      if (fundusResult?.is_fundus_img == 1) {
        const response = await fetch('http://127.0.0.1:5000/save_data_and_predict', {
          method: "POST",
          body: formData,
        });
    
        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        const result = await response.json();
        setCataractConfidence(result.cataract.confidence);
        setGlaucomaConfidence(result.glaucoma.confidence);
        setDRConfidence(result.DR.confidence);
        setCataractPrediction(result.cataract.prediction);
        setGlaucomaPrediction(result.glaucoma.prediction);
        setDRPrediction(result.DR.prediction);
        console.log('Form submitted successfully:', result);
        toast.success('Form submitted successfully, See below for your results!');
        setFormSubmitted(true); 
        form.reset();
      }
  
    } catch (error) {
      console.error("Error submitting form:", error);      
      toast.error('Failed to submit form. Please try again later.');
    }
  }

  useEffect(() => {
    if (glaucomaPrediction === "Normal" && cataractPrediction === "Normal" && drPrediction === "Normal") {
        setDiagnosisMessage("Visionize detects no issues with the fundus image uploaded. Your eye health appears to be normal.");
    } else {
      let detectedDiseases = [];
          if (glaucomaPrediction !== "Normal") {
            detectedDiseases.push("Glaucoma");
        }
        if (cataractPrediction !== "Normal") {
            detectedDiseases.push("Cataracts" );
        }
        if (drPrediction !== "Normal") {
            detectedDiseases.push("Diabetic Retinopathy" );
        }  
        
        if (detectedDiseases.length === 1) {
            setDiagnosisMessage(`Visionize detects the presence of ${detectedDiseases[0]} in the fundus image uploaded. We recommend consulting with a healthcare professional for further evaluation.`);
        } else if (detectedDiseases.length > 1) {
            setDiagnosisMessage(`Visionize detects the presence of multiple eye conditions (${detectedDiseases.join(", ")}). We recommend consulting with a healthcare professional for further evaluation.`);
        }
    }
}, [glaucomaPrediction, cataractPrediction, drPrediction]);


  return <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex container flex-col gap-5">
        <div className="flex gap-5 flex-col">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Name" {...field} className="input-field" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Email address" {...field} className="input-field" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Phone number" {...field} className="input-field" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown onChangeHandler={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5">
          <FormField
              control={form.control}
              name="symptoms"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-32">
                    <Textarea placeholder="List your symptoms" {...field} className="textarea rounded-2xl" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                        <p className="ml-3 whitespace-nowrap text-grey-600">Date of birth</p>
                        <DatePicker 
                          selected={field.value} 
                          onChange={(date: Date | null) => field.onChange(date)} 
                          dateFormat="dd/MM/yyyy"
                          wrapperClassName="datePicker"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
            control={form.control}
            name="prevDiseases"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Do you have a history of eye diseases?</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <label className="flex items-center">
                      <Checkbox 
                        checked={field.value === "yes"}
                        onCheckedChange={() => field.onChange("yes")}
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox 
                        checked={field.value === "no"}
                        onCheckedChange={() => field.onChange("no")}
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="diabetes"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Do you have a history of diabetes?</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <label className="flex items-center">
                      <Checkbox 
                        checked={field.value === "yes"}
                        onCheckedChange={() => field.onChange("yes")}
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox 
                        checked={field.value === "no"}
                        onCheckedChange={() => field.onChange("no")}
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hypertension"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Do you have a history of hypertension?</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <label className="flex items-center">
                      <Checkbox 
                        checked={field.value === "yes"}
                        onCheckedChange={() => field.onChange("yes")}
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <Checkbox 
                        checked={field.value === "no"}
                        onCheckedChange={() => field.onChange("no")}
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
              control={form.control}
              name="imgURL"
              render={({ field }) => (
                <FormItem className="w-[25%]">
                  <FormControl className="h-72">
                    <FileUploader 
                      onFieldChange={field.onChange}
                      imgURL={field.value}
                      setFiles={setFiles}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        </div>
        <Button 
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full mt-10"
        >
          {form.formState.isSubmitting ? (
            'Submitting...'
          ): "Submit"}</Button>
      </form>
    </Form>

    { formSubmitted && (
      <div className="mt-20 mx-auto flex items-center justify-center flex-col gap-10">  
        <h2 className={`${merriweather.className} text-3xl leading-relaxed text-gray-800 `}>Your results are ready. Click here to view them</h2>
        <Popover open = {open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
          className="px-6 py-4 text-white text-[20px] bg-[#033850] rounded-2xl"
          onClick={() => setOpen(true)}
        >
          View Results
        </button>
        </PopoverTrigger>
        <PopoverContent className="w-[500px]">
        <         div className="mt-4">
                  <h6 className="text-md font-semibold mb-2">Glaucoma Detector:</h6>
                  <div className="flex justify-start items-center gap-7">
                    <Progress value={glaucomaConfidence} className="bg-gray-300 w-48 h-4 rounded-full" />
                    <span className="text-sm">{glaucomaConfidence}%</span>
                    <h6 className="text-sm ">{glaucomaPrediction}</h6>
                  </div>
                </div>
                <div className="mt-4">
                  <h6 className="text-md font-semibold mb-2">Cataracts Detector:</h6>
                  <div className="flex justify-start items-center gap-7">
                    <Progress value={cataractConfidence} className="bg-gray-300 w-48 h-4 rounded-full" />
                    <span className="text-sm">{cataractConfidence}%</span>
                    <h6 className="text-sm ">{cataractPrediction}</h6>
                  </div>
                </div>
                <div className="my-4">
                  <h6 className="text-md font-semibold mb-2">Diabetic Rettinopathy Detector:</h6>
                  <div className="flex justify-start items-center gap-7">
                    <Progress value={drConfidence} className="bg-gray-300 w-48 h-4 rounded-full" />
                    <span className="text-sm">{drConfidence}%</span>
                    <h6 className="text-sm ">{drPrediction}</h6>
                  </div>
                </div>
        <div className="flex justify-center items-center flex-col my-6">
        <h2 className="font-bold text-blue-900 text-[30px]">Conclusion</h2>
        <p className="text-[20px] mt-4 text-gray-600">{diagnosisMessage}</p>
          {glaucomaPrediction === "Normal" && cataractPrediction === "Normal" && drPrediction === "Normal" ? "" : <Button className='p-3 text-md rounded-lg mt-4' >
                <Link href={'/conditions'} className='flex justify-center items-center '>
                <p className='ml-2'>Read more about your case</p>
                </Link>
            </Button>}
        </div>
        
        </PopoverContent>
      </Popover>
      </div>
    )}  

</>
}

export default DiagnosisForm