import React, { useState } from "react";
import { PlusIcon, MinusIcon, ClearIcon } from "@/components/UIKit/SVGIcons";
import Dropdown from "@/components/UIKit/InputFields/Dropdown";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";

const BicycleOption = ({
  label,
  onInputChange,
  placeholder,
}: {
  label: string;
  onInputChange?: (n?: string) => void;
  placeholder?: string;
}) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [gradientWidth, setGradientWidth] = useState(0);

  const toggleInput = () => {
    setShowInput(!showInput);
    setInputValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (onInputChange) {
      onInputChange(value);
    }

    const inputValueNumber = parseFloat(value.replace(/\D/g, ""));
    const maxInputValue = 120000;
    const calculatedWidth = (inputValueNumber / maxInputValue) * 100;
    setGradientWidth(calculatedWidth);
  };

  return (
    <div className="w-full">
      <div
        className={`${
          showInput ? "px-5 pt-[10.5px] pb-[14.5px]" : "py-[16.5px] px-5"
        } flex items-center justify-between cursor-pointer`}
        onClick={toggleInput}
      >
        <span className="text-[#6B6B6B] text-[16px] leading-[19.2px] font-light">
          {label}
        </span>
        {showInput ? <MinusIcon /> : <PlusIcon />}
      </div>
      {showInput && (
        <div className="relative px-5">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="block w-full py-[14.5px] px-5 max-h-[48px] text-sm text-t-grey
              font-light leading-[120%] bg-transparent border border-[#DADADA] rounded-lg font-inter"
            placeholder={placeholder}
          />
          {inputValue && (
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-8 -top-[14px]"
              onClick={() => setInputValue("")}
            >
              <ClearIcon />
            </span>
          )}
          <div className="w-full h-[8px] bg-[#F2F2F2] rounded-full my-[11px]">
            <div
              className="h-full max-w-full bg-gradient-custom rounded-full"
              style={{
                width: `${gradientWidth}%`,
                transition: "width 0.5s ease",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

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
