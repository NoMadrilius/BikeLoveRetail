import React from "react";
import SearchCard from "../../Cards/SearchCard";
import SearchInput from "./SearchInput";
import SearchResultItem from "./SearchResultItem";
import SearchResults from "./SearchResults";
import MobileViewSearchResults from "./SearchResults/MobileViewSearchResults";
import {useAppStore} from "@/store/AppStore";
import {observer} from "mobx-react";
import {useSearchStore} from "@/store/SearchStore";

const SearchTableModal = () => {
  const ss = useSearchStore()
  return (
    <div
      className="fixed sm:top-[47px] top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={()=>ss.setIsOpenSearch(false)}
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
            {ss.products.map(n=><SearchCard prod={n}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(SearchTableModal);
