/*
  Warnings:

  - You are about to alter the column `weight` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "products" ALTER COLUMN "weight" SET DATA TYPE DOUBLE PRECISION;
