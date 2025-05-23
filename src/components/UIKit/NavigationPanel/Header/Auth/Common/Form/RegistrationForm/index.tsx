import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import PasswordInput from "@/components/UIKit/InputFields/InputTypePassword";
import InputWithPlaceholder from "@/components/UIKit/InputFields/InputWithPlaceholder";

import LogAsUser from "../LogAsUser";
import AgreeTerms from "./AgreeTerms";
import {useAppStore} from "@/store/AppStore";
import {observer} from "mobx-react";
import {useAuthStore} from "@/store/AuthStore";
import PhoneInput from "@/components/UIKit/InputFields/PhoneInput/PhoneInput";
import React from "react";

const RegistrationForm = () => {
    const as = useAppStore()
    const us = useAuthStore()


    //const isRegPhoneValid = ua.regPhone.replace(/[^0-9]/g, "").length >= 12;

    const registerDisabled =
        !us.regName ||
        !us.regLastName ||
        //!isRegPhoneValid ||
        !us.regPassword ||
        !us.regConfirmPassword ||
        us.loading;

  return (
    <div className="p-5 flex flex-col gap-5 ">
      <InputWithPlaceholder value={us.regName} setValue={(e)=>{us.setRegName(e)}} label="Ім'я" />
      <InputWithPlaceholder value={us.regLastName} setValue={(e)=>{us.setRegLastName(e)}} label="Прізвище" />
      <PhoneInput value={us.regPhone} onChange={v=>us.setRegPhone(v)} className="w-full"/>
      <PasswordInput value={us.regPassword} setValue={(e)=>{us.setRegPassword(e)}} label="Пароль" />
      <PasswordInput value={us.regConfirmPassword} setValue={(e)=>{us.setRegConfirmPassword(e)}} label="Повторіть пароль" />
      <AgreeTerms />
      <GradientButton onClick={()=>us.register(()=>{as.setIsOpenAuthModal(false)})} label={"Зареєструватись"} showIcon={false} />
      <div className="text-center">
        <button
          className="py-2 text-blue-link leading-[19px] cursor-pointer"
          onClick={() =>as.setIsAuthRegMod(false)}
        >
          Я вже зареєстрований
        </button>
        <LogAsUser />
      </div>
    </div>
  );
};

export default observer(RegistrationForm);
