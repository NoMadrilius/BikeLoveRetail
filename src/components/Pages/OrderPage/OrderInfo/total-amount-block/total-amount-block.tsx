import React from 'react';
import TotalAmountRow from "@/components/Pages/OrderPage/OrderInfo/total-amount-block/total-amount-row";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import OrderLink from "@/components/Pages/OrderPage/OrderInfo/total-amount-block/OrderLink";
import {useCartStore} from "@/store/CartStore";
import {observer} from "mobx-react";
import {useCurrencyStore} from "@/store/CurrencyStore";
import {useCheckList} from "@/store/CheckListStore";
import { Button, TextField } from "@mui/material";
import { prettyPrice } from "@/helpers/stringDecorate/prettyPrice";
import CreditCheckoutBlock from "@/components/CreditBlock/CreditCheckoutBlock";
import { useTranslation } from "next-i18next";

const TotalAmountBlock = () => {
    const cs = useCartStore()
    const c = useCurrencyStore()
    const cls = useCheckList()

  const { t } = useTranslation('checkout_page');

    return (
        <>
            <div className="w-full border-gray border-b-[1px] flex flex-col gap-2 py-5">
                <TotalAmountRow text={cs.cart.length+" "+t("тов. на суму")} value={prettyPrice(cs.totalPrice)}/>
              {cs.totalDiscount > 0 && <TotalAmountRow text={t("Знижка")} value={"-"+prettyPrice(cs.totalDiscount)}/>}

            </div>
          <div className={"flex flex-col py-5 gap-1 border-gray border-b-[1px]"}>
            <div className={"flex justify-between gap-4"}>
              <TextField size={"small"} value={cs.promo} onChange={b=>cs.setPromo(b.target.value)}  className={"w-full"} label={t("Промокод")}/>
              <Button onClick={()=>cs.updatePromo()} loading={cs.isLoadingPromo} disabled={!(cs.promo.length > 0)} className={"w-1/2"} size={"small"} variant={"outlined"}>{t("Застосувати")}</Button>
            </div>
            {
              cs.promo.length > 0 && <div className={"text-pink"}>{cs.promoMessage}</div>
            }
          </div>

          <div className={"flex flex-col gap-6"}>
            <TotalAmountRow text={t("До сплати")} value={prettyPrice(cs.totalPrice-cs.totalDiscount)} className="text-[24px] font-bold font-robot-c"/>
            <Button loading={cls.isLoadingCreate} disabled={cs.cart.length ===0} variant={"contained"} className={"w-full"} onClick={()=>{cls.createOrder()}}>{t("Замовлення підтверджую")}</Button>
            <div>
              <span>{t("Підтвержджуючи замовлення я приймаю умови про")}:</span>
              <OrderLink title={t("положення про обробку персональних даних")} href="" />
              <OrderLink title={t("захист користувача")} href="" />
            </div>
            <CreditCheckoutBlock />
          </div>

        </>
    );
};

export default observer(TotalAmountBlock);