import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";


const InfoAboutCompany = ({
  className,
  textColor,
}: {
  className?: string;
  textColor?: string;
}) => {
  const {t} = useTranslation("common")

  const linksData = [
    { href: "/about", text: t("Про нас") },
    { href: "/about/delivery", text: t("Доставка та оплата") },
    //{ href: "/contacts", text: t("Контакти") },
    { href: "/terms-of-public-offer", text: t("Публічна оферта") },
    //{ href: "#", text: "Політика конфіденційності" },
  ];

  return (
    <section
      className={`w-fill rounded-lg overflow-hidden flex flex-col bg-white p-5 gap-5 ${className}`}
    >
      <h2
        className={`text-dark-text text-[20px] leading-[24px] font-bold font-robot-c ${textColor}`}
      >
        {t("Інформація")}
      </h2>
      <nav className="flex flex-col max-h-[175px]">
        {linksData.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`leading-[19.36px] text-dark-text py-2 cursor-pointer text-[16px] font-inter !max-h-[35px] hover:text-link-pink ${textColor}`}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default InfoAboutCompany;
