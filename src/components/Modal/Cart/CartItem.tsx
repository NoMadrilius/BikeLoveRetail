import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../theme/fonts";
import { prettyPrice } from "@/helpers/stringDecorate/stringDecorate";
import { templates } from "../../../../theme/templates";
import { FC, useState } from "react";

type Props = {
  name: string;
  sale: number;
  lastPrice: string;
  price: string;
};

const CartItem: FC<Props> = ({ name, sale, lastPrice, price }) => {
  const [count, setCount] = useState(1);

  const counterHandler = (symbol: string) => {
    if (symbol === "plus") {
      setCount((prev) => prev + 1);
    }
    if (symbol === "minus" && count > 1) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <Wrapper>
      <Picture src="/mock/testCardByPropose.png" />
      <InfoContainer>
        <Text color={colors.black} size="16px" fontStyle={fonts.f600}>
          {name}
        </Text>
        <InfoBottomContainer>
          {sale && (
            <SalePatch>
              <Text color={colors.white} size="14px" fontStyle={fonts.f400}>
                -{sale}%
              </Text>
            </SalePatch>
          )}

          <Text
            color={colors.grayMain}
            size="16px"
            fontStyle={fonts.f400}
            textDecoration="trought"
          >
            {prettyPrice(lastPrice)} UAH
          </Text>
          <Text color={colors.black} size="16px" fontStyle={fonts.f400}>
            {prettyPrice(price)} UAH
          </Text>
        </InfoBottomContainer>
      </InfoContainer>
      <RightContainer>
        <CounterContainer>
          <Text
            color={colors.black}
            size="21px"
            fontStyle={fonts.f400}
            func={() => counterHandler("minus")}
          >
            -
          </Text>
          <CounterBox>
            <Text color={colors.black} size="17px" fontStyle={fonts.f400}>
              {count}
            </Text>
          </CounterBox>
          <Text
            color={colors.black}
            size="21px"
            fontStyle={fonts.f400}
            func={() => counterHandler("plus")}
          >
            +
          </Text>
        </CounterContainer>
        <Text
          color={colors.black}
          size="21px"
          fontStyle={fonts.f400}
          maxWidth="146px"
          whiteSpace
        >
          {prettyPrice(count * +price)} UAH
        </Text>
      </RightContainer>
    </Wrapper>
  );
};
export default CartItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
  border-bottom: 1px solid ${colors.grayBorder};
  @media (max-width: 765px) {
    row-gap: 13px;
    flex-wrap: wrap;
  }
`;
const Picture = styled.img`
  padding: 10px;
  width: 164px;
  height: 112px;
  border: 1px solid ${colors.grayBorder};
  border-radius: 10px;
  flex-shrink: 0;
`;
const InfoBottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 21px;
  align-items: center;
  gap: 6px;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0 auto 0 20px;
  flex-shrink: 0;
  @media (max-width: 765px) {
    margin: 0 auto 0 0;
  }
`;
const SalePatch = styled.div`
  background-color: ${colors.redMain};
  padding: 5px 7px;
  border-radius: 5px;
`;
const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 23px;
  @media (max-width: 1085px) {
    column-gap: 7px;
  }
`;
const CounterBox = styled.div`
  width: 45px;
  height: 45px;
  ${templates.centerContent};
  border: 1px solid ${colors.grayBorder};
  border-radius: 5px;
  @media (max-width: 850px) {
    width: 32px;
    height: 32px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  column-gap: 71px;
  align-items: center;
  @media (max-width: 1085px) {
    column-gap: 14px;
  }
`;
