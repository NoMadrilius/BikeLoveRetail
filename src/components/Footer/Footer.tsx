import { styled } from "styled-components";
import { colors } from "../../../theme/colors";
import { footerItems } from "@/mock/data";
import { Text } from "../Text/Text";
import { fonts } from "../../../theme/fonts";
import { metrics } from "../../../theme/metrics";
import { Logo } from "../Header/HeaderStyles";
import { useEffect, useState } from "react";

const rights = ["@ 2023", "Все права защищены", "Публичная оферта"];

const Footer = () => {
  const [max, setMax] = useState(0);
  const [itemsToRender, setItemsToRender] = useState<any>(footerItems);

  useEffect(() => {
    setMax(window.innerWidth);
  }, []);
  useEffect(() => {
    setItemsToRender(max > 1444 ? footerItems : footerItems.slice(-2));
  }, [max]);
  return (
    <Wrapper>
      <ItemsContainer>
        <Logo
          style={{
            border: "2px solid white",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
          src="/images/logo/logo.svg"
        />
        {rights.map((el, index) => (
          <Text
            key={index}
            color={colors.white}
            size="14px"
            fontStyle={fonts.f400}
          >
            {el}
          </Text>
        ))}
      </ItemsContainer>
      {itemsToRender.map((el: any, index: any) => (
        <ItemsContainer key={index}>
          <Text
            color={colors.white}
            size="14px"
            fontStyle={fonts.f400}
            textTransform="uppercase"
            margin="0 0 20px 0"
          >
            {el.title}
          </Text>
          {el.items.map((el: any, index: any) => (
            <Text
              key={index}
              color={colors.white}
              size="14px"
              fontStyle={fonts.f400}
              hoverColor={colors.redHover}
            >
              {el}
            </Text>
          ))}
        </ItemsContainer>
      ))}
      <></>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 366px;
  background-color: rgba(17, 17, 17, 1);
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 47px 124px;
  @media (max-width: ${metrics.desktop}) {
    padding: 47px 24px;
  }
  @media (max-width: ${metrics.mobile}) {
    padding: 47px 20px;
  }
`;
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
