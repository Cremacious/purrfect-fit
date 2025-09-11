/*
  Warnings:

  - You are about to drop the column `colors` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `sizes` on the `Product` table. All the data in the column will be lost.
  - Added the required column `animal` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "colors",
DROP COLUMN "sizes",
ADD COLUMN     "animal" TEXT NOT NULL,
ADD COLUMN     "optionA" TEXT[],
ADD COLUMN     "optionB" TEXT[];
