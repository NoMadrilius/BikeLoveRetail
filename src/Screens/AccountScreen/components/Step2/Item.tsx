import { Text } from "@/components/Text/Text";
import { FC, useState } from "react";
import { styled } from "styled-components";
import { colors } from "../../../../../theme/colors";
import { fonts } from "../../../../../theme/fonts";
import { prettyPrice } from "@/helpers/stringDecorate/stringDecorate";

type ItemI = {
  title: string;
  price: string;
  img: string;
};
type Props = {
  orderNumber: string;
  status: number;
  date: string;
  items: ItemI[];
};

const Item: FC<Props> = ({ date, items, orderNumber, status }) => {
  const statusData = () => {
    switch (status) {
      case 0:
        return {
          title: "",
          color: colors.redMain,
        };
      case 1:
        return {
          title: "В работе",
          color: colors.redMain,
        };
      case 2:
        return {
          title: "Завершен",
          color: colors.green,
        };
      case 3:
        return {
          title: "Отменен",
          color: colors.grayMain,
        };

      default:
        break;
    }
  };
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <>
      <Wrapper>
        <InfoWrapper>
          <Text color={colors.black} size="18px" fontStyle={fonts.f600}>
            ЗАКАЗ №{orderNumber}
          </Text>
          <Text color={colors.black} size="26px" fontStyle={fonts.f600}>
            {prettyPrice("124124")} UAH
          </Text>
          <Text color={colors.grayMain} size="13px" fontStyle={fonts.f400}>
            Состав заказа: 2ед
          </Text>
        </InfoWrapper>
        <ImagesWrapper>
          {items.map((el, index) => (
            <ItemImage src={el.img} key={index} />
          ))}
        </ImagesWrapper>
        <Info2Wrapper>
          <Text color={colors.black} size="15px" fontStyle={fonts.f400}>
            {date}
          </Text>
          <Text color={statusData()?.color!} size="16px" fontStyle={fonts.f700}>
            {statusData()?.title}
          </Text>
          <RowContainer
            style={{ cursor: "pointer" }}
            onClick={() => setOpenDetails(!openDetails)}
          >
            <Text color={colors.black} size="15px" fontStyle={fonts.f400}>
              Детали заказа
            </Text>
            <img src="/images/product/icons/Arrow_Bottom.png" />
          </RowContainer>
        </Info2Wrapper>
      </Wrapper>
      {openDetails && (
        <HiddenWrapper>
          <DetailsInfo>
            <Text color={colors.black} size="18px" fontStyle={fonts.f600}>
              Доставка
            </Text>
            <Text
              color={colors.black}
              size="15px"
              fontStyle={fonts.f400}
              margin="32px 0 0 0"
            >
              Самовывоз из наших магазинов
            </Text>
            <Text color={colors.black} size="15px" fontStyle={fonts.f400}>
              Киев, ул. Строителей, д.12/1
            </Text>
            <Text
              color={colors.grayMain}
              size="12px"
              fontStyle={fonts.f400}
              margin="21px 0 0 0"
            >
              График работы:
            </Text>
            <Text
              color={colors.grayMain}
              size="12px"
              fontStyle={fonts.f400}
              margin="5px 0 0 0"
            >
              Пн-Сб:10:00-21:00
            </Text>
            <Text color={colors.grayMain} size="12px" fontStyle={fonts.f400}>
              Вс: 10:00-18:00
            </Text>
            <Text
              color={colors.black}
              size="18px"
              fontStyle={fonts.f600}
              margin="20px 0 0 0"
            >
              Оплата
            </Text>
            <Text
              color={colors.black}
              size="15px"
              fontStyle={fonts.f400}
              margin="22px 0 0 0"
            >
              Наличными при получении
            </Text>
          </DetailsInfo>

          <ColumnContainer style={{ width: "100%", rowGap: " 13px" }}>
            {items.map((el, index) => (
              <DetailItemsWrapper key={index}>
                <ItemImage src={el.img} />
                <DetailItemInfo>
                  <Text color={colors.black} size="15px" fontStyle={fonts.f400}>
                    {el.title}
                  </Text>
                  <Text
                    color={colors.black}
                    size="15px"
                    fontStyle={fonts.f400}
                    margin="10px 0 0 0"
                  >
                    Размер: 28
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
                    {prettyPrice(el.price)} UAH
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
export default Item;

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
`;
