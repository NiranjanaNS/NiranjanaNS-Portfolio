import type { SceneDefinition } from "@/types/scene";
import { useSceneManager } from "@/providers/scene-provider";

export function SceneProgress({ scenes }: { scenes: SceneDefinition[] }) {
  const { currentScene: activeScene } = useSceneManager();
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-4 z-40 mx-auto hidden max-w-3xl px-6 md:block">
      <div className="rounded-component border border-border/80 bg-background/80 p-3 backdrop-blur-xl">
        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: `repeat(${scenes.length}, minmax(0, 1fr))` }}
        >
          {scenes.map((scene) => (
            <div
              key={scene.id}
              aria-label={scene.label}
              className={[
                "h-1.5 rounded-full transition duration-300",
                scene.id === activeScene.id ? "bg-primary" : "bg-border",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
