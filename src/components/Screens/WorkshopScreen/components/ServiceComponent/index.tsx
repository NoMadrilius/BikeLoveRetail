import {
  LiItem,
  SecondaryTitle,
} from "@/components/Screens/HomeScreen/HomeScreenStyles";
import React from "react";

import { fonts } from "../../../../../../theme/fonts";
import { FontStyleProps, ServiceListProps } from "./types";

const renderListItems = (
  items: string[],
  fontStyle: FontStyleProps,
  color: string
) => {
  if (!items.length) {
    return null;
  }
  return items.map((item, index) => (
    <LiItem key={index} $fontStyle={fontStyle} $color={color}>
      {item}
    </LiItem>
  ));
};

const ServiceList = ({
  title,
  items,
  titleProps,
  listsProps,
}: ServiceListProps) => {
  return (
    <div>
      <SecondaryTitle {...titleProps}>{title}</SecondaryTitle>
      <ul>
        {renderListItems(items, listsProps.$fontStyle, listsProps.$color)}
      </ul>
    </div>
  );
};

const ServiceComponent = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  return (
    <ServiceList
      title={title}
      items={items}
      listsProps={{
        $color: "black",
        $fontSize: "16px",
        $fontStyle: fonts.f400,
      }}
      titleProps={{
        $color: "black",
        $fontSize: "40px",
        $fontStyle: fonts.f700,
        $margin: "55px 0 25px 0",
      }}
    />
  );
};

export default ServiceComponent;
