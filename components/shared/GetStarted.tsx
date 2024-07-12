import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import { Merriweather } from 'next/font/google'
import Link from 'next/link'
import { Button } from '../ui/button'

const inter = Inter({
    weight: '400',
    subsets: ['latin']
})

const merriweather = Merriweather ({
    weight: '300',
    subsets: ['latin']
})

const GetStarted = () => {
  return (
    <section className='flex justify-center items-center flex-col my-20 py-10 container m-auto text-center'>
    <div className = {`${inter.className} text-sm text-[#c5c3c2] uppercase my-6 ` }  >
        Start your journey with Visionize now.
    </div>
    <div className={`${merriweather.className} text-4xl text-[#002333]  my-6` } >
    Get started now, upolad your fundus image and receive an accurate classification of your case!
    </div>
    <div>
        <Link href={'/diagnosis'}>
        <Button className='rounded-2xl text-[20px] p-7' >
            Upload your image now
        </Button>
        </Link>
    </div>
</section>
  )
}

export default GetStarted