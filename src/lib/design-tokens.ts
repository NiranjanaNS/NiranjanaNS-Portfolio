export const colors = {
  background: "#050816",
  backgroundElevated: "#0B1020",
  surface: "#0F172A",
  surfaceSoft: "#111827",
  surfaceGlass: "rgba(15, 23, 42, 0.72)",
  border: "#1E293B",
  borderStrong: "#334155",
  primary: "#3B82F6",
  primarySoft: "#60A5FA",
  secondary: "#7C3AED",
  secondarySoft: "#A78BFA",
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
  text: "#F8FAFC",
  textMuted: "#94A3B8",
  textSubtle: "#64748B",
} as const;

export const typography = {
  heading: "Space Grotesk",
  body: "Inter",
  code: "JetBrains Mono",
  scale: {
    display: { fontSize: "56px", lineHeight: "64px" },
    h1: { fontSize: "48px", lineHeight: "56px" },
    h2: { fontSize: "36px", lineHeight: "44px" },
    h3: { fontSize: "28px", lineHeight: "36px" },
    h4: { fontSize: "22px", lineHeight: "30px" },
    bodyLarge: { fontSize: "18px", lineHeight: "30px" },
    body: { fontSize: "16px", lineHeight: "26px" },
    small: { fontSize: "14px", lineHeight: "22px" },
    caption: { fontSize: "12px", lineHeight: "18px" },
  },
} as const;

export const spacing = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px",
  32: "128px",
} as const;

export const radius = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "999px",
} as const;

export const shadows = {
  sm: "0 8px 24px rgba(15, 23, 42, 0.24)",
  md: "0 16px 48px rgba(15, 23, 42, 0.32)",
  glowPrimary: "0 0 32px rgba(59, 130, 246, 0.32)",
  glowSecondary: "0 0 32px rgba(124, 58, 237, 0.28)",
} as const;

export const gradients = {
  heroSky: "linear-gradient(180deg, #111827 0%, #0B1020 48%, #050816 100%)",
  primaryGlow: "linear-gradient(135deg, #3B82F6 0%, #7C3AED 100%)",
  glassSurface: "linear-gradient(180deg, rgba(15, 23, 42, 0.84), rgba(17, 24, 39, 0.68))",
} as const;

export const zIndex = {
  base: 0,
  background: 1,
  scene: 10,
  character: 20,
  navigation: 40,
  overlay: 50,
  modal: 60,
  toast: 70,
} as const;

export const animation = {
  duration: {
    instant: "100ms",
    fast: "180ms",
    normal: "260ms",
    slow: "450ms",
    scene: "700ms",
    cinematic: "900ms",
  },
  easing: {
    standard: "cubic-bezier(0.22, 1, 0.36, 1)",
    soft: "cubic-bezier(0.16, 1, 0.3, 1)",
    emphasized: "cubic-bezier(0.19, 1, 0.22, 1)",
  },
} as const;

export const breakpoints = {
  xs: "360px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const designTokens = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  gradients,
  zIndex,
  animation,
  breakpoints,
} as const;

export type DesignTokens = typeof designTokens;
