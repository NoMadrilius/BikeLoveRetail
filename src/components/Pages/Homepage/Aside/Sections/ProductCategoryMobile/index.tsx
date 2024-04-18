import React from 'react';
import {useAppStore} from "@/store/AppStore";
import CategoryItem from "@/components/Pages/Homepage/Aside/Sections/ProductCategory/CategoryItem";
import CategoryItemMobile from "@/components/Pages/Homepage/Aside/Sections/ProductCategoryMobile/CategoryItemMobile";

interface ProductCategoryProps {
    className?: string;
}

const ProductCategoryMobile = ({ className }: ProductCategoryProps) => {
    const as = useAppStore();
    return (
        <section
            className={`w-fill rounded-lg overflow-hidden flex flex-col bg-white p-3 ${className}`}
        >
            {as.categories
                .filter((n) => n.parentId === 0)
                .sort((a, b) => b.sortOrder - a.sortOrder)
                .map((n) => {
                    return <CategoryItemMobile key={n.id} category={n} onClick={()=>{
                    as.setSelectedCategory(n)
                    }
                    } />;
                })}
        </section>
    );
};

export default ProductCategoryMobile;