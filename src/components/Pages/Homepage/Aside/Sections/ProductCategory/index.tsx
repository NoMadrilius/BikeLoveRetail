import { useCategoryStore } from "@/store/CategoryStore";
import React from "react";
import CategoryItem from "./CategoryItem";
import {useAppStore} from "@/store/AppStore";

interface ProductCategoryProps {
  className?: string;
}

const ProductCategory = ({ className }: ProductCategoryProps) => {
  const store = useCategoryStore();
  const as = useAppStore()

  return (
    <section
      className={`w-fill rounded-lg overflow-hidden flex flex-col bg-white p-3 ${className}`}
    >
      {as.categories.filter(n=>n.parentId === 0).sort((a,b)=>b.sortOrder-a.sortOrder).map(n=>
          <CategoryItem
          category={n}
        />
      )}
    </section>
  );
};

export default ProductCategory;
