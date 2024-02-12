import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { Text } from "@/components/Text/Text";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import DeliveryInfo from "./DeliveryInfo";
import PaymentOptions from "./PaymentOptions";
import { useTranslation } from "react-i18next";
import * as S from "./AboutDeliveryScreen.styles";

const AboutDeliveryScreen = () => {
  const { t } = useTranslation();

  const road = [
    { title: t("breadcrumbs.shop"), link: "/about" },
    { title: t("breadcrumbs.delivery"), link: "/" },
  ];

  return (
    <>
      <UseMetaData title={t("delivery.title")} img={""} description={""} />
      <BreadCrumbs road={road} />
      <Text
        color={colors.black}
        size="42px"
        fontStyle={fonts.f500}
        textTransform="uppercase"
      >
        {t("delivery.heading")}
      </Text>
      <S.RowContainer>
        <S.Picture bg="/images/about/delivery/image1.png">
          <Text color={colors.white} size="28px" fontStyle={fonts.f700}>
            {t("delivery.importantToKnow")}
          </Text>
          <Text color={colors.white} size="16px" fontStyle={fonts.f400}>
            {t("delivery.importantToKnowDescription")}
          </Text>
        </S.Picture>
        <S.Picture bg="/images/about/delivery/image2.png"></S.Picture>
      </S.RowContainer>
      <S.TextContainer>
        <Text
          color={colors.black}
          size="28px"
          fontStyle={fonts.f600}
          textAlign="center"
        >
          {t("delivery.fastReliableProfessional")}
        </Text>
        {/* <Text
          color={colors.black}
          size="16px"
          fontStyle={fonts.f400}
          textAlign="center"
        >
          {t("delivery.policyDescription")}
        </Text> */}
      </S.TextContainer>

      <DeliveryInfo
        title={t("delivery.novaPoshta.title")}
        innerTitle={t("delivery.novaPoshta.innerTitle")}
      >
        <S.Ul>
          <S.Li $showTextShadow={true}>{t("delivery.novaPoshta.point1")}</S.Li>
          <S.Li $showTextShadow={true}>{t("delivery.novaPoshta.point2")}</S.Li>
          <S.Li $showTextShadow={true}>{t("delivery.novaPoshta.point3")}</S.Li>
        </S.Ul>
        <S.TextInfo>{t("delivery.novaPoshta.importantNote")}</S.TextInfo>
      </DeliveryInfo>

      <DeliveryInfo
        title={t("delivery.novaPoshtaPostomat.title")}
        innerTitle={t("delivery.novaPoshtaPostomat.innerTitle")}
      >
        <S.TextInfo>{t("delivery.novaPoshtaPostomat.listTitle")}</S.TextInfo>
        <S.Ul>
          <S.Li $showTextShadow={true}>
            {t("delivery.novaPoshtaPostomat.restriction1")}
          </S.Li>
          <S.Li $showTextShadow={true}>
            {t("delivery.novaPoshtaPostomat.restriction2")}
          </S.Li>
          <S.Li $showTextShadow={true}>
            {t("delivery.novaPoshtaPostomat.restriction3")}
          </S.Li>
          <S.Li $showTextShadow={true}>
            {t("delivery.novaPoshtaPostomat.restriction4")}
          </S.Li>
          <S.Li $showTextShadow={true}>
            {t("delivery.novaPoshtaPostomat.restriction5")}
          </S.Li>
          <S.Li $showTextShadow={true}>
            {t("delivery.novaPoshtaPostomat.restriction6")}
          </S.Li>
        </S.Ul>
        <S.TextInfo>
          {t("delivery.novaPoshtaPostomat.importantNote")}
        </S.TextInfo>
      </DeliveryInfo>

      <DeliveryInfo
        title={t("delivery.novaPoshtaCourier.title")}
        innerTitle={t("delivery.novaPoshtaCourier.innerTitle")}
      >
        <S.TextInfo $bottomSpace={true}>
          {t("delivery.novaPoshtaCourier.importantNote")}
        </S.TextInfo>
        <S.TextInfo>
          {t("delivery.novaPoshtaCourier.importantNote2")}
        </S.TextInfo>
      </DeliveryInfo>

      <DeliveryInfo title={t("delivery.pickupFromStore.title")}>
        <S.Ul>
          <S.Li $showTextShadow={true}>
            {t("delivery.pickupFromStore.point1")}
          </S.Li>
          <S.Li $showTextShadow={true}>
            {t("delivery.pickupFromStore.point2")}
          </S.Li>
          <S.Li $showTextShadow={true}>
            {t("delivery.pickupFromStore.point3")}
          </S.Li>
          <S.Li $showTextShadow={true}>
            {t("delivery.pickupFromStore.point4")}
          </S.Li>
          <S.Li $showTextShadow={true}>
            {t("delivery.pickupFromStore.point5")}
          </S.Li>
          <S.Li $showTextShadow={true}>
            {t("delivery.pickupFromStore.point6")}
          </S.Li>
        </S.Ul>
      </DeliveryInfo>

      {/* Similarly localize other DeliveryInfo components */}

      <S.PictureLarge bg="/images/about/delivery/large.png">
        <Text color={colors.white} size="28px" fontStyle={fonts.f700}>
          {t("delivery.locationDoesNotMatter.heading")}
        </Text>
        <Text color={colors.white} size="16px" fontStyle={fonts.f400}>
          {t("delivery.locationDoesNotMatter.description")}
        </Text>
      </S.PictureLarge>
      <PaymentOptions />
    </>
  );
};

export default AboutDeliveryScreen;
