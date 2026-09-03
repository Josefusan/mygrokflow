"use client";

import { useState } from "react";
import { useVideoAllowed } from "./use-video-allowed";

const CARD_RADIAL =
  "radial-gradient(70% 60% at 30% 20%, #1C1C22, transparent 70%)";

/** 4:3 media well for a Work card. Dark gradient first; clip only when allowed. */
export function CardVideo({ src }: { src: string }) {
  const allowed = useVideoAllowed();
  const [failed, setFailed] = useState(false);

  return (
    <div
      aria-hidden="true"
      className="relative aspect-[4/3] w-full overflow-hidden bg-(--mgf-bg)"
      style={{ backgroundImage: CARD_RADIAL }}
    >
      {allowed && !failed ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
    </div>
  );
}
