"use client";

import type { RefObject } from "react";
import { useEffect, useMemo, useState } from "react";
import type { SceneDefinition, SceneState } from "@/types/scene";
import { clamp } from "@/utils/clamp";
import { getScenePosition, getStackedProgress } from "@/utils/scene-position";

interface ScrollWorldState extends SceneState {
  sceneIndex: number;
  sceneProgress: number;
  translateX: number;
}

export function useScrollWorld(
  containerRef: RefObject<HTMLElement | null>,
  sceneList: SceneDefinition[],
  isHorizontal: boolean,
) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const container = containerRef.current;

      if (!container) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const sticky = container.querySelector<HTMLElement>("[data-world-viewport]");
      const headerHeight = sticky ? Number.parseFloat(getComputedStyle(sticky).top) || 0 : 64;
      const scrollableDistance = Math.max(
        container.offsetHeight - window.innerHeight + headerHeight,
        1,
      );
      const centers = Array.from(container.querySelectorAll<HTMLElement>("[data-scene-panel]")).map(
        (panel) => {
          const bounds = panel.getBoundingClientRect();
          return bounds.top + bounds.height / 2;
        },
      );
      const localProgress = isHorizontal
        ? clamp((headerHeight - rect.top) / scrollableDistance, 0, 1)
        : getStackedProgress(centers, headerHeight + (window.innerHeight - headerHeight) / 2);

      setProgress(localProgress);
    };

    let frame = 0;
    const schedule = () => {
      if (!frame)
        frame = requestAnimationFrame(() => {
          frame = 0;
          update();
        });
    };
    update();
    const observer = new ResizeObserver(schedule);
    if (containerRef.current) {
      observer.observe(containerRef.current);
      containerRef.current
        .querySelectorAll("[data-scene-panel]")
        .forEach((panel) => observer.observe(panel));
    }
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [containerRef, isHorizontal, sceneList]);

  return useMemo<ScrollWorldState>(() => {
    const position = getScenePosition(progress, sceneList.length);
    const { sceneIndex } = position;

    return {
      currentScene: sceneList[sceneIndex],
      nextScene: sceneList[sceneIndex + 1],
      previousScene: sceneList[sceneIndex - 1],
      ...position,
    };
  }, [progress, sceneList]);
}
