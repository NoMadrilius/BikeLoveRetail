import { colors } from "../../../theme/colors"; 
import { templates } from "../../../theme/templates"; 
import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ buttonActive?: boolean; width: string; height: string; margin?: string }>`
  ${(p) => {
    return css`
    ${templates.centerContent};
    width: ${p.width}px;
    height: ${p.height}px;
    color: ${p.buttonActive ? "black" : colors.grayMain};
    margin: ${p.margin};
    color: ${colors.white};
    background-color: ${p.buttonActive
      ? colors.redMain
      : colors.grayBorder};
    border-radius: 5px;
    font-size: 20px;  
    line-height: 29px;
    text-align: center;
    letter-spacing: -0.3px;
    user-select: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
      background-color: ${colors.redHover};
    }
    @media (max-width: 900px) {
      font-size: 16px;
    }
  `;
  }}
`;
