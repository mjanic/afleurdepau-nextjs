/*
  Warnings:

  - Added the required column `description` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dimensions` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `howtouse` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img1` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img2` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img3` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "dimensions" TEXT NOT NULL,
ADD COLUMN     "howtouse" TEXT NOT NULL,
ADD COLUMN     "img1" TEXT NOT NULL,
ADD COLUMN     "img2" TEXT NOT NULL,
ADD COLUMN     "img3" TEXT NOT NULL,
ADD COLUMN     "weight" DECIMAL(65,30) NOT NULL;
