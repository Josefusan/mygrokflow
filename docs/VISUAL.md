# Visual system

Locked. Zinc, no accent color. Dark is the default. Light is a real theme behind a moon/sun toggle; persist in `localStorage` (`mygrokflow-theme`). Default `class="dark"` on `html`, remove it for light.

Looks like an operator feed, not a Stripe clone or an X clone.

## Tokens

| Token | Dark | Light |
| --- | --- | --- |
| Canvas | `oklch(0.12 0.002 286)` | `oklch(0.97 0.002 286)` |
| Hairline | `oklch(1 0 0 / 10%)` | `oklch(0.18 0.002 286 / 12%)` |
| Primary CTA | inverted white on canvas | inverted dark on canvas |
| Type | Geist Sans + Geist Mono | same |
| Feed column | `max-w-[42rem]` | same |
| Header | sticky `h-12`, wordmark left, moon/sun toggle + pill CTA right | same |
| Sections | `py-16` | same |
| Cards | `p-4`, radius `0.5rem` | same |
| Primary button | `rounded-full` | same |

Use CSS variables (`bg-background`, `border-border`), not `bg-zinc-*`. No `rounded-2xl`, lift, or glow.

## Motion

CSS only. UI fades 150–200ms (`duration-150` / `duration-180` / `duration-200`). Hero stagger `0 / 60 / 120 / 180ms`. Hover is color, border, and background only (no lift, no scale, no glow). Interactive controls use `cursor-pointer`.

Background: one quiet zinc gradient on `body::before` — two low-chroma radials (`oklch` hue ~286 / ~250) plus a linear wash, ~`120vmax`, drift 32s on `transform` only. Light uses the same geometry, higher L. Not a rainbow mesh, not glow, not noise.

Honor `prefers-reduced-motion`: kill UI fades, stagger, and canvas drift.

No Framer, Magic UI, Inter, X/Twitter marks, 520ms reveals, or infinite pulse.

## shadcn

Installed: `button`, `card`, `badge`, `separator` only. Animation layer is `tw-animate-css` (already imported). Do not add unused primitives.

No `avatar`, `input`, `textarea`, forms, or lucide icon grid. Footer contact icons are inline SVGs (email, Telegram, Signal, LinkedIn, X) with `aria-label`. No client logos. No brand packs.

Primary CTA Button: `variant="default"` plus `rounded-full`. Example labels: `Badge` text `Example`.

## Section map

CMO copy only. Do not invent clients, logos, metrics, testimonials, or tier names. Example workflows labeled as examples; titles are placeholders until CMO lands them.

1. Sticky nav — wordmark left, theme toggle + pill CTA right
2. Hero — eyebrow “High-ticket AI automations”, H1 the workflow promise, one support line, one CTA
3. Who it’s for — three tight rows, no icon grid
4. Not for — same type, quieter
5. How it works — diagnostic → build → handoff, numbered in Geist Mono
6. Three example cards — each with Badge “Example”
7. Pricing — three stacked rate-card rows, hairline dividers, no 3-col grid, no Popular, no checkmarks. Copy as written: `$1,500/month`, `$5K` one-time, `$10K` one-time, plus one muted line that the diagnostic qualifies and there are no discounts. No checkout, no extra CTA
8. Close — same diagnostic pill, no form
9. Footer — wordmark + Privacy + contact icons (same URLs as before)

## CTA

Label: **Request a diagnostic**

Href: `/apply`

Close owns the diagnostic pill. Constant: `lib/site.ts` (`APPLY_PATH`).
