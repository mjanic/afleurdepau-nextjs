"use client"

import {
    Sheet,
    SheetContent,
    SheetTrigger
  } from "@/components/ui/sheet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Pinksection from "./ui/Pinksection";
import Image from "next/image";
import CartItemGrid from "./CartItemGrid";
import useProductStore from "@/lib/store";

export default function CartSheet () {

    const {addedToCart} = useProductStore();

    return (
            <Sheet>
                <SheetTrigger>
                    <FontAwesomeIcon className='text-paubrown m-1' icon={faCartShopping} />
                </SheetTrigger>
                <SheetContent>
                <Pinksection title="Panier" />
                <CartItemGrid/>
                {addedToCart.length===0 && (<div className="flex flex-col h-[89%] justify-end items-end">
                    <p className="self-center m-1 text-lg">Oh non, ton panier est vide.</p>
                    <Image className="" 
                        src="/bunny33.jpg" 
                        alt="bunny"
                        width='300'
                        height='400' />
                </div>)}
                </SheetContent>
            </Sheet>
    )
}