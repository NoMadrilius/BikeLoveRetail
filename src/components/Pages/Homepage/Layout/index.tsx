import { ReactNode } from "react";
import Aside from "../Aside";
import Main from "../MainContent";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-[1324px] mx-auto flex gap-8 pt-10">
      <Aside />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
