// Every string the landing page renders lives here or in lib/site.ts.

export const EYEBROW =
  "Client outbound for boutique recruiting and staffing firms";

export const HEADLINE =
  "You are the best BD rep your firm has. That is the problem.";

// Hero-only supporting line (the global PROMISE still runs in the footer).
export const HERO_PROMISE =
  "You're already the closer once a hiring manager is on the phone. The firm still bottoms out when that calendar depends on you finding who's hiring and booking the meeting yourself. We install the client-outbound system that runs while you're busy: cold email, LinkedIn, follow-ups, and intake calls on your calendar. Your recruiters recruit. You get your firm back.";

export const SUPPORT_LINE = "Implementation included, not a prompt pack.";
export const TAGLINE = "Systems that run without you.";
export const AGNOSTIC_TAG =
  "Measured in intake calls and job orders, not emails sent. Implementation included.";

// CTAs. Primary = Apply (the $500 diagnostic). Secondary = a fit call.
export const CTA_PRIMARY = "Apply: $500 diagnostic";
export const CTA_PRIMARY_SHORT = "Apply";
export const CTA_SECONDARY = "Book a fit call";

// Statement (section 002): the 360 trap.
export const STATEMENT_LEAD = [
  "Here's what a 360 desk does to a boutique firm.",
  "One person owns the clients and the candidates. Outreach happens in the gaps. The gaps close the second a search heats up. Client outreach is the first thing dropped and the slowest thing restarted.",
  "We call that the 360 trap. Most firms don't have a candidate problem. They have an owner who is still the entire client-outbound system.",
  "We fill that gap with a client-outbound system that finds companies actively hiring and books the intake call, while your recruiters recruit. You keep the relationship and the close.",
  "More candidates won't fix a quiet book. Hiring-manager conversations will.",
] as const;

export const AUDIENCE_HEADING = "Here's who we work best with";

export const MAYBE_LADDER = [
  "Maybe you're the one who still writes every first-touch, at night, after the searches are done.",
  "Maybe you hired a BDM, paid them for six months, and got two job orders.",
  "Maybe you paid a lead-gen agency, got a spreadsheet of emails sent, and eight meetings that went nowhere.",
  "Maybe three clients carry the firm and you know exactly what happens if one of them goes quiet.",
  "Maybe your recruiters are great once the job order lands, and it is still on you to land it.",
] as const;
export const MAYBE_CLOSE =
  "If none of that sounds like you, this is not for you. If it does, keep reading.";

export const WANTS = [
  "You want hiring managers with live reqs on your calendar every week, whether you were free that week or not.",
  "You want your recruiters recruiting and your name on the brief, not on the sequence.",
  "You want this built on the ATS and tools you already run, not another platform to log into.",
] as const;
export const DO_NOT_WANTS = [
  "You do not want a $99 chatbot.",
  "You do not want your LinkedIn restricted because a server was sending while you slept.",
  "You do not want a hiring manager in your niche to get a message from your firm that reads like every other recruiter's.",
] as const;

export const SELECTIVITY_CLOSE =
  "We take on a small number of firms at a time, not because we are precious about it, but because a system like this is built by hand on your stack, and that takes our attention. So let's keep this simple. Apply for the $500 diagnostic. We'll look at your outbound and tell you exactly what we'd build. You're under no obligation after that.";

export const APHORISM = "Pipeline is outreach that happens while you're busy.";

export const RATES_NOTE =
  "Apply for the $500 diagnostic to see what fits. No discounts.";

export const WORK_HEADING = "What we install";
export const WORK_NOTE =
  "One client-outbound system. Not a product wall. We take the painful owner-as-BD loop and turn it into a job-order pipeline that runs without you.";
export const PROCESS_HEADING = "Our process";
export const RATES_HEADING = "Rates";
export const FAQ_HEADING = "FAQ";
export const FAQ_NOTE =
  "Client outbound for boutique recruiting firms: how it works, who it's for, and how we handle LinkedIn, domains, and your data.";

export const SECTION_COUNT = 6;

// Honest Q&A. Doubles as on-page content and FAQPage structured data.
export const FAQS = [
  {
    q: "What is MyGrokFlow?",
    a: "Done-for-you systems that replace the owner-as-outbound gap in boutique recruiting firms with a job-order pipeline: one that finds companies actively hiring, reaches the hiring manager, and books the intake call on your calendar while your recruiters recruit. Implementation included.",
  },
  {
    q: "Who is this for?",
    a: "Owners, managing partners, and heads of BD at contingency or retained recruiting and staffing firms with roughly 2 to 25 recruiters, selling into employers. You are great once you have the job order. The pain is landing enough of them without living in LinkedIn yourself.",
  },
  {
    q: "Is this candidate sourcing or client outbound?",
    a: "Client outbound only. We build the system that wins job orders: hiring-manager lists, personalized cold email and LinkedIn outreach, follow-ups, reply handling, and the handoff into your ATS and calendar. We do not build candidate-spam machines.",
  },
  {
    q: "I've paid for lead generation before and got junk meetings. Why is this different?",
    a: "We measure intake calls and job orders, not emails sent. The $500 diagnostic maps your niche, your best clients, and your current BD motion before any retainer, so the target list and the angles are yours, not a generic template. If the diagnostic says this won't work for your desk, we tell you that instead.",
  },
  {
    q: "Will this get my LinkedIn restricted or my domain flagged?",
    a: "The risk is real, so we design around it. LinkedIn restricts unattended servers running accounts, not people doing outreach. LinkedIn and X messages are drafted by the system and sent from your own session on a human-paced schedule with daily caps. Email runs on warmed sending domains separate from your main one, with volume limits and stop-on-reply. If a channel's rules change, the system changes with them.",
  },
  {
    q: "My niche is relationship-based. Won't this sound generic?",
    a: "It would if it were generic. Every first-touch is written from the hiring manager's actual open req, your relevant placements, and the signal that triggered the message (a repost, a funding round, a leadership change). The system earns the intake call. The relationship, the brief, and the close stay with you.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Every automation runs on scoped, least-privilege access with your data encrypted in transit and at rest, full audit trails, and human approval on anything destructive.",
  },
  {
    q: "Which models do you build on?",
    a: "Whichever wins for the task. We are agent-agnostic and build on frontier models including Grok from xAI alongside other leading LLMs.",
  },
] as const;

export const NEWSLETTER = {
  heading: "Without You",
  substack: { label: "Subscribe on Substack", href: "https://substack.com/@josefucan" },
} as const;

export const AUDIENCE = [
  {
    title: "Owners and managing partners",
    body: "You are good at this. Everyone says the firm is doing well. You're grateful, and you want it to grow past your own calendar.",
  },
  {
    title: "Heads of BD",
    body: "You own the pipeline number. Your week goes to lists, first-touches, and follow-ups instead of the calls that close.",
  },
  {
    title: "Firms of 2 to 25 recruiters",
    body: "Contingency or retained, selling into employers. Enough placements to prove it works. Not enough hands to run outbound every day.",
  },
] as const;

export const NOT_FOR = [
  "$99 chatbot shoppers",
  "mega RPO procurement",
  "candidate-spam shops",
  "deck collectors",
] as const;

/** "Not for students, hobbyists, or $99 chatbot shoppers." */
export function notForLine(items: readonly string[]): string {
  const head = items.slice(0, -1).join(", ");
  return `Not for ${head}, or ${items[items.length - 1]}.`;
}

export const PROCESS = [
  {
    n: "01",
    title: "Bring the work.",
    body: "Your niche, your best clients, the outreach that has worked, and the job-order number you want. Upload the docs, SOPs, and examples you already have.",
  },
  {
    n: "02",
    title: "Show us the stack.",
    body: "Your ATS or CRM, email, LinkedIn, and calendar. The tools you already pay for.",
  },
  {
    n: "03",
    title: "We build the system.",
    body: "The client-outbound loop end to end: a job-order pipeline that runs without you.",
  },
] as const;

// The three cards in "What we install". One system, three parts, in the order
// the work happens: find who's hiring, reach them, book the intake call.
export const SYSTEMS = [
  {
    title: "Hiring-manager lists & signal radar",
    body: "Employers in your niche and the people who own the req: enriched, verified, and deduped against your ATS, past clients, and active sequences. Watches job posts, funding, headcount, leadership changes, and reposted reqs, then queues outreach while the search is still open.",
    media: "screening",
  },
  {
    title: "Cold email + LinkedIn & X outbound",
    body: "Personalized first-touches and follow-ups written from your placements and their open reqs. Email on warmed domains with stop-on-reply. LinkedIn and X drafted in your voice on a human-paced schedule. You show up for the conversations, not the grind.",
    media: "leadgen",
  },
  {
    title: "Reply triage & calendar handoff",
    body: "Reads every reply, separates interested from out-of-office and not-now, answers the easy questions, and books interested hiring managers onto your calendar with account context attached. You keep the relationship, the brief, and the close.",
    media: "support",
  },
] as const;

export const WORK_STACK_NOTE =
  "Built on the ATS and CRM you already run (Bullhorn, Loxo, Crelate, JobAdder, Vincere, HubSpot, Pipedrive), plus Sales Navigator, Apollo, or Clay for lists, your email stack, X, and Cal.com or Calendly, connected through native APIs and MCP.";

export const SECURITY_LEAD = "Secure by default.";
export const SECURITY_NOTE =
  "Scoped, least-privilege access with no shared logins, encryption in transit and at rest, full audit trails, and human approval on anything destructive.";

// eyebrow/price/suffix split the title for the card header layout.
export const RATES = [
  {
    title: "$500 audit (one-time)",
    eyebrow: "One-time diagnostic",
    price: "$500",
    suffix: "audit",
    included: [
      "Your niche and current BD motion on the table",
      "Sample hiring-company and hiring-manager list logic",
      "Sequence angles for one specialty",
      "Written go/no-go and which monthly lane fits",
    ],
    excluded: [
      "A live, always-on pipeline",
      "Monthly care",
      "Guaranteed meetings from the audit alone",
    ],
  },
  {
    title: "$2,000/mo",
    eyebrow: "Boutique starter, one vertical",
    price: "$2,000",
    suffix: "/mo",
    included: [
      "One done-for-you client-outbound lane kept running",
      "Lists plus email and LinkedIn touches",
      "Reply triage toward intake calls",
      "Implementation included, ongoing fixes, async support",
    ],
    excluded: [
      "Multi-specialty or multi-desk sprawl",
      "A second unrelated workflow",
      "A product you resell",
      "On-site or embedded team time",
    ],
  },
  {
    title: "$7,500/mo",
    eyebrow: "Target seat",
    price: "$7,500",
    suffix: "/mo",
    included: [
      "A larger or multi-step client-outbound loop (or two tightly linked systems)",
      "Deeper stack integration across the tools you already pay for",
      "Fuller handoff",
      "Ongoing care in that scope",
    ],
    excluded: [
      "Open-ended anything-goes",
      "Building a SaaS product",
      "Unlimited new projects",
      "Staff augmentation",
    ],
  },
  {
    title: "$9,500/mo",
    eyebrow: "Target seat",
    price: "$9,500",
    suffix: "/mo",
    included: [
      "Several loops in one BD function kept running",
      "Deepest stack we'll take",
      "Fuller docs",
      "Priority async on those systems",
    ],
    excluded: [
      "A product you resell",
      "Embedding a team",
      "Unlimited company-wide revisions",
      "Training programs",
    ],
  },
] as const;
