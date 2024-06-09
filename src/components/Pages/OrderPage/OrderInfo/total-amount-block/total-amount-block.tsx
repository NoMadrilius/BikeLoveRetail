import React from 'react';
import TotalAmountRow from "@/components/Pages/OrderPage/OrderInfo/total-amount-block/total-amount-row";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import OrderLink from "@/components/Pages/OrderPage/OrderInfo/total-amount-block/OrderLink";
import {useCartStore} from "@/store/CartStore";
import {observer} from "mobx-react";
import {useCurrencyStore} from "@/store/CurrencyStore";

const TotalAmountBlock = () => {
    const cs = useCartStore()
    const c = useCurrencyStore()
    return (
        <>
            <div className="w-full border-gray border-b-[1px] flex flex-col gap-5 py-3">
                <TotalAmountRow text={cs.cart.length+" тов. на суму"} value={c.useCurrency(cs.totalPrice)}/>
                <TotalAmountRow text="Вартість доставки" value="від 50 UAH"/>
            </div>
            <TotalAmountRow text="До сплати" value={c.useCurrency(cs.totalPrice)} className="text-[24px] font-bold"/>
            <GradientButton label="Замовлення підтверджую" showIcon={false} className="text-white w-full h-[48px] my-5" textstyles="whitespace-nowrap"/>
            <span>Підтвержджуючи замовлення я приймаю умови про:</span>
            <OrderLink title="положення про обробку персональних даних" href=""/>
            <OrderLink title="захист користувача" href=""/>
        </>
    );
};

export default observer(TotalAmountBlock);