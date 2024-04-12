import { ReactNode } from "react";
import Aside from "../Aside";
import Main from "../MainContent";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-[1324px] mx-auto flex lg:gap-8 pt-8 pb-20 xl:pt-10 xl:px-10 lg:pt-10">
      <Aside />
      <Main>{children}</Main>
    </div>
  );
};

export default Layout;
