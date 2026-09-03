"use client";

import { useState } from "react";
import { FALLBACK_RADIAL, PLACEHOLDER_BG_VIDEO } from "@/lib/media";
import { useVideoAllowed } from "./use-video-allowed";

/**
 * Fixed full-viewport backdrop (z 0): --mgf-bg + radial highlight, the
 * placeholder clip when allowed, and the --mgf-scrim overlay on top.
 * Sections with transparent backgrounds sit above this at z 1.
 */
export function BackgroundVideo() {
  const allowed = useVideoAllowed();
  const [failed, setFailed] = useState(false);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 bg-(--mgf-bg)"
      style={{ backgroundImage: FALLBACK_RADIAL }}
    >
      {allowed && !failed ? (
        <video
          src={PLACEHOLDER_BG_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      <div
        className="absolute inset-0"
        style={{ background: "var(--mgf-scrim)" }}
      />
    </div>
  );
}
