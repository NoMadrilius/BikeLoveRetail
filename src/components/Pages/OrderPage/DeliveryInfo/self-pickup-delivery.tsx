import React from 'react';
import DeliveryRowInfoRadio from "@/components/Pages/OrderPage/DeliveryInfo/DeliveryRowInfoRadio";
import LocationIcon from "@/components/UIKit/SVGIcons/location-icon";
import ClockIcon from "@/components/UIKit/SVGIcons/clock-icon";
import {useCheckList} from "@/store/CheckListStore";
import {observer} from "mobx-react";
import { useTranslation } from "next-i18next";

const SelfPickupDelivery = () => {
    const cls = useCheckList()
    const { t } = useTranslation('checkout_page');

    const rowClasses= "flex items-center mb-2 gap-3"
    return (
        <DeliveryRowInfoRadio radiobutton={{
            label: t("Самовивіз з магазину"),
            checked: (cls.deliveryType === "ShopPickUp"),
        }} className="border border-gray py-2 px-3 rounded-lg" onClick={()=>{cls.setDeliveryType("ShopPickUp")}}>
            <div className={rowClasses}>
                <LocationIcon color="#F9436B"/>
                <span className="text-base font-semibold">{t("вул. Щербаківського, 59")}</span>
            </div>
            <div className={rowClasses}>
                <ClockIcon/>
                <span className="text-sm">10:00 - 18:00</span>
            </div>
        </DeliveryRowInfoRadio>
    );
};

export default observer(SelfPickupDelivery);