"use client";

import { useEffect, useState } from "react";

export function useMouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });

    window.addEventListener("mousemove", update, { passive: true });

    return () => window.removeEventListener("mousemove", update);
  }, []);

  return position;
}
