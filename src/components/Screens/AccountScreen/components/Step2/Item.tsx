import { Text } from "@/components/Text/Text";
import { FC, useEffect, useState } from "react";
import { styled } from "styled-components";
import { colors } from "../../../../../../theme/colors";
import { fonts } from "../../../../../../theme/fonts";
import { prettyPrice } from "@/helpers/stringDecorate/stringDecorate";
import Image from "next/image";
import { prettyDate } from "@/helpers/stringDecorate/prettyDate";
import { useCurrencyStore } from "@/store/CurrencyStore";
import { observer } from "mobx-react";
import { useTranslation } from "react-i18next";
import {Order} from "@/dataTransferObjects/entities/Order";
import {OrderFullData} from "@/dataTransferObjects/entities/OrderFullData";

type Props = {
  data: OrderFullData;
};

const Item: FC<Props> = ({ data }) => {
  const { t } = useTranslation();
  const currStore = useCurrencyStore();
  const [priceStr, setPriceStr] = useState<number>(1);
  // const price = cart.reduce(
  // 	(acc, item) => acc + item.retailPrice * item.quantity,
  // 	0
  // );
  useEffect(() => {
    setPriceStr((prev) => prev + 1);
  }, [currStore.selectedCurrency, currStore]);
  console.log(priceStr);
  const statusData = () => {
    switch (data.order.orderStatus) {
      case "jibilix":
        return {
          title: "",
          color: colors.redMain,
        };
      case "Created":
        return {
          title: t("account.item.tab2"),
          color: colors.redMain,
        };
      case "sd":
        return {
          title: t("account.item.tab3"),
          color: colors.green,
        };
      case "asqr":
        return {
          title: t("account.item.tab4"),
          color: colors.grayMain,
        };

      default:
        break;
    }
  };
  const [openDetails, setOpenDetails] = useState(false);

  const deliveryString =
    data.order.deliveryType === "DeliveryNP"
      ? t("account.item.np")
      : t("account.item.selfDelivery");
  const deliveryLocationString =
    data.order.deliveryType === "DeliveryNP"
      ? //@ts-ignore
        JSON.parse(data.order.deliveryInfo).CityName +
        "  " +
        //@ts-ignore
        JSON.parse(data.order.deliveryInfo).Description
      : data.order.deliveryInfo;

  console.log(data.order.deliveryInfo);
  console.log(deliveryLocationString);
  console.log(deliveryString);
  console.log(data.order.createdAt);

  return (
    <>
      <Wrapper>
        <InfoWrapper>
          <Text color={colors.black} size="18px" fontStyle={fonts.f600}>
            {t("account.item.order")} №{324234}
          </Text>
          <Text color={colors.black} size="26px" fontStyle={fonts.f600}>
            {prettyPrice(data.order.totalPrice)}
          </Text>
          <Text color={colors.grayMain} size="13px" fontStyle={fonts.f400}>
            {t("account.item.sostav")} {data.products.length}
            {t("account.item.quantityName")}
          </Text>
        </InfoWrapper>
        <ImagesWrapper>
          {data.products.map((el, index) => (
            <ItemImage src="/mock/NoPhoto.png" key={index} />
          ))}
        </ImagesWrapper>
        <Info2Wrapper>
          <Text color={colors.black} size="15px" fontStyle={fonts.f400}>
            {prettyDate(data.order.createdAt)}
          </Text>
          <Text
            color={statusData()?.color as string}
            size="16px"
            fontStyle={fonts.f700}
          >
            {statusData()?.title}
          </Text>
          <RowContainer
            style={{ cursor: "pointer" }}
            onClick={() => setOpenDetails(!openDetails)}
          >
            <Text
              color={colors.black}
              size="15px"
              fontStyle={fonts.f400}
              whiteSpace
            >
              {t("account.item.orderDetails")}
            </Text>
            <Image
              alt="ArrowBottom"
              width={12}
              height={8}
              src="/images/product/icons/Arrow_Bottom.png"
            />
          </RowContainer>
        </Info2Wrapper>
      </Wrapper>
      {openDetails && (
        <HiddenWrapper>
          <DetailsInfo>
            <Text color={colors.black} size="18px" fontStyle={fonts.f600}>
              {t("account.item.delivery")}
            </Text>
            <Text
              color={colors.black}
              size="15px"
              fontStyle={fonts.f400}
              margin="32px 0 0 0"
            >
              {deliveryString}
            </Text>
            <Text color={colors.black} size="15px" fontStyle={fonts.f400}>
              {deliveryLocationString}
            </Text>
            {/* <Text
							color={colors.grayMain}
							size='12px'
							fontStyle={fonts.f400}
							margin='21px 0 0 0'>
							График работы:
						</Text>
						<Text
							color={colors.grayMain}
							size='12px'
							fontStyle={fonts.f400}
							margin='5px 0 0 0'>
							Пн-Сб:10:00-21:00
						</Text>
						<Text color={colors.grayMain} size='12px' fontStyle={fonts.f400}>
							Вс: 10:00-18:00
						</Text> */}
            <Text
              color={colors.black}
              size="18px"
              fontStyle={fonts.f600}
              margin="20px 0 0 0"
            >
              {t("account.item.pay")}
            </Text>
            <Text
              color={colors.black}
              size="15px"
              fontStyle={fonts.f400}
              margin="22px 0 0 0"
            >
              {t("account.item.payVar1")}
            </Text>
          </DetailsInfo>

          <ColumnContainer style={{ width: "100%", rowGap: " 13px" }}>
            {data.products.map((el, index) => (
              <DetailItemsWrapper key={index}>
                <ItemImage src="/mock/NoPhoto.png" />
                <DetailItemInfo>
                  <Text color={colors.black} size="15px" fontStyle={fonts.f400}>
                    {el.name}
                  </Text>
                </DetailItemInfo>
                <QuantityItem>
                  <Text
                    color={colors.black}
                    size="15px"
                    fontStyle={fonts.f400}
                    whiteSpace
                  >
                    1 шт
                  </Text>
                  <Text
                    color={colors.black}
                    size="15px"
                    fontStyle={fonts.f400}
                    whiteSpace
                  >
                    {prettyPrice(el.price)}
                  </Text>
                </QuantityItem>
              </DetailItemsWrapper>
            ))}
          </ColumnContainer>
        </HiddenWrapper>
      )}
    </>
  );
};
export default observer(Item);

const Wrapper = styled.div`
  display: flex;
  padding: 32px 0;
  column-gap: 54px;
  border-top: 1px solid ${colors.grayBorder};
  margin-top: 60px;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 252px;
`;
const ImagesWrapper = styled.div`
  display: flex;
  column-gap: 15px;
  @media (max-width: 1190px) {
    display: none;
  }
`;
const ItemImage = styled.img`
  padding: 5px;
  border: 1px solid ${colors.grayBorder};
  width: 127px;
  height: 84px;
`;
const Info2Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  align-items: end;
  margin-left: auto;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
`;
const HiddenWrapper = styled.div`
  display: flex;
  width: 100%;
  column-gap: 54px;
  @media (max-width: 1120px) {
    flex-direction: column-reverse;
    row-gap: 44px;
  }
`;
const DetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 252px;
`;
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const DetailItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  column-gap: 20px;
  @media (max-width: 1120px) {
    column-gap: 10px;
  }
`;
const DetailItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: 17px;
  @media (max-width: 1120px) {
    margin-left: 7px;
  }
`;
const QuantityItem = styled.div`
  display: flex;
  column-gap: 64px;
  @media (max-width: 600px) {
    flex-direction: column;
    row-gap: 5px;
  }
`;
