import React, { useState } from "react";

const CounterControl = () => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="relative flex items-center">
      <button type="button" className="p-3" onClick={decrementCount}>
        <svg
          width="16"
          height="2"
          viewBox="0 0 16 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H15"
            stroke="#2C2727"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <input
        type="text"
        className="flex-shrink-0 size-[32px] font-bold text-center rounded-md border border-gray p-1 text-[20px] leading-[120%] text-number-text"
        placeholder=""
        value={count}
        required
      />
      <button type="button" className="p-3" onClick={incrementCount}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1V15M1 8H15"
            stroke="#2C2727"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default CounterControl;