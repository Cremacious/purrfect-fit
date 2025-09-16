import { z } from 'zod';

export const productSchema = z
  .object({
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
    price: z.number().optional(),
    stock: z.number().optional(),
    coverImageBase64: z.string().optional(),
  })
  .refine(
    (data) => {
      // If variants exist, optionALabel and optionBLabel must be present
      if (data.variants && data.variants.length > 0) {
        return !!data.optionALabel && !!data.optionBLabel;
      }
      // If no variants, price and stock must be present
      return typeof data.price === 'number' && typeof data.stock === 'number';
    },
    {
      message:
        'If variants exist, option labels are required. If not, price and stock are required.',
    }
  );
