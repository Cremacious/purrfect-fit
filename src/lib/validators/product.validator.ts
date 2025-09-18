import { z } from 'zod';

export const productSchema = z
  .object({
    name: z.string().min(1),
    slug: z.string().min(1),
    animal: z.string().min(1),
    category: z.string(),
    brand: z.string().min(1),
    description: z.string(),
    images: z.array(z.string()).optional(),
    defaultImageIndex: z.number().optional(),
    defaultImageCrop: z
      .object({
        x: z.number(),
        y: z.number(),
        width: z.number(),
        height: z.number(),
      })
      .optional(),
    optionALabel: z.string().min(1).optional(),
    optionBLabel: z.string().optional(), 
    variants: z
      .array(
        z.object({
          optionA: z.string().min(1), 
          optionB: z.string().optional(), 
          price: z.number(),
          stock: z.number(),
          images: z.array(z.string()).optional(),
        })
      )
      .optional(),
    price: z.number().optional(),
    stock: z.number().optional(),
    coverImageBase64: z.string().optional(),
  })
  .refine(
    (data) => {
      
      if (data.variants && data.variants.length > 0) {
        return !!data.optionALabel;
      }

      return typeof data.price === 'number' && typeof data.stock === 'number';
    },
    {
      message:
        'If variants exist, optionALabel is required. If not, price and stock are required.',
    }
  );
