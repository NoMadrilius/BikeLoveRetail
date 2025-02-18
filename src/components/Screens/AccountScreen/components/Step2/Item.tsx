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
import {OrderFullData} from "@/dataTransferObjects/entities/OrderFullData";
import { Typography } from "@mui/material";

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
      case "WaitingForPayment":
        return {
          title: "Очікує сплати",
          color: colors.redMain,
        };
      case "Created":
        return {
          title: "Очікує підтвердження",
          color: colors.redMain,
        };
      case "WaitingLogistic":
        return {
          title: "Очікує логістики",
          color: colors.green,
        };
      case "WaitingForCollection":
        return {
          title: "На збірці",
          color: colors.grayMain,
        };
      case "ReadyInShop":
        return {
          title: "Готово та очікує в магазині",
          color: colors.grayMain,
        };
      case "WaitingForShipping":
        return {
          title: "Очікує на відправку",
          color: colors.grayMain,
        };
      case "Shipped":
        return {
          title: "Відправлено",
          color: colors.grayMain,
        };
      case "Finished":
        return {
          title: "Завершено",
          color: colors.grayMain,
        };
      case "Canceled":
        return {
          title: "Скасовано",
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
          <Typography color={colors.black} fontSize="18px" fontStyle={fonts.f600}>
            {t("account.item.order")} №{324234}
          </Typography>
          <Typography color={colors.black} fontSize="26px" fontStyle={fonts.f600}>
            {prettyPrice(data.order.totalPrice)}
          </Typography>
          <Typography color={colors.grayMain} fontSize="13px" fontStyle={fonts.f400}>
            {t("account.item.sostav")} {data.products.length}
            {t("account.item.quantityName")}
          </Typography>
        </InfoWrapper>
        <ImagesWrapper>
          {data.products.map((el, index) => (
            <ItemImage src="/mock/NoPhoto.png" key={index} />
          ))}
        </ImagesWrapper>
        <Info2Wrapper>
          <Typography color={colors.black} fontSize="15px" fontStyle={fonts.f400}>
            {prettyDate(data.order.createdAt)}
          </Typography>
          <Typography
            color={statusData()?.color as string}
            fontSize="16px"
            fontStyle={fonts.f700}
          >
            {statusData()?.title}
          </Typography>
          <RowContainer
            style={{ cursor: "pointer" }}
            onClick={() => setOpenDetails(!openDetails)}
          >
            <Typography
              color={colors.black}
              fontSize="15px"
              fontStyle={fonts.f400}
            >
              {t("account.item.orderDetails")}
            </Typography>
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
            <Typography color={colors.black} fontSize="18px" fontStyle={fonts.f600}>
              {t("account.item.delivery")}
            </Typography>
            <Typography
              color={colors.black}
              fontSize="15px"
              fontStyle={fonts.f400}
              margin="32px 0 0 0"
            >
              {deliveryString}
            </Typography>
            <Typography color={colors.black} fontSize="15px" fontStyle={fonts.f400}>
              {deliveryLocationString}
            </Typography>

            <Typography
              color={colors.black}
              fontSize="18px"
              fontStyle={fonts.f600}
              margin="20px 0 0 0"
            >
              {t("account.item.pay")}
            </Typography>
            {
              data.order.isPayed?
                  <Typography
                      color={colors.green}
                      fontSize="18px"
                      fontStyle={fonts.f600}
                      margin="20px 0 0 0"
                  >
                    Замовлення оплачено
                  </Typography>
                  :
                  <>
                  <Typography
                      color={colors.redMain}
                      fontSize="18px"
                      fontStyle={fonts.f600}
                      margin="20px 0 0 0"
                  >
                    Замовлення очікує оплати
                  </Typography>
                    {
                      data.order.isPrePay?
                          <Typography
                              color={colors.black}
                              fontSize="15px"
                              fontStyle={fonts.f400}
                              margin="22px 0 0 0"
                          >
                            Замовлення буде оброблено після оплати
                          </Typography>
                          :
                          <Typography
                              color={colors.black}
                              fontSize="15px"
                              fontStyle={fonts.f400}
                              margin="22px 0 0 0"
                          >
                            Оплата при отриманні
                          </Typography>

                    }
                  </>
            }

          </DetailsInfo>

          <ColumnContainer style={{ width: "100%", rowGap: " 13px" }}>
            {data.products.map((el, index) => (
              <DetailItemsWrapper key={index}>
                <ItemImage src="/mock/NoPhoto.png" />
                <DetailItemInfo>
                  <Typography color={colors.black} fontSize="15px" fontStyle={fonts.f400}>
                    {el.name}
                  </Typography>
                </DetailItemInfo>
                <QuantityItem>
                  <Typography
                    color={colors.black}
                    fontSize="15px"
                    fontStyle={fonts.f400}
                  >
                    1 шт
                  </Typography>
                  <Typography
                    color={colors.black}
                    fontSize="15px"
                    fontStyle={fonts.f400}
                  >
                    {prettyPrice(el.price)}
                  </Typography>
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
