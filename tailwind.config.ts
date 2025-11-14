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
        primary: "#75A7D4",
        "primary-foreground": "#ffffff",
        border: "rgba(255,255,255,0.1)",
        accent: "#75A7D4",
        muted: {
          DEFAULT: "rgba(255,255,255,0.05)",
          foreground: "rgba(255,255,255,0.6)",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        ring: "#75A7D4",
      },
      fontFamily: {
        sentient: ['Sentient', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
