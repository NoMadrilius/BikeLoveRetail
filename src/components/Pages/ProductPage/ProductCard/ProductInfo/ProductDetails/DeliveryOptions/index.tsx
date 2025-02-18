import { DeliveryIconSVG } from "@/components/UIKit/SVGIcons";
import React from "react";
import DeliveryOptionItem from "./DeliveryOptionItem";
import { useTranslation } from "next-i18next";

const DeliveryOptions = () => {
  const { t } = useTranslation('product_page');

  return (
    <div
      className="flex flex-col gap-6 border-b pb-3 border-gray"
      id="delivery"
    >
      <div className="flex items-center gap-3">
        <DeliveryIconSVG />
        <h3 className="font-robot-c font-bold text-[20px] leading-[24px] text-dark">
          {t("Доставка")}
        </h3>
      </div>
      <div className="flex flex-col gap-4 md:pl-10 md2:p-0">
        <DeliveryOptionItem
          price={t("Безкоштовно")}
          pickupTime={t("Найближчим часом")}
          hideIconOnMobile={true}
          pickupTimeOnDesktop={t("Найближчим часом")}
          deliveryType={t("Самовивіз з магазину")}
          deliveryImage={"/icons/bike_logo_small.svg"}
        />
        <DeliveryOptionItem
          price={t("Від 50 UAH")}
          pickupTime={t("Відправка о 12.00")}
          pickupTimeOnDesktop={t("Відправка о 12.00")}
          deliveryType={t("Самовивіз із відділення")}
          deliveryImage={"/icons/nova_poshta.svg"}
        />
      </div>
    </div>
  );
};

export default DeliveryOptions;
