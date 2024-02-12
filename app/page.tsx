'use client';

import Diagnosis from "@/components/shared/Diagnosis";
import Hero from "@/components/shared/Hero";
import { useState } from "react";
 
export default function Home() {
  const [files, setFiles] = useState<File[]>([])
  return<>
      <Hero />
      <Diagnosis/>
  </>
}