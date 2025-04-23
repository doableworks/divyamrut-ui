import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,js,css}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,js,css}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      boxShadow: {
        lg: "20px 10px 15px -3px rgb(0 0 0 / 0.1)",
        xl: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "custom-all":
          "0 4px 6px rgb(0 0 0 / 0.1), 0 -4px 6px rgb(0 0 0 / 0.1), 4px 0 6px rgb(0 0 0 / 0.1), -4px 0 6px rgb(0 0 0 / 0.1)",
      },
      colors: {
        secondary: "var(--e-global-color-secondary)",
        primary: "var(--e-global-color-primary)",
        text: "var(--e-global-color-text)",
        accent: "var(--e-global-color-accent)",
        d49ac81: "var(--e-global-color-d49ac81)",
        q332724a: "var(--e-global-color-332724a)",
        q4d462f5: "var(--e-global-color-4d462f5)",
        qcfa1f76: "var(--e-global-color-cfa1f76)",
        q291baba: "var(--e-global-color-291baba)",
        c94d9ab: "var(--e-global-color-c94d9ab)",
        q044b931: "var(--e-global-color-044b931)",
        q638d055: "var(--e-global-color-638d055)",
        a2c0d56: "var(--e-global-color-a2c0d56)",
        q4ca25af: "var(--e-global-color-4ca25af)",
        f83c760: "var(--e-global-color-f83c760)",

        //  new color
        FFEEE2: "var(--e-global-color-FFEEE2)",
        AA218C: "var(--e-global-color-AA218C)",
        q45B29D: "var(--e-global-color-45B29D)",
        E0A43B: "var(--e-global-color-E0A43B)",
        q3c3c3d: "var(--e-global-color-f83c760)",
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(at top right, var(--e-global-color-044b931) 0%, var(--e-global-color-638d055) 100%)",
        "custom-radial2":
          "radial-gradient(at top left, var(--e-global-color-044b931) 0%, var(--e-global-color-638d055) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        prata: ["var(--font-prata)"],
        playfair: ["var(--font-playfair)"],
        opensans: ["var(--font-opensans)"]
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require('tailwind-scrollbar')],
};
export default config;
