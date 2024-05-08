import React from "react";

const Description = () => {
  return (
    <div
      className="flex flex-col gap-5 border-b border-gray pb-4"
      id="description"
    >
      <h3 className="text-dark font-robot-c text-[24px] font-medium leading-[28.13px] xl:text-[32px] xl:leading-[37.5px]">
        Опис
      </h3>
      <p className="text-dark font-inter text-[16px] font-light leading-[19.2px]">
        Велосипед [Назва моделі] - це ідеальний вибір для тих, хто шукає
        зручність, надійність та стиль в одному пакеті. Завдяки легкому
        алюмінієвому рамінню та передовій геометрії, велосипед забезпечує
        стабільність та комфорт навіть на нерівних дорогах. Високоякісні
        компоненти та перевірена часом технологія забезпечують плавну їзду та
        довговічність. Завдяки сучасному дизайну та стильному кольоровому
        рішенню, велосипед [Назва моделі] стане надійним другом у будь-яких
        поїздках по місту або за його межами.
      </p>
    </div>
  );
};

export default Description;
