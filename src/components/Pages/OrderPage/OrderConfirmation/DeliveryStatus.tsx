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
  title: string;
  icon: (props: { color?: string; size?: number }) => JSX.Element;
};

const allSteps: StatusStep[] = [
  { title: "Ваше замовлення підтверджено", icon: OrderConfirmedIcon },
  { title: "Очікує оплати", icon: WaitingForPaymentIcon },
  { title: "Очікує відправки до магазину", icon: AwaitingShipmentToStoreIcon },
  { title: "Укомплектовується", icon: BeingPackedIcon },
  { title: "Очікує в магазині", icon: AwaitingInStoreIcon },
  { title: "Прямує до покупця", icon: EnRouteToCustomerIcon },
  { title: "Успішно доставлено", icon: SuccessfullyDeliveredIcon },
  { title: "Замовлення відмінено", icon: OrderCancelledIcon },
];

type DeliveryStatusProps = {
  status: string[];
  activeStatus: string;
};

const DeliveryStatus = ({ status, activeStatus }: DeliveryStatusProps) => {
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

  const steps = allSteps.filter((step) => status.includes(step.title));

  return (
    <div className="flex justify-between bg-gray-100 items-end rounded-lg">
      {steps.map((step, index) => {
        const stepIndex = status.indexOf(step.title);
        const activeIndex = status.indexOf(activeStatus);
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
                  isActive ? "text-[#F9436B]" : "mob:hidden"
                }`}
              >
                {step.title}
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
                        isActive || isCompleted
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
