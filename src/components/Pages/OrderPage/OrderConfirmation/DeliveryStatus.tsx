import {
  OrderConfirmedIcon,
  WaitingForPaymentIcon,
  AwaitingShipmentToStoreIcon,
  BeingPackedIcon,
  AwaitingInStoreIcon,
  EnRouteToCustomerIcon,
  SuccessfullyDeliveredIcon,
  OrderCancelledIcon,
} from "@/components/UIKit/SVGIcons/order-confirmation";
import React, { useEffect, useState } from "react";

type StatusStep = {
  key: string;
  titleDefault: string;
  titleActive: string;
  icon: (props: { color?: string; size?: number }) => JSX.Element;
};

const allSteps: StatusStep[] = [
  {
    key: "confirmed",
    titleDefault: "Підтверджено",
    titleActive: "Ваше замовлення було підтверджено!",
    icon: OrderConfirmedIcon,
  },
  {
    key: "payment",
    titleDefault: "Оплата",
    titleActive: "Очікуємо оплату!",
    icon: WaitingForPaymentIcon,
  },
  {
    key: "shipment",
    titleDefault: "Відправка",
    titleActive: "Очікуємо відправлення",
    icon: AwaitingShipmentToStoreIcon,
  },
  {
    key: "packing",
    titleDefault: "Пакування",
    titleActive: "Пакуємо замовлення",
    icon: BeingPackedIcon,
  },
  {
    key: "store",
    titleDefault: "В магазині",
    titleActive: "Замовлення очікує вас в магазині!",
    icon: AwaitingInStoreIcon,
  },
  {
    key: "enroute",
    titleDefault: "В дорозі",
    titleActive: "Замовлення прямує до вас!",
    icon: EnRouteToCustomerIcon,
  },
  {
    key: "delivered",
    titleDefault: "Доставлено",
    titleActive: "Заберіть замовлення з пошти!",
    icon: SuccessfullyDeliveredIcon,
  },
  {
    key: "cancelled",
    titleDefault: "Відмінено",
    titleActive: "Замовлення було відмінено",
    icon: OrderCancelledIcon,
  },

];

type DeliveryStatusProps = {
  status: string[];
  activeStatusKey: string;
};

const DeliveryStatus = ({ status, activeStatusKey }: DeliveryStatusProps) => {
  const getIconSize = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 743 ? 24 : status.length > 4 ? 32 : 48;
    }
    return 48;
  };

  const [iconSize, setIconSize] = useState(getIconSize);

  useEffect(() => {
    const handleResize = () => {
      setIconSize(getIconSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [status.length]);

  const steps = status.map(n=>allSteps.find(g=>g.key === n)).filter(n=>n!=undefined)

  return (
    <div className="flex justify-between bg-gray-100 items-end rounded-lg">
      {steps.map((step, index) => {
        const stepIndex = status.indexOf(step.key);
        const activeIndex = status.indexOf(activeStatusKey);
        const isActive = stepIndex === activeIndex;
        const isCompleted = stepIndex < activeIndex;

        return (
          <div
            key={index}
            className={`flex items-center desc:grow ${isActive ? "" : "grow"}`}
          >
            <div
              className={`flex flex-col desc:grow ${
                isActive ? "" : "grow"
              } h-full justify-between gap-[10px]`}
            >
              <span
                className={`font-inter text-[12px] leading-[14.4px] max-w-[120px] mt-auto ${
                  isActive ? "text-[#F9436B] font-bold text-[14px]" : "mob:hidden"
                }`}
              >
                {isActive ? step.titleActive : step.titleDefault}
              </span>
              <div className={`flex items-center `}>
                <div
                  className={`flex flex-col ${isActive ? "" : "mob:hidden"} ${
                    isActive || isCompleted
                      ? "text-[#F9436B]"
                      : "text-[#DEDEDE]"
                  }`}
                >
                  {React.createElement(step.icon, {
                    color: isActive || isCompleted ? "#F9436B" : "#DEDEDE",
                    size: iconSize,
                  })}
                </div>
                {typeof window !== "undefined" &&
                  window.innerWidth < 743 &&
                  !isActive && (
                    <div
                      className={`size-1 rounded-full mx-[2px] shrink-0 ${
                        isActive || isCompleted
                          ? "bg-[#F9436B]"
                          : "bg-[#DEDEDE]"
                      }`}
                    ></div>
                  )}
                {index <
                  (typeof window !== "undefined" && window.innerWidth < 743
                    ? steps.length
                    : steps.length - 1) && (
                  <div className="mob:h-6 w-full mob:flex mob:items-center gt">
                    <div
                      className={`w-full h-[2px] rounded-full ${
                        isCompleted
                          ? "bg-link-pink"
                          : "bg-[#DEDEDE]"
                      }`}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DeliveryStatus;
