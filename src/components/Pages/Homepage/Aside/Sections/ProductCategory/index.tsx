import { useCategoryStore } from "@/store/CategoryStore";
import React from "react";
import CategoryItem from "./CategoryItem";

interface ProductCategoryProps {
  className?: string;
}

const ProductCategory = ({ className }: ProductCategoryProps) => {
  const store = useCategoryStore();

  return (
    <section
      className={`w-fill rounded-lg overflow-hidden flex flex-col bg-white p-3 ${className}`}
    >
      <CategoryItem
        categoryName={"Велосипеди"}
        imageLink={"#"}
        onClick={() => store.toggleCatalogMain("Велосипеди")}
      />
      <CategoryItem
        categoryName={"Компоненти"}
        imageLink={"#"}
        onClick={() => store.toggleCatalogMain("Компоненти")}
      />
      <CategoryItem
        categoryName={"Аксесуари"}
        imageLink={"#"}
        onClick={() => store.toggleCatalogMain("Аксесуари")}
      />
      <CategoryItem
        categoryName={"Одяг та захист"}
        imageLink={"#"}
        onClick={() => store.toggleCatalogMain("Одяг та захист")}
      />
      <CategoryItem
        categoryName={"Інструменти та обслуговування"}
        imageLink={"#"}
        onClick={() => store.toggleCatalogMain("Інструменти та обслуговування")}
      />
      <CategoryItem
        categoryName={"Харчування"}
        imageLink={"#"}
        onClick={() => store.toggleCatalogMain("Харчування")}
      />
    </section>
  );
};

export default ProductCategory;
