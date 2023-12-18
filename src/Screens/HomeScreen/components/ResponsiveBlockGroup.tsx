import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { metrics } from "../../../../theme/metrics";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../theme/fonts";
import { Children } from "react";
import { ButtonCustom } from "@/components/ButtonCustom/ButtonCustom";

const GROUP1 = [
  {
    bg: "/images/home/workshop.png",
    size: false,
  },
  {
    title: "BIKELOVE WORKSHOP",
    subTitle:
      "Веломастерская, в которой мы оказываем услуги гарантийного и послегарантийного обслуживания и ремонта велосипедов.",
    bgColor: "rgba(57, 54, 24, 1)",
    size: false,
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
const Block = ({ title, subTitle, bgColor, bg, size, children }: any) => {
  return (
    <BlockWrapper bg={bg} size={size} bgColor={bgColor}>
      <>{children}</>
    </BlockWrapper>
  );
};

export const ResponsiveBlockGroup = ({ variant }: any) => {
  return (
    <MainWrapper>
      {variant === "1" && (
        <>
          <Container>
            <Text color={colors.black} size="42px" fontStyle={fonts.f500}>
              ПРОФЕСІЙНА ВЕЛОМАЙСТЕРНЯ
            </Text>
            <ContainerRow>
              <Block {...GROUP1[0]} />
              <Block {...GROUP1[1]}>
                <Text color={colors.white} size="40px" fontStyle={fonts.f700}>
                  BIKELOVE WORKSHOP
                </Text>
                <Text color={colors.white} size="18px" fontStyle={fonts.f500}>
                  Веломастерская, в которой мы оказываем услуги гарантийного и
                  послегарантийного обслуживания и ремонта велосипедов.
                </Text>
                <Input placeholder=" Номер телефону" />
                <ButtonCustom
                  width={"264px"}
                  height={"50px"}
                  type={"default"}
                  label="Безкоштовна консультація"
                />
              </Block>
            </ContainerRow>
          </Container>
        </>
      )}
      {variant === "2" && (
        <>
          <Container>
            <Text color={colors.black} size="42px" fontStyle={fonts.f500}>
              ПРО НАС
            </Text>
          </Container>
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
  height: ${(p) => (p.size ? "550px" : "330px")};
  padding: 30px 50px 48px 50px;
  background-image: url(${(p) => p.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  background-color: ${(p) => p.bg || p.bgColor};
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${metrics.mobile}) {
    height: ${(p) => (p.size ? "402px" : "330px")};
    padding: 24px 24px 24px 24px;
  }
`;
const MainWrapper = styled.div`
  margin-top: 31px;
  @media (max-width: ${metrics.mobile}) {
    margin-top: 30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const ContainerRow = styled.div`
  display: flex;
  column-gap: 30px;
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
`;
const ResContainer = styled.div`
  display: none;
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
  }
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  border: 1px solid ${colors.grayBorder};
  border-radius: 5px;
  height: 48px;
  padding: 0 30px;
  box-sizing: border-box;
`;
