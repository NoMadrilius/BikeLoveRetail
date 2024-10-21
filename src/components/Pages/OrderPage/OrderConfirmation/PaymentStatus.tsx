import { GreenArrowIcon } from "@/components/UIKit/SVGIcons";
import React from "react";
import { OrderFullData } from "@/dataTransferObjects/entities/OrderFullData";
import { useCurrencyStore } from "@/store/CurrencyStore";
import Image from "next/image";
import { OrderAPI } from "@/api/OrderAPI";

const PaymentStatus = (p: { order: OrderFullData }) => {
  const c = useCurrencyStore();
  return (
    <div className="flex items-center tab:items-end justify-between mob:flex-col mob:items-start mob:gap-3 ">
      {p.order.order.isPayed ? (
        <div className="py-2 pl-3 pr-[14px] flex items-center gap-2 rounded-lg border border-[#2AA77F] mob:w-full mob:order-2">
          <GreenArrowIcon />
          <span className="text-dark font-robot-c font-bold text-[20px] leading-[24px]">
            Сплачено
          </span>
        </div>
      ) : (
        <div className="flex justify-between w-full mob:mr-0 mr-5 flex-wrap gap-5 mob:order-2 tab:flex-col tab:items-start">
          <div className="py-2 px-3 flex items-center mob:w-full gap-2 rounded-lg border border-[#F9436B]">
            <span className="text-dark font-robot-c font-bold text-[20px] leading-[24px]">
              Не сплачено
            </span>
          </div>

          <div onClick={()=>{
            window.open(`https://api.bikelove.com.ua/api/payments/liqpay?Target=Order&TargetId=${p.order.order.id}`, "_blanc")
          }} className="flex items-center py-[10.5px] px-5 mob:px-2 mob:w-full mob:justify-between gap-[6px] rounded-md text-white font-inter leading-[19.36px] cursor-pointer bg-gradient-to-br from-[#F01B74] to-[#FF6064] hover:from-[#FA6989] hover:to-[#FA6989] group-hover:from-[#FA6989] group-hover:to-[#FA6989] focus:from-[#D31062] focus:to-[#DB1142]">
            Сплатити за допомогою{" "}
            <Image
              src={"/images/checkout/liqpay.svg"}
              alt={"LiqPay"}
              width={80}
              height={20.52}
            />
          </div>
        </div>
      )}

      <span className="text-dark font-robot-c font-medium text-[32px] leading-[37.5px] mob:order-1">
        {c.useCurrency(p.order.order.totalPrice)}
      </span>
    </div>
  );
};

export default PaymentStatus;
