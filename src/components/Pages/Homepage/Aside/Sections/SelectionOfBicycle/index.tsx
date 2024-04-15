import React, { useState } from "react";
import { PlusIcon, MinusIcon, ClearIcon } from "@/components/UIKit/SVGIcons";
import Dropdown from "@/components/UIKit/InputFields/Dropdown";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import BicycleOption from "./BicycleOption";

const SelectionOfBicycle = ({ className }: { className?: string }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <section
      className={`w-fill rounded-lg flex flex-col bg-white p-5 gap-5 sm:mx-0  md:flex md:flex-row md:p-0 md:bg-transparent ${className}`}
    >
      <h2 className="text-dark-text md:text-[32px] md:leading-[37.5px] md:font-medium text-[20px] leading-[120%] font-bold font-robot-c md:max-w-[175px]">
        Підбір велосипеда
      </h2>
      <div className="flex flex-col gap-5 md:p-5 md:bg-white md:rounded-lg md:grow">
        <Dropdown
          label="Оберіть тип"
          options={options}
          onSelect={handleSelect}
        />
        <Dropdown
          label="Оберіть зріст, см"
          options={options}
          onSelect={handleSelect}
        />
        <div>
          <BicycleOption
            label="Велосипеди від UAH"
            onInputChange={() => {}}
            placeholder="до 120 000 UAH"
          />
          <BicycleOption
            label="Велосипеди до UAH"
            onInputChange={() => {}}
            placeholder="до 120 000 UAH"
          />
        </div>
        <BicycleOption label="Додати бренд" onInputChange={() => {}} />
        <GradientButton
          label={"Показати"}
          showIcon={false}
          className="w-full flex !py-[14.5px] justify-center"
        />
        <div className="mx-auto flex">
          <span className="font-light text-[14px] leading-[19.2px] text-dark font-inter">
            Знайдено товарів{" "}
            <span className="font-semibold leading-[19.36px] text-[16px] text-dark">
              1203
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SelectionOfBicycle;
