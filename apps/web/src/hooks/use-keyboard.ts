"use client";

import { useEffect } from "react";

export function useKeyboard(key: string, handler: (event: KeyboardEvent) => void) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        handler(event);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handler, key]);
}
