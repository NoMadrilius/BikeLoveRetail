import styled from "styled-components";

export const TextStyle = styled.span<{
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
  preline?: boolean;
  textTransform?: string;
  textDecoration?: string;
  suppressHydrationWarning?:boolean
}>`
  max-width: ${(p) => p.maxWidth || "100%"};
  text-transform: ${(p) => p.textTransform || "none"};
  color: ${(p) => p.color};
  font-size: ${(p) => p.size};
  font-family: ${(p) => p.fontStyle?.fontFamily};
  font-weight: ${(p) => p.fontStyle?.fontWeight};
  margin: ${(p) => p.margin};
  text-decoration: ${(p) =>
    p.textDecoration === "trought" && `line-through ${p.color}`};
  text-align: ${(p) => p.textAlign || ""};
  cursor: ${(p) => (p.func || p.hoverColor ? "pointer" : "inherit")};
  transition: 0.3s;
  white-space: ${(p) => p.whiteSpace && "nowrap"};
  white-space: ${(p) => p.preline && "pre-line"};
  z-index: 1;
  &:hover {
    color: ${(p) => (p.hoverColor || p.func ? p.hoverColor : p.color)};
  }

  @media (max-width: 500px) {
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
          case "15px":
            return "15px";
          case "13px":
            return "13px";

          default:
            return `${props.size} / 1.3`;
        }
      }}
    );
  }
`;
