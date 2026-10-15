"use client";

import { scenes } from "@/data/scenes";
import { HeroWorld } from "@/features/hero/components/hero-world";
import { ScrollWorld } from "@/features/scroll-engine";

const journeyScenes = scenes.filter((scene) => scene.id !== "hero");

export function ApplicationShell() {
  return (
    <main className="text-text" id="main-content" tabIndex={-1}>
      <HeroWorld />
      <ScrollWorld scenes={journeyScenes} />
    </main>
  );
}
