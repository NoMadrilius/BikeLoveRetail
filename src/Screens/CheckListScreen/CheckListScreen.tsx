import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { Text } from "@/components/Text/Text";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { styled } from "styled-components";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import Registration from "./components/Registration";
import DeliveryInfo from "./components/DeliveryInfo";
import PayInfo from "./components/PayInfo";
import ListItems from "./components/ListItems";

const CheckListScreen = () => {
  const road = [
    { title: "Корзина", link: "/" },
    { title: "Оформление заказа", link: "/" },
  ];

  return (
    <>
      <UseMetaData
        title={"Оформление заказа"}
        img={""}
        description={"толдфыад"}
      />
      <Wrapper>
        <BreadCrumbs road={road} />

        <Container>
          <Left>
            <Registration />
            <DeliveryInfo />
            <PayInfo />
          </Left>
          <Line />
          <Right>
            <ListItems />
          </Right>
        </Container>
      </Wrapper>
    </>
  );
};
export default CheckListScreen;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;
const Container = styled.div`
  display: flex;
  column-gap: 23px;
  @media (max-width: 1245px) {
    flex-direction: column-reverse;
    align-items: center;
    row-gap: 23px;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 55%;
  @media (max-width: 1245px) {
    width: 100%;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  @media (max-width: 1245px) {
    width: 100%;
  }
`;
const Line = styled.div`
  width: 1px;
  height: 1327px;
  background-color: ${colors.grayBorder};
  @media (max-width: 1245px) {
    display: none;
  }
`;
