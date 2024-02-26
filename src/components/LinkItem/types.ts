import { CSSProperties, MouseEventHandler } from "react";

export type LinkItemProps = {
  children: React.ReactNode;
  color: string;
  whiteSpace?: boolean;
  preline?: boolean;
  hoverColor?: string;
  func?: () => void;
  href: string;

  size?: string;
  fontStyle?: {
    fontFamily: string;
    fontWeight: string;
  };
  margin?: string;
  maxWidth?: string;
  textAlign?: string;
  textTransform?: "uppercase" | "lowecase";
  textDecoration?: "trought";
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>;
  style?: CSSProperties;
};
