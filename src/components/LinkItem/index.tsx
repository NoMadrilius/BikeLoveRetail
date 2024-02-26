"use client";
import React, { FC } from "react";
import { LinkItemStyle } from "./LinkItem.styles";
import { LinkItemProps } from "./types";

export const LinkItem: FC<LinkItemProps> = ({
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
  style,
  href,
}) => {
  return (
    <LinkItemStyle
      href={href}
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
    >
      {children}
    </LinkItemStyle>
  );
};
