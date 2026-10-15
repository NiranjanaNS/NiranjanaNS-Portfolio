"use client";

import { useMemo, useRef } from "react";
import { useDevice } from "@/hooks/use-device";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useScrollWorld } from "@/hooks/use-scroll-world";
import type { SceneDefinition } from "@/types/scene";
import { SceneProvider } from "@/providers/scene-provider";
import { ScenePanel } from "./scene-panel";
import { SceneProgress } from "./scene-progress";

export function ScrollWorld({ scenes }: { scenes: SceneDefinition[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const device = useDevice();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isHorizontal = device !== "mobile" && !prefersReducedMotion;
  const state = useScrollWorld(containerRef, scenes, isHorizontal);
  const containerHeight = useMemo(() => `${Math.max(scenes.length, 1) * 100}vh`, [scenes.length]);

  return (
    <SceneProvider value={state}>
      <section aria-label="Portfolio journey" id="journey">
        <div className="journey-heading">
          <p>02 / About Forest</p>
          <span>The person behind the code</span>
        </div>

        {!isHorizontal ? (
          <div ref={containerRef} className="grid gap-6 px-6 py-8">
            {scenes.map((scene) => (
              <ScenePanel key={scene.id} scene={scene} />
            ))}
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
                {scenes.map((scene) => (
                  <ScenePanel key={scene.id} scene={scene} isHorizontal />
                ))}
              </div>
              <SceneProgress scenes={scenes} />
            </div>
          </div>
        )}
      </section>
    </SceneProvider>
  );
}
