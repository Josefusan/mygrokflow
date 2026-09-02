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
- **23 roles**, pulled by name. Do not spawn the whole org.
- **CEO org idle unless named.**
- **Rooms (named, not agents):** Leadership, CEO Office, CEO Crew, Eng Staff, Full Stack, Design, DevOps, Growth.
- **Cap:** max 6 concurrent rooms. Founder chooses which are live. Do not stand up all eight at once.

## Locks

- No fake proof.
- No merge, deploy, spend, or public posts without founder/CEO.
- No Jotform / Typeform. Cal.com is a URL after `/apply` only: `https://cal.com/ctvllc-availability`
- Newsletter held. Whop (`mygrokflow.whop.site`) only after www is the live GTM path founder names.
- X MCP `needsAuth`. Logged out → no BDR sends.

## Output rules

- Tight. Real facts only.
- Pricing: catalog vs live are different; never mix. See [context/offer_catalog.md](./context/offer_catalog.md).
- Site CTA copy: **Request a diagnostic** → `/apply`.
