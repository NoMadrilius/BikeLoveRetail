"use client";
import { styled } from "styled-components";
import BlurWrapper from "../../BlurWrapper/BlurWrapper";
import { colors } from "../../../../theme/colors";
import { ButtonCustom } from "../../ButtonCustom/ButtonCustom";
import { fonts } from "../../../../theme/fonts";
import { prettyPrice } from "@/helpers/stringDecorate/stringDecorate";
import CartItem from "./CartItem";
import { useCartStore } from "@/store/CartStore";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

const Cart = () => {

  const { t } = useTranslation();

  const cartStore = useCartStore();
  const router = useRouter();

  const goTo = () => {
    router.push("/checklist");
    cartStore.setVisible(false);
  };

  return (
    <BlurWrapper onClick={()=>{cartStore.setVisible(false);}}>
      <ContentWrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton
          src="/icons/close_black.png"
          onClick={() => cartStore.setVisible(false)}
        />
        <Typography color={colors.black} fontSize="22px" fontStyle={fonts.f600}>
          {t("cart.cart")}
        </Typography>

        <ItemsContainer>
          {cartStore.cart.map((el, index) => (
            <CartItem
              key={index}
              d={el}
            />
          ))}
        </ItemsContainer>
        <BottomContainer>
          <ColumnContainer style={{ rowGap: "20px" }}>
            <ButtonCustom
              width={"254px"}
              height={"56px"}
              type={"white"}
              label={t("cart.continueBuy")}
              func={() => cartStore.setVisible(false)}
            />

            <InfoContainer>
              <Icon src="/icons/van.png" style={{ height: "28px" }} />
              <ColumnContainer>
                <Typography color={colors.black} fontSize="16px" fontStyle={fonts.f700}>
                  {t("cart.quiqDelivery")}
                </Typography>
                <Typography
                  color={colors.black}
                  fontSize="12px"
                  fontStyle={fonts.f400}
                  margin="10px 0 0 0"
                >
                  {t("cart.delivery48h")}
                </Typography>
              </ColumnContainer>
              <Icon src="/icons/card.png" />
              <ColumnContainer>
                <Typography color={colors.black} fontSize="16px" fontStyle={fonts.f700}>
                  {t("cart.sefetyPay")}
                </Typography>
                <Typography
                  color={colors.black}
                  fontSize="12px"
                  fontStyle={fonts.f400}
                  margin="10px 0 0 0"
                >
                  {t("cart.secure3D")}
                </Typography>
              </ColumnContainer>
            </InfoContainer>
          </ColumnContainer>

          <TotalContainer>
            <RowContainer style={{ alignItems: "center" }}>
              <Typography color={colors.black} fontSize="18px" fontStyle={fonts.f400}>
                {t("cart.total")}
              </Typography>
              <Typography
                color={colors.black}
                fontSize="30px"
                fontStyle={fonts.f500}
                margin="0 0 0 60px"
              >
                {prettyPrice(cartStore.totalPrice)}
              </Typography>
            </RowContainer>
            <ButtonCustom
              width={"214px"}
              height={"56px"}
              type={"default"}
              label={t("cart.placeOrder")}
              func={() => goTo()}
            />
          </TotalContainer>
        </BottomContainer>
      </ContentWrapper>
    </BlurWrapper>
  );
};
export default observer(Cart);

const ContentWrapper = styled.div`
  position: relative;
  width: 1025px;
  height: auto;
  padding: 64px 54px;
  background-color: ${colors.white};
  border-radius: 15px;

  max-height: 100vh;
  @media (max-width: 1085px) {
    width: 765px;
  }
  @media (max-width: 765px) {
    width: 365px;
    height: 100vh;
    padding: 40px 15px;
  }
`;
const RowContainer = styled.div`
  display: flex;
`;
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Icon = styled.img`
  width: 37px;
  height: 37px;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 16px;
  column-gap: 16px;
  border: 1px solid ${colors.grayBorder};
  border-radius: 10px;
  @media (max-width: 1085px) {
    display: none;
  }
`;
const TotalContainer = styled.div`
  padding: 22px 27px;
  background-color: ${colors.redBlur};
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: end;
  border-radius: 15px;
  margin-left: 25px;
  @media (max-width: 765px) {
    width: 330px;
    margin-left: 0;
  }
`;
const CloseButton = styled.img`
  position: absolute;
  top: 37px;
  right: 35px;
  cursor: pointer;
`;
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  max-height: 50vh;
`;
const BottomContainer = styled.div`
  display: flex;
  padding-top: 25px;
  @media (max-width: 1085px) {
    justify-content: space-between;
  }
  @media (max-width: 765px) {
    flex-direction: column;
    align-items: center;
    row-gap: 24px;
  }
`;
