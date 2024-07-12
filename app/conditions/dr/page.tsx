import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FaBackward } from 'react-icons/fa'
import Link from 'next/link'
  

const Dr = () => {
  return (
    <section className='my-4 container p-10'>
        <Image src={'/assets/DR-picture-RetinaRisk2.webp'} width={700} height={700} alt='what-glaucoma-looks-like' className='my-10' />
        <p className='leading-7 text-gray-800 text-lg'>
            Diabetic retinopathy is a progressive eye condition resulting from damage to the blood vessels of the retina, the light-sensitive tissue at the back of the eye. It is a leading cause of blindness among adults with diabetes. Initially, diabetic retinopathy may not cause noticeable symptoms, but as the disease advances, individuals may experience blurred vision, fluctuating vision, dark spots or floaters, impaired color vision, and vision loss. <br /> <br />

            The condition develops due to prolonged high blood sugar levels, which weaken and damage the delicate blood vessels nourishing the retina. As these vessels deteriorate, they may leak fluid or blood into the retina, causing swelling and distortion of vision. In severe cases, abnormal blood vessel growth (proliferative retinopathy) can lead to retinal detachment and irreversible vision loss.<br /><br />

            Early detection through regular eye exams, including dilated eye evaluations, is crucial for diagnosing diabetic retinopathy in its early stages when treatment is most effective. Management strategies focus on controlling blood sugar levels, blood pressure, and cholesterol to slow or halt the progression of the disease. Treatment options may include laser therapy to seal leaking blood vessels, injections of medication into the eye to reduce swelling, or surgery in advanced cases.<br /><br />

            Diabetic retinopathy affects a significant number of individuals worldwide, with prevalence rates closely linked to the duration and severity of diabetes. Preventive measures such as maintaining strict control of diabetes management, adopting a healthy lifestyle, and attending regular eye screenings are essential in preserving vision and minimizing the impact of diabetic retinopathy on overall eye health and quality of life.
        
        </p>

        <div className='my-16'>
            <h2 className='my-6 text-[42px] underline text-bold'>FAQ</h2>
            <Accordion type="single" collapsible>
            <AccordionItem value="question-1">
                <AccordionTrigger>What are the early signs and symptoms of diabetic retinopathy?</AccordionTrigger>
                <AccordionContent className='leading-7 text-gray-800 text-md'>
                    Diabetic retinopathy may not cause symptoms in its early stages. As the condition progresses, symptoms may include blurred vision, fluctuating vision, dark or empty areas in your vision, impaired color vision, and vision loss. Regular eye exams are crucial for early detection and management.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-2">
                <AccordionTrigger>How is diabetic retinopathy diagnosed?</AccordionTrigger>
                <AccordionContent className='leading-7 text-gray-800 text-md'>
                    Diagnosis of diabetic retinopathy involves a comprehensive eye examination, including visual acuity testing, pupil dilation to examine the retina, and optical coherence tomography (OCT) to capture detailed images of the retina. Early detection is critical to prevent vision loss and complications.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-3">
                <AccordionTrigger>What are the treatment options for diabetic retinopathy?</AccordionTrigger>
                <AccordionContent className='leading-7 text-gray-800 text-md'>
                    Treatment options for diabetic retinopathy depend on the severity and stage of the disease. They may include laser surgery to seal leaking blood vessels, injections of medications into the eye to reduce inflammation and prevent abnormal blood vessel growth, or vitrectomy surgery to remove blood and scar tissue from the eye's interior. Strict control of blood sugar levels and regular eye exams are essential for managing diabetic retinopathy effectively.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-4">
                <AccordionTrigger>Can diabetic retinopathy be prevented?</AccordionTrigger>
                <AccordionContent className='leading-7 text-gray-800 text-md'>
                    While diabetic retinopathy cannot always be prevented, maintaining strict control of blood sugar levels, blood pressure, and cholesterol can reduce the risk of developing the condition or slow its progression. Early detection through regular eye exams, especially for individuals with diabetes, is crucial for timely intervention and management.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-5">
                <AccordionTrigger>What are the risk factors for diabetic retinopathy?</AccordionTrigger>
                <AccordionContent className='leading-7 text-gray-800 text-md'>
                    Risk factors for diabetic retinopathy include long-standing diabetes, poor control of blood sugar levels, high blood pressure, high cholesterol, pregnancy, and tobacco use. Managing these factors and attending regular eye exams are essential for preventing diabetic retinopathy-related vision loss.
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        </div>
            <Button className='p-7 text-lg rounded-lg' >
                <Link href={'/conditions'} className='flex justify-center items-center'>
                <FaBackward color='#fff' />
                <p className='ml-2'>Back</p>
                </Link>
            </Button>
    </section>
  )
}

export default Dr