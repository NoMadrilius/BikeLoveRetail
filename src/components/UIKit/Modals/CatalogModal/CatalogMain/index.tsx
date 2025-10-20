import React from "react";
import CategoryBlock from "../CatalogMenu/CategoryBlock";
import { useAppStore } from "@/store/AppStore";
import { observer } from "mobx-react";

const CatalogMain = (p: { isMobile: boolean }) => {
  const as = useAppStore();

  return (
    <div className="overflow-auto h-[90vh] mob:h-screen w-full">
      <section className="py-5 desc:columns-3 tab:columns-2 mob:columns-1">
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
