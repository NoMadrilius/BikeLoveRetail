import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <main className="w-full bg-[#753939]">{children}</main>;
};

export default Main;
