import { ClearIcon } from "@/components/UIKit/SVGIcons";
import { useState } from "react";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="px-5 py-3 text-dark w-full"
        placeholder="Шукати..."
        value={inputValue}
        onChange={handleInputChange}
      />
      {inputValue && (
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

export default SearchInput;
