import React from "react";

const LastPrice = () => {
  return (
    <div className="flex items-center gap-2 pt-[11px]">
      <span className="text-product-card-last-price text-base font-normal leading-relaxed tracking-normal text-left line-through">
        130 000 UAH
      </span>
      <div className="border-2 border-pink text-pink text-base font-normal leading-tight tracking-normal rounded-full px-2 py-1">
        -13%
      </div>
    </div>
  );
};

export default LastPrice;
