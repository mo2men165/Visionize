import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import { Merriweather } from 'next/font/google'

const inter = Inter({
    weight: '400',
    subsets: ['latin']
})

const merriweather = Merriweather ({
    weight: '300',
    subsets: ['latin']
})

const Welcome = () => {
  return (
    <section className='flex justify-center items-center flex-col my-20 py-10 container m-auto text-center'>
        <div className = {`${inter.className} text-sm text-[#c5c3c2] uppercase my-6 ` }  >
            Welcome to Visionize
        </div>
        <div className={`${merriweather.className} text-4xl text-[#002333]  my-6` } >
        We’re here to provide you with top-quality eye disease diagnosis. Using advanced technology, we analyze eye images to give you accurate results.
        </div>
        <div>
            <Image src='/assets/visionize-favicon-white.png' width={100} height={100} alt='Visionize' />
        </div>
    </section>
  )
}

export default Welcome