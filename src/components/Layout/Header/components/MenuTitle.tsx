import { FC, useState } from "react";
import { styled } from "styled-components";
import { colors } from "../../../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../../theme/fonts";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  func?: any;
  title: string;
  hover?: boolean;
  activeMenu?: {
    id: string | null;
    rect: DOMRect | null;
  };
};

const MenuTitle: FC<Props> = ({ func, title, hover, activeMenu }) => {
  const handleMouseEnter = () => {
    const rect = document?.getElementById(title)?.getBoundingClientRect();

    func(title, rect);
  };

  return (
    <Wrapper
      id={title}
      {...(hover && {
        onMouseEnter: () => handleMouseEnter(),
      })}
    >
      <Title active={title === activeMenu?.id} className="menu-title">
        {title}
        {title === activeMenu?.id ? <HorizontalLine /> : null}
      </Title>
    </Wrapper>
  );
};

export default MenuTitle;

const Title = styled.span<{ active: boolean }>`
  font-size: 13px;
  font-family: ${fonts.f600.fontFamily};
  font-weight: ${fonts.f600.fontWeight};
  color: ${(props) => (props.active ? colors.redMain : "white")};
  padding: 15px;
  font-weight: 600;
  border-radius: 10px 10px 0 0;
  transition: color 0.3s ease-in-out;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.active ? "rgb(255, 239, 239)" : "transparent"};

  cursor: pointer;
  /* &:hover,
  &.active {
    color: ${colors.white};
  } */
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;

  &:hover ${Title} {
    color: ${colors.redMain};
  }

  &.active ${Title} {
    background-color: ${colors.redMain};
    color: ${colors.white};
  }
`;

const HorizontalLine = styled.div`
  width: 85%;
  height: 1px;
  border-top: solid 0.5px rgba(99, 99, 99, 0.15);
  position: absolute;
  bottom: -11px;
  left: 0;
  margin: auto;
  transform: translate(10%, -50%);
`;
