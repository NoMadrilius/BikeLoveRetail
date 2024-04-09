import React from "react";

interface StatisticsSectionProps {
  statistics: {
    value: string;
    label: string;
  }[];
}

const StatisticsSection = ({ statistics }: StatisticsSectionProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:flex xl:flex 2xl:flex flex-wrap gap-4 lg:absolute xl:absolute 2xl:absolute xl:bottom-[22px] bottom-0 w-full lg:max-w-[316px] xl:max-w-[316px] 2xl:max-w-[316px]">
      {statistics.map((statistic, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 bg-dark rounded-lg items-center justify-center w-full h-[150px] lg:size-[150px] xl:size-[150px] 2xl:size-[150px] px-3 lg:px-0 xl:px-0 2xl:px-0"
        >
          <h3 className="font-medium text-[40px] leading-[46.88px] gradient-text font-robot-c">
            {statistic.value}
          </h3>
          <p className="leading-[19px] text-center xl:max-w-[100px]">
            {statistic.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatisticsSection;
