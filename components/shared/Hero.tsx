import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return <>
    
    <section className='hero h-auto p-3'>
      <div className='flex justify-between items-center h-[100%] wrapper flex-col xl:flex-row'>
      <div>
        <h1 className='text-[#274760] hero_text max-w-[710px]'>Your partner in health and wellness</h1>
        <p className='max-w-[600px] hero-subtext'>Visionize is an AI powered software, built with modern, state-of-the-art machine learning techniques. Visionize is created to help with classifying certain eye diseases (Glaucoma, Cataracts and, diabetic retinopathy) by analyzing fundus images.</p>
        <a href="/diagnosis">
        <Button className='mt-5 px-7 py-9 text-md rounded-[70px]'>Upload your image now</Button>
        </a>
      </div>
      
      <figure className='items-start flex justify-end'>
        {/* <Image src='/assets/hero_img.png' alt='doctors' height={100} width={50} className='max-w-[84%]' /> */}
        <img src="/assets/hero_img.png" alt="doctors" className='w-[95%] mb-10 relative max-h-[84%]' />
      </figure>
      </div>
    </section>
  
  
  
  </>
}

export default Hero