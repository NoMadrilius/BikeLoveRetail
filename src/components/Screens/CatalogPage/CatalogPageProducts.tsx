import React from "react";
import Pagination from "@/components/Pagination/Pagination";
import { CatalogPageData } from "@/dataTransferObjects/response/catalogPage/CatalogPageData";
import CatalogPageProductCard from "@/components/Screens/CatalogPage/CatalogPageProductCard";
import CatalogPageSelectedFilters from "@/components/Screens/CatalogPage/CatalogPageSelectedFilters";

const CatalogPageProducts = ({c}:{c:CatalogPageData}) => {
  return (
    <div className="w-full grow flex flex-col gap-5">
      <CatalogPageSelectedFilters c={c}/>
      <div className="mt-5 flex flex-col gap-5">
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 flex-wrap gap-5">
          {c.products.map((item) => (
            <CatalogPageProductCard key={item.id} p={item} />
          ))}
        </div>
        <Pagination selected={c.page} pageList={Array(c.totalPages).fill(0).map((n,index)=>[...c.segments.filter(n=>!n.includes("page-")),"page-"+(index+1)].join('/'))} />
      </div>

    </div>
  );
};

export default CatalogPageProducts;