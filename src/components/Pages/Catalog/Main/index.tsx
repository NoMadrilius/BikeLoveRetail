import React from "react";
import FilterBlock from "./FilterBlock";
import ProductCard from "@/components/UIKit/Cards/ProductCard";
import { PlusIcon } from "@/components/UIKit/SVGIcons";
import Pagination from "@/components/Pagination/Pagination";
import { ProductFullData } from "@/dataTransferObjects/response/ProductFullData";
import {useCatalogStore} from "@/store/CatalogStore";
import {observer} from "mobx-react";
import {GenerateCatalogLink} from "@/helpers/GenerateCatalogLink";

const MainContent = ({ products }: { products: ProductFullData[] }) => {
    const cs = useCatalogStore()
  return (
    <div className="w-full grow flex flex-col gap-5">
      <FilterBlock />
      <div className="mt-5 flex flex-col gap-5">
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 flex-wrap gap-5">
          {products.map((item) => (
            <ProductCard
              product={item}
              showBuyButton={true}
              className="sm:max-w-full"
            />
          ))}
        </div>
        {/*
        <div className="group w-full py-2 cursor-pointer rounded-lg bg-white flex items-center justify-center">
          <div className="flex gap-2 py-2 items-center">
            <span className="text-dark-text text-[16px] leading-[19.36px] font-inter">
              Показати більше
            </span>
            <div className="p-3 group-hover:bg-[#C1C1C133] rounded-lg transition-all duration-300 ease-in-out">
              <PlusIcon />
            </div>
          </div>
        </div>
        */}
        <Pagination selected={cs.catalogState!.page} pageList={Array(cs.catalogState?.totalPages).fill(0).map((n,index)=>GenerateCatalogLink(undefined, {id:cs.catalogState?.category?.id, slug:cs.catalogState?.category?.transliterationName,page:index+1}))} />
      </div>
    </div>
  );
};

export default observer(MainContent);
