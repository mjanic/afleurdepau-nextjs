"use server";

import prisma from "@/lib/db";
import { z } from "zod";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/bmp', 'image/webp', 'image/svg+xml'];

const imageSchema = z
  .instanceof(File)
  .refine((file) => {
    return !file || file.size <= MAX_UPLOAD_SIZE;
  }, 'File size must be less than 3MB')
  .refine((file) => {
    return ACCEPTED_FILE_TYPES.includes(file.type);
  }, 'File must be an image');

  const editImageSchema = z
  .instanceof(File)
  .optional()
  .refine((file) => {
    return !file || file.size <= MAX_UPLOAD_SIZE;
  }, 'File size must be less than 3MB')
  // .refine((file) => {
  //   return !file || ACCEPTED_FILE_TYPES.includes(file.type);
  // }, 'Stupid error'); **Should not be error but is returning error and i cant submit the form

const formSchema = z.object({
    name: z.string().min(1),
    image1: imageSchema,
    image2: imageSchema,
    image3: imageSchema,
    categoryId: z.string().min(1),
    parfumeId: z.string().min(1),
    priceInCents: z.coerce.number().int().min(1),
    description: z.string().min(1),
    dimensions: z.string().min(1),
    weightInGrams: z.coerce.number().int().min(1),
})

const editSchema = formSchema.extend({
  image1: editImageSchema,
  image2: editImageSchema,
  image3: editImageSchema,
})


export async function AddProduct(prevState: unknown, formData: FormData) {
        console.log('adding')
        const result = formSchema.safeParse(Object.fromEntries(formData.entries()))
        if (result.success === false) {
          return result.error.formErrors.fieldErrors
        }
        const data = result.data
        const productImagesFolderUrl = `public/product-images/${data.name.split(" ").join("")}`

        await fs.mkdir(productImagesFolderUrl, {recursive: true})

        const img1Url = `${productImagesFolderUrl}/${data.image1.name}`
        await fs.writeFile(img1Url, Buffer.from(await data.image1.arrayBuffer()))
        const img2Url = `${productImagesFolderUrl}/${data.image2.name}`
        await fs.writeFile(img2Url, Buffer.from(await data.image2.arrayBuffer()))
        const img3Url = `${productImagesFolderUrl}/${data.image3.name}`
        await fs.writeFile(img3Url, Buffer.from(await data.image3.arrayBuffer()))

        await prisma.product.create({
            data: {
                name: data.name,
                img1url: img1Url,
                img2url: img2Url,
                img3url: img3Url,
                categoryId: data.categoryId,
                parfumeId: data.parfumeId,
                priceInCents: data.priceInCents,
                description: data.description,
                dimensions: data.dimensions,
                weightInGramms: data.weightInGrams,
                isSold: false,
            },
        })

        revalidatePath("/shop")
        revalidatePath("/admin/products")

        redirect("/admin/products")
}

export async function EditProduct(id: string, prevState: unknown, formData: FormData) {
      const result = editSchema.safeParse(Object.fromEntries(formData.entries()))
        if (result.success === false) {
          return result.error.formErrors.fieldErrors
        }
        const data = result.data

        const product = await prisma.product.findUnique({ where: { id } })
        if (product == null) return notFound()

        const oldProductImagesFolderUrl = `public/product-images/${product.name.split(" ").join("")}`
        const productImagesFolderUrl = `public/product-images/${data.name.split(" ").join("")}`

        if (data.name !== product.name) {
          await fs.rename(oldProductImagesFolderUrl, productImagesFolderUrl)
        }

        if (data.image1 != null && data.image1.size > 0) {
          //TO EXTRACT OLD IMAGE NAME FOR THE DELETE PATH
          const parts = product.img1url.split("/")
          const imageName1 = parts[parts.length - 1]

          await fs.unlink(`${productImagesFolderUrl}/${imageName1}`)
          const newImg1Url = `${productImagesFolderUrl}/${crypto.randomUUID()}-${data.image1.name}`
          await fs.writeFile(newImg1Url, Buffer.from(await data.image1.arrayBuffer()))

          await prisma.product.update({
            where: {id},
            data: {
              img1url: newImg1Url
            }
          })
        }
        if (data.image2 != null && data.image2.size > 0) {
          //TO EXTRACT OLD IMAGE NAME FOR THE DELETE PATH
          const parts = product.img2url.split("/")
          const imageName2 = parts[parts.length - 1]

          await fs.unlink(`${productImagesFolderUrl}/${imageName2}`)
          const newImg2Url = `${productImagesFolderUrl}/${crypto.randomUUID()}-${data.image2.name}`
          await fs.writeFile(newImg2Url, Buffer.from(await data.image2.arrayBuffer()))

          await prisma.product.update({
            where: {id},
            data: {
              img2url: newImg2Url
            }
          })
        }
        if (data.image3 != null && data.image3.size > 0) {
          //TO EXTRACT OLD IMAGE NAME FOR THE DELETE PATH
          const parts = product.img3url.split("/")
          const imageName3 = parts[parts.length - 1]

          await fs.unlink(`${productImagesFolderUrl}/${imageName3}`)
          const newImg3Url = `${productImagesFolderUrl}/${crypto.randomUUID()}-${data.image3.name}`
          await fs.writeFile(newImg3Url, Buffer.from(await data.image3.arrayBuffer()))

          await prisma.product.update({
            where: {id},
            data: {
              img3url: newImg3Url
            }
          })
        }

        await prisma.product.update({
          where: {id},
          data: {
            name: data.name,
            categoryId: data.categoryId,
            parfumeId: data.parfumeId,
            priceInCents: data.priceInCents,
            description: data.description,
            dimensions: data.dimensions,
            weightInGramms: data.weightInGrams,
          }
        })

        revalidatePath("/shop")
        revalidatePath("/admin/products")
        revalidatePath(`/admin/products/${product.id}`)

        redirect("/admin/products")
}

export async function DeleteProduct(id:string) {
  const product = await prisma.product.delete({ where: {id}})

  if (product == null) return notFound()

  await fs.rm(`public/product-images/${product.name.split(" ").join("")}`, {recursive: true})

  revalidatePath("/shop")
  revalidatePath("/admin/products")
}