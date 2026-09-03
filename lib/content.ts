// Every string the landing page renders lives here or in lib/site.ts.

export const EYEBROW = "High-ticket AI automations";

export const HEADLINE =
  "Want hours back and more money from the work you already pay for, without doing it yourself.";

export const SUPPORT_LINE = "Implementation included, not a prompt pack.";
export const TAGLINE = "Systems that run without you.";
export const AUDIENCE_LINE = "For founders, agency owners, and engineers.";
export const RATES_NOTE = "Book a call to see what fits. No discounts.";

export const CTA_PRIMARY = "Book a call";
export const CTA_SECONDARY = "Apply";

export const WORK_HEADING = "What we build";
export const WORK_NOTE = "Two flagship systems, plus the operations work behind them.";
export const PROCESS_HEADING = "Our process";
export const RATES_HEADING = "Rates";

export const SECTION_COUNT = 5;

export const NEWSLETTER = {
  heading: "Without You",
  substack: { label: "Subscribe on Substack", href: "https://substack.com/@josefucan" },
  checklist: { label: "Get the checklist", href: "/without-you-one-loop-audit.pdf" },
} as const;

export const AUDIENCE = [
  {
    title: "Founders",
    body: "You already pay a team. The work still waits on you.",
  },
  {
    title: "Software engineers",
    body: "They pay you to ship product. Glue is hours that never hit it.",
  },
  {
    title: "High-earning operators",
    body: "You are paid to think. You still spend nights on the same report, inbox, or status loop. That is a system problem.",
  },
] as const;

export const NOT_FOR = ["students", "hobbyists", "$99 chatbot shoppers"] as const;

/** "Not for students, hobbyists, or $99 chatbot shoppers." */
export function notForLine(items: readonly string[]): string {
  const head = items.slice(0, -1).join(", ");
  return `Not for ${head}, or ${items[items.length - 1]}.`;
}

export const PROCESS = [
  {
    n: "01",
    title: "Bring the work.",
    body: "Upload the knowledge you already have (docs, SOPs, examples) and name the outcome you want.",
  },
  {
    n: "02",
    title: "Show us the stack.",
    body: "Where this runs today. The tools you already pay for.",
  },
  {
    n: "03",
    title: "We build the system.",
    body: "We automate the loop and hand you something that runs without you.",
  },
] as const;

export const EXAMPLES = [
  {
    title: "AI Lead Generation",
    body: "A system that finds, qualifies, and books your best-fit prospects straight onto your calendar — pipeline that fills while you sleep, not another list to work by hand.",
  },
  {
    title: "AI Customer Service",
    body: "A 24/7 support agent that answers, resolves, and escalates in your voice — customers get instant help and your team stops answering the same question twice.",
  },
  {
    title: "Ops & workflow automation",
    body: "The reporting, screening, and internal tools that eat your week — compiled, triaged, and run without you.",
  },
] as const;

// title/included/excluded are the original copy, unchanged.
// eyebrow/price/suffix split the title for the card header layout.
export const RATES = [
  {
    title: "$500 audit (one-time)",
    eyebrow: "One-time",
    price: "$500",
    suffix: "audit",
    included: [
      "One painful workflow on the table",
      "Written report of what to automate",
      "Which monthly lane fits, if any",
    ],
    excluded: [
      "A live build",
      "Monthly care",
      "A booked calendar from this card",
    ],
  },
  {
    title: "$2,000/mo",
    eyebrow: "Monthly",
    price: "$2,000",
    suffix: "/mo",
    included: [
      "One recurring workflow kept running without you",
      "Implementation included (not a prompt pack)",
      "Ongoing fixes inside that lane",
      "Async support on the live system",
    ],
    excluded: [
      "A second unrelated workflow",
      "A product you resell",
      "Unlimited new projects",
      "On-site / embedded team time",
    ],
  },
  {
    title: "$7,500/mo",
    eyebrow: "Monthly",
    price: "$7,500",
    suffix: "/mo",
    included: [
      "A larger or multi-step loop (or two tightly linked systems)",
      "Deeper stack integration across tools you already pay for",
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
    eyebrow: "Monthly",
    price: "$9,500",
    suffix: "/mo",
    included: [
      "Several loops in one function kept running",
      "Deepest stack we’ll take",
      "Fuller docs",
      "Priority async on those systems",
    ],
    excluded: [
      "Building a product you resell",
      "Embedding a team",
      "Unlimited revisions across the company",
      "Training programs",
    ],
  },
] as const;
