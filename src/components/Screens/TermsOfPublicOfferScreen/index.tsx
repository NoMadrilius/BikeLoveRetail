
import { UseMetaData } from "@/helpers/hooks/useMetaData";
import React from "react";
import { useTranslation } from "react-i18next";

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


      <PublicOffer />
    </>
  );
};

export default TermsOfPublicOfferScreen;
