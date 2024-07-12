'use client'
import DiagnosisForm from '@/components/shared/DiagnosisForm'
import { useUser } from "@clerk/clerk-react";
import { Inter, Merriweather } from 'next/font/google';
import React from 'react'


const merriweather = Merriweather ({
  weight: '300',
  subsets: ['latin']
})

const inter = Inter({
  weight: '400',
  subsets: ['latin']
})

const Diagnosis = () => {

const { user } = useUser();

const userId = user?.id as string

  return <>
    <div className='my-10 py-10 container'>
      <div className={`${inter.className} text-[14px] text-[rgb(197,195,194)]  uppercase`}>
        Get your diagnosis
      </div>
      <div className={`${merriweather.className} text-[36px] my-5`}>
        Fill in the following form to get started.
      </div>
      <DiagnosisForm userId={userId} />
    </div>



  </>
}

export default Diagnosis