-- AlterTable
ALTER TABLE "public"."Product" ADD COLUMN     "defaultImageCrop" JSONB,
ADD COLUMN     "defaultImageIndex" INTEGER NOT NULL DEFAULT 0;
