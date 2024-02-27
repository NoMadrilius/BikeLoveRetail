import styled from "styled-components";
import { templates } from "../../../theme/templates";
import { colors } from "../../../theme/colors";

const BlurWrapper= (p:{ children : any }) => {
  return <Wrapper>{p.children}</Wrapper>;
};
export default BlurWrapper;

const Wrapper = styled.div`
  position: fixed;
  ${templates.centerContent};
  width: stretch;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: ${colors.blurBg};
  z-index: 8;
`;
