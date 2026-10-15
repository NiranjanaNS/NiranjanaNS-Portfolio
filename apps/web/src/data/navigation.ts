import type { NavigationItem } from "@/types/navigation";

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Journey", href: "#journey" },
];

export const externalLinks = {
  github: "https://github.com/NiranjanaNS",
  resume: "/resume.pdf",
} as const;
