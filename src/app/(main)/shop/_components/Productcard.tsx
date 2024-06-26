"use client";

import { formatCurrency } from "@/lib/formatters";
import { Parfume, Product, Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import useProductStore from "@/lib/store";

interface ProductWithParfumeAndCategory extends Product {
    parfume: Parfume;
    category: Category;
}

export default function Productcard (product: ProductWithParfumeAndCategory) {

    const {addedToCart, setAddedToCart} = useProductStore();

    const addToCart = (product: ProductWithParfumeAndCategory) => {
        const idS = addedToCart.map(item => item.id);
        if (idS.includes(product.id)) {
        } else {
            const setCart = new Set (addedToCart);
            setCart.add(product);
            setAddedToCart(Array.from(setCart))
        }
    }

    return (
        <Link href={`/shop/${product.id}`}>
        <div className="flex flex-col items-center">
            <div className="relative">
                <Image
                    src={`${product.img1url.substring(6)}`}
                    alt={product.name}
                    width={1536}
                    height={2048}
                />
                <div className="absolute bottom-0 left-0 h-full w-full flex justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 focus:outline-none">
                    <div className="flex w-full items-end">
                        <button 
                            onClick={(e) => {addToCart(product); e.preventDefault()}}  
                            className="bg-paulightpink w-full text-white py-2 hidden lg:block">
                            ajouter au panier +
                        </button>
                    </div>
                </div>
            </div>
            <button 
                onClick={(e) => {addToCart(product); e.preventDefault()}} 
                className="bg-paupink w-full text-white my-1 py-2 lg:hidden">
                ajouter au panier +
            </button>
            <div className="flex flex-col text-center">
                <h1 className='mx-1'>{product.name}</h1>
                <p className='mx-1'>{product.parfume.name}</p>
                <h2 className='mx-1'>{formatCurrency(product.priceInCents/100)}</h2>
            </div>
            
        </div>
        </Link>
    )
}