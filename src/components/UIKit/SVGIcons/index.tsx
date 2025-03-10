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
      <g clipPath="url(#clip0_4415_2710)">
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeLinecap="round"
        strokeLinejoin="round"
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

export const LeftIconSVG = ({ className }: { className?: string }) => {
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
        d="M10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645C10.1583 3.45118 9.84171 3.45118 9.64645 3.64645L10.3536 4.35355ZM6 8L5.64645 7.64645C5.45118 7.84171 5.45118 8.15829 5.64645 8.35355L6 8ZM9.64645 12.3536C9.84171 12.5488 10.1583 12.5488 10.3536 12.3536C10.5488 12.1583 10.5488 11.8417 10.3536 11.6464L9.64645 12.3536ZM9.64645 3.64645L5.64645 7.64645L6.35355 8.35355L10.3536 4.35355L9.64645 3.64645ZM5.64645 8.35355L9.64645 12.3536L10.3536 11.6464L6.35355 7.64645L5.64645 8.35355Z"
        fill="#2C2727"
      />
    </svg>
  );
};

export const RightIconSVG = ({ className }: { className?: string }) => {
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
        d="M6.35355 3.64645C6.15829 3.45118 5.84171 3.45118 5.64645 3.64645C5.45118 3.84171 5.45118 4.15829 5.64645 4.35355L6.35355 3.64645ZM10 8L10.3536 8.35355C10.5488 8.15829 10.5488 7.84171 10.3536 7.64645L10 8ZM5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536C5.84171 12.5488 6.15829 12.5488 6.35355 12.3536L5.64645 11.6464ZM5.64645 4.35355L9.64645 8.35355L10.3536 7.64645L6.35355 3.64645L5.64645 4.35355ZM9.64645 7.64645L5.64645 11.6464L6.35355 12.3536L10.3536 8.35355L9.64645 7.64645Z"
        fill="#2C2727"
      />
    </svg>
  );
};

export const FilterIconSvg = (p: { onClick?: () => void }) => {
  return (
    <svg
      onClick={() => {
        p.onClick ? p.onClick() : null;
      }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 8H20M4 16H14" stroke="white" strokeLinecap="round" />
      <path
        d="M4 8C4 9.65685 5.34315 11 7 11C8.65685 11 10 9.65685 10 8C10 6.34315 8.65685 5 7 5C5.34315 5 4 6.34315 4 8Z"
        stroke="white"
        strokeLinecap="round"
      />
      <path
        d="M14 16C14 17.6569 15.3431 19 17 19C18.6569 19 20 17.6569 20 16C20 14.3431 18.6569 13 17 13C15.3431 13 14 14.3431 14 16Z"
        stroke="white"
        strokeLinecap="round"
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
        strokeOpacity="1.000000"
        strokeWidth="1.000000"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const HomeIconSVG = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5 20V9.25L21.2534 9.137C17.5093 7.42094 14.3863 4.59079 12.311 1.03319L12 0.5H10L9.689 1.03319C7.6137 4.59079 4.4907 7.42094 0.74659 9.137L0.5 9.25V20M22 21.5H0M14 20V16C14 14.3431 12.6569 13 11 13C9.3431 13 8 14.3431 8 16V20"
        stroke="black"
      />
    </svg>
  );
};

export const LogOutIconSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 12H8M18.5 7C18.5 7.57663 19.165 8.56229 19.7281 9.29353C20.2215 9.93433 20.8017 10.5049 21.473 10.956C22.2 11.4445 23.2002 12 23.9904 12C23.2002 12 22.2 12.5555 21.473 13.044C20.8017 13.4951 20.2215 14.0657 19.7281 14.7065C19.165 15.4377 18.5 16.4234 18.5 17M14.5 7V2.5H14.1714C9.74696 2.5 5.34562 1.86167 1.10343 0.604727L0.749973 0.5H0.5L0.500001 23.5H0.749974L1.10343 23.3953C5.34562 22.1383 9.74696 21.5 14.1714 21.5H14.5V17"
        stroke="url(#paint0_linear_6312_8304)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6312_8304"
          x1="22.0417"
          y1="5.53125"
          x2="0.789659"
          y2="20.0895"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.202171" stopColor="#F01B74" />
          <stop offset="1" stopColor="#FF6064" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const PinkArrowIconSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 6L6.5 11L16.5 1"
        stroke="#F9436B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const InCartMobileIconSVG = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 21C5.5 22.1046 6.39543 23 7.5 23C8.60457 23 9.5 22.1046 9.5 21M12.5 21C12.5 22.1046 13.3954 23 14.5 23C15.6046 23 16.5 22.1046 16.5 21M9.5 6L12 9.12155L18.5 3M1 1.5C3.33748 1.5 4.5599 6.85231 5.11407 10.4078C5.43421 12.4619 5.5 14.5408 5.5 16.6196V18.5H18.5V18.3395C18.5 14.5681 19.8322 10.918 22.2614 8.03332H18.5"
        stroke="url(#paint0_linear_6319_11279)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6319_11279"
          x1="20.4896"
          y1="6.20312"
          x2="0.865678"
          y2="19.2141"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.202171" stopColor="#F01B74" />
          <stop offset="1" stopColor="#FF6064" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const SpinnerIconSVG = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MoneyIconSVG = () => {
  return (
    <svg
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 9H6M18 9H20M0.5 13.5V17H1C1.86554 16.8557 2.89756 16.7323 4 16.6297M0.5 13.5H1C2.65685 13.5 4 14.8431 4 16.5V16.6297M0.5 13.5V4.5M4 16.6297C6.71866 16.3766 9.86554 16.25 12 16.25C14.1345 16.25 17.2813 16.3766 20 16.6297M0.5 4.5V1H1C1.86554 1.14426 2.89756 1.2677 4 1.37034M0.5 4.5H1C2.65685 4.5 4 3.15685 4 1.5V1.37034M20 16.6297C21.1024 16.7323 22.1345 16.8557 23 17H23.5V13.5M20 16.6297V16.5C20 14.8431 21.3431 13.5 23 13.5H23.5M23.5 13.5V4.5M23.5 4.5V1H23C22.1345 1.14426 21.1024 1.2677 20 1.37034M23.5 4.5H23C21.3431 4.5 20 3.15685 20 1.5V1.37034M20 1.37034C17.2813 1.62345 14.1345 1.75 12 1.75C9.86554 1.75 6.71866 1.62345 4 1.37034M12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.6193 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.6193 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"
        stroke="url(#paint0_linear_6370_2878)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6370_2878"
          x1="21.5833"
          y1="4.5"
          x2="5.7396"
          y2="19.7698"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.202171" stopColor="#F01B74" />
          <stop offset="1" stopColor="#FF6064" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const DeliveryIconSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_6370_2849)">
        <path
          d="M11.5 5V16M19.5 5V16M18.5 5C18.5 3.34315 17.1569 2 15.5 2C13.8431 2 12.5 3.34315 12.5 5M4.5 21.5C4.5 22.6046 5.39543 23.5 6.5 23.5C7.60457 23.5 8.5 22.6046 8.5 21.5M19.5 21.5C19.5 22.6046 20.3954 23.5 21.5 23.5C22.6046 23.5 23.5 22.6046 23.5 21.5M24 19H4.5V15.7512C4.5 12.5855 4.44209 9.39815 3.7051 6.31948C3.03471 3.51909 1.87677 0.5 0 0.5M23.5 16H7.5V15.8235L7.70246 14.4777C7.90054 13.1611 8 11.8315 8 10.5C8 9.16853 7.90054 7.83891 7.70246 6.52226L7.5 5.17647V5H23.5V5.17647L23.2975 6.52226C23.0995 7.83891 23 9.16853 23 10.5C23 11.8315 23.0995 13.1611 23.2975 14.4777L23.5 15.8235V16Z"
          stroke="url(#paint0_linear_6370_2849)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_6370_2849"
          x1="22"
          y1="5.53125"
          x2="0.589901"
          y2="20.5099"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.202171" stopColor="#F01B74" />
          <stop offset="1" stopColor="#FF6064" />
        </linearGradient>
        <clipPath id="clip0_6370_2849">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const GuaranteeIconSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.75 23.5C4 19 2.5 16 2.5 5.5C5.64971 5.5 8.85633 4.26178 10.7763 2.14294C11.1977 1.67788 11.4627 1.09898 11.65 0.5H12.35C12.5373 1.09898 12.8023 1.67788 13.2237 2.14294C15.1437 4.26178 18.3503 5.5 21.5 5.5C21.5 16 20 19 12.25 23.5H11.75Z"
        stroke="url(#paint0_linear_6370_2898)"
      />
      <path
        d="M16.4998 8.5C14.5817 8.47767 12.2483 14.1883 11.8646 16.0678L11.7013 16.1995L11.4563 15.5846C10.8095 13.9613 9.99976 13 8.49976 12"
        stroke="url(#paint1_linear_6370_2898)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6370_2898"
          x1="19.9167"
          y1="5.53125"
          x2="0.597331"
          y2="16.2313"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.202171" stopColor="#F01B74" />
          <stop offset="1" stopColor="#FF6064" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_6370_2898"
          x1="15.2252"
          y1="8.05751"
          x2="14.7308"
          y2="15.7452"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.202171" stopColor="#F01B74" />
          <stop offset="1" stopColor="#FF6064" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const LeftIconArrow = () => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 1L1 7L7 13"
        stroke="#2C2727"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const RightIconArrow = () => {
  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 7L1 13"
        stroke="#2C2727"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ClockOrderIconSVG = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 3.83333V8L10.5 10.5M0.5 8C0.5 8.98491 0.693993 9.96018 1.0709 10.8701C1.44781 11.7801 2.00026 12.6069 2.6967 13.3033C3.39314 13.9997 4.21993 14.5522 5.12987 14.9291C6.03982 15.306 7.01509 15.5 8 15.5C8.98491 15.5 9.96018 15.306 10.8701 14.9291C11.7801 14.5522 12.6069 13.9997 13.3033 13.3033C13.9997 12.6069 14.5522 11.7801 14.9291 10.8701C15.306 9.96018 15.5 8.98491 15.5 8C15.5 6.01088 14.7098 4.10322 13.3033 2.6967C11.8968 1.29018 9.98912 0.5 8 0.5C6.01088 0.5 4.10322 1.29018 2.6967 2.6967C1.29018 4.10322 0.5 6.01088 0.5 8Z"
        stroke="#2C2727"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const GreenArrowIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12L10 17L20 7"
        stroke="#2AA77F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
