# Visual system

Locked. Zinc operator look. Default dark; light mode available via moon/sun toggle (persisted in `localStorage`).

Looks like an operator feed, not a Stripe clone or an X clone.

## Tokens

| Token | Value |
| --- | --- |
| Dark canvas | `oklch(0.12 0.002 286)` |
| Light canvas | `oklch(0.99 0.002 286)` |
| Hairline | dark `oklch(1 0 0 / 10%)` / light `oklch(0.16 0.004 286 / 12%)` |
| Primary CTA | inverted on canvas |
| Type | Geist Sans + Geist Mono |
| Feed column | `max-w-[42rem]` |
| Header | sticky `h-12`, wordmark + theme toggle + pill CTA |
| Sections | `py-16` |
| Cards | `p-4`, radius `0.5rem` |
| Primary button | `rounded-full` |

Use CSS variables (`bg-background`, `border-border`), not `bg-zinc-*`. No `rounded-2xl`, lift, or glow.

## Motion

CSS only. UI fades 150–200ms. Hero stagger `0 / 60 / 120 / 180ms`. Hover is color, border, and background only (no lift, no scale). Interactive controls use `cursor: pointer` and 180ms color/border/background transitions.

Background: one quiet zinc gradient on `body::before` — theme-aware light/dark variants, drift 32s on `transform` only. Not a rainbow mesh, not glow, not noise.

Honor `prefers-reduced-motion`: kill UI fades, stagger, and canvas drift.

No Framer, Magic UI, Inter, X/Twitter marks, 520ms reveals, or infinite pulse.

## Theme

Moon/sun toggle top-right in the sticky header. No copy on the control. Persist `mygrokflow-theme` in `localStorage` (`dark` | `light`). Inline boot script on `html` avoids flash.

## Footer contacts

Contact icons only (email, Telegram, Signal, LinkedIn, X) with accessible labels. No fake client logos. Newsletter/Without You is a separate PR.

## shadcn

Installed: `button`, `card`, `badge`, `separator` only. Animation layer is `tw-animate-css` (already imported). Do not add unused primitives.

Contact icons are inline SVG (no lucide grid).

Primary CTA Button: `variant="default"` plus `rounded-full`. Example labels: `Badge` text `Example`.

## Section map

CMO copy only. Do not invent clients, logos, metrics, testimonials, or tier names. Example workflows labeled as examples.

1. Sticky nav — wordmark + theme toggle + pill CTA
2. Hero — eyebrow, H1, support lines, CTA
3. Who it’s for — three tight rows
4. Not for — same type, quieter
5. How it works — diagnostic → build → handoff
6. Three example cards — Badge “Example”
7. Pricing — three stacked rate-card rows; Apply → `/apply`
8. Close — diagnostic CTA
9. Lead chat scaffold
10. Footer — wordmark, Privacy, contact icons

## CTA

Label: **Request a diagnostic**

Href: `/apply`
