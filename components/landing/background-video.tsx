"use client";

import { useState } from "react";
import { BG_CLIP, FALLBACK_RADIAL } from "@/lib/media";
import { useVideoAllowed } from "./use-video-allowed";

/**
 * Fixed full-viewport backdrop (z 0): --mgf-bg + radial highlight, the clip's
 * poster frame when it has one, the <video> when allowed, and the --mgf-scrim
 * overlay on top. Sections with transparent backgrounds sit above this at z 1.
 *
 * The poster paints on the first frame for everyone and stays as the still
 * backdrop for reduced-motion and Save-Data visitors, who never get <video>.
 */
export function BackgroundVideo() {
  const allowed = useVideoAllowed();
  const [failed, setFailed] = useState(false);
  const { sources, poster } = BG_CLIP;
  const lastIndex = sources.length - 1;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 bg-(--mgf-bg) bg-cover bg-center"
      style={{
        backgroundImage: poster
          ? `url(${poster}), ${FALLBACK_RADIAL}`
          : FALLBACK_RADIAL,
      }}
    >
      {allowed && !failed ? (
        <video
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          {sources.map((s, i) => (
            <source
              key={s.src}
              src={s.src}
              type={s.type}
              // The resource-selection error lands on the last <source>, not
              // on <video>, so that is where a dead URL drops us to the poster.
              onError={i === lastIndex ? () => setFailed(true) : undefined}
            />
          ))}
        </video>
      ) : null}
      <div
        className="absolute inset-0"
        style={{ background: "var(--mgf-scrim)" }}
      />
    </div>
  );
}
