-- CreateTable
CREATE TABLE "login" (
    "id" SERIAL NOT NULL,
    "hash" VARCHAR(100) NOT NULL,
    "email" TEXT NOT NULL,
    "activated" BOOLEAN DEFAULT false,
    "activation_token" VARCHAR(255),
    "reset_token" VARCHAR(255),

    CONSTRAINT "login_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100),
    "parfume" TEXT,
    "price" MONEY,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "sid" VARCHAR(255) NOT NULL,
    "sess" JSON NOT NULL,
    "expired" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("sid")
);

-- CreateTable
CREATE TABLE "users" (
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

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "login_email_key" ON "login"("email");

-- CreateIndex
CREATE INDEX "sessions_expired_index" ON "sessions"("expired");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

