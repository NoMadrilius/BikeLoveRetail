"use client";
import {
  BgImage,
  IconBottom,
  MainContainer,
  MainTitle,
  Wrapper,
} from "./HomeScreenStyles";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import ByPropose from "./components/ByPropose";
import { ResponsiveBlockGroup } from "./components/ResponsiveBlockGroup";
import Subscribe from "./components/Subscribe";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { observer } from "mobx-react";
import Slider from "./components/Slider";
import { useTranslation } from "react-i18next";
import {useRouter} from "next/router";
import {GenerateLink} from "@/helpers/GenerateLink";
import i18next from "i18next";
import {useAppStore} from "@/store/AppStore";
import HomeSchema from "@/helpers/Schemas/HomeSchema";

const HomeScreen = () => {
  const handleScrollToBottom = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };
  const r = useRouter()
  const c = useAppStore()
  const ITEMS = [
    {
      title: i18next.t("home.items.1"),
      picture: "/images/home/byPropose/1.png",
      link: GenerateLink(r, {basePath:'/catalog', queryParameters:{id:166}, slug:c.categories.find(n=>n.id === 166)?.transliterationName}),
      count: 250,
    },
    {
      title: i18next.t("home.items.2"),
      picture: "/images/home/byPropose/2.png",
      link: GenerateLink(r, {basePath:'/catalog', queryParameters:{id:170}, slug:c.categories.find(n=>n.id === 170)?.transliterationName}),
      count: 250,
    },
    {
      title: i18next.t("home.items.3"),
      picture: "/images/home/byPropose/3.png",
      link: GenerateLink(r, {basePath:'/catalog', queryParameters:{id:168}, slug:c.categories.find(n=>n.id === 168)?.transliterationName}),
      count: 250,
    },
    {
      title: i18next.t("home.items.4"),
      picture: "/images/home/byPropose/4.png",
      link: GenerateLink(r, {basePath:'/catalog', queryParameters:{id:169}, slug:c.categories.find(n=>n.id === 169)?.transliterationName}),
      count: 250,
    },
    {
      title: i18next.t("home.items.5"),
      picture: "/images/home/byPropose/5.png",
      link: GenerateLink(r, {basePath:'/catalog', queryParameters:{id:164}, slug:c.categories.find(n=>n.id === 164)?.transliterationName}),
      count: 250,
    },
    {
      title: i18next.t("home.items.6"),
      picture: "/images/home/byPropose/6.png",
      link: GenerateLink(r, {basePath:'/catalog', queryParameters:{id:165}, slug:c.categories.find(n=>n.id === 165)?.transliterationName}),
      count: 250,
    },
    {
      title: i18next.t("home.items.7"),
      picture: "/images/home/byPropose/7.png",
      link: GenerateLink(r, {basePath:'/catalog', queryParameters:{id:171}, slug:c.categories.find(n=>n.id === 171)?.transliterationName}),
      count: 250,
    },
    {
      title: i18next.t("home.items.8"),
      picture: "/images/home/byPropose/8.png",
      link: GenerateLink(r, {basePath:'/catalog', queryParameters:{id:197}, slug:c.categories.find(n=>n.id === 197)?.transliterationName}),
      count: 250,
    },
  ];

  const { t } = useTranslation();

  return (
    <>
      <UseMetaData title={"Найкрайщий магазин велосипедів BikeLove"} img={"/images/logo/logo.svg"} description={"Любов до кожної деталі вашого велосипеду - ось що визначає BikeLove. У нашому магазині ви знайдете широкий вибір найкращих моделей велосипедів, аксесуарів та екіпірування для всіх видів їзди. Наші експерти допоможуть вам знайти ідеальне спорядження, а наша любов до велосипедів зробить ваші поїздки ще більш приємними та комфортними. Приєднуйтесь до нашої спільноти BikeLove та відчуйте справжню любов до їзди!"} />
      <HomeSchema/>
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
          {
            //<ByPropose items={ITEMS}/>
          }
          <ResponsiveBlockGroup variant="1" />
          {[].length ? (
            <Slider
              title={t("home.forYou")}
              items={[]}
              variant="cards"
            />
          ) : null}
          {[].length ? (
            <Slider
              title={t("home.popularAcc")}
              items={[]}
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
