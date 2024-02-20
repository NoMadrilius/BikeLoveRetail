import { css, keyframes, styled } from "styled-components";

import { Text } from "@/components/Text/Text";

import { FC, useEffect, useState } from "react";

import { ButtonCustom } from "@/components/ButtonCustom/ButtonCustom";
import { useRouter } from "next/router";
import { useAuthStore } from "@/store/AuthStore";
import { observer } from "mobx-react";
import { showToast } from "@/helpers/alertService/alertService";
import InputMask from "react-input-mask";
import Loader from "@/helpers/Loader/Loader";
import { IOrderData } from "@/types/types";
import { useTranslation } from "react-i18next";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { templates } from "../../../../../theme/templates";

type Props = {
  setSendData: any;
};

const Registration: FC<Props> = ({ setSendData }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifPassword, setVerifPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  /// Login Data
  const [loginPhone, setLoginPhone] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  /// Register Data
  const [regData, setRegData] = useState({
    regName: "",
    regLastName: "",
    regPatronymic: "",
    regEmail: "",
    regPhone: "",
    regPassword: "",
    regConfirmPassword: "",
  });
  /// Red Data
  const [redData, setRedData] = useState({
    redName: "",
    redLastName: "",
    redPatronymic: "",
    redEmail: "",
  });
  //errors
  const [passwordsError, setPasswordsError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const validateEmail = (email: string) => {
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegExp.test(email);
  };
  const isLoginPhoneValid = loginPhone.replace(/[^0-9]/g, "").length >= 12;
  const isRegPhoneValid = regData.regPhone.replace(/[^0-9]/g, "").length >= 12;

  const authStore = useAuthStore();

  const inputHandler = (value: string, name: string) => {
    setRegData((prev) => ({ ...prev, [name]: value }));
  };
  const inputRedHandler = (value: string, name: string) => {
    setRedData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (activeTab === 1 && isAuth) {
      setName(authStore.loginUserResponse.user.firstName);
      setSurname(authStore.loginUserResponse.user.lastName);
      setSecondName(authStore.loginUserResponse.user.patronymic);
      setPhone(authStore.loginUserResponse.user.phoneNumber);
      setEmail(authStore.loginUserResponse.user.email);
    }
    if (activeTab === 2 && isAuth) {
      setRedData({
        redEmail: authStore.loginUserResponse.user.email,
        redLastName: authStore.loginUserResponse.user.lastName,
        redName: authStore.loginUserResponse.user.firstName,
        redPatronymic: authStore.loginUserResponse.user.patronymic,
      });
    }
  }, [activeTab, authStore]);
  const checkIsAuth = () => {
    const fetchData = async () => {
      const _isAuth = authStore.checkAuth();
      //@ts-ignore
      setIsAuth(_isAuth);
      if (!_isAuth) {
        try {
          // Попытка обновить токен
          console.log("success");
          setActiveTab(0);
          await authStore.refreshToken();
        } catch (refreshError) {
          // Обработка ошибки обновления токена
          console.log("Failed to refresh token:", refreshError);
        }

        // После обновления токена, обновляем данные корзины и списка желаемого
      } else {
        setActiveTab(2);
      }
    };

    fetchData();
  };
  useEffect(() => {
    setSendData((prevSendData: IOrderData) => ({
      ...prevSendData,
      order: {
        ...prevSendData.order,
        clientId: authStore?.loginUserResponse?.user?.id,
      },
    }));
  }, [authStore?.loginUserResponse?.user?.id]);

  useEffect(() => {
    checkIsAuth();
  }, [authStore]);

  const updateSelfInfo = () => {
    const body = {
      email: redData.redEmail,
      firstName: redData.redName,
      lastName: redData.redLastName,
      patronymic: redData.redPatronymic,
    };
    authStore.selfUpdate(body);
  };
  const registerHandle = () => {
    if (regData.regPassword !== regData.regConfirmPassword) {
      setPasswordsError(true);
      setTimeout(() => {
        setPasswordsError(false);
      }, 3000);
      return showToast({
        info: t("auth.toast.passwordError"),
        title: t("auth.toast.error"),
        type: "error",
      });
    }
    if (!validateEmail(regData.regEmail)) {
      setEmailError(true);
      setTimeout(() => {
        setEmailError(false);
      }, 3000);
      return showToast({
        info: t("auth.toast.emailError"),
        title: t("auth.toast.error"),
        type: "error",
      });
    }
    try {
      authStore.register(
        {
          email: regData.regEmail,
          firstName: regData.regName,
          lastName: regData.regLastName,
          password: regData.regPassword,
          patronymic: regData.regPatronymic,
          phone: regData.regPhone.replace(/\s/g, ""),
        },
        true
      );
    } catch (error) {
      console.log(error);
    }
  };
  const loginHandle = async () => {
    try {
      await authStore.login(
        {
          password: loginPassword,
          phone: loginPhone.replace(/\s/g, ""),
        },
        true
      );
      checkIsAuth();
    } catch (error) {
      console.log(error);
    }
  };

  const registerDisabled =
    !regData.regEmail ||
    !regData.regName ||
    !regData.regLastName ||
    !isRegPhoneValid ||
    !regData.regPassword ||
    !regData.regConfirmPassword ||
    authStore?.loadingRegister;
  const loginDisabled =
    !loginPassword.length || !isLoginPhoneValid || authStore.loadingLogin;

  return (
    <>
      <Wrapper>
        <Text
          color={colors.black}
          size="50px"
          fontStyle={fonts.f500}
          textTransform="uppercase"
        >
          {t("checkList.checkout")}
        </Text>
        <Header>
          <NumberContainer>
            <Text color={colors.black} size="15px" fontStyle={fonts.f500}>
              1
            </Text>
          </NumberContainer>
          {!isAuth && (
            <>
              <Text
                color={activeTab === 0 ? colors.black : colors.grayMain}
                size="22px"
                fontStyle={fonts.f600}
                func={() => setActiveTab(0)}
                textTransform="uppercase"
              >
                {t("checkList.newCustomer")}
              </Text>
              <Text
                color={activeTab === 1 ? colors.black : colors.grayMain}
                size="22px"
                fontStyle={fonts.f600}
                func={() => setActiveTab(1)}
                textTransform="uppercase"
              >
                {t("checkList.oldCustomer")}
              </Text>
            </>
          )}
          {isAuth && (
            <Text
              color={activeTab === 2 ? colors.black : colors.grayMain}
              size="22px"
              fontStyle={fonts.f600}
            >
              {t("checkList.customer")}
            </Text>
          )}
        </Header>
        {activeTab === 0 && (
          <InputsContainer>
            <InputField
              placeholder={t("account.step1.name")}
              value={regData.regName}
              onChange={(e) => inputHandler(e.target.value, "regName")}
            />
            <InputField
              placeholder={t("account.step1.surname")}
              value={regData.regLastName}
              onChange={(e) => inputHandler(e.target.value, "regLastName")}
            />
            <InputField
              placeholder={t("account.step1.patronomic")}
              value={regData.regPatronymic}
              onChange={(e) => inputHandler(e.target.value, "regPatronymic")}
            />
            <InputMask
              mask="+380 99 999 99 99"
              value={regData.regPhone}
              onChange={(e) => inputHandler(e.target.value, "regPhone")}
            >
              {/*@ts-ignore*/}
              {(inputProps) => (
                <InputField placeholder={t("auth.tel")} {...inputProps} />
              )}
            </InputMask>
            <InputField
              error={emailError}
              placeholder="Email"
              value={regData.regEmail}
              onChange={(e) => inputHandler(e.target.value, "regEmail")}
            />
            <InputField
              error={passwordsError}
              placeholder="Пароль"
              value={regData.regPassword}
              onChange={(e) => inputHandler(e.target.value, "regPassword")}
              type="password"
            />
            <InputField
              error={passwordsError}
              placeholder={t("auth.rePassword")}
              value={regData.regConfirmPassword}
              onChange={(e) =>
                inputHandler(e.target.value, "regConfirmPassword")
              }
              type="password"
            />

            <Button
              onClick={() => registerHandle()}
              disabled={registerDisabled}
            >
              <Text color={colors.white} size="15px" fontStyle={fonts.f400}>
                {t("auth.toRegister")}
              </Text>
            </Button>
          </InputsContainer>
        )}
        {activeTab === 1 && (
          <>
            <InputsContainer>
              <InputMask
                mask="+380 99 999 99 99"
                value={loginPhone}
                onChange={(e) => setLoginPhone(e.target.value)}
              >
                {/*@ts-ignore*/}
                {(inputProps) => (
                  <InputField placeholder={t("auth.tel")} {...inputProps} />
                )}
              </InputMask>
              <InputField
                placeholder="Пароль"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                type="password"
              />
              <Button disabled={loginDisabled} onClick={() => loginHandle()}>
                <Text color={colors.white} size="15px" fontStyle={fonts.f400}>
                  {authStore.loadingLogin ? <Loader /> : t("auth.enter")}
                </Text>
              </Button>
            </InputsContainer>
          </>
        )}
        {activeTab === 2 && (
          <InputsContainer>
            <InputField
              placeholder={t("auth.name")}
              value={redData.redName}
              onChange={(e) => inputRedHandler(e.target.value, "redName")}
            />
            <InputField
              placeholder={t("auth.surname")}
              value={redData.redLastName}
              onChange={(e) => inputRedHandler(e.target.value, "redLastName")}
            />
            <InputField
              placeholder={t("auth.patronomic")}
              value={redData.redPatronymic}
              onChange={(e) => inputRedHandler(e.target.value, "redPatronymic")}
            />
            <InputField
              placeholder="E-mail"
              value={redData.redEmail}
              onChange={(e) => inputRedHandler(e.target.value, "redPatronymic")}
            />
            <Button red onClick={() => updateSelfInfo()} disabled={false}>
              <Text color={colors.redMain} size="15px" fontStyle={fonts.f400}>
                {t("auth.edit")}
              </Text>
            </Button>
          </InputsContainer>
        )}
      </Wrapper>
    </>
  );
};
export default observer(Registration);
const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-3px); }
  100% { transform: translateX(3px); }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  column-gap: 33px;
  align-items: center;
  margin-top: 20px;
`;
export const NumberContainer = styled.div`
  width: 45px;
  height: 45px;
  min-width: 45px;
  min-height: 45px;
  border-radius: 50%;
  background-color: ${colors.redBlur};
  ${templates.centerContent};
`;
export const InputsContainer = styled.div`
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  margin-left: 78px;
  width: 368px;
  @media (max-width: 756px) {
    margin-left: 0;
    width: 100%;
    align-items: center;
  }
`;
export const InputField = styled.input<{ error?: boolean }>`
  all: unset;
  width: 100%;
  height: 48px;
  border: 1px solid
    ${({ error }) => (error ? colors.redMain : colors.grayBorder)};
  padding: 15px 30px;
  box-sizing: border-box;
  border-radius: 5px;
  color: ${({ error }) => (error ? colors.redMain : colors.black)};
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
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.black};
`;
export const OrContainer = styled.div`
  width: 100%;
  column-gap: 18px;
  ${templates.centerContent};
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 756px) {
    column-gap: 12px;
  }
`;
export const Button = styled.button<{ fill?: boolean; red?: boolean }>`
  all: unset;
  ${templates.centerContent};
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
  ${(p) =>
    p.red &&
    css`
      background-color: ${colors.white};
      border: 1px solid ${colors.redMain};
      &:hover {
        background-color: ${colors.redBlur};
      }
    `}
`;
