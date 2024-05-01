import BicyclePurposeTags from "@/components/Pages/Catalog/Aside/BicyclePurposeTags";
import CategoryAccordion from "@/components/Pages/Catalog/Aside/CategoryAccordion";
import SelectColor from "@/components/Pages/Catalog/Aside/SelectColor";
import SortByPrice from "@/components/Pages/Catalog/Aside/SortByPrice";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import { AccordionIconSVG, WhiteCross } from "@/components/UIKit/SVGIcons";
import Image from "next/image";
import React, { useEffect } from "react";
import {useCatalogStore} from "@/store/CatalogStore";

const FilterModal = () => {
  const cs  = useCatalogStore();

  const uniqueOptions = cs.catalogState!.options.reduce(
      (accumulator: { id: number; name: string }[], i) => {
        let ent = accumulator.find((n) => n.id === i.optionId);
        if (ent === undefined) {
          accumulator.push({ id: i.optionId, name: i.optionName });
        }
        return accumulator;
      },
      []
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed sm:top-0 top-0 left-0 w-full bg-black bg-opacity-50 flex justify-center items-start z-50">
      <div
        className="bg-white w-full max-w-[1268px] flex flex-col py-5 px-10 sm:py-5 sm:px-0 min-h-screen relative"
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
          <div className="flex flex-col gap-2 h-[450px] overflow-auto">
            <BicyclePurposeTags />
            <SelectColor />
            {
              uniqueOptions.map(opt=>{
                let variants = cs.catalogState!.options.filter((n) => n.optionId === opt.id);
                return (<CategoryAccordion key={opt.id} title={opt.name} checkboxes={variants} />)
              })
            }
            <SortByPrice />
          </div>
        </div>
        <div className="p-5 flex flex-col gap-3 absolute bottom-[20px] w-full left-0 bg-white">
          <span className="text-t-grey font-inter font-light leading-[19.2px] text-center">
            Знайдено ХХХХ товарів
          </span>
          <GradientButton
            label={"Показати"}
            showIcon={false}
            className="w-full flex !py-[14.5px] justify-center"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
