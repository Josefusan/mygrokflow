#!/usr/bin/env bash
# Turn a raw generated or shot clip into the self-hosted background trio:
#   public/media/clinic-bg.mp4, clinic-bg.webm, clinic-bg-poster.jpg
# Grades toward the site palette (darker, slightly desaturated), strips audio,
# trims to a short loop, scales to 1920 wide, and prints the payload sizes.
#
# Usage: scripts/prepare-bg-video.sh media-raw/clinic-bg-raw.mp4 [start_seconds] [duration_seconds]
# Then set HAS_CLINIC_BG = true in lib/media.ts and commit the three files.
set -euo pipefail

IN="${1:?raw clip path required}"
START="${2:-0}"
DUR="${3:-8}"
OUT_DIR="public/media"
BASE="clinic-bg"
# Grade: pull exposure down, soften saturation, keep contrast. The page scrim
# adds its own 58-78% darkening on top, so this stays gentle.
GRADE="eq=brightness=-0.05:contrast=1.04:saturation=0.82"
VF="scale=1920:-2:flags=lanczos,${GRADE},format=yuv420p"

command -v ffmpeg >/dev/null || { echo "ffmpeg missing: brew install ffmpeg" >&2; exit 1; }
mkdir -p "$OUT_DIR"

echo "source:"; ffprobe -v error -show_entries format=duration,size:stream=width,height,r_frame_rate -of default=nw=1 "$IN"

ffmpeg -y -v error -ss "$START" -t "$DUR" -i "$IN" -an -vf "$VF" \
  -c:v libx264 -preset slow -crf 26 -movflags +faststart "$OUT_DIR/$BASE.mp4"
ffmpeg -y -v error -ss "$START" -t "$DUR" -i "$IN" -an -vf "$VF" \
  -c:v libvpx-vp9 -crf 38 -b:v 0 -row-mt 1 "$OUT_DIR/$BASE.webm"
# Poster: first graded frame, same crop the video plays with.
ffmpeg -y -v error -ss "$START" -i "$IN" -frames:v 1 -vf "$VF" \
  -c:v mjpeg -q:v 4 "$OUT_DIR/$BASE-poster.jpg"

echo; echo "output:"; ls -la "$OUT_DIR"/$BASE* | awk '{printf "  %-40s %6.2f MB\n", $9, $5/1048576}'
MP4_BYTES=$(stat -f%z "$OUT_DIR/$BASE.mp4")
if [ "$MP4_BYTES" -gt 2621440 ]; then
  echo "WARN: mp4 over 2.5 MB. Shorten DUR or raise crf." >&2
fi
echo; echo "next: set HAS_CLINIC_BG = true in lib/media.ts, run npm run build, check /, commit."
