/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "product-card-text": "#2c2727",
        dark: "#2c2727",
        "product-card-last-price": "rgb(107, 107, 107)",
        "t-grey": "rgb(107, 107, 107)",
        pink: "rgb(249, 67, 107)",
        gray: "rgb(218, 218, 218)",
        "number-text": "rgb(44, 39, 39)",
        "dark-text": "rgb(44, 39, 39)",
        mainScene: "#F2F2F2",
      },
      boxShadow: {
        "product-card": "4px 4px 15px 0px rgba(0, 0, 0, 0.07)",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(236.45deg, rgb(240, 27, 116) 29.85%, rgb(255, 96, 100) 93.311%)",
      },
    },
    screens: {
      sm2: "376px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
    },
  },
  plugins: [],
};
