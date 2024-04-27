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

export const PlusIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
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

export const TrashIcon = (p: { onClick?: () => void }) => {
  return (
    <svg
      onClick={() => {
        p.onClick ? p.onClick() : null;
      }}
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

export const WhiteCross = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.35355 1.35355C9.54882 1.15829 9.54882 0.841709 9.35355 0.646447C9.15829 0.451184 8.84171 0.451184 8.64645 0.646447L9.35355 1.35355ZM0.646447 8.64645C0.451184 8.84171 0.451184 9.15829 0.646447 9.35355C0.841709 9.54882 1.15829 9.54882 1.35355 9.35355L0.646447 8.64645ZM1.35355 0.646447C1.15829 0.451184 0.841709 0.451184 0.646447 0.646447C0.451184 0.841709 0.451184 1.15829 0.646447 1.35355L1.35355 0.646447ZM8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L8.64645 9.35355ZM8.64645 0.646447L0.646447 8.64645L1.35355 9.35355L9.35355 1.35355L8.64645 0.646447ZM0.646447 1.35355L8.64645 9.35355L9.35355 8.64645L1.35355 0.646447L0.646447 1.35355Z"
        fill="white"
      />
    </svg>
  );
};

export const WhiteArrowIconSVG = () => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.68687 3.64628C1.4916 3.45102 1.17502 3.45102 0.97976 3.64628C0.784497 3.84155 0.784497 4.15813 0.97976 4.35339L1.68687 3.64628ZM4.66665 7.33317L4.31309 7.68672C4.50836 7.88199 4.82494 7.88199 5.0202 7.68672L4.66665 7.33317ZM11.6869 1.02006C11.8821 0.824795 11.8821 0.508213 11.6869 0.312951C11.4916 0.117688 11.175 0.117688 10.9798 0.31295L11.6869 1.02006ZM0.97976 4.35339L4.31309 7.68672L5.0202 6.97962L1.68687 3.64628L0.97976 4.35339ZM5.0202 7.68672L11.6869 1.02006L10.9798 0.31295L4.31309 6.97962L5.0202 7.68672Z"
        fill="white"
      />
    </svg>
  );
};

export const AccordionIconSVG = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.35355 0.646447C1.15829 0.451184 0.841709 0.451184 0.646447 0.646447C0.451184 0.841709 0.451184 1.15829 0.646447 1.35355L1.35355 0.646447ZM7 7L6.64645 7.35355C6.84171 7.54882 7.15829 7.54882 7.35355 7.35355L7 7ZM13.3536 1.35355C13.5488 1.15829 13.5488 0.841709 13.3536 0.646447C13.1583 0.451184 12.8417 0.451184 12.6464 0.646447L13.3536 1.35355ZM0.646447 1.35355L6.64645 7.35355L7.35355 6.64645L1.35355 0.646447L0.646447 1.35355ZM7.35355 7.35355L13.3536 1.35355L12.6464 0.646447L6.64645 6.64645L7.35355 7.35355Z"
        fill="#6B6B6B"
      />
    </svg>
  );
};

export const LeftIconSVG = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645C10.1583 3.45118 9.84171 3.45118 9.64645 3.64645L10.3536 4.35355ZM6 8L5.64645 7.64645C5.45118 7.84171 5.45118 8.15829 5.64645 8.35355L6 8ZM9.64645 12.3536C9.84171 12.5488 10.1583 12.5488 10.3536 12.3536C10.5488 12.1583 10.5488 11.8417 10.3536 11.6464L9.64645 12.3536ZM9.64645 3.64645L5.64645 7.64645L6.35355 8.35355L10.3536 4.35355L9.64645 3.64645ZM5.64645 8.35355L9.64645 12.3536L10.3536 11.6464L6.35355 7.64645L5.64645 8.35355Z"
        fill="#2C2727"
      />
    </svg>
  );
};

export const RightIconSVG = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.35355 3.64645C6.15829 3.45118 5.84171 3.45118 5.64645 3.64645C5.45118 3.84171 5.45118 4.15829 5.64645 4.35355L6.35355 3.64645ZM10 8L10.3536 8.35355C10.5488 8.15829 10.5488 7.84171 10.3536 7.64645L10 8ZM5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536C5.84171 12.5488 6.15829 12.5488 6.35355 12.3536L5.64645 11.6464ZM5.64645 4.35355L9.64645 8.35355L10.3536 7.64645L6.35355 3.64645L5.64645 4.35355ZM9.64645 7.64645L5.64645 11.6464L6.35355 12.3536L10.3536 8.35355L9.64645 7.64645Z"
        fill="#2C2727"
      />
    </svg>
  );
};

export const FilterIconSvg = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 8H20M4 16H14" stroke="white" stroke-linecap="round" />
      <path
        d="M4 8C4 9.65685 5.34315 11 7 11C8.65685 11 10 9.65685 10 8C10 6.34315 8.65685 5 7 5C5.34315 5 4 6.34315 4 8Z"
        stroke="white"
        stroke-linecap="round"
      />
      <path
        d="M14 16C14 17.6569 15.3431 19 17 19C18.6569 19 20 17.6569 20 16C20 14.3431 18.6569 13 17 13C15.3431 13 14 14.3431 14 16Z"
        stroke="white"
        stroke-linecap="round"
      />
    </svg>
  );
};

export const CloseModalIcon = () => {
  return (
    <svg
      width="13.000000"
      height="13.000000"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs />
      <path
        id="Vector"
        d="M12 0L0 12M0 0L12 12"
        stroke="#6B6B6B"
        stroke-opacity="1.000000"
        stroke-width="1.000000"
        stroke-linejoin="round"
      />
    </svg>
  );
};
