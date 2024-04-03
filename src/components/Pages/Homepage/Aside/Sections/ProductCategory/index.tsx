import React from "react";
import CategoryItem from "./CategoryItem";

const ProductCategory = () => {
  return (
    <section className="w-fill rounded-lg overflow-hidden flex flex-col bg-white p-3">
      <CategoryItem categoryName={"Велосипеди"} imageLink={"#"} />
      <CategoryItem categoryName={"Компоненти"} imageLink={"#"} />
      <CategoryItem categoryName={"Аксесуари"} imageLink={"#"} />
      <CategoryItem categoryName={"Одяг та захист"} imageLink={"#"} />
      <CategoryItem
        categoryName={"Інструменти та обслуговування"}
        imageLink={"#"}
      />
      <CategoryItem categoryName={"Харчування"} imageLink={"#"} />
    </section>
  );
};

export default ProductCategory;
