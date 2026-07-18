import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0F172A",
        card: "#111827",
        border: "#1E293B",
        primary: "#3B82F6",
        secondary: "#7C3AED",
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        text: "#F8FAFC",
        muted: "#94A3B8",
      },
      borderRadius: {
        component: "8px",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        code: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
