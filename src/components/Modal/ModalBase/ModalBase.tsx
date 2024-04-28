import React from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const ModalBase = (p: {
  children: ReactJSXElement;
  open: boolean;
  setOpen: (v: boolean) => void;
}) => {
  if (!p.open) return null;
  return (
    <div
      onMouseDown={(e) => {
        p.setOpen(false);
      }}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[100] overflow-hidden sm:rounded-none"
    >
      <div onMouseDown={(e) => e.stopPropagation()}>{p.children}</div>
    </div>
  );
};

export default ModalBase;
