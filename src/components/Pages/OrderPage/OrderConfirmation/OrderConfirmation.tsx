import React from "react";
import DeliveryStatus from "./DeliveryStatus";
import DeliveryInfo from "./DeliveryInfo";
import PaymentStatus from "./PaymentStatus";
import {OrderFullData} from "@/dataTransferObjects/entities/OrderFullData";
import {prettyDate} from "@/helpers/stringDecorate/prettyDate";
import AutorizationDataInfo from "@/components/Pages/OrderPage/PersonalData/autorization-data-info";

const status = {
  status: [
    "Ваше замовлення підтверджено",
    "Очікує оплати",
    "Очікує відправки до магазину",
    "Укомплектовується",
  ],
  activeStatus: "Очікує відправки до магазину",
};

const OrderConfirmation = (p:{order:OrderFullData}) => {
  return (
    <section className="bg-white py-6 px-5 rounded-lg flex flex-col gap-5 mob:mt-6 mob:px-5 mob:pb-8">
      <div className="flex items-center justify-between mob:flex-col mob:items-start mob:gap-2">
        <h2 className="font-robot-c mob:text-[24px] mob:leading-[28.13px] text-[32px] leading-[37.5px] text-dark font-medium mob:order-1">
          Замовлення № {p.order.order.id}
        </h2>
        <span className="text-t-grey font-inter text-[14px] leading-[16.8px] mob:order-[0]">
          {prettyDate(p.order.order.createdAt)}
        </span>
      </div>
        <AutorizationDataInfo phone={p.order.client.phoneNumber} name={p.order.client.lastName+" "+p.order.client.firstName+" "+p.order.client.patronymic} className="w-full"/>
      <div className="flex flex-col gap-4">
        <DeliveryStatus
          status={status.status}
          activeStatus={status.activeStatus}
        />
        <DeliveryInfo code={p.order.order.uuid} delInfo={p.order.order.deliveryType==="DeliveryNP"?"Доставка новою поштою":"Самовивіз з магазину Щербаківського 59 10:00-18:00"}/>
      </div>
      <PaymentStatus order={p.order} />
    </section>
  );
};

export default OrderConfirmation;
