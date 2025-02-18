import React, { useEffect } from "react";
import { CatalogPageData } from "@/dataTransferObjects/response/catalogPage/CatalogPageData";
import { AccordionIconSVG, FilterIconSvg, WhiteCross } from "@/components/UIKit/SVGIcons";
import { useCatalogStore } from "@/store/CatalogStore";
import CatalogPageFilterBlock from "@/components/Screens/CatalogPage/CatalogPageFilterBlock";
import { observer } from "mobx-react";

const CatalogPageMobileFilter = ({c}:{c:CatalogPageData}) => {

  const cs = useCatalogStore()
  return (
    <div className="fixed sm:top-0 top-0 left-0 w-full bg-black bg-opacity-50 flex justify-center items-start z-50">
      <div
        className="bg-white w-full flex flex-col py-5 px-10 sm:py-5 sm:px-0 min-h-screen relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between border-b-gray border py-2 px-5">
          <div onClick={()=>cs.setIsOpenFiltersModal(false)} className="flex items-center gap-2 group cursor-pointer">
            <div className="p-3 group-hover:bg-[#C1C1C133] cursor-pointer rounded-lg">
              <AccordionIconSVG className={`transform rotate-90`} />
            </div>
            <span className="font-inter text-dark-text leading-[19.36px]">
              Фільтри
            </span>
          </div>
          <div>
            <button className="border border-pink rounded-full py-[6.5px] px-3 text-dark-text font-inter leading-[19.36px]">
              Скасувати
            </button>
          </div>
        </div>
        <div className="p-5 w-full">
          <div className="flex flex-col gap-2 overflow-auto">
            <CatalogPageFilterBlock c={c}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(CatalogPageMobileFilter);