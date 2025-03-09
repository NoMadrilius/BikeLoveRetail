import React from "react";
import CategoryBlockItem from "./CategoryBlockItem";
import { ProductCategory } from "@/dataTransferObjects/entities/ProductCategory";
import { observer } from "mobx-react";
import { useAppStore } from "@/store/AppStore";
import { Category } from "@/dataTransferObjects/internal/AppState";

const CategoryBlock = (p: { cat: Category }) => {
  const as = useAppStore();

  const categoryItems = as.categories.filter((n) => n.parentId === p.cat.id);

  return (
    <article className="break-inside flex flex-col shrink-0 gap border-solid border border-b-gray w-full ">
      <CategoryBlockItem
        category={p.cat}
        imageLink={p.cat.image}
        categoryType={"category"}
        categoryItemsLength={categoryItems.length}
      />
      <div className="flex flex-col gap border-solid border border-b-gray">
        {categoryItems.map((n) => (
          <CategoryBlockItem
            category={n}
            imageLink={n.image}
            categoryType={"subcategory"}
          />
        ))}
      </div>
    </article>
  );
};

export default observer(CategoryBlock);
