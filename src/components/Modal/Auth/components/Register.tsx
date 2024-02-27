import {ChangeEvent, FC} from "react";
import {css, keyframes, styled} from "styled-components";
import {Text} from "@/components/Text/Text";
import {colors} from "../../../../../theme/colors";
import {fonts} from "../../../../../theme/fonts";
import InputMask from "react-input-mask";
import {Checkbox} from "@mui/material";
import {templates} from "../../../../../theme/templates";
import {useAuthStore} from "@/store/AuthStore";
import {useTranslation} from "react-i18next";
import {observer} from "mobx-react";

const Register= (p:{reloc?:boolean}) => {
    const { t } = useTranslation();
    const st = useAuthStore();
    const isRegPhoneValid = st.regPhone.replace(/[^0-9]/g, "").length >= 12;

    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    const registerDisabled =
        !st.regEmail ||
        !st.regName ||
        !st.regLastName ||
        !isRegPhoneValid ||
        !st.regPassword ||
        !st.regConfirmPassword ||
        st.loading;

    return (
      <Wrapper>
          <Text
              color={colors.black}
              size="22px"
              fontStyle={fonts.f600}
              margin="0 auto 16px 0"
          >
              {t("auth.registration")}
          </Text>
          <InputField
              placeholder={t("auth.name")}
              value={st.regName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  st.setRegName(e.target.value)
              }
          />
          <InputField
              placeholder={t("auth.surname")}
              value={st.regLastName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  st.setRegLastName(e.target.value)
              }
          />
          <InputField
              placeholder={t("auth.patronomic")}
              value={st.regPatronymic}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  st.setRegPatronymic(e.target.value)
              }
          />
          <InputMask
              mask="+380 99 999 99 99"
              value={st.regPhone}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  st.setRegPhone(e.target.value)
              }
          >
              {/*@ts-ignore*/}
              {(inputProps) => (
                  <InputField placeholder={t("auth.tel")} {...inputProps} />
              )}
          </InputMask>
          <InputField
              error={st.emailError}
              placeholder="Email"
              value={st.regEmail}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  st.setRegEmail(e.target.value)
              }
          />
          <InputField
              error={st.passwordsError}
              placeholder={t("auth.password")}
              value={st.regPassword}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  st.setRegPassword(e.target.value)
              }
              type="password"
          />
          <InputField
              error={st.passwordsError}
              placeholder={t("auth.rePassword")}
              value={st.regConfirmPassword}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  st.setRegConfirmPassword(e.target.value)
              }
              type="password"
          />
          <RowContainer style={{ margin: "10px 0" }}>
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
                  func={() => console.log("hello")}
                  hoverColor={colors.redMain}
              >
                  {t("auth.remindPassword")}
              </Text>
          </RowContainer>
          <Button onClick={()=>{st.register(p.reloc)}} disabled={registerDisabled}>
              <Text color={colors.white} size="15px" fontStyle={fonts.f400}>
                  {t("auth.toRegister")}
              </Text>
          </Button>
          <Text
              color={colors.grayMain}
              size="13px"
              fontStyle={fonts.f400}
              margin="10px 0"
          >
              {t("auth.pressOnThis")}
              <span
                  style={{ color: "black", cursor: "pointer", marginLeft: "5px" }}
              >
              {t("auth.publicAff")}
            </span>
          </Text>
          <RowContainer>
              <Line />
              <Text
                  color={colors.black}
                  size="14px"
                  fontStyle={fonts.f400}
                  margin="0 20px"
              >
                  {t("auth.or")}
              </Text>
              <Line />
          </RowContainer>
          <Text
              color={colors.grayMain}
              size="14px"
              fontStyle={fonts.f400}
              func={() => st.setStep(0)}
              margin="5px auto"
              hoverColor={colors.redMain}
          >
              {t("auth.iamAlredyRegister")}
          </Text>
      </Wrapper>
  );
};

export default observer(Register);

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
