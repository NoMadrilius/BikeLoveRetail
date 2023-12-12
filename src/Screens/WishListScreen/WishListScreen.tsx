import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { PaddingWrapper } from "../../../theme/templates";
import { styled } from "styled-components";
import Slider from "@/Screens/HomeScreen/components/Slider";
import { sliderData } from "@/mock/data";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { metrics } from "../../../theme/metrics";

const WishListScreen = () => {
  const road = [
    { title: "Личный кабинет", link: "/" },
    { title: "Список желайний", link: "/" },
  ];
  return (
    <>
      <UseMetaData title={"Wish List"} img={""} description={"sdasd"} />

      <Wrapper>
        <BreadCrumbs road={road} />
        <Slider title={"список желаний"} items={sliderData} variant={"cards"} />
      </Wrapper>
    </>
  );
};
export default WishListScreen;

const Wrapper = styled.div`
  margin: 60px 0 160px 0;
  @media (max-width: ${metrics.mobile}) {
    margin: 30px 0 111px 0;
  }
`;
