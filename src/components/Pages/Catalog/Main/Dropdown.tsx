import React, { useEffect, useState } from "react";
import { DownArrowIcon, WhiteCross } from "@/components/UIKit/SVGIcons";
import Image from "next/image";
import { ClearIcon } from "@mui/x-date-pickers";
import { useCatalogStore } from "@/store/CatalogStore";
import Link from "next/link";
import { GenerateCatalogLink } from "@/helpers/GenerateCatalogLink";

const options = [
  { id: "SortByRetailPriceAscend", name: "Спочатку дешевші" },
  { id: "SortByRetailPriceDescend", name: "Спочатку дорожчі" },
  { id: "SortByDiscountDescend", name: "Спочатку акційні" },
];

interface DropdownProps {
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ className }) => {
  const [selectedOption, setSelectedOption] = useState<
    { id: string; name: string } | undefined
  >(undefined);
  const [isOpen, setIsOpen] = useState(false);

  const cs = useCatalogStore();

  useEffect(() => {
    if (cs.catalogState)
      setSelectedOption(
        options.find((n) => n.id === cs.catalogState?.sortingSettings)
      );
  }, [cs.catalogState]);

  const handleOptionClick = (
    option: { id: string; name: string } | undefined
  ) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        className="w-full min-h-[40px] py-[6px] px-5 text-[16px] text-[#6B6B6B] font-light transition-all duration-300 ease-in-out leading-[19.2px] font-inter bg-transparent border border-[#DADADA] hover:border-t-grey rounded-lg flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-inter">
          {selectedOption ? selectedOption.name : "Сортування"}
        </span>
        <div className="py-[9px] px-[6px]">
          <DownArrowIcon />
        </div>
      </button>
      {isOpen && (
        <ul className="absolute z-[1000] w-full mt-1 bg-white border border-[#DADADA] rounded-lg shadow-lg overflow-hidden">
          <li
            className="px-4 py-3 text-[14px] font-light leading-[19.2px] text-dark cursor-pointer hover:bg-gray"
            onClick={() => handleOptionClick(undefined)}
          >
            <Link
              href={GenerateCatalogLink(cs.catalogState!, {sort: null})}
            >
              Не сортувати
            </Link>
          </li>

          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-3 text-[14px] font-light leading-[19.2px] text-dark cursor-pointer hover:bg-gray"
              onClick={() => handleOptionClick(option)}
            >
              <Link
                href={GenerateCatalogLink(cs.catalogState!, {sort: option.id})}
              >
                {option.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
