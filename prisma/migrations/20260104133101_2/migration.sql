/*
  Warnings:

  - You are about to drop the column `active` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product_variants" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "active";
