import useIsMobile from "@/helpers/hooks/useIsMobile";
import Image from "next/image";
import React from "react";

interface DeliveryOptionItemProps {
  price: string;
  pickupTime: string;
  pickupTimeOnDesktop?: string;
  deliveryType: string;
  deliveryImage: string;
  hideIconOnMobile?: boolean;
}

const DeliveryOptionItem = ({
  price,
  pickupTime,
  pickupTimeOnDesktop,
  deliveryType,
  deliveryImage,
  hideIconOnMobile = false,
}: DeliveryOptionItemProps) => {
  const isMobile = true;

  return (
    <div className="flex ">
      <div className="grow flex flex-col gap-2">
        <div className="flex grow flex-col md:flex-row  md2:flex-col lg:flex-row md:flex-wrap md:justify-between gap-2 w-full">
          {(isMobile && !hideIconOnMobile) || !isMobile ? (
            <div className={`flex items-center gap-2 `}>
              <span className="text-black font-inter text-[14px] leading-[16.8px]">
                {deliveryType}
              </span>
              <Image
                src={deliveryImage}
                alt={"Нова Пошта"}
                width={60}
                height={22}
                className="object-cover"
              />
            </div>
          ) : (
            <span className="text-black font-inter text-[14px] leading-[16.8px]">
              Самовивіз з магазину
            </span>
          )}
          <div className="block md:hidden lg:hidden md2:block text-black font-inter text-[14px] leading-[16.8px]">
            {pickupTime}
          </div>
          <div className="hidden md:block lg:block md2:hidden text-black font-inter text-[14px] leading-[16.8px] m-auto">
            {pickupTimeOnDesktop || pickupTime}
          </div>
        </div>
        <button className="text-[#074FA5] font-inter text-[14px] leading-[16.8px] text-left">
          Дивитись на мапі
        </button>
      </div>

      <span
        className={`${
          price.toLowerCase() === "безкоштовно" ? "text-pink" : "text-dark"
        } font-inter text-[14px] leading-[16.8px]`}
      >
        {price}
      </span>
    </div>
  );
};

export default DeliveryOptionItem;
