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
            className="relative bg-white h-3/4 w-3/4 overflow-hidden rounded-lg flex flex-col mob:rounded-[0px] mob:w-screen mob:h-screen"
            onClick={(e) => e.stopPropagation()}
        >
          <SearchInput />
          <div
              className="absolute top-1 right-1 p-3 cursor-pointer hover:bg-[#C1C1C133] rounded-lg"
              onClick={()=>ss.setIsOpenSearch(false)}
          >
            <CloseModalIcon />
          </div>

          <div className="flex w-full h-full flex-col">
              {
                  //<SearchResults />
              }
            <MobileViewSearchResults />
            <div className="w-full flex flex-col h-full overflow-y-auto">
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
