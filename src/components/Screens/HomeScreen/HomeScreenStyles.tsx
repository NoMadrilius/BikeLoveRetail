import styled, { keyframes } from "styled-components";
import { metrics } from "../../../../theme/metrics";
import Image from "next/image";

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const Wrapper = styled.main`
  width: 100%;
`;
export const BgImage = styled.section<{ bgImage: string }>`
  width: 100%;
  height: calc(100vh + 3px);
  background-image: url(${(p) => p.bgImage});
  background-size: cover;
  background-position: right 67% bottom 45%;
  background-repeat: no-repeat;
  position: relative;
`;
export const MainContainer = styled.section`
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
export const IconBottom = styled(Image)`
  position: absolute;
  bottom: 40px;
  background-color: #e9e9e950;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  cursor: pointer;
  left: calc(50% - 35px);
  transform: translateX(-50%) translateY(50%);
  animation: ${bounceAnimation} 2s infinite;
`;
export const MainTitle = styled.h1<{
  $fontSize?: string;
  $color?: string;
  $fontStyle: {
    fontFamily: string;
    fontWeight: string;
  };
  $margin?: string;
  $textTransform?: string;
}>`
  white-space: pre-line;
  color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize};
  margin: ${({ $margin }) => ($margin ? $margin : "0")};
  font-family: ${({ $fontStyle }) => $fontStyle?.fontFamily};
  font-weight: ${({ $fontStyle }) => $fontStyle?.fontWeight};
  text-transform: ${({ $textTransform }) => $textTransform};
`;
export const SecondaryTitle = styled.h2<{
  $fontSize?: string;
  $color?: string;
  $fontStyle: {
    fontFamily: string;
    fontWeight: string;
  };
  $textTransform?: string;
  $margin?: string;
}>`
  text-transform: ${({ $textTransform }) => $textTransform};

  color: ${({ $color }) => ($color ? $color : "black")};
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : "42px")};
  margin: ${({ $margin }) => ($margin ? $margin : "0")};

  font-family: ${({ $fontStyle }) => $fontStyle?.fontFamily};
  font-weight: ${({ $fontStyle }) => $fontStyle?.fontWeight};
  white-space: pre-line;
`;

export const Subtitle = styled.h3<{
  $fontSize?: string;
  $color?: string;
  $fontWeight?: string;
  $margin?: string;
  $fontStyle?: {
    fontFamily: string;
    fontWeight: string;
  };

  $textTransform?: string;
}>`
  color: ${({ $color }) => $color};
  text-transform: ${({ $textTransform }) => $textTransform};
  margin: ${({ $margin }) => ($margin ? $margin : "0")};
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : "39px")};

  font-family: ${({ $fontStyle }) => $fontStyle?.fontFamily};
  font-weight: ${({ $fontStyle }) => $fontStyle?.fontWeight};

  white-space: pre-line;
`;

export const Paragraph = styled.p<{
  $fontSize?: string;
  $color?: string;
  $fontStyle?: {
    fontFamily: string;
    fontWeight: string;
  };
  $margin?: string;
  $maxWidth?: string;
}>`
  color: ${({ $color }) => $color};
  max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : "auto")};
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : "19px")};
  margin: ${({ $margin }) => ($margin ? $margin : "0")};

  font-family: ${({ $fontStyle }) => $fontStyle?.fontFamily};
  font-weight: ${({ $fontStyle }) => $fontStyle?.fontWeight};

  white-space: pre-line;
`;

export const LiItem = styled.li<{
  $fontStyle?: {
    fontFamily: string;
    fontWeight: string;
  };
  $color?: string;
}>`
  font-size: 16px;
  color: ${({ $color }) => $color};

  font-family: ${({ $fontStyle }) => $fontStyle?.fontFamily};
  font-weight: ${({ $fontStyle }) => $fontStyle?.fontWeight};
`;
