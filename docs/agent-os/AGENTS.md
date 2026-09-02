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
- **23 roles**, pulled by name. Do not spawn the whole org. Founder-only to cut headcount.
- **CEO org workers idle unless named.** CEO/CTO/CMO/CFO/CoS are not idle by default.
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

## Other locks

- No Jotform / Typeform. Cal.com is a URL after `/apply` only: `https://cal.com/ctvllc-availability`
- Persist parked. Newsletter/#8 work unparked; merge-gated on `buttondown.com/mygrokflow` 200.
- Whop (`mygrokflow.whop.site`) after www.
- X MCP `needsAuth`. Logged out → no BDR sends.

## Output rules

- Tight. Real facts only.
- Pricing: catalog vs live are different; never mix. See [context/offer_catalog.md](./context/offer_catalog.md).
- Site CTA copy: **Request a diagnostic** → `/apply`.
