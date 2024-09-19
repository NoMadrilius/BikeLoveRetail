
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
      <UseMetaData title={"Публічна оферта"} img={""} description={"Публічна оферта, що укладається між клієнтом та продавцем"} />


      <PublicOffer />
    </>
  );
};

export default TermsOfPublicOfferScreen;
