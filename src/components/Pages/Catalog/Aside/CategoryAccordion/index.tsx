import React, { useState } from "react";
import {
  AccordionIconSVG,
  MinusIcon,
  PlusIcon,
} from "@/components/UIKit/SVGIcons";

interface Checkbox {
  label: string;
}

interface CategoryAccordionProps {
  title: string;
  checkboxes: Checkbox[];
}

const CategoryAccordion = ({ title, checkboxes }: CategoryAccordionProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const renderCheckboxes = () => {
    const totalCheckboxes = showMore ? checkboxes.length : 5;

    return checkboxes.slice(0, totalCheckboxes).map((checkbox, index) => (
      <div
        key={index}
        className="flex gap-2 items-center cursor-pointer"
        onClick={toggleCheckbox}
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
          {checkbox.label} <span className="text-gray">(text)</span>
        </span>
      </div>
    ));
  };

  return (
    <section className="border-b border-gray pb-2 w-full">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="font-robot-c text-[20px] leading-[24px] font-bold text-t-grey pt-2">
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
          <div
            className="flex gap-2 items-center p-1 cursor-pointer"
            onClick={toggleShowMore}
          >
            {showMore ? <MinusIcon /> : <PlusIcon />}
            {showMore ? (
              <span className="text-dark-text text-[14px] leading-[16.8px] font-robot">
                Назад
              </span>
            ) : (
              <span className="text-dark-text text-[14px] leading-[16.8px] font-robot">
                Показати більше <span className="text-gray">(text)</span>
              </span>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoryAccordion;
