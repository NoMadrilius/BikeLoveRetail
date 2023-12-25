import * as React from "react"
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
      stroke="orange"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 7v6m9-1a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
    <circle cx={12} cy={16.5} r={1} fill="orange" />
  </svg>
)
export default SvgComponent
