import { colors } from "../../../theme/colors";
import { fonts } from "../../../theme/fonts";
import { templates } from "../../../theme/templates";
import styled, { css } from "styled-components";

export const Wrapper = styled.button<{
  buttonActive?: boolean;
  width: string;
  height: string;
  margin?: string;
  type: string;
}>`
  ${(p) => {
    switch (p.type) {
      case "default":
        return css`
          ${templates.centerContent};
          width: ${p.width};
          height: ${p.height};
          color: ${p.buttonActive ? "black" : colors.grayMain};
          margin: ${p.margin};
          color: ${colors.white};
          background-color: ${p.buttonActive
            ? colors.redMain
            : colors.grayBorder};
          border-radius: 5px;
          font-size: 16px;
          line-height: 29px;
          text-align: center;
          letter-spacing: -0.3px;
          font-family: ${fonts.f700.fontFamily};
          font-weight: ${fonts.f700.fontWeight};
          user-select: none;
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            background-color: ${colors.redHover};
          }
          @media (max-width: 900px) {
            font-size: 16px;
          }
        `;
      case "white":
        return css`
          ${templates.centerContent};
          width: ${p.width};
          height: ${p.height};
          margin: ${p.margin};
          color: ${colors.redMain};
          background-color: ${p.buttonActive
            ? colors.white
            : colors.grayBorder};
          border-radius: 5px;
          border: 1px solid ${colors.redMain};
          line-height: 29px;
          text-align: center;
          letter-spacing: -0.3px;
          user-select: none;
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            background-color: ${colors.redHover};
            color: ${colors.white};
          }
          @media (max-width: 900px) {
            font-size: 16px;
          }
        `;

      default:
        break;
    }
  }}
`;
