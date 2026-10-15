"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type LenisInstance = {
  destroy: () => void;
  raf: (time: number) => void;
};

type LenisConstructor = new (options?: {
  duration?: number;
  lerp?: number;
  smoothWheel?: boolean;
}) => LenisInstance;

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let frame = 0;
    let lenis: LenisInstance | null = null;
    let cancelled = false;

    void import("lenis").then((module) => {
      if (cancelled) {
        return;
      }

      const Lenis = module.default as LenisConstructor;
      lenis = new Lenis({ duration: 1.05, lerp: 0.1, smoothWheel: true });

      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };

      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, [prefersReducedMotion]);

  return children;
}
