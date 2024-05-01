import React, { ChangeEvent, useState } from "react";
import {
  AccordionIconSVG,
  ClearIcon,
  SvgRightIcon,
} from "@/components/UIKit/SVGIcons";

const SortByPrice = () => {
  const [value, setValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const toggleInput = () => {};

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="border-b border-gray pb-2 w-full">
      <div className="flex flex-col">
        <div
          className="flex items-center justify-between cursor-pointer py-2 group"
          onClick={toggleAccordion}
        >
          <h3 className="font-robot-c sm:text-[20px] group-hover:text-pink sm:leading-[24px] md:text-[20px] md:leading-[24px] text-[16px] leading-[19.2px] font-bold text-t-grey">
            Сортувати за ціною
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
      </div>
      {isExpanded && (
        <div className="flex flex-col gap-2 w-full">
          <div className="relative flex w-full">
            <input
              type="text"
              value={value}
              onChange={handleChange}
              className="block w-full py-[14.5px] px-5 max-h-[48px] text-sm text-t-grey
                font-light leading-[120%] bg-transparent border border-gray rounded-lg font-inter"
              placeholder={"від 4500 UAH"}
            />

            <span
              className="absolute inset-y-0 right-0 flex items-center pr-8 cursor-pointer"
              onClick={toggleInput}
              style={{ color: "black" }}
            >
              <ClearIcon />
            </span>
          </div>
          <div className="relative flex">
            <input
              type="text"
              value={value}
              onChange={handleChange}
              className="block w-full py-[14.5px] px-5 max-h-[48px] text-sm text-t-grey
                font-light leading-[120%] bg-transparent border border-gray rounded-lg font-inter"
              placeholder={"до 4500 UAH"}
            />

            <span
              className="absolute inset-y-0 right-0 flex items-center pr-8 cursor-pointer"
              onClick={toggleInput}
              style={{ color: "black" }}
            >
              <ClearIcon />
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default SortByPrice;
