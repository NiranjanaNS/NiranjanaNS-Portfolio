"use client";

import type { ReactNode } from "react";
import { createContext, useContext } from "react";
import type { SceneState } from "@/types/scene";

const SceneContext = createContext<SceneState | null>(null);

export function SceneProvider({ children, value }: { children: ReactNode; value: SceneState }) {
  return <SceneContext.Provider value={value}>{children}</SceneContext.Provider>;
}

export function useSceneManager() {
  const context = useContext(SceneContext);

  if (!context) {
    throw new Error("useSceneManager must be used within SceneProvider");
  }

  return context;
}
