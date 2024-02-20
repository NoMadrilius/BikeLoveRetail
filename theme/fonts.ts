import * as React from "react";

type Fonts = {
  [key: string]: {
    fontFamily: string;
    fontWeight:
      | "100"
      | "200"
      | "300"
      | "400"
      | "500"
      | "600"
      | "700"
      | "800"
      | "900";
  };
};

export const fonts: Fonts = {
  f100: {
    fontFamily: "Roboto-Thin",
    fontWeight: "100",
  },
  f300: {
    fontFamily: "Roboto-Light",
    fontWeight: "300",
  },
  f400: {
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
  },
  f500: {
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
  },
  f600: {
    fontFamily: "Roboto-Regular",
    fontWeight: "600",
  },
  f700: {
    fontFamily: "Roboto-Medium",
    fontWeight: "700",
  },
  f800: {
    fontFamily: "Roboto-Extrabold",
    fontWeight: "800",
  },
  f900: {
    fontFamily: "Roboto-Black",
    fontWeight: "900",
  },
};
