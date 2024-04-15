import { MinusIcon, PlusIcon } from "@/components/UIKit/SVGIcons";
import { ClearIcon } from "@mui/x-date-pickers";
import { useState } from "react";

const BicycleOption = ({
  label,
  onInputChange,
  placeholder,
}: {
  label: string;
  onInputChange?: (n?: string) => void;
  placeholder?: string;
}) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [gradientWidth, setGradientWidth] = useState(0);

  const toggleInput = () => {
    setShowInput(!showInput);
    setInputValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (onInputChange) {
      onInputChange(value);
    }

    const inputValueNumber = parseFloat(value.replace(/\D/g, ""));
    const maxInputValue = 120000;
    const calculatedWidth = (inputValueNumber / maxInputValue) * 100;
    setGradientWidth(calculatedWidth);
  };

  return (
    <div className="w-full">
      <div
        className={`${
          showInput ? "px-5 pt-[10.5px] pb-[14.5px]" : "py-[16.5px] px-5"
        } flex items-center justify-between cursor-pointer`}
        onClick={toggleInput}
      >
        <span className="text-[#6B6B6B] text-[16px] leading-[19.2px] font-light">
          {label}
        </span>
        {showInput ? <MinusIcon /> : <PlusIcon />}
      </div>
      {showInput && (
        <div className="relative px-5">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="block w-full py-[14.5px] px-5 max-h-[48px] text-sm text-t-grey
                font-light leading-[120%] bg-transparent border border-[#DADADA] rounded-lg font-inter"
            placeholder={placeholder}
          />
          {inputValue && (
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-8 -top-[14px]"
              onClick={() => setInputValue("")}
            >
              <ClearIcon />
            </span>
          )}
          <div className="w-full h-[8px] bg-[#F2F2F2] rounded-full my-[11px]">
            <div
              className="h-full max-w-full bg-gradient-custom rounded-full"
              style={{
                width: `${gradientWidth}%`,
                transition: "width 0.5s ease",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BicycleOption;
