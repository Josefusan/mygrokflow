import { useSyncExternalStore } from "react";

const REDUCE_QUERY = "(prefers-reduced-motion: reduce)";

type NavigatorWithConnection = Navigator & {
  connection?: { saveData?: boolean };
};

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(REDUCE_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getSnapshot() {
  const reduce = window.matchMedia(REDUCE_QUERY).matches;
  const saveData =
    (navigator as NavigatorWithConnection).connection?.saveData === true;
  return !reduce && !saveData;
}

function getServerSnapshot() {
  return false;
}

/**
 * True only on the client, when the visitor has neither asked for reduced
 * motion nor enabled data saver. Server render and hydration return false, so
 * <video> is never in the SSR HTML and the gradient fallback paints first.
 */
export function useVideoAllowed(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
