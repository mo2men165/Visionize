import { Inter, Merriweather } from 'next/font/google';
import React, { useRef, useState, useEffect } from 'react';
import CountUp from "react-countup";

const merriweather = Merriweather({
    weight: '300',
    subsets: ['latin']
});
const inter = Inter({
    weight: '500',
    subsets: ['latin']
});

export default function Counter() {
    const [startCount, setStartCount] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setStartCount(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 } // Adjust the threshold as needed
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className='container my-20 py-10 grid lg:grid-cols-4 md:grid-cols-2 md:gap-10 '>
            <div className=' ml-2 sm:border-b-4 md:border-r-4 md:border-b-0'>
                <div className='flex items-center  sm:justify-center md:justify-normal'>
                    {startCount && <CountUp end={10000} duration={5} className={`${merriweather.className} text-[#00E1B7] text-[48px] `} />}
                    <p className='text-[#00E1B7] text-[48px]'>+</p>
                </div>
                <p className={`${inter.className} text-[#002333] text-[18px] sm:text-center md:text-left `}>Fundus images analysed</p>
            </div>
            <div className=' ml-2 sm:border-b-4 lg:border-r-4 md:border-b-0'>
                <div className='flex items-center  sm:justify-center md:justify-normal'>
                    {startCount && <CountUp end={98} duration={5} className={`${merriweather.className} text-[#00E1B7] text-[48px] `} />}
                    <p className='text-[#00E1B7] text-[48px]'>%</p>
                </div>
                <p className={`${inter.className} text-[#002333] text-[18px] sm:text-center md:text-left `}>Accuracy rate</p>
            </div>
            <div className=' ml-2 sm:border-b-4 md:border-r-4 md:border-b-0'>
                <div className='flex items-center  sm:justify-center md:justify-normal'>
                    {startCount && <CountUp end={5000} duration={5} className={`${merriweather.className} text-[#00E1B7] text-[48px] `} />}
                    <p className='text-[#00E1B7] text-[48px]'>+</p>
                </div>
                <p className={`${inter.className} text-[#002333] text-[18px] sm:text-center md:text-left `}>Patients helped</p>
            </div>
            <div className=' ml-2 sm:border-b-4 md:border-b-0 '>
                <div className='flex items-center  sm:justify-center md:justify-normal'>
                    {startCount && <CountUp end={3} duration={5} className={`${merriweather.className} text-[#00E1B7] text-[48px] `} />}
                </div>
                <p className={`${inter.className} text-[#002333] text-[18px] sm:text-center md:text-left `}>Diseases we can classify between</p>
            </div>
        </section>
    );
}
