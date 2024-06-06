import prisma from "@/lib/db";
import { PageHeader } from "../../_components/PageHeader";
import { ProductForm } from "../../_components/ProductForm";

export default async function EditProductPage({
    params: { id },
  }: {
    params: { id: string }
  }) {

    const categories = await prisma.category.findMany();
    const parfumes = await prisma.parfume.findMany();
    const product = await prisma.product.findUnique({ where: { id } })

    return (
      <>
        <PageHeader>Edit Product</PageHeader>
        <ProductForm product={product} categories={categories} parfumes={parfumes}/>
      </>
    )
}