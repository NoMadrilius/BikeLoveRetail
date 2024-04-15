import React from "react";
import SearchCard from "../../Cards/SearchCard";
import SearchInput from "./SearchInput";
import SearchResultItem from "./SearchResultItem";
import SearchResults from "./SearchResults";
import MobileViewSearchResults from "./SearchResults/MobileViewSearchResults";

const SearchTableModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed sm:top-[47px] top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg w-full max-w-[1268px] rounded-lg flex flex-col py-5 px-10 sm:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <SearchInput />
        <div className="flex border-t border-category-border sm:flex-col">
          <SearchResults />
          <MobileViewSearchResults />
          <div className="w-full flex flex-col h-[660px] sm:h-[648px] overflow-scroll">
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTableModal;
