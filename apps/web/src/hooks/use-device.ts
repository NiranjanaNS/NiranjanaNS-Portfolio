"use client";

import { useWindowSize } from "./use-window-size";

export function useDevice() {
  const { width } = useWindowSize();

  if (width === 0) {
    return "desktop";
  }

  if (width < 768) {
    return "mobile";
  }

  if (width < 1024) {
    return "tablet";
  }

  return "desktop";
}
