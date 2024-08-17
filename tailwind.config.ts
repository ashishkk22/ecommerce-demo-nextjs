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
        primary: "#fa5252",
        secondary: "#ced4da",
        background: "#f5f5f5",
        surface: "#FFFFFF",

        textPrimary: "#70544f",
        textSecondary: "#121212",
        success: "#28A745",
        error: "#DC3545",
        warning: "#FFC107",
        info: "#17A2B8",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        serif: ["Roboto", "serif"],
      },
      fontSize: {
        h1: "36px",
        h2: "30px",
        h3: "24px",
        body: "16px",
        small: "14px",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        bold: "700",
      },
      spacing: {
        "4": "16px",
        "8": "32px",
        "12": "48px",
        "16": "64px",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      transitionDuration: {
        "0": "0ms",
        "200": "200ms",
        "500": "500ms",
      },
      transitionTimingFunction: {
        "in-out": "ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
