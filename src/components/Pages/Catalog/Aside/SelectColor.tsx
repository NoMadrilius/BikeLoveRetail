import React, { useState } from "react";
import { WhiteArrowIconSVG } from "@/components/UIKit/SVGIcons";

const SelectColor = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const colors = [
    { name: "#FF0000", style: "bg-red-500" },
    { name: "#00FF00", style: "bg-green-500" },
    { name: "#0000FF", style: "bg-blue-500" },
    { name: "#FFFF00", style: "bg-yellow-500" },
    { name: "#00FFFF", style: "bg-cyan-500" },
    { name: "#FF00FF", style: "bg-magenta-500" },
    { name: "#000000", style: "bg-black" },
    { name: "#FFFFFF", style: "bg-white" },
    { name: "#808080", style: "bg-gray-500" },
  ];

  return (
    <div className="flex flex-col gap-3 w-full">
      <h3 className="font-robot-c text-[24px] leading-[24px] font-bold text-t-grey">
        Кольори
      </h3>
      <div className="flex gap-3 items-start flex-wrap">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`size-[16px] transition-all duration-300 ease-in-out border hover:border-pink shrink-0 rounded-full cursor-pointer ${
              color.style
            } ${selectedColor === color.name ? "bg-gray-500" : color.style}`}
            onClick={() => setSelectedColor(color.name)}
          >
            {selectedColor === color.name && (
              <div className="flex items-center justify-center h-full">
                <WhiteArrowIconSVG />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectColor;
