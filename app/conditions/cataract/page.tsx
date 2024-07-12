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
  

const Cataract = () => {
  return (
    <section className='my-4 container p-10'>
        <Image src={'/assets/Symptoms-of-Cataract.jpg'} width={700} height={700} alt='what-glaucoma-looks-like' className='my-10' />
        <p className='leading-7 text-gray-800 text-lg'>Cataracts are a common eye condition characterized by clouding of the lens inside the eye, leading to blurry vision. They are often described as a gradual onset of vision changes that can affect daily activities such as driving or reading. Cataracts develop when proteins in the lens clump together, causing cloudiness and reducing the amount of light that reaches the retina. As the condition progresses, colors may appear faded, and night vision can be impaired. <br /> <br />

        Cataracts typically develop slowly and may initially cause only minor visual disturbances. However, as the cataract matures, vision can become significantly impaired, affecting quality of life. Common symptoms include blurred or cloudy vision, increased sensitivity to glare, difficulty seeing at night, and seeing halos around lights. <br /><br />

        Treatment for cataracts involves surgical removal of the cloudy lens and replacement with an artificial lens called an intraocular lens (IOL). This procedure is highly effective and has a low risk of complications. It is one of the most commonly performed surgeries worldwide and can restore clear vision and improve quality of life for those affected by cataracts. <br /><br />

        Cataracts are a leading cause of vision impairment globally, affecting millions of people each year. They are more prevalent with age but can also develop due to factors such as genetics, diabetes, prolonged exposure to sunlight, or certain medications. Early detection through routine eye exams is essential for timely intervention and optimal management of cataracts, emphasizing the importance of regular eye care in preserving long-term eye health and visual acuity.
        
        </p>

        <div className='my-16'>
            <h2 className='my-6 text-[42px] underline text-bold'>FAQ</h2>
            <Accordion type="single" collapsible>
            <AccordionItem value="question-1">
                <AccordionTrigger>What are the early signs and symptoms of cataracts?</AccordionTrigger>
                <AccordionContent className='leading-7 text-gray-800 text-md'>
                    Cataracts typically develop gradually and may initially cause minor visual disturbances. Common early symptoms include blurred or cloudy vision, increased sensitivity to glare, difficulty seeing at night, and seeing halos around lights. As the cataract progresses, colors may appear faded, and vision may worsen, affecting daily activities.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-2">
                <AccordionTrigger>How is cataracts diagnosed?</AccordionTrigger>
                <AccordionContent className='leading-7 text-gray-800 text-md'>
                    Diagnosis of cataracts involves a comprehensive eye exam by an ophthalmologist or optometrist. The exam includes visual acuity testing, a slit-lamp examination to assess the clarity of the lens, and a dilated eye exam to examine the retina and optic nerve. Based on these evaluations, the healthcare provider can confirm the presence of cataracts and recommend appropriate treatment options.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question-3">
                <AccordionTrigger>What are the treatment options for cataracts?</AccordionTrigger>
                <AccordionContent className='leading-7 text-gray-800 text-md'>
                    The primary treatment for cataracts is surgical removal of the cloudy lens and replacement with an artificial intraocular lens (IOL). This procedure, known as phacoemulsification, is highly effective and safe. It restores clear vision and typically requires minimal recovery time. In some cases, cataracts may not require immediate surgery, and symptoms can be managed with changes in eyeglass prescriptions or lifestyle adjustments until surgery is necessary.
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

export default Cataract