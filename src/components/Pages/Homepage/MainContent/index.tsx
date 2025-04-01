import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  const rawHTML = `
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VHCZ19B5K9">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VHCZ19B5K9');
</script>
  `;
  //w-full flex flex-col gap-10 lg:gap-[52px] xl:gap-[52px] sm:pl-0 md:px-10 xl:pl-8 pl-8 lg:pl-0
  return (
      <div className={"w-full flex justify-center desc:pt-4 tab:px-4 mob:px-2"}>
          <main className="w-full flex flex-col items-center desc:w-[1324px]">
              <div
                  dangerouslySetInnerHTML={{ __html: rawHTML }}
              />
              {children}
          </main>
      </div>
  );
};

export default Main;
