import React from "react";
import { GenerateCatalogLink } from "@/helpers/LinkGen/GenerateCatalogLink";
import { FilterIconSvg, WhiteCross } from "@/components/UIKit/SVGIcons";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "@/components/Pages/Catalog/Main/Dropdown";
import { CatalogPageData } from "@/dataTransferObjects/response/catalogPage/CatalogPageData";
import { useRouter } from "next/router";
import { useCatalogStore } from "@/store/CatalogStore";

const CatalogPageSelectedFilters = ({c}:{c:CatalogPageData}) => {
  const r = useRouter()
  const cs = useCatalogStore()

  if(c.filterSettings.length === 0) return null;

  return (
    <div className="bg-white rounded-bl-lg py-3 px-5 flex items-center justify-between gap-2 w-full rounded-lg rou">
      <div className="flex gap-5 w-ful items-start mob:items-center">
        {
          c.filterSettings.length>0&&
          <div onClick={()=>{r.push(c.category.url)}} className="border border-pink cursor-pointer select-none rounded-[8px] py-[6.5px] px-3 text-dark-text font-inter font-medium leading-[19.36px] sm:hidden md:hidden hover:bg-[#d3d3d3]">
            Скасувати
          </div>
        }

        <button className="bg-gradient-to-br from-[#F01B74] to-[#FF6064] sm:rounded-full sm:p-0 sm:size-12 hover:from-[#FA6989] hover:to-[#FA6989] rounded-lg gap-2 px-5 py-2 text-white font-inter leading-[19.36px] sm:flex md:flex hidden items-center justify-center">
          <FilterIconSvg onClick={()=>cs.setIsOpenFiltersModal(true)} />
          <span onClick={()=>cs.setIsOpenFiltersModal(true)} className="sm:hidden">Фільтри</span>
        </button>
        <div className="desc:hidden text-black text-center">
          Обрано фільтрів:{c.filterSettings.length}
        </div>
        <div className="flex gap-5 flex-wrap sm:hidden md:hidden">
          {c.filterSettings.map((el) =>
          {
            let variant = c.options.find(n=>n.id === el)
            return(
              <Link href={c.segments.filter(n=>n!=variant?.url).join('/')}>
                <div className={`flex gap-[8px] border px-2 py-[6.5px] rounded-[8px] items-center cursor-pointer border-t-grey`}>
                  <span className="text-dark-text font-semibold leading-[19.2px] font-inter">
                      {variant? variant.name : "No data"}
                    </span>

                  <div className="bg-pink size-4 flex items-center justify-center rounded-full">
                    <WhiteCross />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default CatalogPageSelectedFilters;