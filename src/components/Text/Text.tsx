import React, { FC } from "react";
import { TextStyle } from "./TextStyles";

export type TextPtops = {
  children: React.ReactNode;
  color: string;
  whiteSpace?: boolean;
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
}) => {
  return (
    <TextStyle
      onClick={() => func && func()}
      textAlign={textAlign}
      size={size}
      color={color}
      fontStyle={fontStyle}
      margin={margin}
      maxWidth={maxWidth}
      func={func}
      hoverColor={hoverColor}
      whiteSpace={whiteSpace}
      textTransform={textTransform}
    >
      {children}
    </TextStyle>
  );
};
