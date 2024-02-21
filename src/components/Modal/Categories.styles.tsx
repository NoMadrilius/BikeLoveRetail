import { CSSProperties, styled } from "styled-components";
import { colors } from "../../../theme/colors";
import { metrics } from "../../../theme/metrics";

export const TitleWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const HorizontalLine = styled.div<{ $isExpanded: boolean }>`
  width: 25px;
  height: 1px;

  border-top: solid 1px black;
`;

export const LeftBorder = styled.div<{
  $isExpanded: boolean;
  $lastChild: boolean;
  $leftMargin?: number;
}>`
  border-left: 1px solid black;
  padding: ${(props) => (props.$isExpanded ? "5px 10px 5px 0" : "")};

  display: flex;
  align-items: center;
  position: relative;
  ${(props) =>
    props.$lastChild &&
    `
  
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 50%;
      border-left: 1px solid black;
    }
    border:none;
  `};
`;

export const TitleIcon = styled.img<{ open: boolean }>`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transform: ${(p) => (p.open ? "rotate(0deg)" : "rotate(270deg)")};
`;

export const Wrapper = styled.div<{
  style?: { position: string; top: string; left: string };
}>`
  position: absolute;
  display: flex;
  top: 69px;
  z-index: 5;
  /* width: 100%; */

  @media (max-width: ${metrics.desktop}) {
    /* padding: 0 24px; */
  }
  @media (max-width: ${metrics.mobile}) {
    padding: 0 20px;
    top: 74px;
  }
`;
export const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.redBlur};
  height: 100%;
  width: 300px;
  padding: 38px;
  row-gap: 20px;
  border-radius: 0 10px 10px 10px;
  /* overflow-y: auto; */
`;
export const DetailsContainer = styled.div<{
  $top: number;
  $removePadding: number;
}>`
  width: 100%;
  max-width: 583px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  flex-direction: column;
  position: absolute;
  top: ${(props) => `${props.$top}px`};
  left: 300px;
  margin-left: 10px;
  background-color: rgb(231, 231, 231);
  /* overflow: scroll; */
  column-gap: 20px;
  padding: 15px;
`;
