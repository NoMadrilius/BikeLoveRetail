import { GreenArrowIcon } from "@/components/UIKit/SVGIcons";
import React from "react";

const PaymentStatus = () => {
  return (
    <div className="flex items-center justify-between mob:flex-col mob:items-start mob:gap-3">
      <div className="py-2 pl-3 pr-[14px] flex items-center gap-2 rounded-lg border border-[#2AA77F] mob:order-1 mob:w-full">
        <GreenArrowIcon />
        <span className="text-dark font-robot-c font-bold text-[20px] leading-[24px]">
          Сплачено
        </span>
      </div>
      <span className="text-dark font-robot-c font-medium text-[32px] leading-[37.5px] mob:order-[0]">
        XXX XXX UAH
      </span>
    </div>
  );
};

export default PaymentStatus;
