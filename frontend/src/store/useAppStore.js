import { create } from "zustand";

export const useAppStore = create((set) => ({
  sidebarOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  activeDocId: null,
  setActiveDocId: (id) => set({ activeDocId: id }),

  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),

  theme: "dark",
  toggleTheme: () => set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
}));