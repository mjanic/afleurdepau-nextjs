/*
  Warnings:

  - You are about to alter the column `weight` on the `products` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "products" ALTER COLUMN "weight" SET DATA TYPE DECIMAL(65,30);
