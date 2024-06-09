import React from 'react';
import BlockWrapper from "@/components/Pages/OrderPage/block-wrapper";
import OrderInfoList from "@/components/Pages/OrderPage/OrderInfo/order-info-list/order-info-list";
import TotalAmountBlock from "@/components/Pages/OrderPage/OrderInfo/total-amount-block/total-amount-block";

const OrderInfo = () => {
    return (
        <BlockWrapper title="Замовлення" >
            <OrderInfoList/>
            <TotalAmountBlock/>
        </BlockWrapper>
    );
};

export default OrderInfo;