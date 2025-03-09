import React, { useState } from "react";
import SearchResultItem from "../../SearchResultItem";
import {useSearchStore} from "@/store/SearchStore";
import {useAppStore} from "@/store/AppStore";
import { observer } from "mobx-react";

const MobileViewSearchResults = () => {
  const [showResults, setShowResults] = useState(false);
  const ss = useSearchStore()

  const toggleResults = () => {
    setShowResults((prev) => !prev);
  };

  return (
    <div className="w-full relative mob:block">
      <div
        className={`flex items-center justify-between bg-white grow w-full p-3 border-b border-category-border group cursor-pointer`}
        onClick={toggleResults}
      >
        <div className="p-1 bg-gradient-to-br from-[#F01B74] to-[#FF6064] rounded-lg">
          <span className="text-white text-[16px] leading-[19px] font-inter">
            {ss.products.length.toString()}
          </span>
        </div>
      </div>
      {showResults && (
        <div className="w-full h-[601px] overflow-scroll absolute top-0 z-[51]">

        </div>
      )}
    </div>
  );
};

export default  observer(MobileViewSearchResults);
