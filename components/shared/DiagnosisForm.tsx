"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { diagnosisFormSchema } from "@/lib/validator"
import * as z from 'zod'
import { FileUploader } from "./FileUploader"
import { useState } from "react"
import { useUploadThing } from '@/lib/uploadthing'
import { useRouter } from "next/navigation"



const DiagnosisForm = () => {
  const [files, setFiles] = useState<File[]>([])

  const router = useRouter();

  const { startUpload } = useUploadThing('imageUploader')

  const form = useForm<z.infer<typeof diagnosisFormSchema>>({
    resolver: zodResolver(diagnosisFormSchema)
  })
 
  async function onSubmit(values: z.infer<typeof diagnosisFormSchema>) {
    let uploadedImageUrl = values.imageUrl;

    if(files.length > 0) {
      const uploadedImages = await startUpload(files)

      if(!uploadedImages) {
        return
      }

      uploadedImageUrl = uploadedImages[0].url
    }
    
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-72">
                    <FileUploader 
                      onFieldChange={field.onChange}
                      imageUrl={field.value}
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
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? (
            'Submitting...'
          ): `Submit`}</Button>
      </form>
    </Form>
  )
}

export default DiagnosisForm