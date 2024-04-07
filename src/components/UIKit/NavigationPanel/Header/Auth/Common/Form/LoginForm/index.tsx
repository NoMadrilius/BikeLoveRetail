import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import CustomCheckbox from "@/components/UIKit/InputFields/CustomCheckbox";
import PasswordInput from "@/components/UIKit/InputFields/InputTypePassword";
import InputWithPlaceholder from "@/components/UIKit/InputFields/InputWithPlaceholder";
import { useBurgerMenuStore } from "@/store/BurgerMenuStore";

import React from "react";
import LogAsUser from "../LogAsUser";

const LoginForm = () => {
  const store = useBurgerMenuStore();

  return (
    <div className="p-5 flex flex-col gap-5">
      <InputWithPlaceholder label="Телефон" />
      <PasswordInput label="Password" />

      <CustomCheckbox />
      <GradientButton label={"Увійти"} showIcon={false} />
      <div className="text-center">
        <button
          className="py-2 text-blue-link leading-[19px] cursor-pointer"
          onClick={() => store.saveAuthType("registration")}
        >
          Зареєструватися
        </button>
        <LogAsUser />
      </div>
    </div>
  );
};

export default LoginForm;
