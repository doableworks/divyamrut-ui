import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "var(--e-global-color-secondary)",
        primary: "var(--e-global-color-primary)",
        text: "var(--e-global-color-text)",
        accent: "var(--e-global-color-accent)",
        d49ac81: "var(--e-global-color-d49ac81)",
        q332724a : "var(--e-global-color-332724a)",
        q4d462f5 : "var(--e-global-color-4d462f5)",
        qcfa1f76: "var(--e-global-color-cfa1f76)",
        q291baba : "var(--e-global-color-291baba)",
        c94d9ab: "var(--e-global-color-c94d9ab)",
        q044b931 : "var(--e-global-color-044b931)",
        q638d055 : "var(--e-global-color-638d055)",
        a2c0d56: "var(--e-global-color-a2c0d56)",
        q4ca25af : "var(--e-global-color-4ca25af)",
        f83c760: "var(--e-global-color-f83c760)",
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(at top right, var(--e-global-color-044b931) 0%, var(--e-global-color-638d055) 100%)',
        'custom-radial2': 'radial-gradient(at top left, var(--e-global-color-044b931) 0%, var(--e-global-color-638d055) 100%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: { 
        inter: ['var(--font-inter)'], // Add your fallback font as needed
        jost: ['var(--font-jost)'], // Add your fallback font as needed 
        suranna: ['var(--font-suranna)'],
      },
    },
  },
  plugins: [],
};
export default config;
