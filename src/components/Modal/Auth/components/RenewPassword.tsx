import { ChangeEvent, FC, useEffect, useState } from "react";
import { css, keyframes, styled } from "styled-components";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import axios from "axios";
import { showToast } from "@/helpers/alertService/alertService";
import { templates } from "../../../../../theme/templates";
import { Text } from "@/components/Text/Text";
import InputMask from "react-input-mask";
import Loader from "@/helpers/Loader/Loader";
import axiosInstance from "@/api/axiosInstance";

type Props = {
  setMainStep: any;
};

const RenewPassword: FC<Props> = ({ setMainStep }) => {
  const [step, setStep] = useState<"number" | "code" | "password">("number");
  const [error, setError] = useState(false);
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [newPsswordInputVisible, setNewPsswordInputVisible] = useState(false);

  const requestCodeDisabled = number.replace(/[^0-9]/g, "").length >= 12;
  const onClickRequestCode = async () => {
    try {
      const response = await axiosInstance.post(
        `/auth/renewpassword?phoneNumber=${number
          .replace(/^\+38/, "")
          .replace(/\s/g, "")}&Type=BinoCall`
      );

      showToast({
        info: "Введите 4 последние цифры номера, с которого вам позвонят",
        title: "Введите код",
        type: "warn",
      });
      setStep("code");
    } catch (error) {
      console.log(error);
    }
  };
  const onClickSendNewPassword = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        `/auth/renewpasswordconfirm?phoneNumber=${number
          .replace(/^\+38/, "")
          .replace(
            /\s/g,
            ""
          )}&Type=BinoCall&code=${code}&newPassword=${newPassword}`
      );
      setLoading(false);
      showToast({
        info: "Пароль успешно изменен, теперь вы можете войти с помощью нового пароля",
        title: "Успешно",
        type: "success",
      });
      setMainStep(0);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onClick = () => {
    if (step === "number") {
      onClickRequestCode();
    }
    if (step === "code") {
      onClickSendNewPassword();
    }
  };

  useEffect(() => {
    if (code.length === 4) {
      setNewPsswordInputVisible(true);
    } else {
      setNewPsswordInputVisible(false);
    }
  }, [code]);
  const buttonText = step === "number" ? "Получить код" : "Изменить пароль";

  return (
    <Wrapper>
      <InputMask
        mask="+380 99 999 99 99"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      >
        {/*@ts-ignore*/}
        {(inputProps) => <InputField placeholder="Телефон" {...inputProps} />}
      </InputMask>
      {step === "code" && (
        <InputField
          error={error}
          placeholder="Код"
          value={code}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCode(e.target.value)
          }
        />
      )}
      {newPsswordInputVisible && (
        <InputField
          error={error}
          placeholder="Новый пароль"
          value={newPassword}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewPassword(e.target.value)
          }
        />
      )}

      <Button
        onClick={() => onClick()}
        disabled={
          step === "number"
            ? !requestCodeDisabled
            : step === "code"
            ? code.length !== 4 || newPassword === ""
            : false
        }
      >
        <Text color={colors.white} size="15px" fontStyle={fonts.f400}>
          {loading ? <Loader /> : buttonText}
        </Text>
      </Button>
    </Wrapper>
  );
};

export default RenewPassword;

const Wrapper = styled.div`
  width: 479px;
  padding: 40px 55px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin: 120px auto;
  margin-bottom: 0;
  padding-bottom: 120px;
  @media (max-width: 600px) {
    width: 100%;
    padding: 30px 15px;
  }
`;

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-3px); }
  100% { transform: translateX(3px); }
`;
const InputField = styled.input<{ error?: boolean }>`
  all: unset;
  padding: 15px 30px;
  margin-top: 14px;
  border: 1px solid
    ${({ error }) => (error ? colors.redMain : colors.grayBorder)};
  border-radius: 5px;
  color: ${({ error }) => (error ? colors.redMain : colors.black)};
  font-family: ${fonts.f400.fontFamily};
  font-weight: 500;
  transition: border-color 0.3s ease, color 0.3s ease;

  &:focus {
    border-color: ${({ error }) =>
      error ? colors.redMain : colors.grayBorder};
  }

  ${({ error }) =>
    error &&
    css`
      animation: ${shakeAnimation} 0.4s ease-in-out;
    `}
`;
const Button = styled.button`
  ${templates.centerContent};
  margin-top: 10px;
  width: 368px;
  height: 50px;
  border-radius: 5px;
  background-color: ${colors.redMain};
  cursor: pointer;
  @media (max-width: 600px) {
    width: 100%;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
