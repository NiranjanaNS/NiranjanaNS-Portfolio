export function getScenePosition(progress: number, count: number) {
  if (!Number.isInteger(count) || count < 1) {
    throw new Error("A scroll world needs at least one scene");
  }

  const normalized = Number.isFinite(progress) ? Math.min(1, Math.max(0, progress)) : 0;
  const position = normalized * (count - 1);
  const sceneIndex = Math.round(position);
  // Each scene is active while its center is closest to the viewport center.
  const start = Math.max(0, sceneIndex - 0.5);
  const end = Math.min(count - 1, sceneIndex + 0.5);
  const sceneProgress = end === start ? 1 : (position - start) / (end - start);

  return { progress: normalized, sceneIndex, sceneProgress, translateX: position * 100 };
}

export function getStackedProgress(centers: number[], viewportCenter: number) {
  if (centers.length < 2 || viewportCenter <= centers[0]) return 0;
  const last = centers.length - 1;
  if (viewportCenter >= centers[last]) return 1;

  const next = centers.findIndex((center) => center > viewportCenter);
  const previous = next - 1;
  const fraction = (viewportCenter - centers[previous]) / (centers[next] - centers[previous]);
  return (previous + fraction) / last;
}
