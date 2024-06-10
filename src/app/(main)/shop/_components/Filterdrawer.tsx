"use client";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React, { useEffect } from "react";
import { Product, Parfume, Category } from "@prisma/client";
import useProductStore from "@/lib/store";

interface ProductWithParfumeAndCategory extends Product {
    parfume: Parfume;
    category: Category;
}
interface FilterdrawerProps {
    products: ProductWithParfumeAndCategory[];
    pickedParfume: string;
}

const Filterdrawer: React.FC<FilterdrawerProps> = ({ products, pickedParfume}) => {

    const { selectedCategories, 
            selectedParfumes, 
            setFilteredProducts, 
            setSelectedCategories, 
            setSelectedParfumes }
        = useProductStore()

    const applyChanges = () => {
        let filtered = products;
    
        if (selectedCategories.length !== 0) {
            filtered = filtered.filter(product => 
                selectedCategories.includes(product.category.name)
            );
        }
    
        if (selectedParfumes.length !== 0) {
            filtered = filtered.filter(product => 
                selectedParfumes.includes(product.parfume.name)
            );
        }
    
        setFilteredProducts(filtered);
    };

    useEffect(()=> {
        let pfiltered = products;
        if (pickedParfume) {
            pfiltered = pfiltered.filter(product => 
                pickedParfume.includes(product.parfume.name)
            );
            setSelectedParfumes([pickedParfume]);
        }
        setFilteredProducts(pfiltered);
        console.log("set to picked parfume")
    }, [])

    return(
        <div className="mx-8 flex justify-end">
                <Drawer>
                    <DrawerTrigger>
                        <button className="bg-paupink font-bold text-white tracking-[2px] px-4 py-2 flex items-center rounded-none">
                            <p>filter</p>
                            <SlidersHorizontal/>
                        </button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="mb-4 border-paubrown border p-2">
                            <DrawerHeader>
                                <DrawerTitle><h1>CATEGORIE</h1></DrawerTitle>
                                <DrawerDescription>Selectioner des produits par leurs categorie</DrawerDescription>
                            </DrawerHeader>
                            <ToggleGroup type="multiple" variant="outline" value={selectedCategories} onValueChange={setSelectedCategories}>
                                {products.map( product => (
                                    <ToggleGroupItem 
                                        key={product.category.id} 
                                        value={product.category.name}
                                    >
                                        {product.category.name}
                                    </ToggleGroupItem>
                                ))}
                            </ToggleGroup>
                        </div>
                        <div className="mb-4 border-paubrown border p-2">
                            <DrawerHeader>
                                <DrawerTitle><h1>PARFUM</h1></DrawerTitle>
                                <DrawerDescription>Selectioner des produits par leurs parfum</DrawerDescription>
                            </DrawerHeader>
                            <ToggleGroup type="multiple" variant="outline" value={selectedParfumes} onValueChange={setSelectedParfumes}>
                                {products.map( product => (
                                    <ToggleGroupItem 
                                        key={product.parfume.id} 
                                        value={product.parfume.name}
                                    >
                                        {product.parfume.name}
                                    </ToggleGroupItem>
                                ))}
                            </ToggleGroup>
                        </div>
                        <DrawerFooter>
                            <DrawerClose>
                                <div className="flex flex-col gap-2">
                                    <Button onClick={() => applyChanges()} className="bg-paupink" variant="default">Confirmer</Button>
                                    <Button onClick={()=>{setFilteredProducts(products); setSelectedCategories([]); setSelectedParfumes([])}} variant="secondary">Reset</Button>           
                                </div>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
    )
}
export default Filterdrawer;