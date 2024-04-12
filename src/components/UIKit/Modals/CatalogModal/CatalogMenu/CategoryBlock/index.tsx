import React from "react";
import CategoryBlockItem from "./CategoryBlockItem";
import {ProductCategory} from "@/dataTransferObjects/entities/ProductCategory";
import {observer} from "mobx-react";
import {useAppStore} from "@/store/AppStore";

const CategoryBlock = (p:{cat:ProductCategory}) => {
    const as = useAppStore()
  return (
    <article className="shrink-0 w-full lg:w-[280px] xl:w-[280px] 2xl:w-[280px]">
      <CategoryBlockItem
        category={p.cat}
        imageLink={p.cat.iconUrl}
        categoryType={"category"}
      />
      <div className="flex flex-col gap">
          {as.categories.filter(n=>n.parentId === p.cat.id).map(n=>
              <CategoryBlockItem
                  category={n}
                  imageLink={n.iconUrl}
                  categoryType={"subcategory"}
              />
          )}
      </div>
    </article>
  );
};

export default observer(CategoryBlock);
