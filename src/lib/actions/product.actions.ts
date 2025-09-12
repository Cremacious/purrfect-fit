import prisma from '../prisma';
import { Prisma } from '@prisma/client';

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
  });

  return products.map((product) => ({
    ...product,
    price: Number(product.price),
    rating: Number(product.rating),
  }));
}

// export async function getProductBySlug(slug: string) {
//   try {
//     const product = await prisma.product.findUnique({
//       where: { slug },
//     });
//     if (!product) throw new Error('Product not found');
//     return {
//       ...product,
//       price: Number(product.price),
//       rating: Number(product.rating),
//     };
//   } catch (error) {
//     console.error('Error fetching product by slug:', error);
//     throw error;
//   }
// }

export async function getProductBySlug(slug: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { slug },
      include: { reviews: true },
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
