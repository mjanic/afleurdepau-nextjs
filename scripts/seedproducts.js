const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const {products, parfumes} = require('../src/app/lib/placeholder.js');

async function main() {
    // Populate Parfumes
  // for (const parfume of parfumes) {
  //   await prisma.parfume.create({ data: parfume });
  // }
  // console.log('Parfumes populated successfully.');

  // Populate Products
  for (const product of products) {
    await prisma.product.create({ 
      data: {
        name: product.name,
        category: {
          connectOrCreate: {
            where: { name: product.category },
            create: { name: product.category }
          }
        },
        parfume: {
          connect: { name: product.parfume } // Connect to existing parfume
        },
        price: product.price,
        description: product.description,
        dimensions: product.dimensions,
        howtouse: product.howtouse,
        img1: product.img1,
        img2: product.img2,
        img3: product.img3,
        weight: product.weight
      }
    });
  }
  console.log('Products populated successfully.');
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })