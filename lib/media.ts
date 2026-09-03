// PLACEHOLDER — third-party demo footage. Replace before launch (higgsfield-mcp skill or owner clips).
// Plain <video src> URLs (not next/image), so no next.config change is needed.
// Every consumer paints a --mgf-bg gradient behind the video, so an expired or
// blocked URL degrades to a dark panel rather than a broken page.

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
