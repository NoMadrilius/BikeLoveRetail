import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

const AgreeTerms = () => {
  const { t } = useTranslation('common');

  return (
    <div className="text-center">
      <p className="text-dark text-[14px] leading-[120%]">
        {t("Реєструючись, ви погоджуєтесь з умовами")}{" "}
      </p>
      <Link className="text-blue-link text-[14px] leading-[120%]" href={"#"}>
        {t("Положення про обробку персональних даних")}
      </Link>
    </div>
  );
};

export default AgreeTerms;
