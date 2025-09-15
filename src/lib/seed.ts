import { PrismaClient } from '@prisma/client';
import { products } from '@/lib/sampleData';

async function main() {
  const prisma = new PrismaClient();
  await prisma.productVariant.deleteMany(); // Clear variants first
  await prisma.product.deleteMany();

  for (const product of products) {
    const { variants, id, ...productData } = product;
    const createdProduct = await prisma.product.create({ data: productData });
    if (variants && variants.length > 0) {
      await prisma.productVariant.createMany({
        data: variants.map((variant) => ({
          ...variant,
          productId: createdProduct.id,
        })),
      });
    }
  }

  console.log('Database seeded successfully');
}

main();
// npx tsx src/lib/seed.ts
