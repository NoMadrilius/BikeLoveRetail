import React, { useState } from "react";
import { CatalogPageOption } from "@/dataTransferObjects/response/catalogPage/CatalogPageOption";
import { useCatalogStore } from "@/store/CatalogStore";
import Link from "next/link";
import { MinusIcon, PlusIcon, SvgRightIcon } from "@/components/UIKit/SVGIcons";

const CatalogPageFilters = ({ title, variants, actual,segments }:{title:string, variants:CatalogPageOption[], actual:number[], segments:string[]}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const renderCheckboxes = () => {
    const totalCheckboxes = showMore ? variants.length : 5;

    return variants.slice(0, totalCheckboxes).map((checkbox, index) => {
      let isChecked = actual.includes(checkbox.id);

      return (
        <Link
          key={index}
          className="flex gap-2 items-center cursor-pointer select-none"
          href={isChecked?segments.filter(n=>n!=checkbox.url).join('/'):[...segments,checkbox.url].join('/')}
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
          <span className="text-dark-text hover:text-pink text-[14px] leading-[16.8px] font-inter">
            {checkbox.name}{" "}
            {
              //<span className="text-gray">(text)</span>
            }
          </span>
        </Link>
      );
    });
  };

  return (
    <section className="border-b border-gray pb-2 w-full">
      <div
        className="flex items-center justify-between cursor-pointer group"
        onClick={toggleAccordion}
      >
        <h3 className="font-robot-c text-[20px] leading-[24px] font-bold group-hover:text-pink text-t-grey select-none">
          {title}
        </h3>

        <SvgRightIcon
          className={`group-hover:hidden block ${
            isExpanded ? "-rotate-90" : "rotate-90"
          }`}
        />
        <SvgRightIcon
          color="#F9436B"
          className={`group-hover:block hidden  ${
            isExpanded ? "-rotate-90" : "rotate-90"
          }`}
        />
      </div>
      {isExpanded && (
        <div className="flex flex-col gap-4 mt-4">
          {renderCheckboxes()}
          {variants.length > 5 && (
            <div
              className="flex gap-2 items-center p-1 cursor-pointer"
              onClick={toggleShowMore}
            >
              {showMore ? <MinusIcon /> : <PlusIcon />}
              {showMore ? (
                <span className="text-dark-text text-[14px] leading-[16.8px] font-robot select-none">
                  Сховати
                </span>
              ) : (
                <span className="text-dark-text text-[14px] leading-[16.8px] font-robot select-none">
                  Показати більше{" "}
                  <span className="text-gray select-none">
                    {"ще " + (variants.length - 5)}
                  </span>
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default CatalogPageFilters;