import { useState } from "react";
import { LiaCheckSolid } from "react-icons/lia";

const ProductColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFFFFF",
    "#000000",
    "#C0C0C0",
  ];

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-robot-c font-bold text-[20px] leading-[24px] text-dark">
        Кольори
      </h3>
      <div className="flex gap-3 flex-wrap">
        {colors.map((color) => (
          <div
            key={color}
            className={`cursor-pointer rounded size-6 shrink-0 flex items-center justify-center transition duration-300 ease-in-out ${
              selectedColor === color ? "ring-4 ring-blue-500" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          >
            {selectedColor === color && <LiaCheckSolid />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductColorPicker;
