import React from 'react';
import BlockWrapper from "@/components/Pages/OrderPage/block-wrapper";
import SelfPickupDelivery from "@/components/Pages/OrderPage/DeliveryInfo/self-pickup-delivery";
import NovaPoshtaDelivery from "@/components/Pages/OrderPage/DeliveryInfo/NovaPoshtaDelivery";

const DeliveryInfo = () => {
    return (
        <BlockWrapper title="Доставка" className="flex flex-col gap-5">
            <SelfPickupDelivery/>
            <NovaPoshtaDelivery/>
        </BlockWrapper>
    );
};

export default DeliveryInfo;