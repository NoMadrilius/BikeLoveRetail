import React, {useState} from 'react';
import BlockWrapper from "@/components/Pages/OrderPage/block-wrapper";
import PhoneInput from "@/components/UIKit/InputFields/PhoneInput/PhoneInput";
import AutorizationDataInfo from "@/components/Pages/OrderPage/PersonalData/autorization-data-info";
import InputTypePassword from "@/components/UIKit/InputFields/InputTypePassword";
import SignInWithPersonalData from "@/components/Pages/OrderPage/PersonalData/send-sms-personal-data";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";

type SignType = "SMS" | "password"
const PersonalDataNeedToAuthentificate = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const [signInType, setSignInType] = useState<SignType>("SMS")

    return (
        <BlockWrapper title="Контактні дані" className="grid grid-cols-2 gap-8 items-end sm2:grid-cols-1">

            <PhoneInput value={phone} onChange={setPhone} className="w-1/3"/>
            <AutorizationDataInfo className="sm2:order-first"/>

            {signInType === "password" && <>
                <InputTypePassword value={password} setValue={setPassword} className="w-1/3"
                                   label="Увійти за допомогою пароля"/>
                <SignInWithPersonalData text="за допомогою SMS"/>
            </>}

            {signInType === "SMS" && <>
                <InputTypePassword value={code} setValue={setCode} className="w-1/3"
                                   label="Увійти за допомогою пароля"/>
                <SignInWithPersonalData text="увійдіть за допомогою пароля "/>
            </>}

            <GradientButton label="Увійти" showIcon={false} className="text-white w-[140px] sm2:w-full h-[50px]"/>
        </BlockWrapper>

    );
};

export default PersonalDataNeedToAuthentificate;