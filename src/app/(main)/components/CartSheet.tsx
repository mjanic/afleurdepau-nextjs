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

export default function CartSheet () {
    return (
            <Sheet>
                <SheetTrigger>
                    <FontAwesomeIcon className='text-paubrown m-1' icon={faCartShopping} />
                </SheetTrigger>
                <SheetContent>
                <Pinksection title="Panier" />
                <CartItemGrid/>
                <div className="flex flex-col h-[89%] justify-end items-end">
                    <p className="self-center m-1 text-lg">Oh non, ton panier est vide.</p>
                    <Image className="" 
                        src="/bunny33.jpg" 
                        alt="bunny"
                        width='300'
                        height='400' />
                </div>
                </SheetContent>
            </Sheet>
    )
}