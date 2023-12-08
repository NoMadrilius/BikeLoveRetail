"use client";

import Header from "@/components/Header/Header";
import { BgImage, MainContainer, Wrapper } from "./HomeScreenStyles";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import ByPropose from "./components/ByPropose";
import { byProposeData, sliderData, sliderTags } from "@/mock/data";
import { ResponsiveBlockGroup } from "./components/ResponsiveBlockGroup";
import Slider from "./components/Slider";
import Subscribe from "./components/Subscribe";
import Footer from "@/components/Footer/Footer";

const HomeScreen = () => {
  return (
    <Wrapper>
      <BgImage bgImage="/images/home/bannerImage.png">
        <Header opacityBg />
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
        />
        <Slider
          title={"Популярные аксуссуары"}
          tags={sliderTags}
          items={sliderData}
        />
        <ResponsiveBlockGroup variant="2" />
        <Slider title={"Велоблог"} tags={[]} items={sliderData} />
      </MainContainer>
      <Subscribe bg={"/images/home/form-background.png"} />
      <Footer />
    </Wrapper>
  );
};
export default HomeScreen;
