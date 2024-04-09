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
        imageSrc={"/images/homepage/static/bike.jpg"}
      />
      <CategoryItem
        categoryName={"Компоненти"}
        imageLink={"#"}
        onClick={() => store.toggleCatalogMain("Компоненти")}
        imageSrc={"/images/homepage/static/components.png"}
      />
      <CategoryItem
        categoryName={"Аксесуари"}
        imageLink={"#"}
        onClick={() => store.toggleCatalogMain("Аксесуари")}
        imageSrc={"/images/homepage/static/accessories.png"}
      />
      <CategoryItem
        categoryName={"Одяг та захист"}
        imageLink={"#"}
        onClick={() => store.toggleCatalogMain("Одяг та захист")}
        imageSrc={"/images/homepage/static/clothes.png"}
      />
      <CategoryItem
        categoryName={"Інструменти та обслуговування"}
        imageLink={"#"}
        onClick={() => store.toggleCatalogMain("Інструменти та обслуговування")}
        imageSrc={"/images/homepage/static/instrum.png"}
      />
      <CategoryItem
        categoryName={"Харчування"}
        imageLink={"#"}
        onClick={() => store.toggleCatalogMain("Харчування")}
        imageSrc={"/images/homepage/static/food.jpg"}
      />
    </section>
  );
};

export default ProductCategory;
