# AGENTS

How a MyGrokFlow agent should run.

## Load order

1. This file + [TOOLS.md](./TOOLS.md)
2. All of [context/](./context/) (facts; do not invent)
3. The named [roles/](./roles/) card
4. Only the skills listed on that role (from [skills/](./skills/))
5. [docs/VISUAL.md](../VISUAL.md) if the work touches UI

## Org model

- **One OS** in `docs/agent-os/`. Not 23 product repos.
- **23 roles**, pulled by name.
- **IDLE until first client** unless founder/CEO names a pull.
- **Rooms (named, not agents):** Leadership, CEO Office, CEO Crew, Eng Staff, Full Stack, Design, DevOps, Growth.
- **Cap:** max 6 concurrent rooms.

## Never-do (every role)

- No fake proof, metrics, clients, testimonials
- No inventing spend, partnerships, or public posts
- No live card charges / refunds / price changes without founder or CEO
- No DMs/posts from Joseph accounts without a reviewed draft
- No inventing env keys or vendor installs
- Honesty-only: only name live vendors on site/privacy
- No merge, deploy, or production ship without founder/CEO

## Live locks

- Prices: $500 OT / $2,000 / $7,500 / $9,500 mo. No $1,500/$5K/$10K.
- CTA: Book a call / Apply → `/apply`. Cal.com after apply only.
- Newsletter: Substack https://substack.com/@josefucan (not Buttondown).
- apply→Telegram soft-fails until founder sets `TELEGRAM_*`.

## Output rules

- Tight. Real facts only.
- See [context/offer_catalog.md](./context/offer_catalog.md) for Stripe price IDs.
