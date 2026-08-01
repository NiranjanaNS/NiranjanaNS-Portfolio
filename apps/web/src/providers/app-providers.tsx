"use client";

import type { ReactNode } from "react";
import { AnimationProvider } from "./animation-provider";
import { SceneProvider } from "./scene-provider";
import { ScrollProvider } from "./scroll-provider";
import { SmoothScrollProvider } from "./smooth-scroll-provider";
import { ThemeProvider } from "./theme-provider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <SceneProvider>
          <AnimationProvider>
            <SmoothScrollProvider>{children}</SmoothScrollProvider>
          </AnimationProvider>
        </SceneProvider>
      </ScrollProvider>
    </ThemeProvider>
  );
}
