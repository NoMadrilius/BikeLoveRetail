import React from "react";
import CategoryBlockItem from "./CategoryBlockItem";
import { ProductCategory } from "@/dataTransferObjects/entities/ProductCategory";
import { observer } from "mobx-react";
import { useAppStore } from "@/store/AppStore";

const CategoryBlock = (p: { cat: ProductCategory }) => {
  const as = useAppStore();
  return (
    <article className="flex flex-col shrink-0 gap border-solid border border-b-gray w-full sm:w-[100%] md:w-[100%] lg:w-[calc(33.33%-22px)] xl:w-[calc(33.33%-22px)] 2xl:w-[calc(33.33%-22px)]">
      <CategoryBlockItem
        category={p.cat}
        imageLink={p.cat.iconUrl}
        categoryType={"category"}
      />
      <div className="flex flex-col gap border-solid border border-b-gray">
        {as.categories
          .filter((n) => n.parentId === p.cat.id)
          .map((n) => (
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
