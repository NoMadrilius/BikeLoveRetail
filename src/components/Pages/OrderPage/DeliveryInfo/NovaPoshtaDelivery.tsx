import React from 'react';
import DeliveryRowInfoRadio from "@/components/Pages/OrderPage/DeliveryInfo/DeliveryRowInfoRadio";
import Selector, {SelectorOption} from "@/components/UIKit/Selector";
import {useCheckList} from "@/store/CheckListStore";
import {observer} from "mobx-react";
import {AsyncSelectSearchCityNP} from "@/components/Pages/OrderPage/AsyncSelectSearchCityNP";
import {AsyncSelectSearchWarehouseNP} from "@/components/Pages/OrderPage/AsyncSelectSearchWarehoseNP";

const items: SelectorOption[] = [
    {
        label: "Київ",
        value: "Київ"
    },
    {
        label: "Харків",
        value: "Харків"
    },
    {
        label: "Дніпро",
        value: "Дніпро"
    },
    {
        label: "Одеса",
        value: "Одеса"
    },
    {
        label: "Львів",
        value: "Львів"
    },
    {
        label: "Вінниця",
        value: "Вінниця"
    },
    {
        label: "Запоріжжя",
        value: "Запоріжжя"
    },
    {
        label: "Рівне",
        value: "Рівне"
    },
    {
        label: "Херсон",
        value: "Херсон"
    },
    {
        label: "Київ",
        value: "Київ"
    },
    {
        label: "Харків",
        value: "Харків"
    },
    {
        label: "Дніпро",
        value: "Дніпро"
    },
    {
        label: "Одеса",
        value: "Одеса"
    },
    {
        label: "Львів",
        value: "Львів"
    },
    {
        label: "Вінниця",
        value: "Вінниця"
    },
    {
        label: "Запоріжжя",
        value: "Запоріжжя"
    },
    {
        label: "Рівне",
        value: "Рівне"
    },
    {
        label: "Херсон",
        value: "Херсон"
    }
]

const NovaPoshtaDelivery = () => {
    const cls = useCheckList()

    return (
        <DeliveryRowInfoRadio radiobutton={{
            label: "Новою Поштою",
            checked: (cls.deliveryType === "DeliveryNP"),
        }} price={50} className="flex flex-col gap-4" onClick={()=>{cls.setDeliveryType("DeliveryNP")}}>
            <AsyncSelectSearchCityNP onSelect={r=>cls.setCity(r)} value={cls.city}/>
            {cls.city &&<AsyncSelectSearchWarehouseNP onSelect={r=>cls.setWarehouse(r)} value={cls.warehouse} cityId={cls.city.Ref}/>}
        </DeliveryRowInfoRadio>
    );
};

export default observer(NovaPoshtaDelivery);