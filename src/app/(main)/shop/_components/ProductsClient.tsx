"use client"

import { Product, Parfume, Category } from "@prisma/client";
import Productgrid from "./Productgrid";
import Filterdrawer from "./Filterdrawer";

import { useState } from "react";

interface ProductWithParfumeAndCategory extends Product {
    parfume: Parfume;
    category: Category;
}
interface ProductGridProps {
    products: ProductWithParfumeAndCategory[];
}

const ProductsClient: React.FC<ProductGridProps> = ({ products }) => {

    const [filteredProducts, setFilteredProducts] = useState(products);

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedParfumes, setSelectedParfumes] = useState<string[]>([]);

    return (
        <div>
            <Filterdrawer 
                products={products}  
                setFilteredProducts={setFilteredProducts}
                selectedParfumes={selectedParfumes}
                setSelectedParfumes={setSelectedParfumes}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
            />
            <Productgrid filteredProducts={filteredProducts}/>
        </div>
    )
    
}

export default ProductsClient;