import React, { useState } from "react";
import {
  AccordionIconSVG,
  MinusIcon,
  PlusIcon,
} from "@/components/UIKit/SVGIcons";
import {ProductOptionVariants} from "@/dataTransferObjects/entities/ProductOptionVariants";
import {useCatalogStore} from "@/store/CatalogStore";
import Link from "next/link";
import {GenerateCatalogLink} from "@/helpers/GenerateCatalogLink";

interface CategoryAccordionProps {
  title: string;
  checkboxes:ProductOptionVariants[];
}

const CategoryAccordion = ({ title, checkboxes }: CategoryAccordionProps) => {


  const [isExpanded, setIsExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const cs = useCatalogStore()

  const renderCheckboxes = () => {
    const totalCheckboxes = showMore ? checkboxes.length : 5;

    return checkboxes.slice(0, totalCheckboxes).map((checkbox, index) => {

      let isChecked = cs.catalogState!.filterSettings.includes(checkbox.id)

      return(
          <Link
              key={index}
              className="flex gap-2 items-center cursor-pointer select-none"
              href={GenerateCatalogLink({id:cs.catalogState!.category!.id, filters:[...cs.catalogState!.filterSettings, checkbox.id], sort:cs.catalogState!.sortingSettings, page:cs.catalogState!.page  }, cs.catalogState!.category!.transliterationName)}
          >
            <div
                className={`relative w-6 h-6 rounded-lg cursor-pointer ${
                    isChecked ? "bg-[#F9436B]" : "border border-gray"
                }`}
            >
              {isChecked && (
                  <svg
                      className="absolute top-1/2 right-[5px] transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none"
                      viewBox="0 0 20 20"
                  >
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M6 10l4 4 8-8"
                    />
                  </svg>
              )}
            </div>
            <span className="text-dark-text text-[14px] leading-[16.8px] font-inter">
          {checkbox.name} <span className="text-gray">(text)</span>
        </span>
          </Link>
    )});
  };

  return (
    <section className="border-b border-gray pb-2 w-full">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="font-robot-c text-[20px] leading-[24px] font-bold text-t-grey pt-2 select-none">
          {title}
        </h3>
        <AccordionIconSVG
          className={`ml-2 transform ${
            isExpanded ? "-rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {isExpanded && (
        <div className="flex flex-col gap-4 mt-4">
          {renderCheckboxes()}
          {checkboxes.length > 5 &&
              <div
                  className="flex gap-2 items-center p-1 cursor-pointer"
                  onClick={toggleShowMore}
              >
                {showMore ? <MinusIcon/> : <PlusIcon/>}
                {showMore ? (
                    <span className="text-dark-text text-[14px] leading-[16.8px] font-robot select-none">
                Назад
              </span>
                ) : (
                    <span className="text-dark-text text-[14px] leading-[16.8px] font-robot select-none">
                Показати більше <span className="text-gray select-none">(text)</span>
              </span>
                )}
              </div>
          }
        </div>
      )}
    </section>
  );
};

export default CategoryAccordion;
