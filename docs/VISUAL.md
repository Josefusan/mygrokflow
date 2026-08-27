# Visual system v1.2

Locked. Dark-only zinc. No accent color. No light mode. Force `class="dark"` on `html`.

Looks like an operator feed, not a Stripe clone or an X clone. Second pass is motion + reserved newsletter slot, not a rewrite. Same `max-w-[42rem]` column. Sticky `h-12`. No 3-col chrome.

Copy is CMO’s Nick Verge pass (technical, then time/money/leverage). Do not invent copy, clients, logos, metrics, testimonials, or tier names. If copy runs long, type scale and `py-16` stay.

Nothing from this pass hits `main` until CTO signs.

## Tokens

| Token | Value |
| --- | --- |
| Canvas | `oklch(0.12 0.002 286)` |
| Hairline | `oklch(1 0 0 / 10%)` |
| Primary CTA | inverted white on canvas |
| Type | Geist Sans + Geist Mono |
| Feed column | `max-w-[42rem]` |
| Header | sticky `h-12`, wordmark + pill CTA only, `bg-background/80 backdrop-blur-md` |
| Sections | `py-16` |
| Cards | `p-4`, radius `0.5rem`, no `ring-1`, no lift |
| Primary button | `rounded-full` |

Use CSS variables (`bg-background`, `border-border`), not `bg-zinc-*`. No `rounded-2xl`, lift, or glow.

## Type

- H1: `text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[1.1]`
- Eyebrow and section labels: 11px Geist Mono uppercase muted
- Close is body size, not a second H1
- Footer is text wordmark only (no `Mark`)

## Motion

CSS only. No Framer, Magic UI, mesh, glow, noise, second color, Inter, X/Twitter marks, 520ms clone reveals, or infinite pulse.

**UI:** 150–200ms fade. Hero stagger `0 / 60 / 120 / 180ms`. Hover is color/border only (no lift, no scale).

**Background:** one zinc radial spot, `oklch(0.18 0.002 286 / 0.4)`, ~`120vmax`, drifting 28–36s on `transform` only. Chroma ~0.

`prefers-reduced-motion` kills all of it (UI stagger and background drift).

## shadcn

Installed: `button`, `card`, `badge`, `separator` only.

No `avatar`, lucide icon grid, dummy forms, or extra components until CMO’s ESP spec. Newsletter input is not built on this pass.

Primary CTA Button: `variant="default"` plus `rounded-full`. Example labels: `Badge` text `Example`.

## Section map

1. Sticky nav — wordmark + pill CTA
2. Hero — eyebrow “High-ticket AI automations”, H1 the workflow promise, support line as CMO wrote, one CTA
3. Who it’s for — three tight rows, no icon grid
4. Not for — quieter. CMO’s three: students, hobbyists, $99 chatbot shoppers
5. How it works — diagnostic → build → handoff, numbered in Geist Mono
6. Three example cards — each with Badge “Example”. Copy as CMO wrote: Ops reporting, Recruiting screen, Internal tools
7. Pricing — three stacked rate-card rows, hairline dividers, no 3-col grid, no Popular, no checkmarks. Copy as written: `$1,500/month`, `$5K` one-time, `$10K` one-time, plus one muted line that the diagnostic qualifies and there are no discounts. No checkout, no extra CTA.
8. Newsletter — **reserved, not built.** After pricing. One email + Subscribe pill, no popup, no dummy list. Waits on CMO’s ESP spec.
9. Close — body size, same mailto pill, no form
10. Footer — text wordmark + mailto text, no social icons, no `Mark`

## CTA

Label: **Request a diagnostic**

Href: `mailto:clarktechventures@gmail.com?subject=Diagnostic%20request`

Close owns the mailto pill. Constant: `lib/site.ts` (`DIAGNOSTIC_SUBJECT` is `Diagnostic request`).
