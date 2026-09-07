// Every string the landing page renders lives here or in lib/site.ts.

export const EYEBROW =
  "AI lead generation for boutique recruiting and staffing firms";

export const HEADLINE =
  "We implement AI automation so your recruiting firm lands more job orders, without you running the outreach yourself.";

// Hero-only supporting line (the global PROMISE still runs in Work + footer).
export const HERO_PROMISE =
  "Cold email, LinkedIn notes, follow-ups, and intake calls booked straight to your calendar, built on the ATS you already run. Your recruiters recruit. Hiring managers keep booking.";

export const SUPPORT_LINE = "Implementation included, not a prompt pack.";
export const TAGLINE = "Systems that run without you.";
export const AUDIENCE_LINE =
  "For owners, managing partners, and heads of BD at recruiting firms.";
export const AGNOSTIC_TAG =
  "AI lead generation for recruiting firms. Measured in intake calls and job orders, not emails sent.";
// Statement (section 002): the gap we fill, the process in one line, the ask.
export const STATEMENT_LEAD = [
  "Here's the gap in most boutique recruiting firms.",
  "One person owns the clients and the candidates. Outreach happens in the gaps, and the gaps close the second a search heats up. We call that the 360 trap.",
  "We fill it with AI automation for client lead generation, built on the ATS and tools you already run. The system earns the intake call. The relationship, the brief, and the close stay yours.",
  "Three steps. Bring the work. Show us the stack. We build the system and hand you a job-order pipeline that runs without you.",
  "So let's keep this simple. Book a call. We'll look at your outbound and tell you exactly what we'd build. No obligation after that.",
] as const;

export const AUDIENCE_HEADING = "Here's who we work best with";

export const APHORISM = "Pipeline is outreach that happens while you're busy.";
export const RATES_NOTE = "Book a call to see what fits. No discounts.";

export const CTA_PRIMARY = "Book a call";
export const CTA_SECONDARY = "Apply";

export const WORK_HEADING = "What we build";
export const PROCESS_HEADING = "Our process";
export const RATES_HEADING = "Rates";
export const FAQ_HEADING = "FAQ";
export const FAQ_NOTE =
  "AI lead generation for recruiting firms, the models we use (including Grok from xAI), and how we keep your data secure.";

export const SECTION_COUNT = 6;

// Honest, keyword-rich Q&A. Doubles as on-page content and FAQPage structured
// data, so searches around AI lead generation for recruiters, Grok, xAI, and X
// surface the site.
export const FAQS = [
  {
    q: "What is MyGrokFlow?",
    a: "MyGrokFlow is an AI automation agency that builds AI lead generation systems for boutique B2B recruiting and staffing firms. We take the client-side outbound the owner still runs by hand (finding hiring managers, messaging them, following up, and booking calls) and turn it into a system that runs without you, implementation included.",
  },
  {
    q: "Who is this for?",
    a: "Contingency and retained recruiting firms with roughly 2 to 25 recruiters, selling into employers, where the owner, managing partner, or head of BD still owns the job-order pipeline. If you are great once you have the job order and the pain is getting enough of the right hiring managers talking to you, this is built for you.",
  },
  {
    q: "Is this candidate sourcing or client outbound?",
    a: "Client outbound. We build the system that wins job orders: target employer and hiring-manager lists, personalized email, LinkedIn, and X outreach, hiring-signal triggers, reply handling, and the handoff into your ATS or CRM and calendar. We do not build candidate-spam machines.",
  },
  {
    q: "Do you build on Grok and xAI models?",
    a: "Yes. MyGrokFlow is agent-agnostic. We build with frontier models including Grok, the model from xAI (Elon Musk's AI company), alongside other leading LLMs, and we pick the best model and route for each task. If Grok is the optimal engine for your outbound we ship on Grok; if another model wins, we use that.",
  },
  {
    q: "Which ATS, CRM, and outreach tools do you work with?",
    a: "The ones you already run: Bullhorn, Loxo, Crelate, JobAdder, Vincere, and HubSpot or Pipedrive on the CRM side; LinkedIn Sales Navigator, Apollo, and Clay for lists and enrichment; your email sending stack; X (formerly Twitter); and Cal.com or Calendly for booking. We connect agents through native APIs and MCP, so nothing gets re-platformed.",
  },
  {
    q: "I've paid for lead generation before and got junk meetings. Why is this different?",
    a: "Cold reply rates in this industry run 3 to 5 percent. We don't pretend otherwise. What we do is make sure that 3 to 5 percent lands on your calendar with context attached, that the other 95 never hear from you twice by accident, and that the follow-up goes to eight touches where most reps stop at two. We measure in intake calls and job orders. Emails sent is not a number we report.",
  },
  {
    q: "Will this get my LinkedIn restricted or my domain flagged?",
    a: "No. LinkedIn is not banning outreach. It is banning unattended servers running your account. Our LinkedIn and X messages are drafted by the system and sent from your own session on a human-paced schedule with daily caps. Email runs on warmed sending domains separate from your main one, with volume limits and stop-on-reply. If a channel's rules change, the system changes with them.",
  },
  {
    q: "My niche is relationship-based. Won't AI outreach sound generic?",
    a: "It would if it were generic. Every first-touch is written from the hiring manager's actual open req, your relevant placements, and the signal that triggered the message (a repost, a funding round, a leadership change). The system earns the intake call. The relationship, the brief, and the close stay with you.",
  },
  {
    q: "Is my data secure when you integrate AI?",
    a: "Yes. Every automation runs on scoped, least-privilege access with your data encrypted in transit and at rest, full audit trails, and human approval on anything destructive, so adding AI never widens your attack surface.",
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
    body: "We automate the client-outbound loop end to end and hand you a job-order pipeline that runs without you.",
  },
] as const;

// Every card is client-side lead generation, BDR, or sales ops for boutique
// B2B recruiting and staffing firms. Order = carousel order; the flagships
// lead. `shows` is the optional proof line rendered under the description.
export const SYSTEMS = [
  {
    title: "AI Job-Order Lead Generation",
    body: "Finds the hiring managers who match your niche, qualifies them, and books them straight onto your calendar. A client pipeline that fills while your recruiters recruit, not another list for the owner to work by hand.",
    media: "leadgen",
  },
  {
    title: "AI Email Outbound to Hiring Managers",
    body: "Cold email that runs itself: builds the list, writes personalized sequences from your placements and their open reqs, sends and follows up on autopilot, keeps the domain healthy, and books replies onto your calendar.",
    media: "leadgen",
  },
  {
    title: "LinkedIn & X Outbound, Without Living In It",
    body: "Drafts personalized connection notes, first-touches, and follow-ups in your voice, queues them for one-click send, and logs every reply to your CRM, so you show up on LinkedIn for the conversations, not the grind.",
    media: "leadgen",
  },
  {
    title: "AI BDR Team for Recruiting Firms",
    body: "A team of outbound agents that researches target employers, writes the first-touch, runs the follow-up across channels, and books qualified intake calls with hiring managers who have budget and a req.",
    media: "leadgen",
  },
  {
    title: "Hiring-Signal Radar",
    body: "Watches job postings, funding rounds, headcount growth, leadership changes, and reqs reposted for the third time, then triggers outreach the day the signal fires. You reach the hiring manager while the search is still open.",
    media: "screening",
  },
  {
    title: "Target Employer & Hiring-Manager Lists",
    body: "Builds and refreshes lists of employers in your niche and the people who actually own the req, enriched and verified, deduped against your ATS, past clients, and anyone already in sequence.",
    media: "knowledge",
  },
  {
    title: "Reply Triage & Calendar Handoff",
    body: "Reads every reply, separates interested from out-of-office and not-now, answers the easy questions, and books the interested ones onto your calendar with the account context attached.",
    media: "support",
  },
  {
    title: "Job-Order Pipeline & ATS Hygiene",
    body: "Keeps Bullhorn, Loxo, Crelate, or your CRM honest: logs every touch, moves stages, dedupes contacts, and flags BD deals and job orders going cold before they die quietly.",
    media: "crm",
  },
  {
    title: "Multi-Channel Sequencing",
    body: "Email, LinkedIn, X, and call tasks in one sequence per account, with timing, throttling, and stop-on-reply built in, so no hiring manager gets hit twice and none get forgotten.",
    media: "ops",
  },
  {
    title: "Dormant Client Re-engagement",
    body: "Works your past clients and the candidates you placed who are now hiring managers themselves: picks the right moment, drafts the note, and books the reconnect.",
    media: "reporting",
  },
  {
    title: "Placement-to-Referral Loop",
    body: "Turns every placement into the next job order: check-ins at 30 and 90 days, a referral ask at the right moment, and expansion into other teams at the same employer.",
    media: "leadgen",
  },
  {
    title: "Inbound Job-Order Receptionist",
    body: "Answers inbound calls and messages from hiring managers 24/7, captures the req and urgency, and books the intake call, so no job order lands in voicemail at 6pm on a Friday.",
    media: "support",
  },
  {
    title: "Proposal & Fee-Agreement Drafting",
    body: "Drafts the proposal, terms, and fee agreement from the intake-call notes, sends it for signature, and chases it until it is signed.",
    media: "content",
  },
  {
    title: "BD Reporting & Fee Forecast",
    body: "Replies, meetings booked, job orders opened, fill rate, and forecast fees, in one weekly report the owner reads instead of builds.",
    media: "reporting",
  },
] as const;

export const WORK_STACK_NOTE =
  "Behind every build is hands-on work with the tools recruiting firms already run: ATS and CRM platforms like Bullhorn, Loxo, Crelate, JobAdder, Vincere, HubSpot, and Pipedrive; list and enrichment tools like LinkedIn Sales Navigator, Apollo, and Clay; your email sending stack and X (formerly Twitter); and booking systems like Cal.com and Calendly. We connect agents to your existing stack through native APIs and MCP, so you get the fullest possible value out of the software you already pay for.";

export const SECURITY_LEAD = "Secure by default.";
export const SECURITY_NOTE =
  "Every automation runs on scoped, least-privilege access (no shared logins, no standing keys), with your data encrypted in transit and at rest and kept inside infrastructure you control. Full audit trails, and human approval on anything destructive. The point is simple: add AI without widening your attack surface.";

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
