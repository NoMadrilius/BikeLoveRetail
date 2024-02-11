import { colors } from "../../../../theme/colors";
import { footerItems } from "@/mock/data";
import { Text } from "../../Text/Text";
import { fonts } from "../../../../theme/fonts";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import * as S from "./Footer.styles";
import { useEffect, useState } from "react";

const socialIcons = [
  "/icons/social/viber.svg",
  "/icons/social/tg.svg",
  "/icons/social/inst.svg",
  "/icons/social/fb.svg",
  "/icons/social/tiktok.svg",
  "/icons/social/youtube.svg",
];

const Footer = () => {
  const { t } = useTranslation();
  const currentLang: "ua" | "ru" = i18next.language as "ua" | "ru";

  const rights = ["@ 2023", t("footer.allRights"), t("footer.publicAffert")];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1130);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <S.Wrapper>
      <S.Res1Container>
        <S.PhoneNumber>(093) 211-89-30</S.PhoneNumber>

        <S.Email>storebikelove@gmail.com</S.Email>

        <S.Logo
          width={120}
          height={120}
          alt="Logo"
          $hideOnDesktop={true}
          style={{
            border: "2px solid white",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
          src="/images/logo/logo.svg"
        />
        {!isMobile &&
          rights.map((el, index) => (
            <Text
              key={index}
              color={colors.white}
              size="14px"
              fontStyle={fonts.f400}
            >
              {el}
            </Text>
          ))}
        <S.Logo
          width={170}
          height={42}
          alt="Visa and MasterCard"
          style={{ marginTop: 20 }}
          src="/images/footer/visa_master.png"
        />
      </S.Res1Container>
      <S.InfoAndWorkingHoursContainer>
        {footerItems[currentLang].map((el: any, index: any) => (
          <S.ItemsContainer key={index}>
            <Text
              color={colors.white}
              size="24px"
              fontStyle={fonts.f400}
              textTransform="uppercase"
              margin="0 0 20px 0"
            >
              {el.title}
            </Text>
            {el.items.map((el: any, index: any) => (
              <Text
                key={index}
                color={colors.white}
                size="14px"
                fontStyle={fonts.f400}
                hoverColor={colors.redHover}
              >
                {el}
              </Text>
            ))}
            {index === 0
              ? footerItems[currentLang].length - 1 && (
                  <S.SocialContainer $hideOnDesktop={true}>
                    {socialIcons.map((el, index) => (
                      <Image
                        width={25}
                        height={28}
                        alt="Social Icon"
                        src={el}
                        key={index}
                        style={{ cursor: "pointer" }}
                      />
                    ))}
                  </S.SocialContainer>
                )
              : null}
          </S.ItemsContainer>
        ))}
      </S.InfoAndWorkingHoursContainer>
      <S.Res1Container $hideOnDesktop={true}>
        <S.ContactInfo>
          <S.PhoneNumber>(093) 211-89-30</S.PhoneNumber>
          <S.Email>storebikelove@gmail.com</S.Email>
        </S.ContactInfo>
        {footerItems[currentLang].length - 1 && (
          <S.SocialContainer>
            {socialIcons.map((el, index) => (
              <Image
                width={51}
                height={51}
                alt="Social Icon"
                src={el}
                key={index}
                style={{ cursor: "pointer" }}
              />
            ))}
          </S.SocialContainer>
        )}
      </S.Res1Container>
    </S.Wrapper>
  );
};
export default Footer;
