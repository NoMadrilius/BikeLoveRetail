import React from 'react';
import TotalAmountRow from "@/components/Pages/OrderPage/OrderInfo/total-amount-block/total-amount-row";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import OrderLink from "@/components/Pages/OrderPage/OrderInfo/total-amount-block/OrderLink";

const TotalAmountBlock = () => {
    return (
        <>
            <div className="w-full border-gray border-b-[1px] flex flex-col gap-5 py-3">
                <TotalAmountRow text="6 Товарів на суму" value="6 000 UAH"/>
                <TotalAmountRow text="Вартість доставки" value="6 000 UAH"/>
            </div>
            <TotalAmountRow text="До сплати" value="6 000 UAH" className="text-[24px] font-bold"/>
            <GradientButton label="Замовлення підтверджую" showIcon={false} className="text-white w-full h-[48px] my-5" textstyles="whitespace-nowrap"/>
            <span>Підтвержджуючи замовлення я приймаю умови про:</span>
            <OrderLink title="положення про обробку персональних даних" href=""/>
            <OrderLink title="захист користувача" href=""/>
        </>
    );
};

export default TotalAmountBlock;