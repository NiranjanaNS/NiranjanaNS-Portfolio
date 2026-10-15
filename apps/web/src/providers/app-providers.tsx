"use client";

import type { ReactNode } from "react";
import { AnimationProvider } from "./animation-provider";
import { ScrollProvider } from "./scroll-provider";
import { SmoothScrollProvider } from "./smooth-scroll-provider";
import { ThemeProvider } from "./theme-provider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <AnimationProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </AnimationProvider>
      </ScrollProvider>
    </ThemeProvider>
  );
}
