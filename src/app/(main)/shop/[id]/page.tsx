import prisma from "@/lib/db";
import Productmain from "../_components/Productmain";

export default async function ProductPage({
    params: { id },
  }: {
    params: { id: string }
  }) {

    const product = await prisma.product.findUnique({ where: { id },
        include: {
            parfume: true,
            category: true
        } })

    return (
        <div>
            <Productmain product={product}/>
        </div>
    )
}