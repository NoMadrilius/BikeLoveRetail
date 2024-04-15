import React from "react";
import SearchResultItem from "../SearchResultItem";

const SearchResults = () => {
  return (
    <div className="max-w-[324px] w-full h-[660px] overflow-scroll border-r border-category-border pr-3 sm:hidden block">
      <SearchResultItem
        title={"All results"}
        quantity={"240"}
        searchResults={true}
      />
      <SearchResultItem title={"Search results"} quantity={"150"} />
    </div>
  );
};

export default SearchResults;
