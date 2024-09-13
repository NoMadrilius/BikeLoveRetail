import React from "react";
import SearchResultItem from "../SearchResultItem";
import {observer} from "mobx-react";
import {useSearchStore} from "@/store/SearchStore";

const SearchResults = () => {
    const ss = useSearchStore()
  return (
    <div className="w-full h-full overflow-y-auto border-r border-category-border pr-3 sm:hidden block">
      <SearchResultItem
        title={"Всі результати"}
        quantity={ss.products.length.toString()}
        searchResults={ss.selectedCategory === undefined}
        onClick={()=>ss.setSelectedCategory(undefined)}
      />
        {ss.categories.map(n=><SearchResultItem searchResults={ss.selectedCategory === n.id} title={n.name} quantity={n.quantity.toString()} onClick={()=>ss.setSelectedCategory(n.id)} />)}

    </div>
  );
};

export default observer(SearchResults);
