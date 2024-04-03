import React from "react";

interface StatisticsSectionProps {
  statistics: {
    value: string;
    label: string;
  }[];
}

const StatisticsSection = ({ statistics }: StatisticsSectionProps) => {
  return (
    <div className="flex flex-wrap gap-4 absolute bottom-0 max-w-[316px]">
      {statistics.map((statistic, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 bg-dark rounded-lg items-center justify-center size-[150px]"
        >
          <h3 className="font-medium text-[40px] leading-[47px] gradient-text">
            {statistic.value}
          </h3>
          <p className="leading-[19px] text-center">{statistic.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatisticsSection;
