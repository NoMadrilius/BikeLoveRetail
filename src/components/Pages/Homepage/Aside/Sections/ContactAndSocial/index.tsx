import Image from "next/image";
import Link from "next/link";
import React from "react";

const socialMediaData = [
  { href: "#", src: "/images/homepage/icons/social/viber.svg", alt: "Viber" },
  {
    href: "#",
    src: "/images/homepage/icons/social/insta.svg",
    alt: "Instagram",
  },
  {
    href: "#",
    src: "/images/homepage/icons/social/telegram.svg",
    alt: "Telegram",
  },
];
const ContactAndSocial = () => {
  const phone = " +38 (093) 211 - 89 - 30";
  const email = "storebikelove@gmail.com";

  return (
    <section className="w-fill rounded-lg overflow-hidden flex flex-col bg-white p-5 gap-5">
      <h2 className="text-dark-text text-[20px] leading-[24px] font-bold">
        Зв’язок та соцмережі
      </h2>
      <div>
        <div className="py-2 flex items-center gap-2">
          <Image
            src={"/images/homepage/icons/phone.svg"}
            alt={""}
            width={17}
            height={17}
          />
          <a
            href={`tel:${phone}`}
            className="text-dark-text leading-[19.36px] cursor-pointer"
          >
            {phone}
          </a>
        </div>
        <div className="py-2">
          <a
            href={`mailto:${email}`}
            className="text-dark-text leading-[19.36px] cursor-pointer"
          >
            {email}
          </a>
        </div>
      </div>
      <div className="flex gap-5">
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
