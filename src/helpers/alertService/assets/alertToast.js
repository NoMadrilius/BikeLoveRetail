import * as React from "react";
const SvgComponent = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="red"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 10v3M12 16v-.011"
    />
    <path
      stroke="red"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.252 5.147 3.65 17.029C2.91 18.362 3.874 20 5.399 20h13.202c1.525 0 2.489-1.638 1.748-2.971l-6.6-11.882c-.763-1.372-2.735-1.372-3.497 0Z"
    />
  </svg>
);
export default SvgComponent;
