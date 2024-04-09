import Image from "next/image";
import React from "react";
import { SearchIcon } from "../../SVGIcons";

interface SearchInputProps {
  className?: string;
  iconColor?: string;
  inputStyles?: string;
}

const SearchInput = ({
  className,
  iconColor,
  inputStyles,
}: SearchInputProps) => {
  return (
    <div
      className={`w-full max-w-[236px] md:max-w-[236px] xl:max-w-[256px] md:block hidden xl:block lg:block 2xl:block ${className} `}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative ">
        <div className="absolute inset-y-0 start-0 flex items-center pl-5  pointer-events-none">
          <SearchIcon color={iconColor} />
        </div>
        <input
          type="search"
          id="default-search"
          className={`block w-full p-4 ps-[52px] max-h-[48px] text-sm text-t-grey
          font-light leading-[120%] bg-transparent border border-t-grey rounded-lg ${inputStyles} `}
          placeholder="Я шукаю"
          required
        />
      </div>
    </div>
  );
};

export default SearchInput;
