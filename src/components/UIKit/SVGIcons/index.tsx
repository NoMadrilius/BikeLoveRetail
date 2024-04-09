import React from "react";

export const SearchIcon = ({ width = 24, height = 25, color = "#DEDEDE" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4415_2710)">
        <path
          d="M18.4246 18.9246L23.5 24M11 22C5.20101 22 0.5 17.299 0.5 11.5C0.5 5.70101 5.20101 1 11 1C16.799 1 21.5 5.70101 21.5 11.5C21.5 17.299 16.799 22 11 22Z"
          stroke={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_4415_2710">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowCheckIcon = () => {
  return (
    <svg
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.16699 5.91105L5.33366 10.0777L13.667 1.74438"
        stroke="#F9436B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const DownArrowIcon = () => {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 7L13 1"
        stroke="#6B6B6B"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const PlusIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0.911133V14.9111M1 7.91113H15"
        stroke="#6B6B6B"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const MinusIcon = () => {
  return (
    <svg
      width="16"
      height="2"
      viewBox="0 0 16 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 0.911133H15"
        stroke="#6B6B6B"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ClearIcon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 0.911133L1 12.9111M1 0.911133L13 12.9111"
        stroke="#6B6B6B"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
