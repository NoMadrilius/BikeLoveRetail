import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

const socialMediaData = [
  {
    href: "viber://chat?number=%2B380932118930",
    src: "/images/homepage/icons/social/viber.svg",
    alt: "Viber",
  },
  {
    href: "https://www.instagram.com/blcofficial/",
    src: "/images/homepage/icons/social/insta.svg",
    alt: "Instagram",
  },
  {
    href: "https://t.me/+380932118930",
    src: "/images/homepage/icons/social/telegram.svg",
    alt: "Telegram",
  },
];
const ContactAndSocial = ({
  className,
  textColor,
  imgSrc,
}: {
  className?: string;
  textColor?: string;
  imgSrc?: string;
}) => {
  const phone = " +38 (093) 211 - 89 - 30";
  const email = "storebikelove@gmail.com";
  const {t} = useTranslation("common")

  return (
    <section
      className={`w-fill rounded-lg overflow-hidden flex flex-col bg-white p-5 gap-5 ${className}`}
    >
      <h2
        className={`text-dark-text text-[20px] leading-[24px] font-bold font-robot-c ${textColor}`}
      >
        {t("Зв’язок та соцмережі")}
      </h2>
      <div>
        <div className="flex gap-2 py-2">
          <div className="py-[4px_4px_3px_3px]">
            <div className="relative py-2  size-[24px] flex items-center gap-2">
              <Image
                src={imgSrc ? imgSrc : "/images/homepage/icons/phone.svg"}
                fill
                alt="Phone"
              />
            </div>
          </div>
          <a
            href={`tel:${phone}`}
            className={`text-dark-text leading-[19.36px] cursor-pointer hover:text-link-pink ${textColor}`}
          >
            {phone}
          </a>
        </div>
        <div className="py-2 flex">
          <a
            href={`mailto:${email}`}
            className={`text-dark-text leading-[19.36px] cursor-pointer hover:text-link-pink ${textColor}`}
          >
            {email}
          </a>
        </div>
      </div>
      <div className="flex gap-5 -mt-[1px]">
        {socialMediaData.map((socialMedia, index) => (
          <Link key={index} href={socialMedia.href} className="cursor-pointer">
            <Image
              src={socialMedia.src}
              alt={socialMedia.alt}
              width={48}
              height={48}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ContactAndSocial;
