import React from 'react';
import DeliveryRowInfoRadio from "@/components/Pages/OrderPage/DeliveryInfo/DeliveryRowInfoRadio";
import Selector, {SelectorOption} from "@/components/UIKit/Selector";
import {useCheckList} from "@/store/CheckListStore";
import {observer} from "mobx-react";
import {AsyncSelectSearchCityNP} from "@/components/Pages/OrderPage/AsyncSelectSearchCityNP";
import {AsyncSelectSearchWarehouseNP} from "@/components/Pages/OrderPage/AsyncSelectSearchWarehoseNP";
import { useTranslation } from "next-i18next";

const NovaPoshtaDelivery = () => {
    const cls = useCheckList()
    const { t } = useTranslation('checkout_page');

    return (
        <DeliveryRowInfoRadio radiobutton={{
            label: t("Новою Поштою"),
            checked: (cls.deliveryType === "DeliveryNP"),
        }} price={50} className="flex flex-col gap-4" onClick={()=>{cls.setDeliveryType("DeliveryNP")}}>
            <AsyncSelectSearchCityNP onSelect={r=>cls.setCity(r)} value={cls.city}/>
            {cls.city &&<AsyncSelectSearchWarehouseNP onSelect={r=>cls.setWarehouse(r)} value={cls.warehouse} cityId={cls.city.Ref}/>}
        </DeliveryRowInfoRadio>
    );
};

export default observer(NovaPoshtaDelivery);