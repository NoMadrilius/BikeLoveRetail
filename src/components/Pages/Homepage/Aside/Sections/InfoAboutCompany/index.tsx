import Link from "next/link";
import React from "react";

const linksData = [
  { href: "#", text: "Про нас" },
  { href: "#", text: "Доставка та оплата" },
  { href: "#", text: "Контакти" },
  { href: "#", text: "Публічна оферта" },
  { href: "#", text: "Політика конфіденційності" },
];
const InfoAboutCompany = () => {
  return (
    <section className="w-fill rounded-lg overflow-hidden flex flex-col bg-white p-5 gap-5">
      <h2 className="text-dark-text text-[20px] leading-[24px] font-bold">
        Інформація про компанію
      </h2>
      <nav className="flex flex-col">
        {linksData.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="leading-[19.36px] text-dark-text py-2 cursor-pointer"
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default InfoAboutCompany;
