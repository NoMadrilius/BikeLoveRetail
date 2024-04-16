import Link from "next/link";
import React from "react";

const linksData = [
  { href: "/about", text: "Про нас" },
  { href: "/about/delivery", text: "Доставка та оплата" },
  { href: "/contacts", text: "Контакти" },
  { href: "/terms-of-public-offer", text: "Публічна оферта" },
  //{ href: "#", text: "Політика конфіденційності" },
];
const InfoAboutCompany = () => {
  return (
    <section className="w-fill rounded-lg overflow-hidden flex flex-col bg-white p-5 gap-5">
      <h2 className="text-dark-text text-[20px] leading-[24px] font-bold font-robot-c">
        Інформація про компанію
      </h2>
      <nav className="flex flex-col max-h-[175px]">
        {linksData.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="leading-[19.36px] text-dark-text py-2 cursor-pointer text-[16px] font-inter !max-h-[35px] hover:text-link-pink"
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default InfoAboutCompany;
