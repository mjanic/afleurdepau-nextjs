/*
  Warnings:

  - You are about to drop the `Parfumes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_categoryId_fkey";

-- DropTable
DROP TABLE "Parfumes";

-- DropTable
DROP TABLE "Products";

-- DropTable
DROP TABLE "Sessions";

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "parfumeId" INTEGER NOT NULL,
    "price" MONEY NOT NULL,
    "description" TEXT NOT NULL,
    "dimensions" TEXT NOT NULL,
    "howtouse" TEXT NOT NULL,
    "img1" TEXT NOT NULL,
    "img2" TEXT NOT NULL,
    "img3" TEXT NOT NULL,
    "weight" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "sid" VARCHAR(255) NOT NULL,
    "sess" JSON NOT NULL,
    "expired" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("sid")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100),
    "email" TEXT NOT NULL,
    "joined" TIMESTAMP(6) NOT NULL,
    "surname" VARCHAR(100),
    "address" VARCHAR(255),
    "postalcode" VARCHAR(20),
    "city" VARCHAR(100),
    "telephone" VARCHAR(20),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parfume" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Parfume_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "sessions_expired_index" ON "Session"("expired");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_parfumeId_fkey" FOREIGN KEY ("parfumeId") REFERENCES "Parfume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
