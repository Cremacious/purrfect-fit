/*
  Warnings:

  - You are about to drop the column `optionA` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `optionB` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "optionA",
DROP COLUMN "optionB";

-- CreateTable
CREATE TABLE "public"."ProductVariant" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "optionA" TEXT,
    "optionB" TEXT,
    "price" DECIMAL(65,30),
    "stock" INTEGER NOT NULL,
    "images" TEXT[],

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ProductVariant" ADD CONSTRAINT "ProductVariant_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
