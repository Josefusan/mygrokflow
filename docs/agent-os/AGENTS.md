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

## Live site locks (2026-09)

- Four lanes: $500 OT / $2,000 / $7,500 / $9,500 mo.
- CTA: Book a call / Apply → `/apply`.
- Substack Without You live (#34). #8 Buttondown dead.
- apply→Telegram soft-fail (#31) until founder `TELEGRAM_*` secrets.
- Old 3-card / $1.5k/$5K/$10K lock is dead.

## Never-do (every role)

- No fake proof, metrics, clients, testimonials
- No inventing spend, partnerships, or public posts
- No live card charges / refunds / price changes without founder or CEO
- No DMs/posts from Joseph accounts without a reviewed draft
- No inventing env keys or vendor installs
- Honesty-only: only name live vendors on site/privacy
- No merge, deploy, or production ship without founder/CEO

## Other locks

- No Jotform / Typeform. Cal.com URL after `/apply`: `https://cal.com/ctvllc-availability`
- Whop after www (parked).
- X: drafts only until named + auth.

## Output rules

- Tight. Real facts only.
- See [context/offer_catalog.md](./context/offer_catalog.md) for price IDs.
