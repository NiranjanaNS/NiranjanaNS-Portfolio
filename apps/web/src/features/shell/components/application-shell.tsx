"use client";

import { Badge, Card } from "@niranjanans/ui";
import { Caption, CodeText, Heading, Paragraph } from "@/components/typography/typography";
import { foundationLayers } from "@/data/foundation";
import { useDevice } from "@/hooks/use-device";
import { useSceneManager } from "@/providers/scene-provider";
import { useScrollProgress } from "@/providers/scroll-provider";
import { ScrollEnginePlaceholder } from "./scroll-engine-placeholder";

export function ApplicationShell() {
  const device = useDevice();
  const { progress } = useScrollProgress();
  const { currentScene, nextScene } = useSceneManager();

  return (
    <main className="min-h-screen px-6 py-10 text-text">
      <section className="mx-auto flex min-h-[calc(100vh-144px)] max-w-6xl flex-col justify-center gap-10">
        <div className="max-w-3xl" id="journey">
          <Caption>Sprint 4 Application Shell</Caption>
          <Heading className="mt-4">Build the engine before the worlds.</Heading>
          <Paragraph className="mt-5">
            The app now has structure, providers, navigation, shared UI, device state, scene state,
            scroll progress, and an animation manager placeholder. Portfolio sections come later.
          </Paragraph>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]" id="engine">
          <ScrollEnginePlaceholder progress={progress} />
          <Card className="space-y-4">
            <Badge>Runtime state</Badge>
            <div className="grid gap-3 text-sm text-muted">
              <p>
                Device: <CodeText>{device}</CodeText>
              </p>
              <p>
                Current scene: <CodeText>{currentScene.label}</CodeText>
              </p>
              <p>
                Next scene: <CodeText>{nextScene?.label ?? "Complete"}</CodeText>
              </p>
              <p>
                Scroll progress: <CodeText>{Math.round(progress * 100)}%</CodeText>
              </p>
            </div>
          </Card>
        </div>

        <div className="grid gap-3 md:grid-cols-3" id="architecture">
          {foundationLayers.map((layer) => (
            <Card key={layer} variant="interactive">
              <span className="font-medium">{layer}</span>
            </Card>
          ))}
        </div>

        <div id="contact" className="sr-only">
          Contact placeholder for navigation until the contact world is implemented.
        </div>
      </section>
    </main>
  );
}
