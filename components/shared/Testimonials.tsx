import React from 'react'
import { testimonials } from '@/constants'
interface FeedbackCardProps {
    index: number;
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
  }
const FeedbackCard: React.FC<FeedbackCardProps> = ({ index, testimonial, name, designation, company, image }) => (
    <div className='bg-[#000b20] p-10 rounded-3xl xs:w-[320px] w-ful'>
      <p className=' text-white text-[48px]'>"</p>
      <div className='mt-1'>
      <p className=' tracking-wider text-white text-[18px]'>{testimonial}</p>
      
      <div className='mt-7 flex justify-between items-center gap-1'>
      <div className='flex flex-1 flex-col'>
        <p className=' font-medium text-[16px] text-white'>
          <span className='text-white'>@</span> {name}
        </p>
        
      </div>
      <img src={image} alt={`feedback by ${name}`}
      className='w-10 h-10 rounded-full object-cover' />
      </div>
      </div>
    </div>
    )


const Testimonials = () => {
  return (
    <div id='testimonials' className='container my-20 py-10 bg-black-[#100d25] rounded-[20px]'>
    <div className={`sm:px-16 px-6 sm:py-16 py-10 bg-[#033850] rounded-2xl min-h-[300px]`}>
      <div>
      <p className={`sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider`}>
        What others say
      </p>
      <h2 className={` text-white md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>
        Testimonials.
      </h2>
      </div>
    </div>
    <div className = {`sm:px-16 px-6 -mt-20 pb-14 grid lg:grid-cols-3 gap-7`}>
    {testimonials.map((testimonial, index)=>(
      <FeedbackCard key= {testimonial.name} index = {index} {...testimonial} />
    ))}
    </div>
    </div>
  )
}

export default Testimonials