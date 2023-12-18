import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { styled } from "styled-components";
import { metrics } from "../../../theme/metrics";
import { templates } from "../../../theme/templates";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../theme/fonts";
import { colors } from "../../../theme/colors";

const GratitudeScreen = () => {
  return (
    <>
      <>
        <UseMetaData title={"Спасибо !"} img={""} description={""} />
        <Wrapper>
          <Modal>
            <Text
              size="32px"
              fontStyle={fonts.f500}
              color={colors.white}
              textAlign="center"
            >
              Спасибо за заказ!
            </Text>
            <Text
              size="16px"
              fontStyle={fonts.f500}
              color={colors.white}
              textAlign="center"
            >
              Мы отправим Вам подтверждение со всей информацией на
              komarow@gmail.com, а также Вы статус заказа отразится в личном
              кабинете.
            </Text>
            <Text
              size="16px"
              fontStyle={fonts.f500}
              color={colors.white}
              textAlign="center"
            >
              Номер Вашего заказа
              <Text
                size="18px"
                fontStyle={fonts.f500}
                color={colors.white}
                textAlign="center"
              >
                456544
              </Text>
            </Text>
          </Modal>
        </Wrapper>
      </>
    </>
  );
};
export default GratitudeScreen;

const Wrapper = styled.div`
  ${templates.centerContent};
  background-image: url("/images/gratitude/bg.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: calc(100vh - 90px);
  margin-top: 90px;
  @media (max-width: ${metrics.mobile}) {
    margin-top: 74px;
    height: calc(100vh - 74px);
  }
`;
const Modal = styled.div`
  width: 671px;
  height: 370px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  padding: 75px;
`;
