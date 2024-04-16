import { MinusIcon, PlusIcon } from "@/components/UIKit/SVGIcons";
import { ClearIcon } from "@mui/x-date-pickers";
import React, { useState } from "react";
import {useBikeSelectionStore} from "@/store/BikeSelectionStore";
import Dropdown from "@/components/UIKit/InputFields/Dropdown";

const BrandOption = ({
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

    const bs = useBikeSelectionStore()

    function dictionaryToArray(dict: { [key: number]: string }): { id: number, name: string }[] {
        return Object.keys(dict).map(key => ({ id: parseInt(key), name: dict[parseInt(key)] }));
    }

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

            {showInput ? (
                <div className="relative px-5" style={{display:"flex"}}>

                    <Dropdown
                        label={"Оберіть бренд"}
                        options={bs.options?dictionaryToArray(bs.options.brandVariants):[]}
                        onSelect={()=>{}}
                    />


                    <div onClick={toggleInput}>
              <ClearIcon style={{color:"black"}} />
                    </div>
                </div>
            ) :
                <div
                className={`${
                showInput ? "px-5 pt-[10.5px] pb-[14.5px]" : "py-[16.5px] px-5"
            } flex items-center justify-between cursor-pointer`}
                onClick={toggleInput}
                >
                <span className="text-[#6B6B6B] text-[16px] leading-[19.2px] font-light">
            {label}
                </span>
                <PlusIcon />
                </div>
            }
        </div>
    );
};

export default BrandOption;
