import React, {useState} from "react";
import BlockWrapper from "@/components/Pages/OrderPage/block-wrapper";
import PersonOrderForm from "./person-order-form";
import {showToast} from "@/helpers/alertService/alertService";
import {useCheckList} from "@/store/CheckListStore";
import {observer} from "mobx-react";
import {useAuthStore} from "@/store/AuthStore";

const PersonalDataNotRegister = () => {
    const cls = useCheckList()
    const as = useAuthStore()
    return (
        <BlockWrapper title="Контактні дані">
           <PersonOrderForm confirm={{
               label:"Продовжити", onClick: async ()=>{
                   if(cls.name.replaceAll(' ','').length>3 && cls.lastName.replaceAll(' ','').length>3){
                       as.setRegPhone(cls.initialPhone)
                       console.log(cls.initialPhone)
                       await as.fastReg(()=>{},
                           cls.name.replaceAll(' ','')??undefined,cls.lastName.replaceAll(' ','')??undefined,cls.patronymic.replaceAll(' ','')??undefined)
                   }else
                   showToast({title:"Не коректне ФІО?",info:"Введіть коректне ФІО",type:"warn"})
               }
           }}/>
        </BlockWrapper>

    );
};
export default observer(PersonalDataNotRegister);