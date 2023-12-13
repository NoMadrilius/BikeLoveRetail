import { styled } from "styled-components";
import { Header, NumberContainer, Wrapper } from "./Registration";
import { Text } from "@/components/Text/Text";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import { templates } from "../../../../theme/templates";

const DeliveryInfo = () => {
  return (
    <Wrapper>
      <Header>
        <NumberContainer>
          <Text color={colors.black} size="15px" fontStyle={fonts.f500}>
            2
          </Text>
        </NumberContainer>
        <Text color={colors.black} size="22px" fontStyle={fonts.f600}>
          ИНФОРМАЦИЯ О ДОСТАВКЕ
        </Text>
      </Header>
      <Container>
        <ButtonsContainer>
          <Button>
            <Text color={colors.black} size="15px" fontStyle={fonts.f400}>
              Самовывоз
            </Text>
          </Button>
          <Button>
            <Text color={colors.black} size="15px" fontStyle={fonts.f400}>
              Новая почта
            </Text>
          </Button>
        </ButtonsContainer>
        <Select></Select>
        <Select></Select>
      </Container>
    </Wrapper>
  );
};
export default DeliveryInfo;

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 13px;
`;
const Button = styled.div`
  width: 217px;
  height: 56px;
  ${templates.centerContent};
  border: 1px solid ${colors.grayBorder};
  cursor: pointer;
  border-radius: 5px;
`;
const Select = styled.div`
  display: flex;
  align-items: center;
  width: 589px;
  height: 75px;
  box-sizing: border-box;
  padding: 19px 35px;
  border: 1px solid ${colors.grayBorder};
  cursor: pointer;
  border-radius: 5px;
  @media (max-width: 756px) {
    width: 100%;
  }
`;
const Container = styled.div`
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  margin-left: 78px;
  row-gap: 32px;
  @media (max-width: 756px) {
    margin-left: 0;
  }
`;
