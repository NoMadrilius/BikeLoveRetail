import React from "react";
import CategoryBlock from "../CatalogMenu/CategoryBlock";
import { useAppStore } from "@/store/AppStore";
import { observer } from "mobx-react";

const CatalogMain = () => {
  const as = useAppStore();

  return (
    <section className="py-5 masonry sm:masonry-sm md:masonry-md lg:masonry-md xl:masonry-md ">
      {as.categoryBlocks.map((n) => (
        <CategoryBlock key={n.id} cat={n} />
      ))}
    </section>
  );
};

export default observer(CatalogMain);
