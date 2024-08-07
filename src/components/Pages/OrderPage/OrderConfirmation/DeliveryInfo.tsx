import React from "react";

const DeliveryInfo = (p:{code:string, delInfo:string}) => {
  return (
    <div className="flex flex-col gap-4 mob:gap-5">
      <div className="flex items-center justify-between mob:flex-col mob:items-start mob:gap-3">
        <span className="font-inter font-semibold leading-[19.36px] text-dark">
          Код замовлення
        </span>
        <span className="text-dark leading-[19.36px]">{p.code}</span>
      </div>

      <div className="flex items-center justify-between mob:flex-col mob:items-start mob:gap-3">
        <span className="font-inter font-semibold leading-[19.36px] text-dark">
          Інформація про доставку
        </span>
        <span className="text-dark leading-[19.36px]">{p.delInfo}</span>
      </div>
    </div>
  );
};

export default DeliveryInfo;
