import React from 'react';
import BlockWrapper from "@/components/Pages/OrderPage/block-wrapper";
import OrderInfoList from "@/components/Pages/OrderPage/OrderInfo/order-info-list/order-info-list";
import TotalAmountBlock from "@/components/Pages/OrderPage/OrderInfo/total-amount-block/total-amount-block";
import { useTranslation } from "next-i18next";

const OrderInfo = () => {
  const { t } = useTranslation('checkout_page');

    return (
        <BlockWrapper title={t("Замовлення")} >
            <OrderInfoList/>
            <TotalAmountBlock/>
        </BlockWrapper>
    );
};

export default OrderInfo;