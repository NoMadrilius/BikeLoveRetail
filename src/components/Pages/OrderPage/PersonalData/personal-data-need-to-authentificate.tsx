import React, {useState} from 'react';
import BlockWrapper from "@/components/Pages/OrderPage/block-wrapper";
import PhoneInput from "@/components/UIKit/InputFields/PhoneInput/PhoneInput";
import AutorizationDataInfo from "@/components/Pages/OrderPage/PersonalData/autorization-data-info";
import InputTypePassword from "@/components/UIKit/InputFields/InputTypePassword";
import SignInWithPersonalData from "@/components/Pages/OrderPage/PersonalData/send-sms-personal-data";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import {useCheckList} from "@/store/CheckListStore";
import {observer} from "mobx-react";
import authStore, {useAuthStore} from "@/store/AuthStore";

type SignType = "SMS" | "password"
const PersonalDataNeedToAuthentificate = () => {
    const cls = useCheckList()
    const as = useAuthStore()
    const [code, setCode] = useState("");
    const [codeSent, setCodeSent] = useState<boolean>(false);
    const [signInType, setSignInType] = useState<SignType>("password")

    return (
        <BlockWrapper  title="Контактні дані" className="grid grid-cols-2 gap-8 items-end sm2:grid-cols-1">

            <PhoneInput value={cls.initialPhone} onChange={v=>cls.setInitialPhone(v)} className="w-1/3"/>
            <AutorizationDataInfo name={cls.initialUser?.lastName+" "+cls.initialUser?.firstName+" "+cls.initialUser?.patronymic} className="sm2:order-first"/>

            {signInType === "password" && <>
                <InputTypePassword value={as.loginPassword} setValue={v=>as.setLoginPassword(v)} className="w-1/3"
                                   label="Увійти за допомогою пароля"/>
                <SignInWithPersonalData onClick={()=>{setSignInType("SMS")}} text="ми відправимо вам код"/>
            </>}

            {signInType === "SMS" && <>
                <InputTypePassword value={code} setValue={setCode} className="w-1/3"
                                   label="Увійти за допомогою коду"/>
                <SignInWithPersonalData onClick={()=>{setSignInType("password")}} text="увійдіть за допомогою пароля "/>
            </>}

            {
                signInType === "SMS" &&
                <GradientButton onClick={()=>{
                    as.setLoginPhone(cls.initialPhone)
                    authStore.loginCode(()=>{setCodeSent(true)})
                }} label={codeSent?"Телефонуємо! Введіт останні 4 цифри номеру":"Надіслати код"} disabled={codeSent} showIcon={false} className="text-white w-[140px] sm2:w-full h-[50px]"/>
            }

            <GradientButton onClick={()=>{
                as.setLoginPhone(cls.initialPhone)
                if(signInType === "SMS"){
                    authStore.confirmLoginCode(code, ()=>{console.log('ok')})
                }
                if(signInType === "password"){
                    as.login(()=>console.log('ok'))
                }
            }} label="Увійти" showIcon={false} className="text-white w-[140px] sm2:w-full h-[50px]"/>
        </BlockWrapper>

    );
};

export default observer(PersonalDataNeedToAuthentificate);