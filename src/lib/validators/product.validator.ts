import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  animal: z.string().min(1),
  category: z.string(),
  brand: z.string().min(1),
  description: z.string(),
  optionALabel: z.string().min(1).optional(),
  optionBLabel: z.string().min(1).optional(),
  variants: z.array(
    z.object({
      optionA: z.string().optional(),
      optionB: z.string().optional(),
      price: z.number(),
      stock: z.number(),
    })
  ),
  price: z.number(),
  stock: z.number(),
  coverImageBase64: z.string().optional(),
});
