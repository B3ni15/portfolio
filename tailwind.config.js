import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // A projektek akcentus-gradiensei a config fájlban élnek – ezek is kellenek.
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08090C",
          900: "#0B0C11",
          800: "#101219",
        },
        accent: {
          DEFAULT: "#5E78FF",
          soft: "#8A5CFF",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Inter",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      transitionTimingFunction: {
        // Apple-szerű easingek
        apple: "cubic-bezier(0.32, 0.72, 0, 1)",
        "apple-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "aurora-drift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(4%, -6%, 0) scale(1.12)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(200%)" },
        },
      },
      animation: {
        "aurora-drift": "aurora-drift 18s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
