import styled from "styled-components";
import { metrics } from "../../../theme/metrics";

export const Wrapper = styled.div`
  width: 100%;
`;
export const BgImage = styled.div<{ bgImage: string }>`
  width: 100%;
  height: 836px;
  background-image: url(${(p) => p.bgImage});
  background-size: cover;
  background-position: right 67% bottom 45%;
  background-repeat: no-repeat;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 124px;
  row-gap: 120px;
  @media (max-width: ${metrics.desktop}) {
    padding: 10px 24px;
  }
  @media (max-width: ${metrics.mobile}) {
    padding: 10px 20px;
    row-gap: 60px;
  }
`;
