import { create } from 'zustand';
import { Product, Parfume, Category } from "@prisma/client";

interface ProductWithParfumeAndCategory extends Product {
    parfume: Parfume;
    category: Category;
}

interface ProductStore {
    filteredProducts: ProductWithParfumeAndCategory[];
    selectedCategories: string[];
    selectedParfumes: string[];
    setFilteredProducts: (products: ProductWithParfumeAndCategory[]) => void;
    setSelectedCategories: (categories: string[]) => void;
    setSelectedParfumes: (parfumes: string[]) => void;
}

const useProductStore = create<ProductStore>((set) => ({
    filteredProducts: [],
    selectedCategories: [],
    selectedParfumes: [],
    setFilteredProducts: (products) => set({ filteredProducts: products }),
    setSelectedCategories: (categories) => set({ selectedCategories: categories }),
    setSelectedParfumes: (parfumes) => set({ selectedParfumes: parfumes }),
}));

export default useProductStore;