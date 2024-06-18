"use client"

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formatters";
import useProductStore from "@/lib/store";

export default function CartTotal () {

    const {addedToCart} = useProductStore();

    let articlesPrice = addedToCart.map(item => item.priceInCents);
    let totalPrice = articlesPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let cachOut = 3.49 + totalPrice/100;

    return (
        <div>
            <div className="total-cashout flex flex-col w-full p-2">
                <span className='justify-between flex mb-1 pr-2'>
                    <h2 className='text-xl'>Articles:</h2> 
                    <h2 className='text-xl'>{formatCurrency(totalPrice/100)}</h2>
                </span>
                <span className='justify-between flex mb-1 pr-2'>
                    <h2 className='text-xl'>Livraison from:</h2> 
                    <h2 className='text-xl'>≥ 3.49 €</h2>
                </span>   
                <span className='justify-between flex mb-1 pr-2'>
                    <h2 className='text-xl'><b>Total from:</b></h2> 
                    <h2 className='text-xl'><b>{`≥ ${formatCurrency(cachOut)}`}</b></h2>
                </span>
                <span className='flex mb-1 pr-2 items-center justify-center'>
                    <img className='h-12' src='/chrp.png' alt="chronopost" />
                    <img className='h-12' src='/sogp.png' alt="relaiscolis" />
                    <img className='h-12' src='/copr.png' alt="colisprive" />
                    
                </span>
            </div>
            <div className="w-full flex justify-center my-2">
                <Button variant="default">Checkout</Button>
            </div>
        </div>
    )
}