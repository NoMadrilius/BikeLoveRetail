"use client";
import {
  BgImage,
  IconBottom,
  MainContainer,
  MainTitle,
  Wrapper,
} from "./HomeScreenStyles";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import ByPropose from "./components/ByPropose";
import { ResponsiveBlockGroup } from "./components/ResponsiveBlockGroup";
import Subscribe from "./components/Subscribe";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { useProductStore } from "@/store/ProductStore";
import { observer } from "mobx-react";
import { useEffect } from "react";
import Slider from "./components/Slider";
import { useTranslation } from "react-i18next";
import { useCurrencyStore } from "@/store/CurrencyStore";
import { useAuthStore } from "@/store/AuthStore";
import { ITEMS } from "./mock";
import { useRouter } from "next/router";
import { GenerateLink } from "@/helpers/GenerateLink";

const HomeScreen = () => {
  const productStore = useProductStore();
  const handleScrollToBottom = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  useEffect(() => {
    productStore.fetchSales();
    productStore.fetchForYou();
  }, []);
  const { t } = useTranslation();

  return (
    <>
      <UseMetaData title={"Home"} img={""} description={"asd"} />

      <Wrapper>
        <BgImage bgImage="/images/home/bannerImage.png">
          <MainContainer>
            <MainTitle
              $fontSize="54px"
              color={colors.white}
              $fontStyle={fonts.f500}
              $margin="20% 0"
            >
              {t("home.mainText")}
            </MainTitle>
          </MainContainer>
          <IconBottom
            alt="Arrow Scroll Bottom"
            width={50}
            height={50}
            src="/icons/mainArrowBottom.svg"
            onClick={() => handleScrollToBottom()}
          />
        </BgImage>
        <MainContainer>
          <ByPropose items={ITEMS} />

          <ResponsiveBlockGroup variant="1" />
          {productStore?.forYou.length ? (
            <Slider
              title={t("home.forYou")}
              items={productStore?.forYou}
              variant="cards"
            />
          ) : null}
          {productStore?.sales.length ? (
            <Slider
              title={t("home.popularAcc")}
              items={productStore?.sales}
              variant="cards"
            />
          ) : null}

          <ResponsiveBlockGroup variant="2" />
          {/*<Slider
						title={"Велоблог"}
						tags={[]}
						items={newsData}
						variant='news'
					/> */}
          <ResponsiveBlockGroup variant="3" />
        </MainContainer>

        <Subscribe bg={"/images/home/form-background.png"} />
      </Wrapper>
    </>
  );
};
export default observer(HomeScreen);
