// Background and card footage.
// Plain <video src> URLs (not next/image), so no next.config change is needed.
// Every consumer paints a --mgf-bg gradient behind the video, so an expired or
// blocked URL degrades to a dark panel rather than a broken page.

// PLACEHOLDER — third-party demo footage from a May 2026 Higgsfield session.
// Replaced by the self-hosted clinic clip below once HAS_CLINIC_BG is true.
const CDN =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P";

export const PLACEHOLDER_BG_VIDEO = `${CDN}/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4`;

export const PLACEHOLDER_CARD_VIDEOS = [
  `${CDN}/hf_20260513_220333_48163edc-995f-4513-9f44-48dbb07a7329.mp4`,
  `${CDN}/hf_20260513_221040_e6ba7c5a-864e-46e9-871e-341a176a7e3e.mp4`,
  `${CDN}/hf_20260513_221104_fb538584-5b87-495f-952e-09ddd5a1792a.mp4`,
] as const;

export const FALLBACK_RADIAL =
  "radial-gradient(80vmax 60vmax at 20% 10%, #1C1C22, transparent 60%)";

export type VideoSource = { src: string; type: "video/webm" | "video/mp4" };

export type BackgroundClip = {
  /** Ordered by preference; the browser plays the first type it supports. */
  sources: readonly VideoSource[];
  /** Still frame painted under the video, and instead of it under reduced motion. */
  poster?: string;
};

/**
 * Self-hosted clinic clip, graded and compressed by scripts/prepare-bg-video.sh
 * from the brief in docs/media/clinic-bg-brief.md. Flip HAS_CLINIC_BG to true
 * in the same commit that adds the three files under public/media/.
 */
export const HAS_CLINIC_BG = false;

export const CLINIC_BG: BackgroundClip = {
  sources: [
    { src: "/media/clinic-bg.webm", type: "video/webm" },
    { src: "/media/clinic-bg.mp4", type: "video/mp4" },
  ],
  poster: "/media/clinic-bg-poster.jpg",
};

const PLACEHOLDER_BG: BackgroundClip = {
  sources: [{ src: PLACEHOLDER_BG_VIDEO, type: "video/mp4" }],
};

export const BG_CLIP: BackgroundClip = HAS_CLINIC_BG ? CLINIC_BG : PLACEHOLDER_BG;
