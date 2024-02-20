import { FC } from "react";
import { styled } from "styled-components";
import { RowContainer, SalePatch } from "../ProductScreenStyles";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { prettyPrice } from "@/helpers/stringDecorate/stringDecorate";

type Props = {
  oldPrice: any;
  newPrice: any;
};

const Discount: FC<Props> = ({ newPrice, oldPrice }) => {
  if (oldPrice !== 0 && oldPrice > newPrice) {
    const discount = ((oldPrice - newPrice) / oldPrice) * 100;
    return (
      <RowContainer style={{ alignItems: "center", marginTop: "22px" }}>
        <Text
          color={colors.grayMain}
          size="20px"
          fontStyle={fonts.f500}
          textDecoration="trought"
        >
          {prettyPrice(oldPrice)}UAH
        </Text>
        <SalePatch>{`-${Math.round(discount)}%`}</SalePatch>
      </RowContainer>
    );
  }
  return null;
};

export default Discount;

const Wrapper = styled.div``;
