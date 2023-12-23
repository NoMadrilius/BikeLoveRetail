import styled from "styled-components";
import { colors } from "../../../theme/colors";
import { templates } from "../../../theme/templates";

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  width: 286px;
  height: 100vh;
  background-color: ${colors.white};
  overflow: scroll;
`;
export const AuthContainer = styled.div`
  ${templates.centerContent};
  width: 100%;
  height: 79px;
  padding: 11px 17px 11px 25px;
  background-color: ${colors.redBlur};
  margin-top: 23px;
`;
export const IconContainer = styled.div`
  ${templates.centerContent};
  width: 44px;
  height: 44px;
  min-height: 44px;
  min-width: 44px;
  border-radius: 50%;
  background-color: ${colors.redMain};
  margin-right: auto;
`;
export const SmallIconContainer = styled.div`
  ${templates.centerContent};
  width: 30px;
  height: 30px;
  min-height: 30px;
  min-width: 30px;
  border-radius: 50%;
  background-color: ${colors.pinkBlur};
`;
export const Icon = styled.img``;
export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RowContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.grayBorder};
`;
