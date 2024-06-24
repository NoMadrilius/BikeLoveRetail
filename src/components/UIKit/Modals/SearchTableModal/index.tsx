import React from "react";
import SearchCard from "../../Cards/SearchCard";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import MobileViewSearchResults from "./SearchResults/MobileViewSearchResults";
import { observer } from "mobx-react";
import { useSearchStore } from "@/store/SearchStore";
import { CloseModalIcon } from "../../SVGIcons";
import ModalBase from "@/components/Modal/ModalBase/ModalBase";

const SearchTableModal = () => {
  const ss = useSearchStore();

  return (
      <ModalBase open={ss.isOpenSearch} setOpen={v=>ss.setIsOpenSearch(v)}>
        <div
            className="relative bg-white w-full max-w-[1268px] rounded-lg flex flex-col py-5 px-10 sm:p-5"
            onClick={(e) => e.stopPropagation()}
        >
          <SearchInput />
          <div
              className="absolute top-1 right-1 p-3 cursor-pointer hover:bg-[#C1C1C133] rounded-lg"
              onClick={()=>ss.setIsOpenSearch(false)}
          >
            <CloseModalIcon />
          </div>
          <div className="flex border-t border-category-border sm:flex-col">
            <SearchResults />
            <MobileViewSearchResults />
            <div className="w-full flex flex-col h-[660px] sm:h-[648px] overflow-y-auto">
              {ss.products.map((n) => (
                  <SearchCard prod={n} />
              ))}
            </div>
          </div>
        </div>
      </ModalBase>

  );
};

export default observer(SearchTableModal);
