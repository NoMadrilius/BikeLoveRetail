"use client";
import { BgImage, MainContainer, Wrapper } from "./HomeScreenStyles";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import ByPropose from "./components/ByPropose";
import { byProposeData, newsData, sliderData, sliderTags } from "@/mock/data";
import { ResponsiveBlockGroup } from "./components/ResponsiveBlockGroup";
import Slider from "./components/Slider";
import Subscribe from "./components/Subscribe";
import { UseMetaData } from "@/helpers/hooks/useMetaData";

const HomeScreen = () => {
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
            >
              Лови возможность <br />
              проехать больше маршрутов
            </Text>
          </MainContainer>
        </BgImage>
        <MainContainer>
          <ByPropose items={byProposeData} />

          <ResponsiveBlockGroup variant="1" />
          <Slider
            title={"Популярные велосипеды"}
            tags={sliderTags}
            items={sliderData}
            variant="cards"
          />
          <Slider
            title={"Популярные аксуссуары"}
            tags={sliderTags}
            items={sliderData}
            variant="cards"
          />
          <ResponsiveBlockGroup variant="2" />
          <Slider
            title={"Велоблог"}
            tags={[]}
            items={newsData}
            variant="news"
          />
        </MainContainer>
        <Subscribe bg={"/images/home/form-background.png"} />
      </Wrapper>
    </>
  );
};
export default HomeScreen;
