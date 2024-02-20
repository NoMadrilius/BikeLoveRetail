import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import { Text } from "@/components/Text/Text";
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import React from "react";
import { useTranslation } from "react-i18next";
import { colors } from "../../../../theme/colors";
import { fonts } from "../../../../theme/fonts";
import PublicOffer from "./PublicOffer";

const TermsOfPublicOfferScreen = () => {
  const { t } = useTranslation();

  const road = [
    { title: "Магазин", link: "/about" },
    { title: "публічна оферта", link: "/terms-of-public-offer" },
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
      <PublicOffer />
    </>
  );
};

export default TermsOfPublicOfferScreen;
