/*
  Warnings:

  - Made the column `activated` on table `login` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `parfume` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "login" ALTER COLUMN "activated" SET NOT NULL;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "parfume" SET NOT NULL,
ALTER COLUMN "price" SET NOT NULL;
