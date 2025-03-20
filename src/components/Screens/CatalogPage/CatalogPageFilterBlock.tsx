import React from "react";
import { CatalogPageData } from "@/dataTransferObjects/response/catalogPage/CatalogPageData";
import CatalogPageFilters from "@/components/Screens/CatalogPage/CatalogPageFilters";

const CatalogPageFilterBlock = ({c}:{c:CatalogPageData}) => {

  const uniqOpts:{id:number,name:string}[]=[]
  c.options.forEach(n=>{if(uniqOpts.find(g=>g.id === n.optionId)===undefined)uniqOpts.push({id:n.optionId, name:n.optionName})});

  return (
    <>
      {uniqOpts.map((opt, index) => {
        let variants = c.options.filter((n) => n.optionId === opt.id);
        return (
          <CatalogPageFilters key={index} title={opt.name} variants={variants.filter(n=>n.quantity > 0)} actual={c.filterSettings} segments={c.segments}/>
        );
      })}
    </>
  );
};

export default CatalogPageFilterBlock;