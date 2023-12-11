import { styled } from "styled-components";
import { colors } from "../../../theme/colors";
import BlurWrapper from "../BlurWrapper/BlurWrapper";
import { metrics } from "../../../theme/metrics";
import { Text } from "../Text/Text";
import { fonts } from "../../../theme/fonts";
import { useState } from "react";
import { CATEGORIES, CATEGORIES_TITLES } from "@/mock/data";

const Categories = ({ setVisible }: any) => {
  const [selectedTitle, setSelectedTitle] = useState(0);
  return (
    <BlurWrapper setModal={setVisible}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <MainColumn>
          {CATEGORIES_TITLES.map((el, index) => (
            <Text
              key={index}
              color={index === selectedTitle ? colors.redMain : colors.black}
              hoverColor={colors.redHover}
              size="15px"
              fontStyle={fonts.f600}
              func={() => setSelectedTitle(index)}
            >
              {el}
            </Text>
          ))}
        </MainColumn>
        <DetailsContainer>
          {CATEGORIES.map((el, index) => (
            <>
              <Text
                key={index}
                color={colors.black}
                hoverColor={colors.redHover}
                size="15px"
                fontStyle={fonts.f600}
              >
                {el.title}
              </Text>
              {el?.categories &&
                el.categories.map((el, index) => (
                  //нажатие вот тут
                  <Text
                    key={index}
                    color={colors.black}
                    hoverColor={colors.redHover}
                    size="15px"
                    fontStyle={fonts.f600}
                  >
                    {el.title}
                    {/* вот эта часть, что ниже должна открываться по нажатию */}
                    {el?.categories &&
                      el.categories.map((el, index) => (
                        <Text
                          key={index}
                          color={colors.black}
                          hoverColor={colors.redHover}
                          size="15px"
                          fontStyle={fonts.f400}
                          margin="10px 0 0 10px"
                        >
                          {el}
                        </Text>
                      ))}
                  </Text>
                ))}
            </>
          ))}
        </DetailsContainer>
      </Wrapper>
    </BlurWrapper>
  );
};
export default Categories;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  top: 90px;
  background-color: ${colors.white};
  width: 100%;
  height: 741px;
  padding: 0 124px;
  @media (max-width: ${metrics.desktop}) {
    padding: 0 24px;
  }
  @media (max-width: ${metrics.mobile}) {
    padding: 0 20px;
    top: 74px;
  }
`;
const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.redBlur};
  height: 100%;
  width: 322px;
  padding: 38px 47px;
  row-gap: 20px;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 38px 0 0 77px;
  row-gap: 16px;
`;
