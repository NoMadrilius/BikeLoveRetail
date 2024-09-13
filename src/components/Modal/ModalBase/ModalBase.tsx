import React, { useEffect } from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const ModalBase = (p: {
  children: ReactJSXElement;
  open: boolean;
  setOpen: (v: boolean) => void;
}) => {

  if (!p.open) return null;

  const ch = React.cloneElement(p.children, {
    onMouseDown: (e:any)=>e.stopPropagation(),
  });

  return (
    <div onMouseDown={(e)=>{p.setOpen(false)}}
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-[100] "
    >
      <div className={"h-full w-full flex justify-center items-center"}>
        {ch}
      </div>
    </div>
  );
};

export default ModalBase;
