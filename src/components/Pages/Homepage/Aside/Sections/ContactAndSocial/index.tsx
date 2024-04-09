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
      <h2 className="text-dark-text text-[20px] leading-[24px] font-bold font-robot-c">
        Зв’язок та соцмережі
      </h2>
      <div>
        <div className="flex gap-2 py-2">
          <div className="py-[4px_4px_3px_3px]">
            <div className="relative py-2  size-[24px] flex items-center gap-2">
              <Image
                src={"/images/homepage/icons/phone.svg"}
                fill
                alt="Phone"
              />
            </div>
          </div>
          <a
            href={`tel:${phone}`}
            className="text-dark-text leading-[19.36px] cursor-pointer"
          >
            {phone}
          </a>
        </div>
        <div className="py-2 flex">
          <a
            href={`mailto:${email}`}
            className="text-dark-text text-[16px] leading-[19px] cursor-pointer"
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
