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

    let coverBuffer: Buffer | undefined = undefined;
    if (parsedData.coverImageBase64) {
      const base64Part = parsedData.coverImageBase64.includes(',')
        ? parsedData.coverImageBase64.split(',')[1]
        : parsedData.coverImageBase64;
      coverBuffer = Buffer.from(base64Part, 'base64');
    }
    const product = await prisma.product.create({
      data: {
        name: parsedData.name,
        slug: parsedData.slug,
        animal: parsedData.animal,
        category: parsedData.category,
        brand: parsedData.brand,
        description: parsedData.description,
        price: new Prisma.Decimal(parsedData.price),
        stock: parsedData.stock,
        images: coverBuffer ? [coverBuffer.toString('base64')] : [],
      },
    });

    // If variants exist, create them
    if (parsedData.variants && parsedData.variants.length > 0) {
      await prisma.productVariant.createMany({
        data: parsedData.variants.map((variant) => ({
          productId: product.id,
          optionA: variant.optionA,
          optionB: variant.optionB,
          price: new Prisma.Decimal(variant.price),
          stock: variant.stock,
          images: [], // You can add image upload logic for variants if needed
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
