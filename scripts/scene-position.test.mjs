import assert from "node:assert/strict";
import { test } from "node:test";
import { getScenePosition, getStackedProgress } from "../apps/web/src/utils/scene-position.ts";
import { canUseHorizontalWorld } from "../apps/web/src/utils/scroll-layout.ts";

test("world endpoints and out-of-range input stay bounded", () => {
  assert.equal(getScenePosition(-1, 8).sceneIndex, 0);
  assert.equal(getScenePosition(2, 8).sceneIndex, 7);
  assert.equal(getScenePosition(1, 8).sceneProgress, 1);
  assert.equal(getScenePosition(1, 8).translateX, 700);
  assert.equal(getScenePosition(Number.NaN, 8).progress, 0);
});

test("active scene switches at the midpoint and progress advances immediately", () => {
  assert.equal(getScenePosition(0.49 / 7, 8).sceneIndex, 0);
  assert.equal(getScenePosition(0.5 / 7, 8).sceneIndex, 1);
  const active = getScenePosition(0.75 / 7, 8);
  assert.equal(active.sceneIndex, 1);
  assert.equal(active.sceneProgress, 0.25);
  for (let i = 0; i <= 1000; i++) {
    const state = getScenePosition(i / 1000, 8);
    assert.ok(state.sceneProgress >= 0 && state.sceneProgress <= 1);
  }
});

test("one scene has no translation and an empty world fails explicitly", () => {
  assert.equal(getScenePosition(0.5, 1).translateX, 0);
  assert.equal(getScenePosition(0.5, 1).sceneProgress, 1);
  assert.throws(() => getScenePosition(0, 0));
});

test("stacked detection uses measured centers, including unequal heights", () => {
  const centers = [100, 400, 1000];
  assert.equal(getStackedProgress(centers, 50), 0);
  assert.equal(getStackedProgress(centers, 400), 0.5);
  assert.equal(getStackedProgress(centers, 700), 0.75);
  assert.equal(getScenePosition(getStackedProgress(centers, 800), 3).sceneIndex, 2);
  assert.equal(getStackedProgress(centers, 1200), 1);
  assert.equal(getStackedProgress([100], 200), 0);
});

test("horizontal scenes require enough space and unrestricted motion", () => {
  assert.equal(canUseHorizontalWorld(1440, 900, false), true);
  assert.equal(canUseHorizontalWorld(768, 800, false), true);
  assert.equal(canUseHorizontalWorld(767, 800, false), false);
  assert.equal(canUseHorizontalWorld(1440, 799, false), false);
  assert.equal(canUseHorizontalWorld(390, 844, false), false);
  assert.equal(canUseHorizontalWorld(1440, 900, true), false);
  assert.equal(canUseHorizontalWorld(0, 0, false), false);
});
