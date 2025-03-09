import React from "react";
import SearchResultItem from "../SearchResultItem";
import {observer} from "mobx-react";
import {useSearchStore} from "@/store/SearchStore";

const SearchResults = () => {
    const ss = useSearchStore()
  return (
    <div className="w-full h-full overflow-y-auto border-r border-category-border pr-3 sm:hidden block">

    </div>
  );
};

export default observer(SearchResults);
