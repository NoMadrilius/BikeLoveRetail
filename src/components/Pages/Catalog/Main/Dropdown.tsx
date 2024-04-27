import React, { useState } from "react";
import { DownArrowIcon, WhiteCross } from "@/components/UIKit/SVGIcons";
import Image from "next/image";

interface Option {
  id: number;
  name: string;
}

interface DropdownProps {
  label: string;
  options: Option[];
  onSelect: (option: Option) => void;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onSelect,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        className="w-full min-h-[40px] py-[6px] px-5 text-[16px] text-[#6B6B6B] font-light leading-[19.2px] font-inter bg-transparent border border-[#DADADA] rounded-lg flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <span className="font-inter">{label}</span>
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
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
