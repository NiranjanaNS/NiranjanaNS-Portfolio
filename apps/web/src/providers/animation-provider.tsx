"use client";

import type { ReactNode } from "react";
import { createContext, useCallback, useContext, useMemo, useRef } from "react";

type AnimationController = {
  play: () => void;
  pause: () => void;
  reverse?: () => void;
  destroy: () => void;
};

interface AnimationContextValue {
  registerAnimation: (id: string, controller: AnimationController) => () => void;
  play: (id: string) => void;
  pause: (id: string) => void;
  reverse: (id: string) => void;
  destroy: (id: string) => void;
}

const AnimationContext = createContext<AnimationContextValue | null>(null);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const registry = useRef(new Map<string, AnimationController>());

  const registerAnimation = useCallback((id: string, controller: AnimationController) => {
    registry.current.set(id, controller);

    return () => {
      registry.current.get(id)?.destroy();
      registry.current.delete(id);
    };
  }, []);

  const play = useCallback((id: string) => registry.current.get(id)?.play(), []);
  const pause = useCallback((id: string) => registry.current.get(id)?.pause(), []);
  const reverse = useCallback((id: string) => registry.current.get(id)?.reverse?.(), []);
  const destroy = useCallback((id: string) => {
    registry.current.get(id)?.destroy();
    registry.current.delete(id);
  }, []);

  const value = useMemo(
    () => ({ registerAnimation, play, pause, reverse, destroy }),
    [destroy, pause, play, registerAnimation, reverse],
  );

  return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
}

export function useAnimationManager() {
  const context = useContext(AnimationContext);

  if (!context) {
    throw new Error("useAnimationManager must be used within AnimationProvider");
  }

  return context;
}
