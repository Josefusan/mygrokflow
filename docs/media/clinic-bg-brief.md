# Background clip brief: med spa treatment room

Status: waiting on footage. The live site still plays the May 2026 Higgsfield placeholder from a third-party CDN (`PLACEHOLDER_BG_VIDEO` in `lib/media.ts`).

## Use

Full-viewport fixed backdrop under every landing section, behind a 58 to 78 percent dark scrim and white text. It is atmosphere, not a subject. Nothing in frame should compete with the headline.

## Brief

- Subject: an empty, modern med spa treatment room. Treatment bed with white linen, soft warm practical lights, frosted glass partition, one plant, matte dark stone floor.
- People: none. No faces, no hands, no staff, no patients. No text, no logos, no screens with UI.
- Camera: gimbal dolly forward or a slow lateral slide. One continuous move, no cuts, no whip pans, no handheld shake.
- Light: low key. Deep shadows, warm practicals, no blown highlights. Bright white walls read as glare under the scrim.
- Palette: charcoal shadows (#0b0b0d, #1c1c22), warm ivory highlights (#f2f2f0). Subtle film grain.
- Format: 16:9, 1920x1080 or larger, 24 fps, 8 to 10 seconds, loopable (ends near where it starts, or a slow move that does not obviously reset).

## Prompt (Higgsfield, Veo, Runway, Kling)

```
Slow cinematic dolly forward through an empty modern med spa treatment room, no people, no text, no logos.
Treatment bed with white linen, soft warm practical lights, frosted glass partition, one plant, matte dark stone floor.
Low-key lighting, deep shadows, muted charcoal and warm ivory palette, subtle film grain, shallow depth of field.
Camera on a gimbal, 8 seconds, seamless loop, 24fps, 16:9, 1920x1080, very slow steady movement, no cuts, no people.
```

Negative prompt where supported: `people, faces, hands, text, logos, watermark, bright white walls, lens flare, fast motion, cuts, cartoon, render look`.

Generate 3 or 4 variants. Pick for calm motion and dark tone over detail; the scrim removes most detail anyway.

## Pipeline

1. Drop the raw file at `media-raw/clinic-bg-raw.mp4` (folder is gitignored).
2. Run `scripts/prepare-bg-video.sh media-raw/clinic-bg-raw.mp4` (optional start and duration args). It writes `public/media/clinic-bg.mp4`, `.webm`, and `-poster.jpg`, graded toward the palette and stripped of audio.
3. Set `HAS_CLINIC_BG = true` in `lib/media.ts`.
4. `npm run build`, check the page at 1440 and 375 wide with reduced motion on and off, commit the three files with the flag flip.

Budget: mp4 under 2.5 MB, webm smaller. Over budget means shorter or a higher crf, not a bigger budget.
