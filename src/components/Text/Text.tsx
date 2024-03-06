"use client";
import React, { CSSProperties, FC } from "react";
import { TextStyle } from "./TextStyles";

export type TextPtops = {
  children: React.ReactNode;
  color: string;
  whiteSpace?: boolean;
  preline?: boolean;
  hoverColor?: string;
  func?: () => void;

  size?: string;
  fontStyle?: {
    fontFamily: string;
    fontWeight: string;
  };
  margin?: string;
  maxWidth?: string;
  textAlign?: string;
  textTransform?: "uppercase" | "lowecase";
  textDecoration?: "trought";
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: CSSProperties;
  suppressHydrationWarning?:boolean
};

export const Text: FC<TextPtops> = ({
  children,
  color,
  size,
  fontStyle,
  margin,
  maxWidth,
  textAlign,
  func,
  hoverColor,
  whiteSpace,
  textTransform,
  textDecoration,
  preline,
  onMouseEnter,
  style,suppressHydrationWarning
}) => {
  return (
    <TextStyle
      style={style}
      onMouseEnter={onMouseEnter}
      onClick={() => func && func()}
      textAlign={textAlign}
      size={size}
      color={color}
      fontStyle={fontStyle}
      margin={margin}
      maxWidth={maxWidth}
      func={func}
      preline={preline}
      hoverColor={hoverColor}
      whiteSpace={whiteSpace}
      textTransform={textTransform}
      textDecoration={textDecoration}
      suppressHydrationWarning = {suppressHydrationWarning}
    >
      {children}
    </TextStyle>
  );
};
