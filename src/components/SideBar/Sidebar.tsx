import { Text } from "../Text/Text";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import BlurWrapper from "../BlurWrapper/BlurWrapper";
import { useState } from "react";
import {
  AuthContainer,
  ColumnContainer,
  Icon,
  IconContainer,
  Line,
  RowContainer,
  SmallIconContainer,
  Wrapper,
} from "./SidebarStyles";
import SidebarCatalog from "./components/SidebarCatalog";

export const TITLES = [
  { title: "КАТАЛОГ", openArrow: true },
  { title: "О МАГАЗИНЕ", openArrow: true },
  { title: "МАСТЕРСКАЯ", openArrow: true },
  { title: "ВЕЛОБЛОГ", openArrow: false },
  { title: "КОНТАКТЫ", openArrow: false },
];
export const TITLES2 = [
  { title: "КАТАЛОГ", icon: "/images/home/icons/Cart.png" },
  { title: "О МАГАЗИНЕ", icon: "/images/home/icons/Invoice.png" },
  { title: "МАСТЕРСКАЯ", icon: "/images/home/icons/Heart.png" },
  { title: "ВЕЛОБЛОГ", icon: "/images/home/icons/Eye.png" },
];

const SideBar = ({ setVisible }: any) => {
  const [step, setStep] = useState(0);
  return (
    <BlurWrapper setModal={setVisible}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        {step === 0 && (
          <>
            <Text
              color={colors.redMain}
              size="30px"
              fontStyle={fonts.f700}
              margin="28px 0 0 26px"
            >
              BIKELOVE
            </Text>
            <AuthContainer>
              <IconContainer>
                <Icon src="/images/home/icons/accountIcon.svg" />
              </IconContainer>
              <ColumnContainer style={{ marginLeft: "14px" }}>
                <RowContainer style={{ columnGap: "14px" }}>
                  <Text
                    color={colors.black}
                    size="16px"
                    fontStyle={fonts.f500}
                    hoverColor={colors.redHover}
                  >
                    Вход
                  </Text>
                  <Text color={colors.black} size="16px" fontStyle={fonts.f500}>
                    |
                  </Text>
                  <Text
                    color={colors.black}
                    size="16px"
                    fontStyle={fonts.f500}
                    hoverColor={colors.redHover}
                  >
                    Регистрация
                  </Text>
                </RowContainer>
                <Text color={colors.black} size="13px" fontStyle={fonts.f400}>
                  Авторизуйтесь для получения расширеніх возможностей
                </Text>
              </ColumnContainer>
            </AuthContainer>
            <ColumnContainer
              style={{ rowGap: "20px", padding: "23px 26px 33px" }}
            >
              {TITLES.map((el, index) => (
                <RowContainer
                  key={index}
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    color={colors.black}
                    size="16px"
                    fontStyle={fonts.f500}
                    hoverColor={colors.redHover}
                    func={() => index === 0 && setStep(1)}
                  >
                    {el.title}
                  </Text>
                  {el.openArrow && (
                    <img
                      src="/images/home/icons/sidebarArrow.png"
                      style={{ width: "4px", height: "8px" }}
                    />
                  )}
                </RowContainer>
              ))}
            </ColumnContainer>
          </>
        )}
        {step === 1 && <SidebarCatalog setMainStep={setStep} />}
        <Line />
        <ColumnContainer style={{ padding: "26px 0 46px 25px", rowGap: "7px" }}>
          {TITLES2.map((el, index) => (
            <RowContainer key={index} style={{ alignItems: "center" }}>
              <SmallIconContainer>
                <img src={el.icon} />
              </SmallIconContainer>
              <Text
                color={colors.black}
                size="13px"
                fontStyle={fonts.f400}
                hoverColor={colors.redHover}
                margin="0 0 0 10px"
              >
                {el.title}
              </Text>
            </RowContainer>
          ))}
        </ColumnContainer>
      </Wrapper>
    </BlurWrapper>
  );
};
export default SideBar;
