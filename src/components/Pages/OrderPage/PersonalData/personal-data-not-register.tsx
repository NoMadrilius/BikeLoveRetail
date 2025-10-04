import React, {useState} from "react";
import BlockWrapper from "@/components/Pages/OrderPage/block-wrapper";
import PersonOrderForm from "./person-order-form";
import {showToast} from "@/helpers/alertService/alertService";
import {useCheckList} from "@/store/CheckListStore";
import {observer} from "mobx-react";
import {useAuthStore} from "@/store/AuthStore";
import { useTranslation } from "next-i18next";

const PersonalDataNotRegister = () => {
    const cls = useCheckList()
    const as = useAuthStore()
    const { t } = useTranslation('checkout_page');

    return (
        <BlockWrapper title={t("Контактні дані")}>
           <PersonOrderForm confirm={{
               label:t("Продовжити"), onClick: async ()=>{
                   if(cls.name.replaceAll(' ','').length>3 && cls.lastName.replaceAll(' ','').length>3){
                       as.setRegPhone(cls.initialPhone)
                       console.log(cls.initialPhone)
                       await as.fastReg(()=>{},
                           cls.name.replaceAll(' ','')??undefined,cls.lastName.replaceAll(' ','')??undefined,cls.patronymic.replaceAll(' ','')??undefined)
                   }else
                   showToast({title:t("Не коректне ФІО?"),info:t("Введіть коректне ФІО"),type:"warn"})
               }
           }}/>
        </BlockWrapper>

    );
};
export default observer(PersonalDataNotRegister);