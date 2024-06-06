"use server";

import prisma from "@/lib/db";
import { z } from "zod";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { Prisma } from "@prisma/client";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/bmp', 'image/webp', 'image/svg+xml'];

const imageSchema = z
  .instanceof(File)
  .refine((file) => {
    return !file || file.size <= MAX_UPLOAD_SIZE;
  }, 'File size must be less than 3MB')
  .refine((file) => {
    return ACCEPTED_FILE_TYPES.includes(file.type);
  }, 'File must be a image');

const formSchema = z.object({
    name: z.string().min(1),
    image: imageSchema
})

export async function AddParfume(prevState: unknown, formData: FormData) {

        const result = formSchema.safeParse(Object.fromEntries(formData.entries()))
        if (result.success === false) {
          return result.error.formErrors.fieldErrors
        }
        const data = result.data

        const imgUrl = `public/parfume-images/${data.image.name}`
        await fs.writeFile(imgUrl, Buffer.from(await data.image.arrayBuffer()))
        try {
          await prisma.parfume.create({
            data: {
                name: data.name,
                imgUrl,
              },
          })
        } catch (e) {
          if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
              console.log(
                'There is a unique constraint violation, a new parfume cannot be created with same name'
              )
              return 'Parfume already exists'
            }
          }
        }
          

        revalidatePath("/")
        revalidatePath("/admin/parfumes")

        redirect("/admin/parfumes")
}

export async function DeleteParfume(id:string) {

  const activeParfumeProduct = await prisma.product.findFirst({
    where: {
      parfumeId: id
    }
  })
  if (activeParfumeProduct) {
    return { error: 'There are active products with this parfume' }
  } else {
  const parfume = await prisma.parfume.delete({ where: {id}})

  if (parfume == null) return notFound()

  await fs.unlink(parfume.imgUrl)

  revalidatePath("/")
  revalidatePath("/parfumes")
  }
}