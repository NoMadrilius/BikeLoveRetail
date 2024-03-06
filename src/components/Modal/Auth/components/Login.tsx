import React, {ChangeEvent} from 'react';
import {Text} from "@/components/Text/Text";
import {colors} from "../../../../../theme/colors";
import {fonts} from "../../../../../theme/fonts";
import InputMask from "react-input-mask";
import {Checkbox} from "@mui/material";
import Loader from "@/helpers/Loader/Loader";
import {css, keyframes, styled} from "styled-components";
import {templates} from "../../../../../theme/templates";
import {useAuthStore} from "@/store/AuthStore";
import {useTranslation} from "react-i18next";
import {observer} from "mobx-react";

const Login = (p:{onSubmit?:()=>void, simplified?:boolean}) => {
    const { t } = useTranslation();
    const st = useAuthStore();

    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    const isLoginPhoneValid = st.loginPhone.replace(/[^0-9]/g, "").length >= 12;
    const loginDisabled =
        !st.loginPassword.length || !isLoginPhoneValid || st.loading;

    return (
        <Wrapper>
            <Text
                color={colors.black}
                size="22px"
                fontStyle={fonts.f600}
                margin="0 auto 16px 0"
            >
                {t("auth.enter")}
            </Text>
            <InputMask
                mask="+380 99 999 99 99"
                value={st.loginPhone}
                onChange={(e) => st.setLoginPhone(e.target.value)}
            >
                {/*@ts-ignore*/}
                {(inputProps) => (
                    <InputField placeholder={t("auth.tel")} {...inputProps} />
                )}
            </InputMask>
            <InputField
                placeholder={t("auth.password")}
                value={st.loginPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    st.setLoginPassword(e.target.value)
                }
                type="password"
            />
            {p.simplified||
                <RowContainer style={{margin: "10px 0"}}>
                    <Checkbox
                        {...label}
                        defaultChecked
                        sx={{
                            color: colors.redMain,
                            "&.Mui-checked": {
                                color: colors.redMain,
                            },
                        }}
                    />
                    <Text color={colors.black} size="13px" fontStyle={fonts.f400}>
                        {t("auth.rememberMe")}
                    </Text>
                    <Text
                        color={colors.grayMain}
                        size="13px"
                        fontStyle={fonts.f400}
                        margin="0 0 0 auto"
                        func={() => st.setStep(2)}
                        hoverColor={colors.redMain}
                    >
                        {t("auth.remindPassword")}
                    </Text>
                </RowContainer>
            }
            <Button disabled={loginDisabled} onClick={()=>{st.login(()=>{p.onSubmit&&p.onSubmit()})}}>
                <Text color={colors.white} size="15px" fontStyle={fonts.f400}>
                    {st.loading ? <Loader /> : t("auth.enter")}
                </Text>
            </Button>
            <Text
                color={colors.grayMain}
                size="13px"
                fontStyle={fonts.f400}
                margin="10px 0"
            >
                {t("auth.pressOnThis")}
                <span style={{ color: "black", cursor: "pointer" }}>
              {t("auth.publicAff")}
            </span>
            </Text>
            {p.simplified||<>
                <RowContainer>
                    <Line/>
                    <Text
                        color={colors.black}
                        size="14px"
                        fontStyle={fonts.f400}
                        margin="0 20px"
                    >
                        {t("auth.or")}
                    </Text>
                    <Line/>
                </RowContainer>
                <Text
                color={colors.grayMain}
                size="14px"
                fontStyle={fonts.f400}
                func={() => st.setStep(1)}
                margin="5px auto"
                hoverColor={colors.redMain}
                >
            {t("auth.toRegister")}
                </Text>
            </>
            }
        </Wrapper>
    );
};

export default observer(Login);

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-3px); }
  100% { transform: translateX(3px); }
`;

const Wrapper = styled.div`
  width: 479px;
  padding: 40px 55px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  @media (max-width: 600px) {
    width: 100%;
    padding: 30px 15px;
  }
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
const RowContainer = styled.div`
  display: flex;
  align-items: center;
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
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.black};
`;