import { styled } from "styled-components";
import { Text } from "../Text/Text";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import { FC } from "react";
import { metrics } from "../../../theme/metrics";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  road: {
    title: string;
    link: string;
  }[];
};

const BreadCrumbs: FC<Props> = ({ road }) => {
  const router = useRouter();
  return (
    <>
      <Wrapper>
        <img src="/icons/House.png" />
        {road.map((el, index) => (
          <Container key={index}>
            <Line />

            <Text
              color={index === road.length - 1 ? colors.grayMain : colors.black}
              size="13px"
              fontStyle={fonts.f400}
              hoverColor={
                index !== road.length - 1 ? colors.redHover : undefined
              }
              func={() => router.push(el.link)}
            >
              {el.title}
            </Text>
          </Container>
        ))}
      </Wrapper>
    </>
  );
};
export default BreadCrumbs;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0 30px 0;
  @media (max-width: ${metrics.mobile}) {
    margin: 43px 0 16px 0;
  }
`;
const Line = styled.div`
  width: 17px;
  height: 1px;
  background-color: ${colors.black};
  margin-left: 8px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
