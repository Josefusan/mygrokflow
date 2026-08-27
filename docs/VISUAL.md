# Visual system

Locked. Dark-only zinc. No accent color. No light mode. Force `class="dark"` on `html`.

Looks like an operator feed, not a Stripe clone or an X clone.

## Tokens

| Token | Value |
| --- | --- |
| Canvas | `oklch(0.12 0.002 286)` |
| Hairline | `oklch(1 0 0 / 10%)` |
| Primary CTA | inverted white on canvas |
| Type | Geist Sans + Geist Mono |
| Feed column | `max-w-[42rem]` |
| Header | sticky `h-12`, wordmark + pill CTA only |
| Sections | `py-16` |
| Cards | `p-4`, radius `0.5rem` |
| Primary button | `rounded-full` |

Use CSS variables (`bg-background`, `border-border`), not `bg-zinc-*`. No `rounded-2xl`, lift, or glow.

## Motion

CSS only, 150–200ms fade (`duration-150` / `duration-200`). Honor `prefers-reduced-motion`.

No Framer, Magic UI, gradients, glow, Inter, X/Twitter marks, 520ms reveals, or infinite pulse.

## shadcn

Installed: `button`, `card`, `badge`, `separator` only.

No `avatar`, `input`, `textarea`, forms, or lucide icon grid.

Primary CTA Button: `variant="default"` plus `rounded-full`. Example labels: `Badge` text `Example`.

## Section map

CMO copy only. Do not invent clients, logos, metrics, testimonials, or tier names. Example workflows labeled as examples; titles are placeholders until CMO lands them.

1. Sticky nav — wordmark + pill CTA
2. Hero — eyebrow “High-ticket AI automations”, H1 the workflow promise, one support line, one CTA
3. Who it’s for — three tight rows, no icon grid
4. Not for — same type, quieter
5. How it works — diagnostic → build → handoff, numbered in Geist Mono
6. Three example cards — each with Badge “Example”
7. Pricing — three stacked rate-card rows, hairline dividers, no 3-col grid, no Popular, no checkmarks. Copy as written: `$1,500/month`, `$5K` one-time, `$10K` one-time, plus one muted line that the diagnostic qualifies and there are no discounts. No checkout, no extra CTA.
8. Close — same mailto pill, no form
9. Footer — wordmark + mailto text, no social icons

## CTA

Label: **Request a diagnostic**

Href: `mailto:clarktechventures@gmail.com?subject=Diagnostic%20request`

Close owns the mailto pill. Constant: `lib/site.ts` (`DIAGNOSTIC_SUBJECT` is `Diagnostic request`).
