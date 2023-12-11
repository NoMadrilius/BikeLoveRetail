import { css, styled } from "styled-components";
import { metrics } from "./metrics";

export const templates = {
  absolute: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  centerContent: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  centerItems: css`
    display: flex;
    align-items: center;
  `,
  
};

export const PaddingWrapper = styled.div`
padding: 0 124px;
  padding-top: 90px;
  @media(max-width: ${metrics.desktop}){
    padding: 0 25px;
    padding-top: 90px;
   
  }
  @media(max-width: ${metrics.mobile}){
    padding: 0 20px;
    padding-top: 74px;
  }
`;