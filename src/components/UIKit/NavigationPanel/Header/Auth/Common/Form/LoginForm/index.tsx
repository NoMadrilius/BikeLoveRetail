import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import CustomCheckbox from "@/components/UIKit/InputFields/CustomCheckbox";
import PasswordInput from "@/components/UIKit/InputFields/InputTypePassword";
import InputWithPlaceholder from "@/components/UIKit/InputFields/InputWithPlaceholder";

import React from "react";
import LogAsUser from "../LogAsUser";
import {useAppStore} from "@/store/AppStore";
import {observer} from "mobx-react";
import {useAuthStore} from "@/store/AuthStore";
import PhoneInput from "@/components/UIKit/InputFields/PhoneInput/PhoneInput";
import { useTranslation } from "next-i18next";

const LoginForm = () => {
    const as = useAppStore()
    const us = useAuthStore()
  const { t } = useTranslation('common');
    //const isLoginPhoneValid = ua.loginPhone.replace(/[^0-9]/g, "").length >= 12;
    //const loginDisabled = !ua.loginPassword.length || !isLoginPhoneValid || ua.loading;

  return (
    <div className="p-5 flex flex-col gap-5">
        <PhoneInput value={us.loginPhone} onChange={v=>us.setLoginPhone(v)}/>
      <PasswordInput value={us.loginPassword} setValue={v=>us.setLoginPassword(v)} label={t("Пароль")} />

      <CustomCheckbox />
      <GradientButton onClick={()=>us.login(()=>{
          as.setIsOpenAuthModal(false)
      })} label={t("Увійти")} showIcon={false} />
      <div className="text-center">
        <button
          className="py-2 text-blue-link leading-[19px] cursor-pointer"
          onClick={() => as.setIsAuthRegMod(true)}
        >
          {t("Зареєструватися")}
        </button>
        <LogAsUser />
      </div>
    </div>
  );
};

export default observer(LoginForm);
