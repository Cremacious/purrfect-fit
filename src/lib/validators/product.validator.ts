import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  animal: z.string().min(1),
  category: z.string(),
  brand: z.string().min(1),
  description: z.string(),
  optionALabel: z.string().min(1).optional(),
  optionA: z.string().min(1).optional(),
  optionBLabel: z.string().min(1).optional(),
  optionB: z.string().min(1).optional(),
  price: z.number(),
  stock: z.number(),
  coverImageBase64: z.string().optional(),
});
