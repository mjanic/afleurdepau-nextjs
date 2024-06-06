"use client";

import { Product, Parfume, Category } from "@prisma/client";
import Productcard from "./Productcard";


interface ProductWithParfumeAndCategory extends Product {
    parfume: Parfume;
    category: Category;
}
interface ProductGridProps {
    filteredProducts: ProductWithParfumeAndCategory[];
}

const Productgrid: React.FC<ProductGridProps> = ({ filteredProducts }) => {
    
    const productArray = filteredProducts.map((product) => (
        <Productcard key={product.id} {...product} />
    ))  

    return (
        <div className='product-grid mx-8 py-8 grid grid-cols-2 sm:grid-cols-3 gap-2.5 items-center justify-center md:mx-16'>
            {productArray}
        </div>
    )
}

export default Productgrid;