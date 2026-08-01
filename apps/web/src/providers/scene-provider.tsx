"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useMemo } from "react";
import { scenes } from "@/data/scenes";
import { useScrollProgress } from "./scroll-provider";
import type { SceneState } from "@/types/scene";

const SceneContext = createContext<SceneState | null>(null);

export function SceneProvider({ children }: { children: ReactNode }) {
  const { progress } = useScrollProgress();

  const value = useMemo(() => {
    const sceneIndex = Math.min(Math.floor(progress * scenes.length), scenes.length - 1);
    const currentScene = scenes[sceneIndex];

    return {
      currentScene,
      previousScene: scenes[sceneIndex - 1],
      nextScene: scenes[sceneIndex + 1],
      progress,
    } satisfies SceneState;
  }, [progress]);

  return <SceneContext.Provider value={value}>{children}</SceneContext.Provider>;
}

export function useSceneManager() {
  const context = useContext(SceneContext);

  if (!context) {
    throw new Error("useSceneManager must be used within SceneProvider");
  }

  return context;
}
