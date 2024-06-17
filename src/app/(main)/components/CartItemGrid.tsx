"use client"

import CartItem from "./CartItem";
import useProductStore from "@/lib/store";

export default function CartItemGrid () {

    const {addedToCart} = useProductStore()

    return (
        <div className="grid grid-cols-1 m-2 gap-1 max-h-60 overflow-auto"> 
            {addedToCart.map( product => (
                <CartItem key={product.id} product={product}/>
            ))}   
        </div>
    )
}