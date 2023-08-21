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
      },
      colors: {
        light: "#DAE3E3",
        lighter: "#F1F4F4",
        lightest: "#FFFFFF",
        primary: "#62C0A5",
        secondary: "#FFA63C",
        darkest: "#000000",
        hover: "#C4CFCF",
        gray: "#afafaf",
      },
      boxShadow: {
        csm: "0px 3px 0px 0px rgb(0, 0, 0)",
        "csm-sm": "0px 2px 0px 0px rgb(0, 0, 0)",
        "csm-lg": "0px 3.5px 0px 0px rgb(0, 0, 0)",
        input: "0px 0px 5px 0px rgba(0, 0, 0, 0.25) inset",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
