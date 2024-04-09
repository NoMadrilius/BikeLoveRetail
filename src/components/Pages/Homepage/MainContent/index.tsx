import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="w-full flex flex-col gap-10 lg:gap-[52px] xl:gap-[52px] sm:px-5 md:px-10 xl:pl-8 pl-8">
      {children}
    </main>
  );
};

export default Main;
