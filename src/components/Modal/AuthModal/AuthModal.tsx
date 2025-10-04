import React, { useState } from "react";
import ModalBase from "@/components/Modal/ModalBase/ModalBase";
import { useAppStore } from "@/store/AppStore";
import AuthHeader from "@/components/UIKit/NavigationPanel/Header/Auth/Common/AuthHeader";
import { observer } from "mobx-react";
import LoginForm from "@/components/UIKit/NavigationPanel/Header/Auth/Common/Form/LoginForm";
import RegistrationForm from "@/components/UIKit/NavigationPanel/Header/Auth/Common/Form/RegistrationForm";
import { useTranslation } from "next-i18next";

const AuthModal = () => {
  const as = useAppStore();
  const { t } = useTranslation('common');

  return (
    <ModalBase
      open={as.isOpenAuthModal}
      setOpen={(v) => as.setIsOpenAuthModal(v)}
    >
      <section

        className="bg-white rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {as.isAuthRegMod ? (
          <>
            <AuthHeader title={t("Реєстрація")} />
            <RegistrationForm />
          </>
        ) : (
          <>
            <AuthHeader title={t("Вхід")} />
            <LoginForm />
          </>
        )}
      </section>
    </ModalBase>
  );
};

export default observer(AuthModal);
