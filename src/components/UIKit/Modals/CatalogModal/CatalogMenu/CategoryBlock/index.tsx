import React from "react";
import CategoryBlockItem from "./CategoryBlockItem";
import { ProductCategory } from "@/dataTransferObjects/entities/ProductCategory";
import { observer } from "mobx-react";
import { useAppStore } from "@/store/AppStore";

const CategoryBlock = (p: { cat: ProductCategory }) => {
  const as = useAppStore();

  const categoryItems = as.categories.filter((n) => n.parentId === p.cat.id);

  return (
    <article className="break-inside flex flex-col shrink-0 gap border-solid border border-b-gray w-full ">
      <CategoryBlockItem
        category={p.cat}
        imageLink={p.cat.iconUrl}
        categoryType={"category"}
        categoryItemsLength={categoryItems.length}
      />
      <div className="flex flex-col gap border-solid border border-b-gray">
        {categoryItems.map((n) => (
          <CategoryBlockItem
            category={n}
            imageLink={n.iconUrl}
            categoryType={"subcategory"}
          />
        ))}
      </div>
    </article>
  );
};

export default observer(CategoryBlock);
