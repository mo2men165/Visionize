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
  

const Galucoma = () => {
  return (
    <section className='my-4 container p-10'>
        <Image src={'/assets/what-glaucoma-looks-like.png'} width={700} height={700} alt='what-glaucoma-looks-like' className='my-10' />
        <p className='leading-7 text-gray-800 text-lg'>Glaucoma is a group of eye conditions that can damage the optic nerve, typically due to elevated pressure within the eye. It is often referred to as the "silent thief of sight" because it can progress slowly and without noticeable symptoms until significant vision loss occurs. The main types of glaucoma include open-angle glaucoma, which develops gradually and is the most common form, and angle-closure glaucoma, which can cause sudden and severe symptoms such as eye pain, headache, blurred vision, and nausea. <br /> <br />Glaucoma occurs when the fluid pressure inside the eye, known as intraocular pressure, rises to a level that damages the optic nerve fibers. These fibers are responsible for transmitting visual information from the eye to the brain. As glaucoma progresses, peripheral vision (side vision) is typically affected first, leading to a gradual loss of vision if left untreated. In advanced stages, glaucoma can cause tunnel vision or complete blindness. <br /> <br />
        Glaucoma, a leading cause of irreversible blindness worldwide, affects approximately 80 million people, a number projected to rise to 111.8 million by 2040. In the United States alone, over 3 million individuals are estimated to have glaucoma, yet nearly half are unaware due to its asymptomatic nature in early stages. By 2030, the economic burden of glaucoma in the U.S. is expected to surpass $10 billion annually, encompassing healthcare expenses and productivity losses. This condition encompasses various forms, with open-angle glaucoma accounting for 70-90% of cases, underscoring the importance of regular eye exams for early detection and proactive management of intraocular pressure. Managing glaucoma effectively not only preserves vision but also enhances quality of life, highlighting the critical role of ongoing monitoring and tailored treatment plans in preventing vision loss and maintaining eye health over time.</p>

        <div className='my-16'>
            <h2 className='my-6 text-[42px] underline text-bold'>FAQ</h2>
            <Accordion type="single" collapsible>
            <AccordionItem value="question-1">
                <AccordionTrigger>What are the early signs and symptoms of glaucoma?</AccordionTrigger>
                <AccordionContent className='leading-7 text-gray-800 text-md'>
                    Glaucoma often develops gradually and may not cause noticeable symptoms in its early stages. However, as the condition progresses, individuals may experience symptoms such as blurred vision, eye pain, halos around lights, severe headache, and redness in the eye. Early detection through regular eye exams is crucial as symptoms may not appear until significant vision loss has occurred.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-2">
                <AccordionTrigger>How is glaucoma diagnosed?</AccordionTrigger>
                <AccordionContent className='leading-7 text-gray-800 text-md'>
                    Glaucoma diagnosis typically involves several diagnostic tests, including tonometry (measuring intraocular pressure), ophthalmoscopy (examining the optic nerve), visual field test (assessing peripheral vision), and gonioscopy (evaluating the angle where the iris meets the cornea). Based on these tests and clinical evaluation, an ophthalmologist can diagnose glaucoma and recommend appropriate treatment.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-3">
                <AccordionTrigger>What treatment options are available for glaucoma?</AccordionTrigger>
                <AccordionContent className='leading-7 text-gray-800 text-md'>
                    Treatment for glaucoma aims to reduce intraocular pressure (IOP) to prevent further damage to the optic nerve. Options include medication (eye drops or oral medications), laser therapy (such as trabeculoplasty or iridotomy), and surgery (trabeculectomy or drainage implants) for advanced cases. Regular follow-up with an eye care specialist is essential to monitor progress and adjust treatment as needed.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-4">
                <AccordionTrigger>Can glaucoma be prevented?</AccordionTrigger>
                <AccordionContent className='leading-7 text-gray-800 text-md'>
                    While there is no known way to prevent glaucoma entirely, early detection and treatment can significantly slow or halt the progression of the disease. Regular eye exams, especially for individuals over the age of 40 or those with risk factors, are crucial in detecting glaucoma early when treatment is most effective.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-5">
                <AccordionTrigger>What are the risk factors for developing glaucoma?</AccordionTrigger>
                <AccordionContent className='leading-7 text-gray-800 text-md'>
                    Several factors increase the risk of developing glaucoma, including age (especially over 40), family history, ethnicity (African-Americans, Hispanics, and Asians), medical conditions (diabetes, hypertension), and certain eye conditions (previous injuries, chronic inflammation, thin corneas).
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-6">
                <AccordionTrigger>What lifestyle changes can help manage glaucoma?</AccordionTrigger>
                <AccordionContent className='leading-7 text-gray-800 text-md'>
                    While lifestyle changes cannot cure glaucoma, they can help manage the condition and support overall eye health. These include regular exercise, maintaining a healthy diet rich in antioxidants and vitamins, avoiding smoking, managing stress levels, and adhering to prescribed treatment plans.
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

export default Galucoma