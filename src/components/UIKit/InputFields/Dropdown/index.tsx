import React, { useState } from "react";
import Image from "next/image";
import { DownArrowIcon } from "../../SVGIcons";

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
  className?: string;
}

const Dropdown = ({ label, options, onSelect, className }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* <label
        htmlFor="dropdown"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label> */}
      <div className="">
        <button
          id="dropdown"
          type="button"
          className="w-full min-h-[40px] py-[6px] font-inter items-center px-5 text-[16px] text-[#6B6B6B] font-light leading-[19.2px] font-inter bg-transparent border border-[#DADADA] rounded-lg flex justify-between"
          onClick={toggleDropdown}
        >
          <span className="font-inter">{selectedOption || label}</span>
          <div className="py-[9px] px-[6px]">
            <DownArrowIcon />
          </div>
        </button>
        {isOpen && (
          <ul className="absolute z-[1000] w-full mt-1 bg-white border border-[#DADADA] rounded-lg shadow-lg overflow-hidden">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-3 text-[14px] font-light leading-[19.2px] text-dark cursor-pointer hover:bg-gray"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
