'use server';
import prisma from '../prisma';
import { Prisma } from '@prisma/client';
import { productSchema } from '../validators/product.validator';
import { z } from 'zod';
import { getAuthenticatedUser } from '../server-utils';

interface GetProductsParams {
  animal?: string;
  category?: string;
  brand?: string;
  search?: string;
}

export async function getProducts(params?: GetProductsParams) {
  const whereClause: Prisma.ProductWhereInput = {};

  if (params?.animal) {
    whereClause.animal = {
      equals: params.animal,
      mode: 'insensitive',
    };
  }

  if (params?.category) {
    whereClause.category = {
      equals: params.category,
      mode: 'insensitive',
    };
  }

  if (params?.brand) {
    whereClause.brand = {
      equals: params.brand,
      mode: 'insensitive',
    };
  }

  if (params?.search) {
    whereClause.OR = [
      {
        name: {
          contains: params.search,
          mode: 'insensitive',
        },
      },
      {
        description: {
          contains: params.search,
          mode: 'insensitive',
        },
      },
    ];
  }

  const products = await prisma.product.findMany({
    where: whereClause,
    include: { variants: true },
  });

  return products.map((product) => ({
    ...product,
    price: Number(product.price),
    rating: Number(product.rating),
    variants: product.variants.map((variant) => ({
      ...variant,
      price: variant.price ? Number(variant.price) : undefined,
    })),
    optionALabel: product.optionALabel ?? '',
    optionBLabel: product.optionBLabel ?? '',
  }));
}

export async function getProductBySlug(slug: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { slug },
      include: { reviews: true, variants: true },
    });
    if (!product) throw new Error('Product not found');
    return {
      ...product,
      price: Number(product.price),
      rating: Number(product.rating),
      variants: product.variants.map((variant) => ({
        ...variant,
        price: variant.price ? Number(variant.price) : undefined,
      })),
      optionALabel: product.optionALabel ?? '',
      optionBLabel: product.optionBLabel ?? '',
    };
  } catch (error) {
    console.error('Error fetching product by slug with reviews:', error);
    throw error;
  }
}

export async function createProduct(data: z.infer<typeof productSchema>) {
  try {
    const { user, error } = await getAuthenticatedUser();
    if (error || !user || user.role !== 'admin') {
      console.log('Unauthorized attempt to create product');
      return { success: false, message: 'Unauthorized' };
    }

    const parsedData = productSchema.parse(data);

    const images: string[] = Array.isArray(parsedData.images)
      ? parsedData.images
      : parsedData.coverImageBase64
      ? [parsedData.coverImageBase64]
      : [];

    const product = await prisma.product.create({
      data: {
        name: parsedData.name,
        slug: parsedData.slug,
        animal: parsedData.animal.toLocaleLowerCase(),
        category: parsedData.category,
        brand: parsedData.brand,
        description: parsedData.description,
        price: new Prisma.Decimal(parsedData.price ?? 0),
        stock: parsedData.stock ?? 0,
        images,
        optionALabel: (parsedData.optionALabel ?? '').toLocaleLowerCase(),
        optionBLabel: (parsedData.optionBLabel ?? '').toLocaleLowerCase(),
      },
    });

    if (parsedData.variants && parsedData.variants.length > 0) {
      await prisma.productVariant.createMany({
        data: parsedData.variants.map((variant) => ({
          productId: product.id,
          optionA: (variant.optionA ?? '').toLocaleLowerCase(),
          optionB: (variant.optionB ?? '').toLocaleLowerCase(),
          price: new Prisma.Decimal(variant.price ?? parsedData.price),
          stock: variant.stock,
          images: [],
        })),
      });
    }

    console.log('Product created successfully');
    return { success: true, message: 'Product created successfully' };
  } catch (error) {
    console.error('Error creating product:', error);
    return { success: false, message: 'Error creating product' };
  }
}
