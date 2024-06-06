import Image from "next/image";
import Pinksection from "@/app/(main)/components/ui/Pinksection";
import prisma from "@/lib/db";
import ProductsClient from "./_components/ProductsClient";

export default async function ShopPage() {

    const products = await prisma.product.findMany({
      include: {
          parfume: true,
          category: true
      }
    });

    return ( 
      <>
        <div className='header-image w-full h-full'>
            <Image width={1437} height={360} src="/sachets212121.jpg" alt="Boutique image" />
        </div>
        <Pinksection title="Explore notre le plus nouvaux creations!" paragraph="Nous fabriquons également des sachets parfumés à la cire de soja, décorés à la main avec des fleurs. Idéaux pour les armoires ou les voitures afin de diffuser un agréable parfum et rafraîchir l'air. Vous pouvez les suspendre où vous le souhaitez, car ils sont aussi un petit élément décoratif. Ils combleront ce petit quelque chose qui manque autour de vous."/>
        <ProductsClient
          products={products}
        />
      </>
    )
  }