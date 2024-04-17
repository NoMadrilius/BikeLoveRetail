import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="w-full flex flex-col gap-10 lg:gap-[52px] xl:gap-[52px] sm:pl-0 md:px-10 xl:pl-8 pl-8 lg:pl-0">
      {children}
    </main>
  );
};

export default Main;
