import { ClearIcon } from "@/components/UIKit/SVGIcons";
import { useState } from "react";
import {useSearchStore} from "@/store/SearchStore";
import {observer} from "mobx-react";

const SearchInput = () => {

  const ss = useSearchStore()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    ss.setQuery(e.target.value)
  };

  const clearInput = () => {
    ss.setQuery("")
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="px-5 py-3 text-dark w-full"
        placeholder="Шукати..."
        value={ss.query}
        onChange={handleInputChange}
      />
      {ss.query && (
        <button
          className="absolute top-0 right-0 mt-1 mr-2 h-full flex items-center justify-center"
          onClick={clearInput}
        >
          <ClearIcon />
        </button>
      )}
    </div>
  );
};

export default observer(SearchInput);
