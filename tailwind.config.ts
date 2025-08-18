import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1.2" }],
        sm: ["14px", { lineHeight: "1.4" }],
        md: ["16px", { lineHeight: "1.5" }],
        lg: ["18px", { lineHeight: "1.5" }],
        xl: ["20px", { lineHeight: "1.5" }],
        "2xl": ["24px", { lineHeight: "1.5" }],
        sectionHeading: ["70px", { lineHeight: "1.2" }],
      },
      lineHeight: {
        "extra-tight": "1.05",
        snug: "1.3",
        relaxed: "1.75",
      },
    },
  },
  plugins: [],
};

export default config;
