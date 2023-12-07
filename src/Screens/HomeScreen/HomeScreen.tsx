import Header from "@/components/Header/Header";
import { BgImage, MainContainer, Wrapper } from "./HomeScreenStyles";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../theme/colors";
import useWindowWidth from "@/helpers/hooks/useWindowWidth";

const HomeScreen = () => {
  const windowWidth = useWindowWidth();
  const titleSize =
    windowWidth < 1200 ? "43px" : windowWidth < 720 ? "24px" : "54px";
  const titleMargin = windowWidth > 1400 ? "10% 124px" : "20% 24px";
  return (
    <Wrapper>
      <BgImage bgImage="/images/home/bannerImage.png">
        <Header opacityBg />
        <Text color={colors.white} size={titleSize} margin={titleMargin}>
          Лови возможность
          <br /> проехать больше маршрутов
        </Text>
      </BgImage>
      <MainContainer></MainContainer>
    </Wrapper>
  );
};
export default HomeScreen;
