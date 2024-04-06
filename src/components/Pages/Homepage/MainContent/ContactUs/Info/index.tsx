import Image from "next/image";
import React from "react";

const Info = () => {
  return (
    <div className="flex gap-5 grow w-full lg:flex-row flex-col items-center lg:items-start">
      <div className="grow lg:w-1/2 ">
        <h3
          className="font-bold text-[20px] leading-[120%] text-dark mb-5"
          style={{ fontFamily: "Roboto-Bold" }}
        >
          Магазини
        </h3>
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-dark font-semibold leading-[19px]">
              Місто, вул. Назва, 1
            </h4>
            <div className="w-full h-[2.5px] bg-gradient-custom rounded-full mt-[6px] mb-2" />
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-dark">Години роботи</h4>
            <div className="flex gap-3">
              <span className="font-semibold text-dark">Пн - Пт: </span>
              <span className="font-light leading-[120%] text-dark">
                10.00 - 22.00
              </span>
            </div>
            <div className="flex gap-3">
              <span className="font-semibold text-dark">Cб - Нд: </span>
              <span className="font-light leading-[120%] text-dark">
                10.00 - 24.00
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-dark">Телефон</h4>
            <a
              href="tel:+38 (093) 211 - 89 - 30"
              className="font-light leading-[120%] text-dark"
            >
              +38 (093) 211 - 89 - 30
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="text-dark font-semibold leading-[19px]">
            Місто, вул. Назва, 1
          </h4>
          <div className="w-[28px] h-[2.5px] bg-gradient-custom rounded-full mt-[6px] mb-2" />
        </div>
        <div className="mt-5">
          <h4 className="text-dark font-semibold leading-[19px]">
            Місто, вул. Назва, 1
          </h4>
          <div className="w-[28px] h-[2.5px] bg-gradient-custom rounded-full mt-[6px] mb-2" />
        </div>
        <div className="mt-5">
          <h4 className="text-dark font-semibold leading-[19px]">
            Місто, вул. Назва, 1
          </h4>
          <div className="w-[28px] h-[2.5px] bg-gradient-custom rounded-full mt-[6px] mb-2" />
        </div>
      </div>

      <div className="grow lg:w-1/2 shrink-0 flex flex-col">
        <h3
          className="font-bold shrink-0 text-[20px] leading-[120%] text-dark mb-5"
          style={{ fontFamily: "Roboto-Bold" }}
        >
          Отримати консультацію
        </h3>
        <div className="flex flex-col gap-3">
          <a
            href="tel:+38 (093) 211 - 89 - 30"
            className="font-bold  text-[20px] leading-[120%] text-dark"
          >
            +38 (093) 211 - 89 - 30
          </a>
          <a
            href="malito:storebikelove@gmail.com"
            className="text-dark leading-[19px] py-2"
          >
            storebikelove@gmail.com
          </a>
          <div className="flex gap-5 mx-auto lg:mx-0">
            <Image
              src="/images/homepage/icons/social/viber-black.svg"
              alt="Viber"
              width={24}
              height={24}
            />
            <Image
              src="/images/homepage/icons/social/instagram-black.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
            <Image
              src="/images/homepage/icons/social/telegram-black.svg"
              alt="Telegram"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
