import type { ReactNode } from "react";
import type { SceneDefinition } from "@/types/scene";

export function ScenePanel({
  scene,
  isHorizontal = false,
  children,
}: {
  scene: SceneDefinition;
  isHorizontal?: boolean;
  children?: ReactNode;
}) {
  return (
    <section
      data-scene-panel
      aria-labelledby={`${scene.id}-heading`}
      className={[
        "flex w-full min-w-0 shrink-0",
        children ? "" : "items-center justify-center px-6",
        isHorizontal ? "h-full" : "min-h-[70vh]",
      ].join(" ")}
      id={scene.id}
    >
      {children ?? (
        <div className="w-full max-w-xl py-12">
          <p className="font-code text-xs uppercase text-primary">
            Chapter {String(scene.order).padStart(2, "0")}
          </p>
          <h2
            id={`${scene.id}-heading`}
            className="mt-3 font-heading text-3xl font-semibold text-text"
          >
            {scene.label}
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted">Chapter in progress.</p>
        </div>
      )}
    </section>
  );
}
