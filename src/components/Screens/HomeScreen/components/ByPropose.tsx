import { Text } from "@/components/Text/Text";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { styled } from "styled-components";
import { FC } from "react";
import { templates } from "../../../../../theme/templates";
import { metrics } from "../../../../../theme/metrics";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { SecondaryTitle } from "../HomeScreenStyles";

type Props = {
  items: {
    title: string;
    picture: string;
    link: string;
    count: number;
  }[];
};

const ByPropose: FC<Props> = ({ items }) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <SecondaryTitle $fontStyle={fonts.f500} $fontSize="42px" color="black">
          {t("home.items.title")}
        </SecondaryTitle>

        <GridContainer>
          {items.map((el, index) => (
            <Link href={el.link || "/"}>
              <CardWrapper key={index}>
                <Picture
                  width={200}
                  height={100}
                  alt="Propose Image"
                  src={el.picture}
                />
                <Text
                  color={colors.black}
                  size="16px"
                  fontStyle={fonts.f500}
                  margin="0 auto 0 0"
                >
                  {el.title}
                </Text>
                <Text
                  color={colors.grayMain}
                  size="12px"
                  fontStyle={fonts.f500}
                  margin="0 auto 0 0"
                >
                  {el.count} {t("home.items.bikes")}
                </Text>
              </CardWrapper>
            </Link>
          ))}
        </GridContainer>
      </Wrapper>
    </>
  );
};
export default ByPropose;

const Wrapper = styled.section`
  margin-top: 120px;
  @media (max-width: ${metrics.mobile}) {
    margin-top: 60px;
  }
`;
const GridContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  gap: 24px;
  width: 100%;
  @media (max-width: ${metrics.desktop}) {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }
  @media (max-width: ${metrics.mobile}) {
    margin-top: 25px;
    grid-template-columns: repeat(2, minmax(150px, 1fr));
    gap: 10px;
  }

  & > div {
    width: 100%;
  }
`;
const CardWrapper = styled.div`
  ${templates.centerContent};
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 30px 22px 10px;
  cursor: pointer;
`;
const Picture = styled(Image)`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  @media (max-width: ${metrics.mobile}) {
    margin-bottom: 5px;
  }
`;
