"use client";
import {
  BgImage,
  IconBottom,
  MainContainer,
  Wrapper,
} from "./HomeScreenStyles";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import ByPropose from "./components/ByPropose";
import { byProposeData, newsData, sliderData, sliderTags } from "@/mock/data";
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

const HomeScreen = () => {
  const productStore = useProductStore();
  const currencyStore = useCurrencyStore();
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
  const authStore = useAuthStore();
  const refresh = () => {
    authStore.refreshToken();
  };
  return (
    <>
      <UseMetaData title={"Home"} img={""} description={"asd"} />
      <Wrapper>
        <BgImage bgImage="/images/home/bannerImage.png">
          <MainContainer>
            <Text
              color={colors.white}
              size="54px"
              margin="20% 0"
              fontStyle={fonts.f500}
              preline
            >
              {t("home.mainText")}
            </Text>
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
          {productStore?.forYou.length && (
            <Slider
              title={t("home.forYou")}
              items={productStore?.forYou}
              variant="cards"
            />
          )}
          {productStore?.sales.length && (
            <Slider
              title={t("home.popularAcc")}
              items={productStore?.sales}
              variant="cards"
            />
          )}

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
