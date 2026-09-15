"use client";

import { useSyncExternalStore } from "react";

export type Theme = "dark" | "light";
export const THEME_STORAGE_KEY = "mygrokflow-theme";

// Dark is the default; the layout ships <html class="dark"> and a pre-paint
// script that removes it when a light preference is stored. This store keeps
// every toggle on the page in step and mirrors changes made in another tab.
const listeners = new Set<() => void>();

export function readTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function applyTheme(next: Theme) {
  document.documentElement.classList.toggle("dark", next === "dark");
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // Private mode or blocked storage: the choice still applies for this page.
  }
  listeners.forEach((l) => l());
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  const onStorage = (e: StorageEvent) => {
    if (e.key !== THEME_STORAGE_KEY) return;
    document.documentElement.classList.toggle("dark", e.newValue !== "light");
    onChange();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

/** Current theme. Server render and hydration report "dark". */
export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, readTheme, () => "dark");
}
