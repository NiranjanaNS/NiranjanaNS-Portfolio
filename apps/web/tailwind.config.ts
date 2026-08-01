import type { Config } from "tailwindcss";

const withOpacity = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: withOpacity("--color-background"),
        surface: withOpacity("--color-surface"),
        card: withOpacity("--color-card"),
        border: withOpacity("--color-border"),
        primary: withOpacity("--color-primary"),
        primarySoft: withOpacity("--color-primary-soft"),
        secondary: withOpacity("--color-secondary"),
        success: withOpacity("--color-success"),
        warning: withOpacity("--color-warning"),
        error: withOpacity("--color-error"),
        text: withOpacity("--color-text"),
        muted: withOpacity("--color-muted"),
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
