import React, { useState } from "react";
import SearchResultItem from "../../SearchResultItem";
import {useSearchStore} from "@/store/SearchStore";

const MobileViewSearchResults = () => {
  const [showResults, setShowResults] = useState(false);
  const ss = useSearchStore()

  const toggleResults = () => {
    setShowResults((prev) => !prev);
  };

  const cat = ss.categories.find(n=>n.id === ss.selectedCategory)
  let name = ss.selectedCategory&&cat?cat.name:"Всі результати"

  return (
    <div className="w-full relative hidden sm:block">
      <div
        className={`flex items-center justify-between bg-white grow w-full p-3 border-b border-category-border group cursor-pointer`}
        onClick={toggleResults}
      >
        <button className="font-semibold leading-[19px] text-dark font-inter">
          {name}
        </button>
        <div className="p-1 bg-gradient-to-br from-[#F01B74] to-[#FF6064] rounded-lg">
          <span className="text-white text-[16px] leading-[19px] font-inter">
            {ss.products.length.toString()}
          </span>
        </div>
      </div>
      {showResults && (
        <div className="w-full h-[601px] overflow-scroll absolute top-0 z-[51]">
          <SearchResultItem
              title={"Всі результати"}
              quantity={ss.products.length.toString()}
              searchResults={ss.selectedCategory === undefined}
              onClick={()=>{
                ss.setSelectedCategory(undefined)
                setShowResults(false)
              }}
          />
          {ss.categories.map(n=><SearchResultItem searchResults={ss.selectedCategory === n.id} title={n.name} quantity={n.quantity.toString()} onClick={()=>{
            ss.setSelectedCategory(n.id)
            setShowResults(false)
          }} />)}
        </div>
      )}
    </div>
  );
};

export default MobileViewSearchResults;
