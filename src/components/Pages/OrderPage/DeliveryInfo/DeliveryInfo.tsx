import React from "react";
import BlockWrapper from "@/components/Pages/OrderPage/block-wrapper";
import SelfPickupDelivery from "@/components/Pages/OrderPage/DeliveryInfo/self-pickup-delivery";
import NovaPoshtaDelivery from "@/components/Pages/OrderPage/DeliveryInfo/NovaPoshtaDelivery";
import { useTranslation } from "next-i18next";

const DeliveryInfo = () => {
  const { t } = useTranslation('checkout_page');

  return (
    <BlockWrapper title={t("Доставка")} className="flex flex-col gap-5">
      <SelfPickupDelivery />
      <NovaPoshtaDelivery />
    </BlockWrapper>
  );
};

export default DeliveryInfo;
