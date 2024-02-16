import React from "react";
import { useTranslation } from "react-i18next";
import * as S from "./index.styles";

const PublicOffer = () => {
  const { t } = useTranslation();

  return (
    <S.PublicOfferContainer>
      <S.Paragraph>{t("publicOffer.paragraph_1")}</S.Paragraph>
      <S.Subtitle>{t("publicOffer.seller")}</S.Subtitle>
      <S.Paragraph>{t("publicOffer.paragraph_2")}</S.Paragraph>
      <S.Subtitle>{t("publicOffer.buyer")}</S.Subtitle>
      <S.Paragraph>{t("publicOffer.paragraph_3")}</S.Paragraph>
      <S.Subtitle>{t("publicOffer.contract_subject")}</S.Subtitle>
      <S.Paragraph>{t("publicOffer.paragraph_4")}</S.Paragraph>
      <S.Subtitle>{t("publicOffer.price_payment_delivery")}</S.Subtitle>
      <S.Paragraph>{t("publicOffer.paragraph_5")}</S.Paragraph>
      <S.Subtitle>{t("publicOffer.exchange_return")}</S.Subtitle>
      <S.Paragraph>{t("publicOffer.paragraph_6")}</S.Paragraph>
      <S.Subtitle>{t("publicOffer.warranty_obligations")}</S.Subtitle>
      <S.Paragraph>{t("publicOffer.paragraph_7")}</S.Paragraph>
      <S.Subtitle>{t("publicOffer.complaints_resolution")}</S.Subtitle>
      <S.Paragraph>{t("publicOffer.paragraph_8")}</S.Paragraph>
      <S.Subtitle>{t("publicOffer.accept_offer")}</S.Subtitle>
      <S.Paragraph>{t("publicOffer.paragraph_9")}</S.Paragraph>

      <S.Subtitle>{t("publicOffer.other_conditions")}</S.Subtitle>
      <S.List>
        <S.ListItem>{t("publicOffer.buyer_responsibility")}</S.ListItem>
        <S.ListItem>{t("publicOffer.buyer_consent")}</S.ListItem>
      </S.List>
    </S.PublicOfferContainer>
  );
};

export default PublicOffer;
