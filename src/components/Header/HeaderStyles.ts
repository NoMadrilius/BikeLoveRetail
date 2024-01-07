
import { styled } from "styled-components";
import { colors } from "../../../theme/colors";
import { metrics } from "../../../theme/metrics";
import { templates } from "../../../theme/templates";
export const Wrapper = styled.div<{ opacityBg?: boolean }>`
  width: 100%;
  height: 90px;
  ${templates.centerContent};
  justify-content: space-between;
  background-color: ${(p) => (p.opacityBg ? "transparent" : colors.black)};
  padding: 10px 125px;
  column-gap: 35px;
  border-bottom: 1px solid ${colors.grayBorder};
  position: absolute;
  top: 0;
  z-index: 2;
  @media (max-width: ${metrics.desktop}) {
    padding: 10px 24px;
  }
  @media (max-width: ${metrics.mobile}) {
    height: 74px;
    justify-content: end;
  }
`;
export const Logo = styled.img`
  width: 71px;
  margin-right: auto;
  cursor: pointer;
  @media (max-width: ${metrics.mobile}) {
    width: 64px;
  }
`;
export const TitlesContainer = styled.div`
${templates.centerContent};
column-gap: 40px;
justify-content: space-between;
margin-right: auto;
@media (max-width: 1440px) {
    column-gap: 20px;
  }
@media (max-width: 1183px) {
  display: none;
  }

`;
export const IconsContainer = styled.div`
${templates.centerContent};
column-gap: 13px;
`;
export const Icon = styled.img`
width: 21px;
cursor: pointer;
`;
export const BurgerIcon = styled.img`
display: none;
cursor: pointer;
@media (max-width: 1155px) {
  display: block;
  }
`;
export const Trigger = styled.div`

@media (max-width: 440px) {
  display: none;
  }

`;