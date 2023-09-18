/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cross-icon": "url('/icons/cross.svg')",
      },
      colors: {
        light: "#e9efef",
        lighter: "#F1F5F5",
        lightest: "#FFFFFF",
        primary: "#62C0A5",
        "primary-dark": "#40A689",
        secondary: "#FFA63C",
        darkest: "#000000",
        hover: "#C4CFCF",
        gray: "#afafaf",
      },
      boxShadow: {
        csm: "0px 3px 0px 0px rgb(0, 0, 0)",
        "csm-sm": "0px 2px 0px 0px rgb(0, 0, 0)",
        "csm-lg": "0px 3.5px 0px 0px rgb(0, 0, 0)",
        modal: "0px 20px 0px 0px rgba(0, 0, 0, 0.50)",
        input: "0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset",
      },
      borderWidth: {
        3: "3px",
        main: "2px",
      },
      height: {
        "input-sm": "32px",
        "input-md": "40px",
        "input-lg": "50px",
      },
      padding: {
        "input-sm": "4px 12px",
        "input-md": "6px 14px",
        "input-lg": "8px 16px",
        // "input-sm": "0px 12px",
        // "input-md": "0px 14px",
        // "input-lg": "0px 16px",
      },
      borderRadius: {
        "input-sm": "7px",
        "input-md": "8px",
        "input-lg": "9px",
      },
      fontSize: {
        "input-sm": "12px",
        "input-md": "14px",
        "input-lg": "16px",
        "input-label-lg": "12px",
        "input-label-md": "11px",
        "input-label-sm": "11px",
        "button-sm": "12px",
        "button-md": "14px",
        "button-lg": "14px",
      },
    },
  },
  plugins: [],
};
