import React, { useState } from "react";
import SearchResultItem from "../../SearchResultItem";

const MobileViewSearchResults = () => {
  const [showResults, setShowResults] = useState(false);

  const toggleResults = () => {
    setShowResults((prev) => !prev);
  };

  return (
    <div className="w-full relative hidden sm:block">
      <div
        className={`flex items-center justify-between bg-white grow w-full p-3 border-b border-category-border group cursor-pointer`}
        onClick={toggleResults}
      >
        <button className="font-semibold leading-[19px] text-dark font-inter">
          All results
        </button>
        <div className="p-1 bg-gradient-to-br from-[#F01B74] to-[#FF6064] rounded-lg">
          <span className="text-white text-[16px] leading-[19px] font-inter">
            240
          </span>
        </div>
      </div>
      {showResults && (
        <div className="w-full h-[601px] overflow-scroll absolute top-0 z-[51]">
          <SearchResultItem title={"Search results"} quantity={"150"} />
          <SearchResultItem title={"Search results"} quantity={"150"} />
          <SearchResultItem title={"Search results"} quantity={"150"} />
          <SearchResultItem title={"Search results"} quantity={"150"} />
          <SearchResultItem title={"Search results"} quantity={"150"} />
          <SearchResultItem title={"Search results"} quantity={"150"} />
          <SearchResultItem title={"Search results"} quantity={"150"} />
          <SearchResultItem title={"Search results"} quantity={"150"} />
          <SearchResultItem title={"Search results"} quantity={"150"} />
          <SearchResultItem title={"Search results"} quantity={"150"} />
          <SearchResultItem title={"Search results"} quantity={"150"} />
          <SearchResultItem title={"Search results"} quantity={"150"} />
        </div>
      )}
    </div>
  );
};

export default MobileViewSearchResults;
