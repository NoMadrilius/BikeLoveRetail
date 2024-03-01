import { colors } from "../../../../theme/colors";
import { footerItems } from "@/mock/data";
import { Text } from "../../Text/Text";
import { fonts } from "../../../../theme/fonts";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import * as S from "./Footer.styles";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Subtitle } from "@/components/Screens/HomeScreen/HomeScreenStyles";

const socialIcons = [
    //{i:"/icons/social/viber.svg", a:"https://www.instagram.com/blcofficial/"},
    {i:"/icons/social/tg.svg", a:"https://t.me/blc_shop"},
    {i:"/icons/social/inst.svg", a:"https://www.instagram.com/blcofficial/"},
    //{i:"/icons/social/fb.svg", a:"https://www.instagram.com/blcofficial/"},
    //{i:"/icons/social/tiktok.svg", a:"https://www.instagram.com/blcofficial/"},
    //{i:"/icons/social/youtube.svg", a:"https://www.instagram.com/blcofficial/"},
];

const Footer = () => {
  const { t } = useTranslation();
  const currentLang: "ua" | "ru" = i18next.language as "ua" | "ru";

  const rights = ["@ 2023", t("footer.allRights"), t("footer.publicAffert")];
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth < 1130);
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <S.Wrapper>
      <S.Res1Container>
        {isDesktop ? (
          <>
            <S.PhoneNumber>(093) 211-89-30</S.PhoneNumber>

            <S.Email>storebikelove@gmail.com</S.Email>
          </>
        ) : null}
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
        {!isDesktop &&
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
        <S.ImageContainer>
          <S.Logo
            fill
            alt="Visa and MasterCard"
            style={{ marginTop: 20, objectFit: "cover" }}
            src="/images/footer/visa_master.png"
          />
        </S.ImageContainer>

        {footerItems[currentLang].length - 1 && (
          <S.SocialContainer $showOnMobile={true}>
            {socialIcons.map((el, index) => (
                <Link href={el.a}>
              <Image
                width={25}
                height={28}
                alt="Social Icon"
                src={el.i}
                key={index}
                style={{ cursor: "pointer" }}
              />
                </Link>
            ))}
          </S.SocialContainer>
        )}
      </S.Res1Container>
      <S.InfoAndWorkingHoursContainer>
        {footerItems[currentLang].map((el: any, index: any) => (
          <S.ItemsContainer key={index}>
            <Subtitle
              $color={colors.white}
              $fontSize="24px"
              $fontStyle={fonts.f400}
              $textTransform="uppercase"
              $margin="0 0 20px 0"
            >
              {el.title}
            </Subtitle>
            {isMobile
              ? index !== 1
                ? el.items.map((link: any, indexInner: any) => {
                    return el.links?.[indexInner] !== undefined ? (
                      <Link href={el.links[indexInner]}>
                        <Text
                          key={indexInner}
                          color={colors.white}
                          size="14px"
                          fontStyle={fonts.f400}
                          hoverColor={colors.redHover}
                        >
                          {link}
                        </Text>
                      </Link>
                    ) : (
                      <Text
                        key={indexInner}
                        color={colors.white}
                        size="14px"
                        fontStyle={fonts.f400}
                        hoverColor={colors.redHover}
                      >
                        {link}
                      </Text>
                    );
                  })
                : el.shortenFormData.map((el: any, indexInner: any) => {
                    return (
                      <Text
                        key={indexInner}
                        color={colors.white}
                        size="14px"
                        fontStyle={fonts.f400}
                        hoverColor={colors.redHover}
                      >
                        {el}
                      </Text>
                    );
                  })
              : el.items.map((link: any, indexInner: any) => {
                  return el.links?.[indexInner] !== undefined ? (
                    <Link href={el.links[indexInner]}>
                      <Text
                        key={indexInner}
                        color={colors.white}
                        size="14px"
                        fontStyle={fonts.f400}
                        hoverColor={colors.redHover}
                      >
                        {link}
                      </Text>
                    </Link>
                  ) : (
                    <Text
                      key={indexInner}
                      color={colors.white}
                      size="14px"
                      fontStyle={fonts.f400}
                      hoverColor={colors.redHover}
                    >
                      {link}
                    </Text>
                  );
                })}
            {isDesktop && index === 0
              ? footerItems[currentLang].length - 1 && (
                  <S.SocialContainer $hideOnDesktop={true}>
                    {socialIcons.map((el, index) => (
                        <Link href={el.a}>
                      <Image
                        width={25}
                        height={28}
                        alt="Social Icon"
                        src={el.i}
                        key={index}
                        style={{ cursor: "pointer" }}
                      />
                        </Link>
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
                <Link href={"/"}>
              <Image
                width={51}
                height={51}
                alt="Social Icon"
                src={el.i}
                key={index}
                style={{ cursor: "pointer" }}
              />
                </Link>
            ))}
          </S.SocialContainer>
        )}
      </S.Res1Container>
    </S.Wrapper>
  );
};
export default Footer;
