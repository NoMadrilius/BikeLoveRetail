import React from "react";
import CategoryBlockItem from "./CategoryBlockItem";

const CategoryBlock = () => {
  return (
    <article className="shrink-0 w-full lg:w-[280px] xl:w-[280px] 2xl:w-[280px]">
      <CategoryBlockItem
        categoryName={"Category name"}
        imageLink={"#"}
        categoryType={"category"}
      />
      <div className="flex flex-col gap">
        <CategoryBlockItem
          categoryName={"Category name"}
          imageLink={"#"}
          categoryType={"subcategory"}
        />
        <CategoryBlockItem
          categoryName={"Category name"}
          imageLink={"#"}
          categoryType={"subcategory"}
        />
        <CategoryBlockItem
          categoryName={"Category name"}
          imageLink={"#"}
          categoryType={"subcategory"}
        />
        <CategoryBlockItem
          categoryName={"Category name"}
          imageLink={"#"}
          categoryType={"subcategory"}
        />
      </div>
    </article>
  );
};

export default CategoryBlock;
