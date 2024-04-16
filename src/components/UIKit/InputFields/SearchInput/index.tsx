import Image from "next/image";
import React from "react";
import { SearchIcon } from "../../SVGIcons";
import {useAppStore} from "@/store/AppStore";
import {observer} from "mobx-react";
import {useSearchStore} from "@/store/SearchStore";

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
  const ss = useSearchStore()
  return (
    <div
      className={`w-full max-w-[236px] md:max-w-[236px] xl:max-w-[256px] lg:max-w-[337px] md:block hidden xl:block lg:block 2xl:block ${className} group`}
      onClick={()=>ss.setIsOpenSearch(true)}
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
          className={`block w-full p-4 ps-[52px] max-h-[48px] text-sm text-t-grey cursor-pointer
          font-light leading-[120%] bg-transparent border border-[#DADADA] rounded-lg group-hover:border group-hover:border-t-grey ${inputStyles} `}
          placeholder="Я шукаю"
          required
        />
      </div>
    </div>
  );
};

export default observer(SearchInput);
