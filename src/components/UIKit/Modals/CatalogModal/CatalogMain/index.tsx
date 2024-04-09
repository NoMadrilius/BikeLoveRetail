import React from "react";
import CategoryBlock from "../CatalogMenu/CategoryBlock";
import {useAppStore} from "@/store/AppStore";
import {observer} from "mobx-react";

const CatalogMain = () => {
    const as = useAppStore()
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-[22px] py-5 grow sm:px-5">
        {as.categoryBlocks.map(n=><CategoryBlock cat={n}/>)}
    </section>
  );
};

export default observer(CatalogMain);
