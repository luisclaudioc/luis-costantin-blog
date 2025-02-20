import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "bounce-horizontal": "bounceHorizontal 0.5s ease-in-out",
      },
      keyframes: {
        bounceHorizontal: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(4px)" }, 
          "100%": { transform: "translateX(0)" }, 
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
