'use client';
import Hero from "@/components/shared/Hero";
import Offer from "@/components/shared/Offer";
import Services from "@/components/shared/Services";
import Welcome from "@/components/shared/Welcome";
import { useState } from "react";
import Diseases from "@/components/shared/Diseases";
import Counter from "@/components/shared/Counter";
import Testimonials from "@/components/shared/Testimonials";
import GetStarted from "@/components/shared/GetStarted";
 
export default function Home() {
  const [files, setFiles] = useState<File[]>([])
  return<>
      <Hero />
      <Welcome />
      <Services />
      <Offer />
      <Diseases />
      <Counter />
      <Testimonials />
      <GetStarted />
  </>
}