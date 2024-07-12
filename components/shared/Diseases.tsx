import React from 'react'
import { GiBleedingEye } from "react-icons/gi";
import { BsEye } from "react-icons/bs";
import { ImEyeBlocked } from "react-icons/im";
import { Inter, Merriweather } from 'next/font/google';
import Link from 'next/link';
import { FaCircleArrowRight } from "react-icons/fa6";

const merriweather = Merriweather ({
  weight: '300',
  subsets: ['latin']
})

const inter = Inter({
  weight: '400',
  subsets: ['latin']
})
const inter5 = Inter({
  weight: '500',
  subsets: ['latin']
})

const Diseases = () => {
  return (
    <section className='container  my-20 py-10'>
      <div className={`${inter.className} text-[14px] text-[rgb(197,195,194)] text-center uppercase`}>
        Area of speciality
      </div>
      <div className={`${merriweather.className} text-[36px] text-center my-10`}>
        We'll help you with the following conditions
      </div>
      <div className='grid lg:grid-cols-3 md:gap-5 gap-10'>

      <div className='relative h-[360px] mx-auto md:w-[50%] sm:w-[50%] lg:w-[100%] p-10 border-4 shadow-2xl border-gray-200 rounded-3xl  eye-container glaucoma'>
        
          <div className=' rounded-3xl layer absolute w-[100%] h-[100%] top-0 bottom-0 left-0 right-0'>
          <ImEyeBlocked className='absolute top-4 left-5 eye 'size={70} />

          <div className='mt-60 flex justify-between px-4'>

          <div className=''>
          <h3 className={`${inter5.className} eye-text text-[24px] `}>Glaucoma</h3>
          <h6 className={`${inter.className} eye-text text-[16px] text-[#687276] `}>Increased eye pressure</h6>
          </div>

          <div>
          <Link href='/conditions/glaucoma' className='relative top-3 right-5 text-[40px] arrow text-[#00E1B7]'>
          <FaCircleArrowRight />
          </Link>
          </div>

          </div>
          
          </div>

      </div>
      <div className='relative p-10 h-[360px] border-4 shadow-2xl border-gray-200 mx-auto md:w-[50%] sm:w-[50%] lg:w-[100%] rounded-3xl  eye-container cataract'>
          <div className=' rounded-3xl layer absolute w-[100%] h-[100%] top-0 bottom-0 left-0 right-0'>
          <BsEye className='absolute top-4 left-5 eye 'size={70} />

          <div className='mt-60 px-4 flex justify-between'>

          <div className=''>
          <h3 className={`${inter5.className} eye-text text-[24px] `}>Cataracts</h3>
          <h6 className={`${inter.className} eye-text text-[16px] text-[#687276] `}>Cloudy or blurred vision</h6>
          </div>

          <div>
          <Link href='/conditions/cataract' className='relative top-3 right-5 text-[40px] arrow text-[#00E1B7]'>
          <FaCircleArrowRight />
          </Link>
          </div>

          </div>
          
          </div>
      </div>
      <div className='relative p-10 h-[360px] border-4 shadow-2xl border-gray-200 mx-auto md:w-[50%] sm:w-[50%] lg:w-[100%] rounded-3xl  eye-container dr'>
          <div className='rounded-3xl layer absolute w-[100%] h-[100%] top-0 bottom-0 left-0 right-0'>
          <GiBleedingEye className='absolute top-4 left-5 eye 'size={70} />

          <div className='mt-60 px-4 flex justify-between'>

          <div className=''>
          <h3 className={`${inter5.className} eye-text text-[24px] `}>Diabetic Retinopathy</h3>
          <h6 className={`${inter.className} eye-text text-[16px] text-[#687276] `}>Damaged retinal blood vessels</h6>
          </div>

          <div>
          <Link href='/conditions/dr' className='relative top-3 right-5 text-[40px] arrow text-[#00E1B7]'>
          <FaCircleArrowRight />
          </Link>
          </div>

          </div>
          
          </div>
      </div>
        
      </div>
    </section>
  )
}

export default Diseases