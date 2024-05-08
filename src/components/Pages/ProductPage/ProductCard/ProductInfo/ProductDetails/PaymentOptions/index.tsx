import React from "react";
import { MoneyIconSVG } from "@/components/UIKit/SVGIcons";
import PaymentOptionItem from "./PaymentOptionItem";

const paymentOptionsData = [
  { id: 1, name: "Онлайн оплата" },
  { id: 2, name: "Перевод на карту" },
  { id: 3, name: "Покупка частинами" },
];

const PaymentOptions = () => {
  return (
    <div className="flex flex-col gap-5 border-b pb-3 border-gray" id="payment">
      <div className="flex items-center gap-3">
        <MoneyIconSVG />
        <h3 className="font-robot-c font-bold text-[20px] leading-[24px] text-dark">
          Оплата
        </h3>
      </div>
      <div className="flex flex-col gap-3 md:pl-10 md2:pl-0">
        {paymentOptionsData.map((option) => (
          <PaymentOptionItem key={option.id} name={option.name} />
        ))}
      </div>
      <button className="text-[#074FA5] font-inter leading-[19.36px] text-left md:pl-10 md2:pl-0">
        Більше інформації про оплату
      </button>
    </div>
  );
};

export default PaymentOptions;
