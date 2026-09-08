// Every string the landing page renders lives here or in lib/site.ts.

export const EYEBROW =
  "AI automation for lead generation, sales operations, and customer support";

export const HEADLINE =
  "More pipeline, less busywork. We automate it with human-level quality.";

// Hero-only supporting line (the global PROMISE still runs in Work + footer).
export const HERO_PROMISE =
  "Cold email, LinkedIn notes, follow-ups, and qualified calls booked straight to your calendar, built on the tools you already run. Your team does the work only they can. Your pipeline keeps filling.";

export const SUPPORT_LINE = "Implementation included, not a prompt pack.";
export const TAGLINE = "Systems that run without you.";
export const AUDIENCE_LINE =
  "For owners, managing partners, and heads of BD at recruiting firms.";
export const AGNOSTIC_TAG =
  "Built for lead-driven teams, recruiting and staffing firms included. Measured in booked calls and closed deals, not emails sent.";
// Statement (section 002): the gap we fill, the process in one line, the ask.
export const STATEMENT_LEAD = [
  "Most boutique recruiting firms have the same gap: the owner is the only one doing client outreach, and it stops the moment a search gets busy.",
  "We fill that gap with AI automation. It finds hiring managers, writes the outreach, follows up, and books the intake call. You keep the relationship and the close.",
  "Bring the work, show us your stack, and we build it. Book a call and we'll tell you exactly what we'd build. No obligation.",
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

export const SECTION_COUNT = 8;

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
    a: "Recruiting and staffing firms selling into employers, where the owner, managing partner, or head of BD still owns the job-order pipeline. If you are great once you have the job order and the pain is getting enough of the right hiring managers talking to you, this is built for you. Firm size does not matter, the need does.",
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

// 30 marketable AI automations for any business, carousel order. Weighted to
// lead generation and outbound BDR up top, then customer support, sales ops,
// and internal operations. `media` selects a DIAGRAMS SVG; `shows` is an
// optional proof line rendered under the description.
export const SYSTEMS = [
  {
    title: "AI BDR Team",
    body: "A team of outbound agents that researches your accounts, writes the first touch, runs every follow-up across channels, and books qualified calls straight onto your calendar. A full-time SDR desk that never sleeps, for less than one hire.",
    media: "leadgen",
  },
  {
    title: "AI Lead Generation Machine",
    body: "Finds the buyers who match your ICP, qualifies them, and delivers meetings, not lists. A pipeline that fills itself while your team stays on the work only they can do.",
    media: "leadgen",
  },
  {
    title: "AI Cold Email Engine",
    body: "Cold email that runs itself: builds the list, writes personalized sequences, sends and follows up on autopilot, keeps your domains warm and out of spam, and books the replies onto your calendar.",
    media: "leadgen",
  },
  {
    title: "LinkedIn & X Outbound",
    body: "Personalized connection notes, first touches, and follow-ups drafted in your voice, queued for one-click send, with every reply logged to your CRM. You show up for the conversations, not the grind.",
    media: "leadgen",
  },
  {
    title: "Buying-Signal Radar",
    body: "Watches funding rounds, hiring, job changes, tech installs, and intent data, then fires personalized outreach the day the signal hits. You reach the buyer while the need is fresh, not a quarter late.",
    media: "screening",
  },
  {
    title: "Target Account & Contact Lists",
    body: "Builds and refreshes lists of the companies in your niche and the people who actually own the budget, enriched and verified, deduped against your CRM and anyone already in sequence.",
    media: "knowledge",
  },
  {
    title: "Multi-Channel Sequencing",
    body: "Email, LinkedIn, X, SMS, and call tasks in one orchestrated sequence per account, with timing, throttling, and stop-on-reply built in, so no prospect gets hit twice and none get forgotten.",
    media: "ops",
  },
  {
    title: "Reply Triage & Meeting Booking",
    body: "Reads every reply, separates interested from out-of-office and not-now, answers the easy questions, and books the hot ones onto your calendar with full account context attached.",
    media: "support",
  },
  {
    title: "Inbound Lead Qualification & Routing",
    body: "Reads every inbound form, email, and DM, qualifies against your criteria, enriches the contact, and routes it to the right rep or books the call, so no good lead sits unanswered overnight.",
    media: "triage",
  },
  {
    title: "AI Follow-Up & Nurture",
    body: "Never lets a warm lead go cold: keeps every deal moving with timely, personalized follow-ups, answers questions, and books the next call, so the conversations you started actually close.",
    media: "crm",
  },
  {
    title: "Speed-to-Lead Responder",
    body: "Every new lead gets a personalized reply within seconds, day or night, then a call booked before your competitor has even opened their inbox. Fast response is the single biggest lever on close rate, and this pulls it for you.",
    media: "leadgen",
  },
  {
    title: "Dormant Lead Re-engagement",
    body: "Mines your CRM for the deals that went quiet and the past customers who are ready again, picks the right moment, drafts the note, and books the reconnect. Revenue hiding in a list you already own.",
    media: "reporting",
  },
  {
    title: "Referral & Review Engine",
    body: "Turns happy customers into the next deal: perfectly timed referral asks, review requests to the right platforms, and testimonials captured and routed, all on autopilot.",
    media: "leadgen",
  },
  {
    title: "Outbound Personalization at Scale",
    body: "Researches every prospect, their company, and their recent moves, then writes a first line that sounds hand-written, across thousands of contacts. The reply rates of a researcher, at the speed of software.",
    media: "content",
  },
  {
    title: "AI Customer Support Agent",
    body: "Answers, resolves, and escalates across email, chat, and web in your voice, 24/7. Handles the repeat questions instantly and hands the rest to a human with full context, so response times drop and your team stops firefighting.",
    media: "support",
  },
  {
    title: "24/7 AI Receptionist",
    body: "Answers inbound calls and messages around the clock, captures who is calling and why, answers common questions, and books the appointment, so nothing lands in voicemail at 6pm on a Friday.",
    media: "support",
  },
  {
    title: "Ticket Triage & Routing",
    body: "Reads, tags, prioritizes, and routes every support ticket to the right queue, drafts the reply, and flags the ones a human needs to see first. Your backlog sorts itself.",
    media: "triage",
  },
  {
    title: "AI Knowledge Base & Help Center",
    body: "Turns your docs, tickets, and past answers into an assistant that deflects the repeat questions before they reach a person, and keeps your help center writing itself as things change.",
    media: "knowledge",
  },
  {
    title: "CRM Hygiene & Auto-Enrichment",
    body: "Keeps your CRM honest: logs every touch, moves stages, dedupes and merges contacts, enriches missing fields, and flags deals going cold before they die quietly.",
    media: "crm",
  },
  {
    title: "Proposal & Quote Drafting",
    body: "Drafts the proposal, quote, and terms from your call notes and pricing rules, sends it for signature, and chases it until it is signed. Hours of desk work gone.",
    media: "content",
  },
  {
    title: "Custom Scope & Pricing Agent",
    body: "Turns a rough brief into a priced proposal in minutes: it interprets the client's requirements, breaks the work into a clear scope of deliverables and phases, and applies your rate card and margins to return a defensible quote you can send with confidence. The judgment of your best estimator, on demand, so nothing is underquoted and no opportunity waits days for a number.",
    media: "fx",
  },
  {
    title: "Meeting Notes & CRM Auto-Logging",
    body: "Joins the call, transcribes it, writes the summary and next steps, updates the CRM, and drafts the follow-up email before the rep has left the meeting.",
    media: "reporting",
  },
  {
    title: "Pipeline Reporting & Forecast",
    body: "Replies, meetings booked, deals opened, win rate, and forecast revenue, in one clean report leadership reads instead of builds. Live, every week, no spreadsheet wrangling.",
    media: "reporting",
  },
  {
    title: "Invoice & Billing Automation",
    body: "Generates invoices, sends them, matches payments, and chases the ones going late with a polite nudge sequence, so you get paid faster without anyone playing collections.",
    media: "fx",
  },
  {
    title: "Bookkeeping & Reconciliation",
    body: "Categorizes transactions, reconciles accounts, flags anomalies, and keeps your books close to real time, so month-end is a review instead of a scramble.",
    media: "fx",
  },
  {
    title: "Document & Data Entry Processing",
    body: "Reads invoices, contracts, forms, and PDFs, extracts the fields you care about, and drops clean structured data into your systems. The most tedious job in the building, gone.",
    media: "ops",
  },
  {
    title: "Onboarding & HR Workflow",
    body: "Runs new hires and new clients through every step automatically: accounts created, documents sent and signed, tasks assigned, and nothing dropped between teams.",
    media: "ops",
  },
  {
    title: "AI Recruiting & Candidate Screening",
    body: "Screens applicants against the role, ranks the shortlist, drafts the outreach, and books first interviews, so hiring managers only ever look at the candidates worth their time.",
    media: "screening",
  },
  {
    title: "Content & Social Media Engine",
    body: "Turns one idea into a week of posts, emails, and clips in your brand voice, scheduled across every channel, so you stay top of mind without a content team.",
    media: "content",
  },
  {
    title: "Order, Cart & Retention Recovery",
    body: "Recovers abandoned carts, wins back lapsed customers, and runs post-purchase flows that drive the second and third order, all triggered by behavior, all personalized.",
    media: "cart",
  },
  {
    title: "Inventory & Reorder Automation",
    body: "Tracks stock, forecasts demand, and triggers reorders before you run out, so you stop losing sales to empty shelves and cash to overstock.",
    media: "restock",
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
    badge: "",
    included: [
      "We map your niche, best clients, and current outreach",
      "A written plan of exactly what we would automate",
      "Your projected booked-call math and which lane fits",
      "Credited toward your first month if you move ahead",
    ],
    excluded: [
      "A live build",
      "Monthly care",
      "Booked calls from this card",
    ],
  },
  {
    title: "$1,500/mo",
    eyebrow: "Starter",
    price: "$1,500",
    suffix: "/mo",
    badge: "",
    included: [
      "One client-outbound lane, fully built and run for you",
      "Hiring-manager lists refreshed for your niche every week",
      "Cold email and LinkedIn outreach written in your voice",
      "Reply triage and intake calls booked onto your calendar",
      "Warmed domains and account-safe sending, no bans",
      "Monthly report on booked calls and job orders",
    ],
    excluded: [
      "A second specialty or desk",
      "Candidate sourcing",
      "An embedded specialist",
    ],
  },
  {
    title: "$2,000/mo",
    eyebrow: "Most popular",
    price: "$2,000",
    suffix: "/mo",
    badge: "Best value",
    included: [
      "Everything in Starter, at higher volume",
      "Multi-channel outreach across email, LinkedIn, and X",
      "Hiring-signal triggers that reach managers while the req is open",
      "Candidate sourcing to market your MPCs alongside client outreach",
      "An embedded specialist inside your team (staff augmentation)",
      "Deep ATS and CRM integration, nothing re-platformed",
      "Weekly reporting and a live pipeline review",
    ],
    excluded: [
      "Multiple desks run in parallel",
      "A product you resell",
    ],
  },
  {
    title: "$4,500/mo",
    eyebrow: "Full desk",
    price: "$4,500",
    suffix: "/mo",
    badge: "",
    included: [
      "Everything we build, nothing held back",
      "Multiple outbound lanes across every desk",
      "Client outreach and candidate sourcing run together",
      "A dedicated team with priority build and same-day async",
      "Retained and exclusive plays prioritized for fee integrity",
      "Custom dashboards and a forecast on fees and job orders",
      "Quarterly strategy session with the founder",
    ],
    excluded: [],
  },
] as const;

// Section 005: an illustrative, honest case study. We do not have a client to
// name yet, so this is a working model of one boutique recruiting desk, with
// modeled target math (not guarantees). Framed plainly so it reads as an
// example, never as a fabricated client result.
export const CASE_LABEL = "Illustrative example, not a client";
export const CASE_HEADING = "One recruiting desk, modeled end to end";
export const CASE_INTRO =
  "We would rather show you the honest version than a logo we do not have. So here is a working model: a boutique contingency firm, six recruiters, one vertical, where the owner is the only person doing client outreach and it only happens in the gaps between placements.";

// Before / after the build.
export const CASE_BEFORE_HEADING = "Before";
export const CASE_BEFORE = [
  "Owner runs client outreach in the cracks, a couple of hours a week when a search is not on fire.",
  "New job orders come from referrals and the same handful of repeat clients.",
  "Pipeline stalls the moment a big placement lands, then starts cold again.",
] as const;

export const CASE_AFTER_HEADING = "After we install the system";
export const CASE_AFTER = [
  "Target employer and hiring-manager lists rebuilt for the niche and refreshed weekly.",
  "Cold email plus LinkedIn outreach in the owner's voice, sent and followed up on autopilot.",
  "Every reply triaged, and interested hiring managers booked straight onto the calendar.",
] as const;

// Modeled monthly targets from the $500 audit, not guarantees.
export const CASE_METRICS = [
  { value: "1,200", label: "hiring-manager contacts researched, enriched, and verified each month" },
  { value: "3 to 5%", label: "reply rate on cold outreach, the honest range, not an inflated one" },
  { value: "10 to 15", label: "qualified intake calls booked onto the owner's calendar monthly" },
  { value: "2 to 4", label: "net-new job orders a month, beyond the usual referrals" },
] as const;

export const CASE_DISCLAIMER =
  "These are modeled targets from the $500 audit, not promises. Reply and booking rates move with your niche, list quality, and offer. We show you the math for your desk before you commit to anything.";
export const CASE_CLOSE =
  "The owner stops being the pipeline. The desk keeps filling while the team places.";

// Section 006: the lead magnet. A free PDF in exchange for an email, delivered
// on submit and captured to the list when the backend is configured.
export const PLAYBOOK_LABEL = "Free download";
export const PLAYBOOK_HEADING = "The Operator Playbook";
export const PLAYBOOK_INTRO =
  "The short version of how we do this: the automations we install, the order we install them in, and how a small team books more calls without adding headcount. Drop your email and it is yours, no call required.";
export const PLAYBOOK_BULLETS = [
  "The systems that fill a pipeline while your team stays on the work only they can do.",
  "The sequence we build them in, so the first wins pay for the rest.",
  "The honest math on reply rates and booked calls, not inflated promises.",
] as const;
export const PLAYBOOK_CTA = "Get the playbook";
export const PLAYBOOK_PLACEHOLDER = "you@company.com";
export const PLAYBOOK_DONE = "Your playbook is ready.";
export const PLAYBOOK_DONE_NOTE =
  "It opened in a new tab. If it did not, use the link below.";
export const PLAYBOOK_DONE_LINK = "Download the Operator Playbook";
export const PLAYBOOK_ERROR =
  "Enter a valid email and we will hand it right over.";
export const PLAYBOOK_FINE_PRINT =
  "One email, the playbook, and the occasional note on what is working. Unsubscribe anytime.";
export const PLAYBOOK_POWERED = "Powered by Buttondown.";
