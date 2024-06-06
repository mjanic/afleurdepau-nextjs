/*
  Warnings:

  - You are about to drop the `login` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `parfumes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "login";

-- DropTable
DROP TABLE "parfumes";

-- DropTable
DROP TABLE "products";

-- DropTable
DROP TABLE "sessions";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "Login" (
    "id" SERIAL NOT NULL,
    "hash" VARCHAR(100) NOT NULL,
    "email" TEXT NOT NULL,
    "activated" BOOLEAN NOT NULL DEFAULT false,
    "activation_token" VARCHAR(255),
    "reset_token" VARCHAR(255),

    CONSTRAINT "Login_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "parfume" TEXT NOT NULL,
    "price" MONEY NOT NULL,
    "description" TEXT NOT NULL,
    "dimensions" TEXT NOT NULL,
    "howtouse" TEXT NOT NULL,
    "img1" TEXT NOT NULL,
    "img2" TEXT NOT NULL,
    "img3" TEXT NOT NULL,
    "weight" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sessions" (
    "sid" VARCHAR(255) NOT NULL,
    "sess" JSON NOT NULL,
    "expired" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "Sessions_pkey" PRIMARY KEY ("sid")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100),
    "email" TEXT NOT NULL,
    "favorites" INTEGER[],
    "joined" TIMESTAMP(6) NOT NULL,
    "addedtocart" INTEGER[],
    "surname" VARCHAR(100),
    "address" VARCHAR(255),
    "postalcode" VARCHAR(20),
    "city" VARCHAR(100),
    "telephone" VARCHAR(20),

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parfumes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Parfumes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Login_email_key" ON "Login"("email");

-- CreateIndex
CREATE INDEX "sessions_expired_index" ON "Sessions"("expired");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
