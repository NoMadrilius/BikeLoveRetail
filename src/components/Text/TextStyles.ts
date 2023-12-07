import styled from "styled-components";

export const TextStyle = styled.div<{
  color: string;
  hoverColor?: string;
  func?: () => void;
  size?: string;
  fontStyle?: {
    fontFamily: string;
    fontWeight: string;
  };
  margin?: string;
  maxWidth?: string;
  textAlign?: string;
  whiteSpace?: boolean;
  textTransform?: string
}>`
  max-width: ${(p) => p.maxWidth || "100%"};
  text-transform: ${p => p.textTransform || 'none'} ;
  color: ${(p) => p.color};
  font-size: ${(p) => p.size};
  font-family: ${(p) => p.fontStyle?.fontFamily};
  font-weight: ${(p) => p.fontStyle?.fontWeight};
  margin: ${(p) => p.margin};
  text-align: ${(p) => p.textAlign || ""};
  cursor: ${(p) => (p.func || p.hoverColor ? "pointer" : "inherit")};
  transition: 0.3s;
white-space:  ${p => p.whiteSpace && 'nowrap'};
  &:hover {
    color: ${(p) => (p.hoverColor || p.func ? p.hoverColor : p.color)};
  }
  @media (max-width: 700px) {
    font-size: calc(
      ${(props) => {
        switch (props.size) {
          case "51px":
            return "50px";
          case "50px":
            return "24px";
          case "41px":
            return "40px";
          case "40px":
            return "20px";
          case "38px":
            return "32px";
          case "32px":
            return "16px";
          case "25px":
            return "12px";
          case "21.5px":
            return "18px";
          case "21px":
            return "16px";
          case "20px":
            return "11px";
          case "16px":
            return "14px";

          default:
            return `${props.size} / 1.5`;
        }
      }}
    );
  }
`;
