import { create } from "zustand";

interface AppState {
  isNavigationOpen: boolean;
  setNavigationOpen: (isNavigationOpen: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isNavigationOpen: false,
  setNavigationOpen: (isNavigationOpen) => set({ isNavigationOpen }),
}));
