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

export const SvgRightIcon = ({
  h = 14,
  w = 8,
  color = "#2C2727",
  className,
}: {
  h?: number;
  w?: number;
  color?: string;
  className?: string;
}) => {
  return (
    <svg
      className={`shrink-0 ${className}`}
      width={w}
      height={h}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 7L1 13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const TrashIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.66675 4.66667H13.3334M6.66675 7.33333V11.3333M9.33341 7.33333V11.3333M3.33341 4.66667L4.00008 12.6667C4.00008 13.0203 4.14056 13.3594 4.39061 13.6095C4.64065 13.8595 4.97979 14 5.33341 14H10.6667C11.0204 14 11.3595 13.8595 11.6096 13.6095C11.8596 13.3594 12.0001 13.0203 12.0001 12.6667L12.6667 4.66667M6.00008 4.66667V2.66667C6.00008 2.48986 6.07032 2.32029 6.19534 2.19526C6.32037 2.07024 6.48994 2 6.66675 2H9.33341C9.51023 2 9.67979 2.07024 9.80482 2.19526C9.92984 2.32029 10.0001 2.48986 10.0001 2.66667V4.66667"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const HeartIcon = () => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99992 4.66669V3.99101M7.99992 4.16677C7.99992 2.23373 9.56698 0.666687 11.5 0.666687C13.433 0.666687 15.0001 2.25483 15.0001 4.18787C15.0001 5.22791 14.5416 6.22495 13.7468 6.89589L9.97558 10.0798C8.72272 11.1376 7.99992 12.6938 7.99992 14.3334C7.99992 12.6938 7.27712 11.1376 6.02426 10.0798L2.25295 6.89589C1.45826 6.22495 0.999756 5.22793 0.999756 4.18789C0.999756 2.25485 2.5668 0.666694 4.49984 0.666694C6.43288 0.666694 7.99992 2.23373 7.99992 4.16677Z"
        stroke="#2C2727"
      />
    </svg>
  );
};
