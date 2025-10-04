import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

const LogAsUser = () => {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col gap-3 mt-5">
      <span className="text-[14px] py-2 text-dark leading-[120%]">
        {t("Увійти як користувач")}
      </span>
      <div className="flex items-center gap-5 justify-center">
        <Link href={"#"} className="cursor-pointer">
          <Image
            src={"/images/uikit/auth/facebook.svg"}
            alt={"Facebook"}
            width={48}
            height={48}
          />
        </Link>
        <span className="text-dark text-[14px] leading-[120%]">{t("або")}</span>
        <Link href={"#"} className="cursor-pointer">
          <Image
            src={"/images/uikit/auth/google.svg"}
            alt={"Facebook"}
            width={48}
            height={48}
          />
        </Link>
      </div>
    </div>
  );
};

export default LogAsUser;
