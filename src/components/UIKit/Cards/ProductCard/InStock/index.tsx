import { ArrowCheckIcon } from "@/components/UIKit/SVGIcons";
import Image from "next/image";
import React from "react";

const Instock = () => {
  return (
    <div className="flex items-center gap-2 mt-2">
      <ArrowCheckIcon />
      <span className="text-product-card-text text-[14px] sm:leading-[16.8px] leading-[120%] pt-[3px]">
        В наявності
      </span>
    </div>
  );
};

export default Instock;
