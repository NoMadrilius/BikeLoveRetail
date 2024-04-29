import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";
import { FilterIconSvg, WhiteCross } from "@/components/UIKit/SVGIcons";
import {useCatalogStore} from "@/store/CatalogStore";
import Link from "next/link";
import {GenerateCatalogLink} from "@/helpers/GenerateCatalogLink";

interface Option {
  id: number;
  name: string;
}

const FilterBlock: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const cs = useCatalogStore()

  const options: Option[] = [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
  ];

  const handleDropdownChange = (option: Option) => {
    setSelectedOption(option);
  };

  console.log('selected', cs.catalogState?.filterSettings)

  return (
    <div className="bg-white rounded-bl-lg py-3 px-5 flex items-center justify-between gap-2 w-full rounded-lg rou">
      <div className="flex gap-5 w-ful items-start">
        {
          cs.catalogState!.filterSettings.length>0&&
            <button className="border border-pink rounded-full py-[6.5px] px-3 text-dark-text font-inter leading-[19.36px] sm:hidden md:hidden">
              Скасувати
            </button>
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
                <Link href={GenerateCatalogLink({id:cs.catalogState!.category!.id, filters:cs.catalogState!.filterSettings.filter(n=>n != el), sort:cs.catalogState!.sortingSettings, page:cs.catalogState!.page  }, cs.catalogState!.category!.transliterationName)}>
                  <div className={`flex gap-1 border px-2 py-[6.5px] rounded-[100px] items-center cursor-pointer border-t-grey`}>
                    <Image
                        src={"/images/homepage/static/by-purpose.jpg"}
                        alt={""}
                        width={32}
                        height={32}
                        className="object-cover"
                    />
                    <span className="text-dark-text font-light leading-[19.2px]">
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
        label={selectedOption ? selectedOption.name : "Select Option"}
        options={options}
        onSelect={handleDropdownChange}
        className="px-2 self-start rounded-[100px] items-center cursor-pointer shrink-0"
      />
    </div>
  );
};

export default FilterBlock;
