import { Inter, Merriweather } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from "react-icons/fa";

const merriweather = Merriweather ({
    weight: '300',
    subsets: ['latin']
})

const inter = Inter({
    weight: '400',
    subsets: ['latin']
})

const Services = () => {
  return (
    <section id='about' className='grid md:grid-cols-2 container my-20 py-10 gap-10'>
        <div className='flex justify-center items-center'>
            <Image src='/assets/78f345_4acbb63aefa642d4ba444a44ef3bf6a3~mv2.webp' alt='eye check' height={600} width={600} className='rounded-3xl shadow-2xl' />
        </div>
        <div className='flex flex-col'>
            <div>
                <h2 className={`${merriweather.className} text-[#002333] text-[52px] `}>Easy, Free, Fast and Accurate classification</h2>
            </div>
            <div className={`${inter.className} text-[#687276] text-[17px] my-10 `} >
            We specialize in diagnosing eye diseases with personalized care, ensuring accurate results to support your eye health journey.
            </div>
            <div>
            <div className={` ${inter.className} text-[#002333] text-[17px] border-b-2 flex py-7 items-center gap-6`}>
            <FaCheck color='#6C5BF5' size={30}/>
                <p>Completely free of cost</p>
            </div>
            <div className={` ${inter.className} text-[#002333] text-[17px] border-b-2 flex py-7 items-center gap-6`}>
            <FaCheck color='#6C5BF5' size={30}/>
                <p>24/7 Availability</p>
            </div>
            <div className={` ${inter.className} text-[#002333] text-[17px] border-b-2 flex py-7 items-center gap-6`}>
            <FaCheck color='#6C5BF5' size={30}/>
                <p>Simple to use</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Services