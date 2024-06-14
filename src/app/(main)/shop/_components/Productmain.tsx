"use client"

import { Product, Parfume, Category } from "@prisma/client";
import { useState } from 'react';
import { formatCurrency } from "@/lib/formatters";
import { Button } from "@/components/ui/button";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";

interface ProductWithParfumeAndCategory extends Product {
    parfume: Parfume;
    category: Category;
}

interface ProductmainProps {
    product: ProductWithParfumeAndCategory | null;
}

const Productmain:React.FC<ProductmainProps> = ({product}) => {

    const initialStyles = [
        { backgroundImage: `url(${product?.img1url.substring(6)})`, backgroundSize: 'cover' },
        { backgroundImage: `url(${product?.img2url.substring(6)})`, backgroundSize: 'cover' },
        { backgroundImage: `url(${product?.img3url.substring(6)})`, backgroundSize: 'cover' },
      ];

    const [styles, setStyles] = useState(initialStyles);

    const handleImg2Click = () => {
        const newStyles = [...styles];
        [newStyles[0], newStyles[1]] = [newStyles[1], newStyles[0]]; // Swap styles between img2 and main-img
        setStyles(newStyles);
    };
    const handleImg3Click = () => {
        const newStyles = [...styles];
        [newStyles[0], newStyles[2]] = [newStyles[2], newStyles[0]]; // Swap styles between img3 and main-img
        setStyles(newStyles);
    };

    if (!product) {
        return (
            <div>
                <h1>Oops something went wrong</h1>
            </div>
        )
    } else {
        return (
            <div className='flex flex-col items-center justify-center my-2.5 mx-5 md:mx-14 md:flex-row'>
                <div className="place-self-start">
                    <Link href="/shop">
                        <Button variant="secondary">
                            <FontAwesomeIcon className="mr-2" icon={faArrowCircleLeft}/> boutique
                        </Button>
                    </Link>
                </div>
                <div className='product-main-images flex items-center justify-center'>
                    <div className='side-images hidden sm:block'>
                        <div className='img2 w-32 h-40 m-2.5 cursor-pointer shadow-md' style={styles[1]} onClick={handleImg2Click}></div>
                        <div className='img3 w-32 h-40 m-2.5 cursor-pointer shadow-md' style={styles[2]} onClick={handleImg3Click}></div>
                    </div>
                    <div className='main-img m-2.5 shadow-lg h-96 w-80' style={styles[0]}></div>
                </div>
                <div className='info text-center'>
                    <div className='product-text'>
                        <h1 className='text-4xl m-2'>{product.name}</h1>
                        <h5 className='text-2xl m-2'>{product.parfume.name}</h5>
                        <h2 className='text-3xl m-2'>{formatCurrency((product.priceInCents || 0) / 100)}</h2>
                        <Button variant="default">AJOUTER AU PANIER</Button>
                        <p className='px-5 text-left m-1 sm:text-sm'>
                            <b>Description</b>: {product.description}
                        </p>
                        <p className='expandable px-5 text-left m-1 sm:text-sm'>
                            <b>Dimensions</b>: {product.dimensions}
                        </p>
                        <p className='expandable px-5 text-left m-1 sm:text-sm'>
                            <b>Weight</b>: {product.weightInGramms} grams
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Productmain;