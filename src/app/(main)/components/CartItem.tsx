"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Product, Parfume, Category } from "@prisma/client";
import { formatCurrency } from '@/lib/formatters';
import useProductStore from '@/lib/store';

interface ProductWithParfumeAndCategory extends Product {
    parfume: Parfume;
    category: Category;
}
interface CartItemProps {
    product: ProductWithParfumeAndCategory;
}

const CartItem: React.FC<CartItemProps> = ({product}) => {

    const mystyle1 = { backgroundImage: `url(${product.img1url.substring(6)})` };

    const { addedToCart, setAddedToCart } = useProductStore();

    const removeFromCart = ( product: ProductWithParfumeAndCategory ) => {
        const setCart = new Set(addedToCart);
        setCart.delete(product);
        setAddedToCart(Array.from(setCart));
    }

    return (
        <div className="grid grid-cols-[3fr_5fr_3fr_1fr] h-16 border border-paubrown">
                    <div className='bg-cover bg-center' style={mystyle1}></div>
                    <div className="flex flex-col items-center justify-center">
                        <h4 className="text-base">{product.name}</h4>
                        <h5 className="text-sm">{product.parfume.name}</h5>
                    </div>
                    <div className="flex justify-center items-center">{formatCurrency(product.priceInCents/100)}</div>
                    <div className="flex items-center justify-center">
                        <FontAwesomeIcon onClick={()=>removeFromCart(product)} className="text-paubrown cursor-pointer" icon={faTrash}/>
                    </div>
        </div>
    )
}

export default CartItem;