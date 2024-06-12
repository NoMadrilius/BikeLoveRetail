import { DeliveryIconSVG } from "@/components/UIKit/SVGIcons";
import React from "react";
import DeliveryOptionItem from "./DeliveryOptionItem";

const DeliveryOptions = () => {
  return (
    <div
      className="flex flex-col gap-6 border-b pb-3 border-gray"
      id="delivery"
    >
      <div className="flex items-center gap-3">
        <DeliveryIconSVG />
        <h3 className="font-robot-c font-bold text-[20px] leading-[24px] text-dark">
          Доставка
        </h3>
      </div>
      <div className="flex flex-col gap-4 md:pl-10 md2:p-0">
        <DeliveryOptionItem
          price="Безкоштовно"
          pickupTime="найближчим часом"
          hideIconOnMobile={true}
          pickupTimeOnDesktop="найближчим часом"
          deliveryType={"Самовивіз з магазину"}
          deliveryImage={"/icons/bike_logo_small.svg"}
        />
        <DeliveryOptionItem
          price="від 50 UAH"
          pickupTime="відправка о 12.00"
          pickupTimeOnDesktop="відправка о 12.00"
          deliveryType={"Самовивіз із відділення"}
          deliveryImage={"/icons/nova_poshta.svg"}
        />
      </div>
    </div>
  );
};

export default DeliveryOptions;
