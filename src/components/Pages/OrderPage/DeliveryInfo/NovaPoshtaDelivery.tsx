import React from 'react';
import DeliveryRowInfoRadio from "@/components/Pages/OrderPage/DeliveryInfo/DeliveryRowInfoRadio";
import Selector, {SelectorOption} from "@/components/UIKit/Selector";

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
    return (
        <DeliveryRowInfoRadio radiobutton={{
            label: "Новою Поштою",
            checked: true
        }} price={300} className="grid grid-cols-2 gap-4">
            <Selector label="Оберіть місто" items={items} value={items[0].value}/>
            <Selector label="Оберіть місто" items={items} value={items[0].value} disabled/>
        </DeliveryRowInfoRadio>
    );
};

export default NovaPoshtaDelivery;