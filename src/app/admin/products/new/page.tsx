import prisma from "@/lib/db";
import { PageHeader } from "../../_components/PageHeader";
import { ProductForm } from "../../_components/ProductForm";

export default async function NewProductPage() {

    const categories = await prisma.category.findMany();
    const parfumes = await prisma.parfume.findMany();

    return (
      <>
        <PageHeader>Add Product</PageHeader>
        <ProductForm categories={categories} parfumes={parfumes}/>
      </>
    )
}

