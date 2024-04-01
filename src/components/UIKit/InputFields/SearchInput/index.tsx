import Image from "next/image";
import React from "react";

const SearchInput = () => {
  return (
    <div className="w-full max-w-[236px] md:max-w-[337px] sm2:block hidden">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Image
            src={"/images/uikit/header/search.svg"}
            alt={"Search Icon"}
            width={24}
            height={24}
          />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-[45px] text-sm text-gray-900 bg-transparent border border-t-grey rounded-lg"
          placeholder="Я шукаю"
          required
        />
      </div>
    </div>
  );
};

export default SearchInput;
