import React from "react";
import CategoryBlock from "../CatalogMenu/CategoryBlock";
import { useAppStore } from "@/store/AppStore";
import { observer } from "mobx-react";

const CatalogMain = (p: { isMobile: boolean }) => {
  const as = useAppStore();

  return (
    <div className="overflow-y-scroll h-[744px] sm:h-full md:h-full overflow-x-hidden">
      <section className="py-5 masonry sm:masonry-sm sm:flex sm:flex-col md:flex-col md:flex lg:masonry-md xl:masonry-md ">
        {as.categoryBlocks.map((n) =>
          p.isMobile ? (
            <CategoryBlock key={n.id} cat={n} />
          ) : (
            <CategoryBlock key={n.id} cat={n} />
          )
        )}
      </section>
    </div>
  );
};

export default observer(CatalogMain);
