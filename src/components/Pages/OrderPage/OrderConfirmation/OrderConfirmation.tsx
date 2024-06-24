import React from "react";
import DeliveryStatus from "./DeliveryStatus";
import DeliveryInfo from "./DeliveryInfo";
import PaymentStatus from "./PaymentStatus";

const status = {
  status: [
    "Ваше замовлення підтверджено",
    "Очікує оплати",
    "Очікує відправки до магазину",
    "Укомплектовується",
  ],
  activeStatus: "Очікує відправки до магазину",
};

const OrderConfirmation = () => {
  return (
    <section className="bg-white py-6 px-5 rounded-lg flex flex-col gap-5 mob:mt-6 mob:px-5 mob:pb-8">
      <div className="flex items-center justify-between mob:flex-col mob:items-start mob:gap-2">
        <h2 className="font-robot-c mob:text-[24px] mob:leading-[28.13px] text-[32px] leading-[37.5px] text-dark font-medium mob:order-1">
          Замовлення № ХХХ ХХХ{" "}
        </h2>
        <span className="text-t-grey font-inter text-[14px] leading-[16.8px] mob:order-[0]">
          01 січня 2024 року
        </span>
      </div>

      {/* тут слів вставити div з 'Фамілія Імʼя По-батькові' */}
      <div className="flex flex-col gap-4">
        <DeliveryStatus
          status={status.status}
          activeStatus={status.activeStatus}
        />
        <DeliveryInfo />
      </div>
      <PaymentStatus />
    </section>
  );
};

export default OrderConfirmation;
