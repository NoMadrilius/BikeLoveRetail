import React, { useState } from "react";
import ModalBase from "@/components/Modal/ModalBase/ModalBase";
import { useAppStore } from "@/store/AppStore";
import AuthHeader from "@/components/UIKit/NavigationPanel/Header/Auth/Common/AuthHeader";
import { observer } from "mobx-react";
import LoginForm from "@/components/UIKit/NavigationPanel/Header/Auth/Common/Form/LoginForm";
import RegistrationForm from "@/components/UIKit/NavigationPanel/Header/Auth/Common/Form/RegistrationForm";

const AuthModal = () => {
  const as = useAppStore();

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
            <AuthHeader title={"Реєстрація"} />
            <RegistrationForm />
          </>
        ) : (
          <>
            <AuthHeader title={"Вхід"} />
            <LoginForm />
          </>
        )}
      </section>
    </ModalBase>
  );
};

export default observer(AuthModal);
