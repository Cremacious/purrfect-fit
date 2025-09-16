/*
  Warnings:

  - You are about to drop the column `color` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `OrderItem` table. All the data in the column will be lost.
  - Added the required column `optionA` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `optionB` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."OrderItem" DROP COLUMN "color",
DROP COLUMN "size",
ADD COLUMN     "optionA" TEXT NOT NULL,
ADD COLUMN     "optionB" TEXT NOT NULL;
