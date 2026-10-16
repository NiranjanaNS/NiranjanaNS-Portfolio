"use client";

import { useMemo, useRef } from "react";
import { useWindowSize } from "@/hooks/use-window-size";
import { canUseHorizontalWorld } from "@/utils/scroll-layout";
import { AboutWorld } from "@/features/about/components/about-world";
import { EducationWorld } from "@/features/education/components/education-world";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useScrollWorld } from "@/hooks/use-scroll-world";
import type { SceneDefinition } from "@/types/scene";
import { SceneProvider } from "@/providers/scene-provider";
import { ScenePanel } from "./scene-panel";
import { SceneProgress } from "./scene-progress";

export function ScrollWorld({ scenes }: { scenes: SceneDefinition[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { width, height } = useWindowSize();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isHorizontal = canUseHorizontalWorld(width, height, prefersReducedMotion);
  const state = useScrollWorld(containerRef, scenes, isHorizontal);
  const containerHeight = useMemo(() => `${Math.max(scenes.length, 1) * 100}vh`, [scenes.length]);
  const panels = scenes.map((scene) => (
    <ScenePanel key={scene.id} scene={scene} isHorizontal={isHorizontal}>
      {scene.id === "about" ? (
        <AboutWorld />
      ) : scene.id === "education" ? (
        <EducationWorld />
      ) : undefined}
    </ScenePanel>
  ));

  return (
    <SceneProvider value={state}>
      <section aria-label="Portfolio journey" id="journey">
        <div className="journey-heading">
          <p>02 / About Forest</p>
          <span>The person behind the code</span>
        </div>

        {!isHorizontal ? (
          <div ref={containerRef} className="grid">
            {panels}
          </div>
        ) : (
          <div ref={containerRef} className="relative" style={{ height: containerHeight }}>
            <div
              data-world-viewport
              className="sticky top-16 h-[calc(100vh-64px)] overflow-hidden border-y border-border bg-background"
            >
              <div
                className="flex h-full w-full will-change-transform"
                style={{
                  transform: `translate3d(-${state.translateX}%, 0, 0)`,
                }}
              >
                {panels}
              </div>
              <SceneProgress scenes={scenes} />
            </div>
          </div>
        )}
      </section>
    </SceneProvider>
  );
}
