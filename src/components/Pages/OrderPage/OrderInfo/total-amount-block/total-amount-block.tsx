import React from 'react';
import TotalAmountRow from "@/components/Pages/OrderPage/OrderInfo/total-amount-block/total-amount-row";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import OrderLink from "@/components/Pages/OrderPage/OrderInfo/total-amount-block/OrderLink";
import {useCartStore} from "@/store/CartStore";
import {observer} from "mobx-react";
import {useCurrencyStore} from "@/store/CurrencyStore";
import {useCheckList} from "@/store/CheckListStore";
import { Button } from "@mui/material";
import { prettyPrice } from "@/helpers/stringDecorate/prettyPrice";

const TotalAmountBlock = () => {
    const cs = useCartStore()
    const c = useCurrencyStore()
    const cls = useCheckList()
    return (
        <>
            <div className="w-full border-gray border-b-[1px] flex flex-col gap-5 py-3">
                <TotalAmountRow text={cs.cart.length+" тов. на суму"} value={prettyPrice(cs.totalPrice)}/>
            </div>
            <TotalAmountRow text="До сплати" value={prettyPrice(cs.totalPrice)} className="text-[24px] font-bold font-robot-c"/>
          <Button loading={cls.isLoadingCreate} disabled={cs.cart.length ===0} variant={"contained"} className={"w-full"} onClick={()=>{cls.createOrder()}}>Замовлення підтверджую</Button>
          <br/>
          <span>Підтвержджуючи замовлення я приймаю умови про:</span>
            <OrderLink title="положення про обробку персональних даних" href=""/>
            <OrderLink title="захист користувача" href=""/>
        </>
    );
};

export default observer(TotalAmountBlock);