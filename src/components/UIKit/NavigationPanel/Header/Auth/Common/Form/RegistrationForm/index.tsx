import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import PasswordInput from "@/components/UIKit/InputFields/InputTypePassword";
import InputWithPlaceholder from "@/components/UIKit/InputFields/InputWithPlaceholder";

import LogAsUser from "../LogAsUser";
import AgreeTerms from "./AgreeTerms";

const RegistrationForm = () => {

  return (
    <div className="p-5 flex flex-col gap-5 ">
      <InputWithPlaceholder label="Ім'я" />
      <InputWithPlaceholder label="Прізвище" />
      <InputWithPlaceholder label="Номер телефону" />
      <PasswordInput label="Password" />
      <InputWithPlaceholder label="Повторити пароль" type="password" />
      <AgreeTerms />
      <GradientButton label={"Увійти"} showIcon={false} />
      <div className="text-center">
        <button
          className="py-2 text-blue-link leading-[19px] cursor-pointer"
          onClick={() =>{}// store.saveAuthType("login")
        }
        >
          Я вже зареєстрований
        </button>
        <LogAsUser />
      </div>
    </div>
  );
};

export default RegistrationForm;
