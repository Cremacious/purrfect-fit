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

  return products.map((product) => {
    let defaultImageCrop:
      | { x: number; y: number; width: number; height: number }
      | undefined = undefined;
    if (
      product.defaultImageCrop &&
      typeof product.defaultImageCrop === 'object' &&
      'x' in product.defaultImageCrop &&
      'y' in product.defaultImageCrop &&
      'width' in product.defaultImageCrop &&
      'height' in product.defaultImageCrop
    ) {
      const crop = product.defaultImageCrop as {
        x: number;
        y: number;
        width: number;
        height: number;
      };
      defaultImageCrop = crop;
    }
    return {
      ...product,
      price: Number(product.price),
      rating: Number(product.rating),
      variants: product.variants.map((variant) => ({
        ...variant,
        price: variant.price ? Number(variant.price) : undefined,
      })),
      defaultImageCrop,
    };
  });
}

export async function getProductBySlug(slug: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { slug },
      include: { reviews: true, variants: true },
    });
    if (!product) throw new Error('Product not found');
    let defaultImageCrop:
      | { x: number; y: number; width: number; height: number }
      | undefined = undefined;
    if (
      product.defaultImageCrop &&
      typeof product.defaultImageCrop === 'object'
    ) {
      const crop = product.defaultImageCrop as {
        x: number;
        y: number;
        width: number;
        height: number;
      };
      if (
        typeof crop.x === 'number' &&
        typeof crop.y === 'number' &&
        typeof crop.width === 'number' &&
        typeof crop.height === 'number'
      ) {
        defaultImageCrop = {
          x: crop.x,
          y: crop.y,
          width: crop.width,
          height: crop.height,
        };
      }
    }
    return {
      ...product,
      price: Number(product.price),
      rating: Number(product.rating),
      variants: product.variants.map((variant) => ({
        ...variant,
        price: variant.price ? Number(variant.price) : undefined,
      })),
      defaultImageCrop,
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

    const defaultImageCrop = parsedData.defaultImageCrop ?? Prisma.JsonNull;

    const product = await prisma.product.create({
      data: {
        name: parsedData.name,
        slug: parsedData.slug,
        animal: parsedData.animal,
        category: parsedData.category,
        brand: parsedData.brand,
        description: parsedData.description,
        price: new Prisma.Decimal(parsedData.price ?? 0),
        stock: parsedData.stock ?? 0,
        images,
        defaultImageIndex:
          typeof parsedData.defaultImageIndex === 'number'
            ? parsedData.defaultImageIndex
            : 0,
        defaultImageCrop,
        optionALabel: parsedData.optionALabel,
        optionBLabel: parsedData.optionBLabel,
      },
    });

    if (parsedData.variants && parsedData.variants.length > 0) {
      await prisma.productVariant.createMany({
        data: parsedData.variants.map((variant) => ({
          productId: product.id,
          optionA: variant.optionA,
          optionB: variant.optionB,
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
