import type { SceneDefinition } from "@/types/scene";

export function ScenePanel({
  scene,
  isHorizontal = false,
}: {
  scene: SceneDefinition;
  isHorizontal?: boolean;
}) {
  return (
    <section
      data-scene-panel
      aria-label={`${scene.label} scene placeholder`}
      className={[
        "flex w-full min-w-0 shrink-0 items-center justify-center px-6",
        isHorizontal ? "h-full" : "min-h-[70vh] py-8",
      ].join(" ")}
      id={scene.id}
    >
      <div className="w-full max-w-xl py-12">
        <p className="font-code text-xs uppercase text-primary">
          Chapter {String(scene.order).padStart(2, "0")}
        </p>
        <h2 className="mt-3 font-heading text-3xl font-semibold text-text">{scene.label}</h2>
        <p className="mt-4 text-sm leading-6 text-muted">Chapter in progress.</p>
      </div>
    </section>
  );
}
