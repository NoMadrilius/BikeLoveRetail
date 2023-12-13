import { Text } from "@/components/Text/Text";
import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";

const ListItems = () => {
  return (
    <>
      <Wrapper>
        <Text color={colors.black} size="22px" fontStyle={fonts.f600}>
          СОСТАВ ЗАКАЗА
        </Text>
        <ItemWrapper>
          <Picture src="/mock/testCardByPropose.png" />
          <ColumnContainer>
            <Text color={colors.black} size="16px" fontStyle={fonts.f600}>
              S-Works Tarmac SL7 - SRAM Red eTap AXS
            </Text>
            <Text color={colors.black} size="15px" fontStyle={fonts.f400}>
              Размер: 28
            </Text>
            <RowContainer>
              <Text color={colors.black} size="16px" fontStyle={fonts.f400}>
                65 000 UAH
              </Text>
              <Text color={colors.black} size="16px" fontStyle={fonts.f400}>
                2 шт
              </Text>
            </RowContainer>
          </ColumnContainer>
        </ItemWrapper>
      </Wrapper>
    </>
  );
};
export default ListItems;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const ItemWrapper = styled.div`
  display: flex;
  column-gap: 32px;
  margin-top: 20px;
  padding: 21px 0;
  border-bottom: 1px solid ${colors.grayBorder};
`;
const Picture = styled.img`
  border: 1px solid ${colors.grayBorder};
  border-radius: 10px;
  width: 201px;
  height: 137px;
  @media (max-width: 756px) {
    width: 123px;
    height: 85px;
  }
`;
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 20px;
`;
const RowContainer = styled.div`
  display: flex;
  column-gap: 50px;
`;
