import * as z from "zod"

export const diagnosisFormSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Please enter a valid email address" ),
  dob: z.date(),
  gender: z.string(),
  mobile: z.string().regex( /^(\+20|0)?1[0125]\d{8}$/,"Please enter a valid Egyptian phone number"),
  prevDiseases: z.string().min(2,'Please choose one of the following options'),
  diabetes: z.string().min(2,'Please choose one of the following options'),
  hypertension: z.string().min(2,'Please choose one of the following options'),
  symptoms: z.string(),
  imgURL: z.string().url()
})