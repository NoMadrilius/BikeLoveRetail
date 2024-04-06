import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="w-full flex flex-col gap-10 lg:gap-[52px]">
      {children}
    </main>
  );
};

export default Main;
