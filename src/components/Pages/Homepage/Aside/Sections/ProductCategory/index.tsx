import React from "react";
import CategoryItem from "./CategoryItem";
import { useAppStore } from "@/store/AppStore";
import { observer } from "mobx-react";

interface ProductCategoryProps {
  className?: string;
}

const ProductCategory = ({ className }: ProductCategoryProps) => {
  const as = useAppStore();
  return (
    <section
      className={`w-fill rounded-lg overflow-hidden flex flex-col bg-white p-3 ${className}`}
    >
      {as.categories
        .filter((n) => n.parentId === 0)
        .sort((a, b) => b.sortOrder - a.sortOrder)
        .map((n) => {
          return <CategoryItem key={n.id} category={n} />;
        })}
    </section>
  );
};

export default observer(ProductCategory);
