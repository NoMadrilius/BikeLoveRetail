import { styled } from "styled-components";
import { Text } from "../Text/Text";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import { FC } from "react";

type Props = {
  road: {
    title: string;
    link: string;
  }[];
};

const BreadCrumbs: FC<Props> = ({ road }) => {
  return (
    <>
      <Wrapper>
        <img src="/icons/House.png" />
        {road.map((el, index) => (
          <>
            <Line key={index} />
            <Text
              color={index === road.length - 1 ? colors.grayMain : colors.black}
              size="13px"
              fontStyle={fonts.f400}
              hoverColor={
                index !== road.length - 1 ? colors.redHover : undefined
              }
            >
              {el.title}
            </Text>
          </>
        ))}
      </Wrapper>
    </>
  );
};
export default BreadCrumbs;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  column-gap: 8px;
`;
const Line = styled.div`
  width: 17px;
  height: 1px;
  background-color: ${colors.black};
`;
