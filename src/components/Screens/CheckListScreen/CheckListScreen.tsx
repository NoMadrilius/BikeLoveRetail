import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { Text } from "@/components/Text/Text";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { styled } from "styled-components";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import Registration from "./components/Registration";
import DeliveryInfo from "./components/DeliveryInfo";
import PayInfo from "./components/PayInfo";
import ListItems from "./components/ListItems";
import { useCartStore } from "@/store/CartStore";
import { useEffect, useState } from "react";
import { IOrderData } from "@/types/types";
import { prettyPrice } from "@/helpers/stringDecorate/stringDecorate";
import { useCurrencyStore } from "@/store/CurrencyStore";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import {Product} from "@/dataTransferObjects/entities/Product";

const CheckListScreen = () => {
  const { t } = useTranslation();
  const road = [
    { title: "Корзина", link: "/" },
    { title: "Оформление заказа", link: "/" },
  ];

  const [sendData, setSendData] = useState<IOrderData>({
    order: {
      deliveryType: "",
      deliveryInfo: "",
      descriptionCilent: "asd",
      discountId: 0,
      clientId: "",
    },
    products: [],
  });

  const cartStore = useCartStore();
  const [cart, setCart] = useState<Product[]>([]);
  const currStore = useCurrencyStore();
  const [priceStr, setPriceStr] = useState<any>();
  const price = cart.reduce(
    (acc, item) => acc + item.retailPrice //* item.quantity
      ,
    0
  );
  useEffect(() => {
    setPriceStr(price ? prettyPrice(price) : 0);
  }, [price, currStore.selectedCurrency, currStore]);

  useEffect(() => {
    setCart(cartStore.cart);

    const mappedProducts = cartStore?.cart?.map((product: any) => ({
      productId: product.categoryId,
      description: "",
      quantity: product.quantity,
      discountId: 0,
    }));

    // @ts-ignore
    setSendData((prevData) => ({
      ...prevData,
      products: mappedProducts,
    }));
  }, [cartStore?.cart]);
  return (
    <>
      <UseMetaData
        title={"Оформление заказа"}
        img={""}
        description={"Оформление заказа Оформление заказа Оформление заказа"}
      />
      <Wrapper>
        <BreadCrumbs road={road} />

        <Container>
          <Left>
            <Registration setSendData={setSendData} />
            <DeliveryInfo setSendData={setSendData} />
            <PayInfo setSendData={setSendData} data={sendData} />
          </Left>
          <Line />
          <Right>
            <Text
              color={colors.black}
              size="22px"
              fontStyle={fonts.f600}
              textTransform="uppercase"
            >
              {t("checkList.orderContents")}
            </Text>
            {cart && (
              <>
                {cart?.map((el, index) => (
                  <ListItems data={el} key={index} />
                ))}
              </>
            )}
            <TotalPrice>
              <Text
                color={colors.black}
                size="18px"
                fontStyle={fonts.f400}
                margin="0 auto 0 0"
                textTransform="uppercase"
              >
                {t("checkList.total")}
              </Text>
              <Text
                color={colors.black}
                size="18px"
                fontStyle={fonts.f400}
                margin="0 0 0 auto"
              >
                {priceStr}
              </Text>
            </TotalPrice>
          </Right>
        </Container>
      </Wrapper>
    </>
  );
};
export default observer(CheckListScreen);
//
const TotalPrice = styled.div`
  display: flex;
  padding: 35px 39px;
  background-color: ${colors.redBlur};
  border-radius: 15px;
  margin-top: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
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
