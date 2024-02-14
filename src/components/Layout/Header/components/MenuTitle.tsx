import { FC, useState } from "react";
import { styled } from "styled-components";
import { templates } from "../../../../../theme/templates";
import { colors } from "../../../../../theme/colors";
import { Text } from "@/components/Text/Text";
import { fonts } from "../../../../../theme/fonts";

type Props = {
  func: any;
  title: string;
  hover?: boolean;
  activeMenu?: {
    id: string | null;
    rect: DOMRect | null;
  };
};

const MenuTitle: FC<Props> = ({ func, title, hover, activeMenu }) => {
  const [clicked, setClicked] = useState(false);
  const click = () => {
    if (hover) {
      setClicked(true);
      func(true);
    }
    if (hover && clicked) {
      func(false);
      setClicked(false);
    }
    if (!hover) {
      func();
    }
  };

  const handleClick = () => {
    const rect = document?.getElementById(title)?.getBoundingClientRect();
    setClicked((prev) => !prev);
    func(title, rect);
  };

  return (
    <Wrapper
      id={title}
      onClick={handleClick}

      // {...(hover &&
      //   !clicked && {
      //     onMouseEnter: () => func(true),
      //     onMouseLeave: () => func(false),
      //   })}
    >
      <Title
        style={{
          backgroundColor:
            title === activeMenu?.id ? "rgb(255, 239, 239)" : "transparent",
        }}
        active={title === activeMenu?.id}
      >
        {title}
        {title === activeMenu?.id ? <HorizontalLine /> : null}
      </Title>
    </Wrapper>
  );
};

export default MenuTitle;

const Title = styled.div<{ active: boolean }>`
  font-size: 13px;
  font-family: ${fonts.f600.fontFamily};
  font-weight: ${fonts.f600.fontWeight};
  color: ${(props) => (props.active ? "rgb(205, 9, 9)" : "white")};
  padding: 15px;
  font-weight: 600;
  border-radius: 10px 10px 0 0;
  transition: background-color 0.3s, color 0.3s;
  text-transform: uppercase;
  &:hover,
  &.active {
    background-color: ${colors.redMain}; // Red background on hover and when active
    color: ${colors.white};
  }
`;

const Wrapper = styled.div`
  display: inline-block; // To fit the content width
  cursor: pointer;
  position: relative;
  &:not(.active):hover ${Title} {
    color: ${colors.redMain}; // Change text color on hover when not active
  }

  &.active ${Title} {
    background-color: ${colors.redMain}; // Red background when active
    color: ${colors.white};
  }
`;

const HorizontalLine = styled.div`
  width: 85%;
  height: 1px;
  border-top: solid 0.5px rgba(99, 99, 99, 0.15);
  position: absolute;
  bottom: 1px;
  left: 0;
  margin: auto;
  transform: translate(10%, -50%);
`;
