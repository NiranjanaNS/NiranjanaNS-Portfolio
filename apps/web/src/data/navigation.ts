import type { NavigationItem } from "@/types/navigation";

export const navigationItems: NavigationItem[] = [
  { label: "Journey", href: "#journey" },
  { label: "Architecture", href: "#architecture" },
  { label: "Engine", href: "#engine" },
  { label: "Contact", href: "#contact" },
];

export const externalLinks = {
  github: "https://github.com/NiranjanaNS",
  resume: "/resume.pdf",
} as const;
