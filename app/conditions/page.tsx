import React from 'react'
import { Inter } from 'next/font/google'
import { Merriweather } from 'next/font/google'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from 'next/link'
  
  
const inter = Inter({
    weight: '400',
    subsets: ['latin']
})

const merriweather = Merriweather ({
    weight: '700',
    subsets: ['latin']
})

const Conditions = () => {
  return <>
  <section className='my-10 py-10 container '>
    
    <div className='flex justify-center items-start flex-col'>
    <div className = {` uppercase ${merriweather.className} font-bold text-4xl text-primary my-6 ` }  >
            Welcome to Visionize
        </div>
        <div className={` ${inter.className} text-lg  mb-6` } >
        Visionize specializes in predicting and diagnosing a range of critical eye diseases and conditions through advanced machine learning technology. From identifying early signs of cataracts and diabetic retinopathy to detecting glaucoma, our platform empowers users with timely and accurate insights into their eye health. By analyzing fundus images with precision, Visionize supports proactive healthcare management, guiding individuals towards early intervention and personalized treatment strategies.
        </div>

        <p>You can read more about the conditions we help predict.</p>
    </div>

    <div className='flex justify-center items-center my-10'>
    <Carousel>
            <CarouselContent>
                <CarouselItem>
                <Card className='rounded-2xl mt-6'>
                <CardHeader className='bg-blue-300 rounded-t-2xl p-7'>
                    <CardTitle>Glaucoma</CardTitle>
                    <CardDescription>Damaging effects on the optic nerve due to increased eye pressure.</CardDescription>
                </CardHeader>
                <CardContent className='p-7'>
                    <p>Glaucoma often develops without noticeable symptoms until significant vision loss occurs. Regular eye exams are crucial for early detection and treatment to prevent irreversible vision impairment.</p>
                </CardContent>
                <CardFooter>
                    <Link className='text-primary uppercase text-lg hover:underline' href={'/conditions/glaucoma'}>
                    Read more
                    </Link>
                </CardFooter>
            </Card>

                </CarouselItem>
                <CarouselItem>
                <Card className='rounded-2xl'>
                <CardHeader className='bg-blue-300 rounded-t-2xl p-7'>
                    <CardTitle>Cataracts</CardTitle>
                    <CardDescription>Clouding of the eye's natural lens.</CardDescription>
                </CardHeader>
                <CardContent className='p-7'>
                    <p>Cataracts cause blurry vision, faded colors, and increased sensitivity to glare. Early detection allows for effective treatment, usually through surgery to replace the clouded lens.</p>
                </CardContent>
                <CardFooter>
                    <Link className='text-primary uppercase text-lg hover:underline' href={'/conditions/cataract'}>
                    Read more
                    </Link>
                </CardFooter>
            </Card>
                </CarouselItem>
                <CarouselItem>
                <Card className='rounded-2xl mt-6'>
                <CardHeader className='bg-blue-300 rounded-t-2xl p-7'>
                    <CardTitle>Diabetic Retinopathy</CardTitle>
                    <CardDescription>Damages the blood vessels of the retina, leading to vision impairment.</CardDescription>
                </CardHeader>
                <CardContent className='p-7'>
                    <p>Diabetic retinopathy is a complication of diabetes that affects the eyes, especially in individuals with uncontrolled blood sugar levels. Early detection and management can prevent severe vision loss.</p>
                </CardContent>
                <CardFooter>
                    <Link className='text-primary uppercase text-lg hover:underline' href={'/conditions/dr'}>
                    Read more
                    </Link>
                </CardFooter>
            </Card>

                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
    </div>
    
    </section>
  </>
}

export default Conditions