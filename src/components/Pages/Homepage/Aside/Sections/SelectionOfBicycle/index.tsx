import React, { useState } from "react";
import { PlusIcon, MinusIcon, ClearIcon } from "@/components/UIKit/SVGIcons";
import Dropdown from "@/components/UIKit/InputFields/Dropdown";
import GradientButton from "@/components/UIKit/Buttons/GradientButton";
import BicycleOption from "./BicycleOption";
import {useBikeSelectionStore} from "@/store/BikeSelectionStore";
import {observer} from "mobx-react";
import BrandOption from "@/components/Pages/Homepage/Aside/Sections/SelectionOfBicycle/BrandOption";

const SelectionOfBicycle = ({ className }: { className?: string }) => {

  const bs = useBikeSelectionStore()

  function dictionaryToArray(dict: { [key: number]: string }): { id: number, name: string }[] {
    return Object.keys(dict).map(key => ({ id: parseInt(key), name: dict[parseInt(key)] }));
  }

  return (
    <section
      className={`w-fill rounded-lg flex flex-col bg-white p-5 gap-5 sm:mx-0  md:flex md:flex-row md:p-0 md:bg-transparent ${className}`}
    >
      <h2 className="text-dark-text md:text-[32px] md:leading-[37.5px] md:font-medium text-[20px] leading-[120%] font-bold font-robot-c md:max-w-[175px]">
        Підбір велосипеда
      </h2>
      <div className="flex flex-col gap-5 md:p-5 md:bg-white md:rounded-lg md:grow">
        <Dropdown
          label="Оберіть тип"
          options={bs.options?dictionaryToArray(bs.options.typesVariants):[]}
          onSelect={(v)=>{bs.setSelectedType(v)}}
        />
        <Dropdown
          label="Оберіть зріст, см"
          options={bs.options?dictionaryToArray(bs.options.sizeVariants):[]}
          onSelect={(v)=>{bs.setSelectedSize(v)}}
        />
        <div>
          <BicycleOption
            label="Велосипеди від UAH"
            onInputChange={(v) => bs.setMin(v)}
            value={bs.min.toString()}
            placeholder="від 1000 UAH"
          />
          <BicycleOption
            label="Велосипеди до UAH"
            onInputChange={(v) => bs.setMax(v)}
            value={bs.max.toString()}
            placeholder="до 120 000 UAH"
          />

          {/*
          <div className="w-full h-[8px] bg-[#F2F2F2] rounded-full my-[11px]">
            <div
                className="h-full max-w-full bg-gradient-custom rounded-full"
                style={{
                  width: `50%`,
                  transition: "width 0.5s ease",
                }}
            />
          </div>
          */}

        </div>
        <BrandOption label={"Додати бренд"} onInputChange={()=>{}}/>
        {
          bs.active&&
            <GradientButton
                label={"Показати"}
                showIcon={false}
                className="w-full flex !py-[14.5px] justify-center"
            />
        }

        <div className="mx-auto flex">
          <span className="font-light text-[14px] leading-[19.2px] text-dark font-inter">
            Знайдено товарів{" "}
            <span className="font-semibold leading-[19.36px] text-[16px] text-dark">
              {bs.count}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default observer(SelectionOfBicycle);
