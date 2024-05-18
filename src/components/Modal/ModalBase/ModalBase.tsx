import React, { useEffect } from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const ModalBase = (p: {
  children: ReactJSXElement;
  open: boolean;
  setOpen: (v: boolean) => void;
}) => {
  useEffect(() => {
    if (p.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [p.open]);

  if (!p.open) return null;

  return (
    <div
      onMouseDown={(e) => {
        p.setOpen(false);
      }}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[100] overflow-hidden sm:rounded-none overflow-hidden"
    >
      <div onMouseDown={(e) => e.stopPropagation()} className="w-full h-full">
        {p.children}
      </div>
    </div>
  );
};

export default ModalBase;
