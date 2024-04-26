"use client"
import { css, keyframes, styled } from "styled-components";
import { Text } from "@/components/Text/Text";
import { useAuthStore } from "@/store/AuthStore";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { templates } from "../../../../../theme/templates";

const Registration= () => {
  const { t } = useTranslation();

  const st = useAuthStore();
  console.log(st.step)
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
          {!st.isAuth && (
            <>
              <Text
                color={st.step === 0 ? colors.black : colors.grayMain}
                size="22px"
                fontStyle={fonts.f600}
                func={() => st.setStep(0)}
                textTransform="uppercase"
              >
                {t("checkList.newCustomer")}
              </Text>
              <Text
                color={st.step === 1 ? colors.black : colors.grayMain}
                size="22px"
                fontStyle={fonts.f600}
                func={() => st.setStep(1)}
                textTransform="uppercase"
              >
                {t("checkList.oldCustomer")}
              </Text>
            </>
          )}
          {st.isAuth && (
            <Text
              color={st.step === 2 ? colors.black : colors.grayMain}
              size="22px"
              fontStyle={fonts.f600}
            >
              {t("checkList.customer")}
            </Text>
          )}
        </Header>
        {
          st.isAuth?<div style={{color:'black'}}>
            {st.user?.lastName}
            {st.user?.firstName}
            {st.user?.phoneNumber}
          </div>:<>

          </>
        }

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
  z-index: 0;
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
