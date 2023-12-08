import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { metrics } from "../../../../theme/metrics";

const GROUP1 = [
  {
    title: "Выбери велосипед мечты",
    subTitle: "какак  кака ка",
    bg: "/images/home/choice.png",
    size: false,
  },
  {
    title: "Новая коллекция осенней одежды Northwave",
    subTitle:
      "Хочешь кататься с комфортом даже в межсезонье? Тогда новая коллекция итальянского бренда Northwave ждёт тебя в наших магазинах.",
    bgColor: "rgba(57, 54, 24, 1)",
    size: true,
  },
  {
    bg: "/images/home/decor.png",
    size: true,
  },
];
const GROUP2 = [
  {
    title: "Новая коллекция осенней одежды Northwave",
    subTitle:
      "Хочешь кататься с комфортом даже в межсезонье? Тогда новая коллекция итальянского бренда Northwave ждёт тебя в наших магазинах.",
    bgColor: "gray",
    size: true,
  },
  {
    title: "Новая коллекция осенней одежды Northwave",
    subTitle:
      "Хочешь кататься с комфортом даже в межсезонье? Тогда новая коллекция итальянского бренда Northwave ждёт тебя в наших магазинах.",
    bg: "/images/home/decor.png",
    size: true,
  },
  {
    title: "Выбери велосипед мечты",
    subTitle: "какак  кака ка",
    bg: "/images/home/choice.png",
    size: false,
  },
  {
    title: "Новая коллекция осенней одежды Northwave",
    subTitle:
      "Хочешь кататься с комфортом даже в межсезонье? Тогда новая коллекция итальянского бренда Northwave ждёт тебя в наших магазинах.",
    bg: "/images/home/decor.png",
    size: false,
  },
  {
    title: "Новая коллекция осенней одежды Northwave",
    subTitle:
      "Хочешь кататься с комфортом даже в межсезонье? Тогда новая коллекция итальянского бренда Northwave ждёт тебя в наших магазинах.",
    bgColor: "rgba(57, 54, 24, 1)",
    size: false,
  },
];
const Block = ({ title, subTitle, bgColor, bg, size }: any) => {
  return (
    <BlockWrapper bg={bg} size={size} bgColor={bgColor}>
      <></>
    </BlockWrapper>
  );
};

export const ResponsiveBlockGroup = ({ variant }: any) => {
  return (
    <MainWrapper>
      {variant === "1" && (
        <>
          <Container>
            <Block {...GROUP1[0]} />
            <ContainerRow>
              <Block {...GROUP1[1]} />
              <Block {...GROUP1[2]} />
            </ContainerRow>
          </Container>
          <ResContainer>
            <Block {...GROUP1[0]} />
            <Block {...GROUP1[1]} />
            <Block {...GROUP1[2]} />
          </ResContainer>
        </>
      )}
      {variant === "2" && (
        <>
          <Container>
            <ContainerRow>
              <Block {...GROUP2[0]} />
              <Block {...GROUP2[1]} />
            </ContainerRow>
            <Block {...GROUP2[2]} />
            <ContainerRow>
              <Block {...GROUP2[3]} />
              <Block {...GROUP2[4]} />
            </ContainerRow>
          </Container>
          <ResContainer>
            <Block {...GROUP2[0]} />
            <Block {...GROUP2[1]} />
            <Block {...GROUP2[2]} />
            <Block {...GROUP2[3]} />
            <Block {...GROUP2[4]} />
          </ResContainer>
        </>
      )}
    </MainWrapper>
  );
};

const BlockWrapper = styled.div<{
  bg?: string;
  size: boolean;
  bgColor?: string;
}>`
  width: 100%;
  height: ${(p) => (p.size ? "482px" : "330px")};
  padding: 66px 50px;
  background-image: url(${(p) => p.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  background-color: ${(p) => p.bg || p.bgColor};
  border-radius: 30px;
  @media (max-width: ${metrics.mobile}) {
    height: ${(p) => (p.size ? "402px" : "330px")};
  }
`;
const MainWrapper = styled.div`
  margin-top: 120px;
  @media (max-width: ${metrics.mobile}) {
    margin-top: 60px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  @media (max-width: 950px) {
    display: none;
  }
`;

const ContainerRow = styled.div`
  display: flex;
  column-gap: 30px;
`;
const ResContainer = styled.div`
  display: none;
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
`;
