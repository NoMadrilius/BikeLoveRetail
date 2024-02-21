import Image from "next/image";
import { useTranslation } from "react-i18next";
import React from "react";
import * as S from "./index.styles";
import payments from "/public/images/about/delivery/payments.svg";

const PaymentOptions = () => {
  const { t } = useTranslation();

  return (
    <S.PaymentSection>
      <S.ContentSection>
        <S.Title>{t("delivery.paymentOptions.title")}</S.Title>
        <S.List>
          <S.ListItem>
            <S.Point>1.</S.Point>
            <S.Text>{t("delivery.paymentOptions.benefits.fastPayment")}</S.Text>
          </S.ListItem>
          <S.ListItem>
            <S.Point>2.</S.Point>
            <S.Text>{t("delivery.paymentOptions.benefits.security")}</S.Text>
          </S.ListItem>
          <S.ListItem>
            <S.Point>3.</S.Point>
            <S.Text>{t("delivery.paymentOptions.benefits.convenience")}</S.Text>
          </S.ListItem>
        </S.List>
        <S.Text>{t("delivery.paymentOptions.howToPay.title")}</S.Text>
        <S.List>
          <S.ListItem>
            <S.Point>1.</S.Point>
            <S.Text>{t("delivery.paymentOptions.howToPay.step1")}</S.Text>
          </S.ListItem>
          <S.ListItem>
            <S.Point>2.</S.Point>
            <S.Text>{t("delivery.paymentOptions.howToPay.step2")}</S.Text>
          </S.ListItem>
          <S.ListItem>
            <S.Point>3.</S.Point>
            <S.Text>{t("delivery.paymentOptions.howToPay.step3")}</S.Text>
          </S.ListItem>
          <S.ListItem>
            <S.Point>4.</S.Point>
            <S.Text>{t("delivery.paymentOptions.howToPay.step4")}</S.Text>
          </S.ListItem>
        </S.List>
        <S.Note>{t("delivery.paymentOptions.commissionNote")}</S.Note>
      </S.ContentSection>
      <S.PaymentLogos>
        <Image src={payments} alt="Payment methods" fill />
      </S.PaymentLogos>
    </S.PaymentSection>
  );
};

export default PaymentOptions;
