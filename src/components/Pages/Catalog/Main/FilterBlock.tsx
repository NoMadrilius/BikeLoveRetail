import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";
import { FilterIconSvg, WhiteCross } from "@/components/UIKit/SVGIcons";
import {useCatalogStore} from "@/store/CatalogStore";
import Link from "next/link";
import {useRouter} from "next/router";
import {GenerateCatalogLink} from "@/helpers/LinkGen/GenerateCatalogLink";

const FilterBlock: React.FC = () => {

  const cs = useCatalogStore()
    const r = useRouter()

  return (
    <div className="bg-white rounded-bl-lg py-3 px-5 flex items-center justify-between gap-2 w-full rounded-lg rou">
      <div className="flex gap-5 w-ful items-start">
        {
          cs.catalogState!.filterSettings.length>0&&
            <div onClick={()=>{r.push(GenerateCatalogLink(undefined,{id:cs.catalogState!.category?.id, slug:cs.catalogState!.category?.transliterationName}))}} className="border border-pink cursor-pointer select-none rounded-[8px] py-[6.5px] px-3 text-dark-text font-inter font-medium leading-[19.36px] sm:hidden md:hidden hover:bg-[#d3d3d3]">
              Скасувати
            </div>
        }

        <button className="bg-gradient-to-br from-[#F01B74] to-[#FF6064] sm:rounded-full sm:p-0 sm:size-12 hover:from-[#FA6989] hover:to-[#FA6989] rounded-lg gap-2 px-5 py-2 text-white font-inter leading-[19.36px] sm:flex md:flex hidden items-center justify-center">
          <FilterIconSvg onClick={()=>cs.setIsOpenFiltersModal(true)} />
          <span onClick={()=>cs.setIsOpenFiltersModal(true)} className="sm:hidden">Фільтри</span>
        </button>
        <div className="flex gap-5 flex-wrap sm:hidden md:hidden">
          {cs.catalogState?.filterSettings.map((el) =>
          {
            let variant = cs.catalogState!.options.find(n=>n.id === el)
            return(
                <Link href={GenerateCatalogLink(cs.catalogState!,{filters:cs.catalogState!.filterSettings.filter(n=>n != el)})}>
                  <div className={`flex gap-[8px] border px-2 py-[6.5px] rounded-[8px] items-center cursor-pointer border-t-grey`}>
                    {variant?.iconUrl&&
                        <Image
                            src={variant?.iconUrl}
                            alt={"VariantImage"}
                            width={32}
                            height={32}
                            className="object-cover"
                        />
                    }
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
      <Dropdown
        className="px-2 self-start rounded-[100px] items-center cursor-pointer shrink-0"
      />
    </div>
  );
};

export default FilterBlock;
