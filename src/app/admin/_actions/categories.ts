"use server";

import prisma from "@/lib/db";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { Prisma } from "@prisma/client";

const formSchema = z.object({
    name: z.string().min(1),
})

export async function AddCategory(prevState: unknown, formData: FormData) {

        const result = formSchema.safeParse(Object.fromEntries(formData.entries()))
        if (result.success === false) {
          return result.error.formErrors.fieldErrors
        }
        const data = result.data

        const howToUseUrl = `/howtouse/${data.name.split(" ").join("")}`
        try {
        await prisma.category.create({
            data: {
                name: data.name,
                howToUseUrl,
            },
        })
      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          if (e.code === 'P2002') {
            console.log(
              'There is a unique constraint violation, a new category cannot be created with same name'
            )
            return 'Category already exists'
          }
        }
      }

        revalidatePath("/")
        revalidatePath("admin/categories")

        redirect("/admin/categories")
}

export async function DeleteCategory(id:string) {

  const activeCategoryProduct = await prisma.product.findFirst({
    where: {
      categoryId: id
    }
  })
  if (activeCategoryProduct) {
    return { error: 'There are active products in this category' }
  } else {
    const category = await prisma.category.delete({ where: {id}})
    if (category == null) return notFound()
  }
  revalidatePath("/")
  revalidatePath("/categories")
}