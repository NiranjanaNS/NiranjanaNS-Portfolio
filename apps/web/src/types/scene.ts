import type { SceneId } from "@niranjanans/types";

export interface SceneDefinition {
  id: SceneId;
  label: string;
  order: number;
}

export interface SceneState {
  currentScene: SceneDefinition;
  previousScene?: SceneDefinition;
  nextScene?: SceneDefinition;
  progress: number;
}
