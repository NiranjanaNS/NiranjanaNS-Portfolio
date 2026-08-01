"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { clamp } from "@/utils/clamp";

interface ScrollContextValue {
  progress: number;
  scrollY: number;
  direction: "up" | "down";
}

const ScrollContext = createContext<ScrollContextValue | null>(null);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const previousScrollY = useRef(0);
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const nextScrollY = window.scrollY;
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);

      setDirection(nextScrollY >= previousScrollY.current ? "down" : "up");
      setScrollY(nextScrollY);
      setProgress(clamp(nextScrollY / maxScroll, 0, 1));
      previousScrollY.current = nextScrollY;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const value = useMemo(() => ({ direction, progress, scrollY }), [direction, progress, scrollY]);

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
}

export function useScrollProgress() {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error("useScrollProgress must be used within ScrollProvider");
  }

  return context;
}
