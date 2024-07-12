import { Inter, Merriweather } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const merriweather = Merriweather ({
    weight: '300',
    subsets: ['latin']
})

const inter = Inter({
    weight: '400',
    subsets: ['latin']
})

const Offer = () => {
  return (
    <section id='offer' className=' bg-[#033850] my-20  text-white'>
       <div className=' lg:grid grid-cols-2'>
       <div className='py-24'>
            <div className={`${inter.className} text-[14px] uppercase  p-10 `}>
                Why People choose us
            </div>
            <div className={`${merriweather.className} text-[48px] uppercase px-10 `} >
            Cutting-Edge Eye Disease Classification
            </div>
            <div className='grid md:grid-cols-2 gap-4'>
                <div className='p-7'>
                <div className='flex mb-5 items-center gap-4'>
                    <div className='rounded-[100%] w-[40px] h-[40px] flex justify-center items-center bg-[#00E1B7] text-white '>
                        1
                    </div>
                    <div className= {`${inter.className} text-[#00E1B7] text-[20px] `}>
                    Advanced Technology
                    </div>
                </div>
                    <div className={`${inter.className} text-[#fffc] text-[17px] `}>
                        <p>Our system uses modern technology to analyze fundus images, ensuring precise and timely diagnoses.</p>
                    </div>
                </div>
                <div className='p-7'>
                <div className='flex mb-5 items-center gap-4'>
                    <div className='rounded-[100%] w-[40px] h-[40px] flex justify-center items-center bg-[#00E1B7] text-white '>
                        2
                    </div>
                    <div className= {`${inter.className} text-[#00E1B7] text-[20px] `}>
                    Accurate Results
                    </div>
                </div>
                    <div className={`${inter.className} text-[#fffc] text-[17px] `}>
                        <p>We achieve consistently high-accuracy results through advanced techniques and state-of-the-art technology.</p>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-4'>
                <div className='p-7'>
                <div className='flex mb-5 items-center gap-4'>
                    <div className='rounded-[100%] w-[40px] h-[40px] flex justify-center items-center bg-[#00E1B7] text-white '>
                        3
                    </div>
                    <div className= {`${inter.className} text-[#00E1B7] text-[20px] `}>
                    Free of cost
                    </div>
                </div>
                    <div className={`${inter.className} text-[#fffc] text-[17px] `}>
                        <p>Our services are 100% free, available 24/7 to anyone, anywhere in the world and extremely easy to use.</p>
                    </div>
                </div>
                <div className='p-7'>
                <div className='flex mb-5 items-center gap-4'>
                    <div className='rounded-[100%] w-[40px] h-[40px] flex justify-center items-center bg-[#00E1B7] text-white '>
                        4
                    </div>
                    <div className= {`${inter.className} text-[#00E1B7] text-[20px] `}>
                    Easy to use
                    </div>
                </div>
                    <div className={`${inter.className} text-[#fffc] text-[17px] `}>
                        <p>Our system couldn't be easier to use, head to our diagnosis page, submit your details and receive your results in minutes.</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img src='/assets/older man at eye doctor.webp' alt='Person at the eye doctor' className='w-[100%] h-[100%]' />
        </div>
       </div>
    </section>
  )
}

export default Offer