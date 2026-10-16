export function canUseHorizontalWorld(
  width: number,
  height: number,
  prefersReducedMotion: boolean,
) {
  // Reserve enough vertical space for scene content below the fixed navigation.
  return width >= 768 && height >= 800 && !prefersReducedMotion;
}
