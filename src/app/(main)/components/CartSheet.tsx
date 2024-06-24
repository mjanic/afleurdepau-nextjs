"use client"

import {
    Sheet,
    SheetContent,
    SheetTrigger
  } from "@/components/ui/sheet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import CartItemGrid from "./CartItemGrid";
import useProductStore from "@/lib/store";
import CartTotal from "./CartTotal";

export default function CartSheet () {

    const {addedToCart} = useProductStore();

    return (
            <Sheet>
                <SheetTrigger>
                    <FontAwesomeIcon className='text-paubrown m-1' icon={faCartShopping} />
                </SheetTrigger>
                <SheetContent>
                <div className='pink-section flex flex-col items-center text-center w-full -mt-6'>
                    <div className='pink-title w-full'>
                        <h1 className='text-white text-2xl bg-pautranspink py-4 my-2.5 sm:text-3xl'>Panier</h1>
                    </div>
                </div>
                <CartItemGrid/>
                {addedToCart.length===0 ? (<div className="flex flex-col h-[89%] justify-end items-end">
                                                <p className="self-center m-1 text-lg">Oh non, ton panier est vide.</p>
                                                <Image className="" 
                                                    src="/bunny33.jpg" 
                                                    alt="bunny"
                                                    width='300'
                                                    height='400' />
                                            </div>)
                                        : (<CartTotal/>)    
                }
                </SheetContent>
            </Sheet>
    )
}