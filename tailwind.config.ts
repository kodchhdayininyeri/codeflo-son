import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#008cf1",
        "primary-foreground": "#ffffff",
        border: "rgba(255,255,255,0.1)",
        accent: "#008cf1",
        muted: {
          DEFAULT: "rgba(255,255,255,0.05)",
          foreground: "rgba(255,255,255,0.6)",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        ring: "#008cf1",
      },
      fontFamily: {
        sentient: ['Sentient', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
