import React from "react";
import { PiCheckBold } from "react-icons/pi";

interface PaymentOptionItemProps {
  name: string;
}

const PaymentOptionItem = ({ name }: PaymentOptionItemProps) => {
  return (
    <div className="flex gap-[7px]">
      <div className="size-[18px] flex items-center justify-center bg-[#FA6989] rounded-full">
        <PiCheckBold size={10} />
      </div>
      <span className="text-dark font-inter leading-[19.36px]">{name}</span>
    </div>
  );
};

export default PaymentOptionItem;
