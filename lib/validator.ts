import * as z from "zod"

export const diagnosisFormSchema = z.object({
  age: z.number().min(18, 'Patient must be 18 or older'),
  imageUrl: z.string()
})