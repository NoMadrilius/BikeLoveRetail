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
import { useTranslation } from "next-i18next";

const RegistrationForm = () => {
    const as = useAppStore()
    const us = useAuthStore()
  const { t } = useTranslation('common');
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
      <InputWithPlaceholder value={us.regName} setValue={(e)=>{us.setRegName(e)}} label={t("Ім'я")} />
      <InputWithPlaceholder value={us.regLastName} setValue={(e)=>{us.setRegLastName(e)}} label={t("Прізвище")} />
      <PhoneInput value={us.regPhone} onChange={v=>us.setRegPhone(v)} className="w-full"/>
      <PasswordInput value={us.regPassword} setValue={(e)=>{us.setRegPassword(e)}} label={t("Пароль")} />
      <PasswordInput value={us.regConfirmPassword} setValue={(e)=>{us.setRegConfirmPassword(e)}} label={t("Повторіть пароль")} />
      <AgreeTerms />
      <GradientButton onClick={()=>us.register(()=>{as.setIsOpenAuthModal(false)})} label={t("Зареєструватись")} showIcon={false} />
      <div className="text-center">
        <button
          className="py-2 text-blue-link leading-[19px] cursor-pointer"
          onClick={() =>as.setIsAuthRegMod(false)}
        >
          {t("Я вже зареєстрований")}
        </button>
        <LogAsUser />
      </div>
    </div>
  );
};

export default observer(RegistrationForm);
