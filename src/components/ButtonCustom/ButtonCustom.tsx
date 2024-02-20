"use client";
import React, { FC } from "react";
import { Wrapper } from "./ButtonCustomStyles";
import { CircularProgress } from "@mui/material";

export type ButtonCustomProps = {
  children?: JSX.Element;
  label?: string;
  buttonActive?: boolean;
  func?: () => void;
  funcIfDisable?: () => void;
  width: string;
  spinner?: boolean;
  height: string;
  margin?: string;
  type: "default" | "white";
};

export const ButtonCustom: FC<ButtonCustomProps> = ({
  children,
  buttonActive,
  func,
  spinner,
  width,
  height,
  label,
  margin,
  type,
  funcIfDisable,
}) => {
  const onclickHandler = () => {
    if (buttonActive) {
      func && func();
    } else {
      funcIfDisable && funcIfDisable();
    }
  };
  return (
    <Wrapper
      buttonActive={buttonActive && !spinner}
      onClick={() => onclickHandler()}
      width={width as string}
      height={height as string}
      margin={margin}
      type={type}
    >
      {spinner ? <CircularProgress size={20} /> : label || children}
    </Wrapper>
  );
};

ButtonCustom.defaultProps = {
  spinner: false,
  buttonActive: true,
};
