import Image from "next/image";
import React from "react";
import Link from "next/link";

const Info = () => {
  return (
    <div className="flex gap-5 grow w-full xl:flex-row lg:flex-row md:flex-row md:items-start flex-col items-center lg:items-start xl:items-start">
      <div className="grow lg:w-1/2 xl:w-full xl:max-w-[204.36px]">
        <h3 className="font-bold text-[20px] leading-[24px] text-dark mb-5 font-robot-c">
          Магазини
        </h3>
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-dark font-semibold leading-[19px]">
              Київ, вул. Щербаківського, 59
            </h4>
            <div className="w-full max-w-[155px] h-[2.5px] bg-gradient-custom rounded-full mt-[6px]" />
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-dark text-[16px] leading-[19.36px]">
              Години роботи
            </h4>
            <div className="flex gap-3">
              <span className="font-semibold text-dark text-[16px] leading-[19.36px]">
                Пн - Пт:{" "}
              </span>
              <span className="font-light leading-[120%] text-dark">
                10.00 - 18.00
              </span>
            </div>
            <div className="flex gap-3">
              <span className="font-semibold text-dark text-[16px] leading-[19.36px]">
                Cб - Нд:{" "}
              </span>
              <span className="font-light leading-[120%] text-dark">
                10.00 - 18.00
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-dark text-[16px] leading-[19.36px]">
              Телефон
            </h4>
            <a
              href="tel:+38 (093) 211 - 89 - 30"
              className="font-light leading-[120%] text-dark "
            >
              +38 (093) 211 - 89 - 30
            </a>
          </div>
        </div>

        {/*
        <div className="mt-5 group">
          <h4 className="text-dark font-semibold text-[16px] leading-[19.36px]">
            Місто, вул. Назва, 1
          </h4>
          <div className="w-[28px] h-[2.5px] bg-gradient-custom rounded-full mt-[6px] mb-2 transition-all duration-300 ease-in-out group-hover:w-[155px]" />
        </div>
        <div className="mt-5 group">
          <h4 className="text-dark font-semibold text-[16px] leading-[19.36px]">
            Місто, вул. Назва, 1
          </h4>
          <div className="w-[28px] h-[2.5px] bg-gradient-custom rounded-full mt-[6px] mb-2 transition-all duration-300 ease-in-out group-hover:w-[155px]" />
        </div>
        <div className="mt-5 group">
          <h4 className="text-dark font-semibold text-[16px] leading-[19.36px]">
            Місто, вул. Назва, 1
          </h4>
          <div className="w-[28px] h-[2.5px] bg-gradient-custom rounded-full mt-[6px] mb-2 transition-all duration-300 ease-in-out group-hover:w-[155px]" />
        </div>
        */}
      </div>

      <div className="grow lg:w-1/2 xl:max-w-[204.36px] xl:w-full shrink-0 flex flex-col">
        <h3 className="font-bold shrink-0 text-[20px] leading-[120%] text-dark mb-5 font-robot-c">
          Отримати консультацію
        </h3>
        <div className="flex flex-col gap-3 xl:gap-5">
          <a
            href="tel:+38 (093) 211 - 89 - 30"
            className="font-bold  text-[20px] leading-[120%] text-dark font-robot-c"
          >
            +38 (093) 211 - 89 - 30
          </a>
          <a
            href="malito:storebikelove@gmail.com"
            className="text-dark leading-[19px] py-2"
          >
            storebikelove@gmail.com
          </a>
          <div className="flex gap-5 mx-auto lg:mx-0 xl:mx-0">
            <Link href={"viber://chat?number=%2B380932118930"}>
              <Image
                  src="/images/homepage/icons/social/viber-black.svg"
                  alt="Viber"
                  width={24}
                  height={24}
              />
            </Link>
            <Link href={"https://www.instagram.com/blcofficial/"}>
              <Image
                  src="/images/homepage/icons/social/instagram-black.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
              />
            </Link>
            <Link href={"https://t.me/+380932118930"} >
              <Image
                  src="/images/homepage/icons/social/telegram-black.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
