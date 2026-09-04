// Every string the landing page renders lives here or in lib/site.ts.

export const EYEBROW = "Modernizing your business to become more profitable";

export const HEADLINE =
  "Want hours back and more money from the work you already pay for, without doing it yourself.";

export const SUPPORT_LINE = "Implementation included, not a prompt pack.";
export const TAGLINE = "Systems that run without you.";
export const AUDIENCE_LINE = "For founders, agency owners, and engineers.";
export const AGNOSTIC_TAG =
  "Agent-agnostic AI Automation that finds the optimal path to profitability";
export const AGNOSTIC_LINE =
  "Agent-agnostic by design. We test the models, tools, and routes, then ship the optimal path, not whatever's trending this week.";
export const RATES_NOTE = "Book a call to see what fits. No discounts.";

export const CTA_PRIMARY = "Book a call";
export const CTA_SECONDARY = "Apply";

export const WORK_HEADING = "What we build";
export const WORK_NOTE = "Two flagship systems, plus the operations work behind them.";
export const PROCESS_HEADING = "Our process";
export const RATES_HEADING = "Rates";
export const FAQ_HEADING = "FAQ";
export const FAQ_NOTE =
  "What we build, the models we use (including Grok from xAI), and how we keep your data secure.";

export const SECTION_COUNT = 6;

// Honest, keyword-rich Q&A. Doubles as on-page content and FAQPage structured
// data, so searches around AI automation, Grok, xAI, and X surface the site.
export const FAQS = [
  {
    q: "What is MyGrokFlow?",
    a: "MyGrokFlow is an AI automation agency that turns a painful recurring workflow into a system that runs without you. We design, build, and run AI agents and data pipelines across the software you already use, so founders, operators, and engineers get hours back and more profit from work they already pay for.",
  },
  {
    q: "Do you build on Grok and xAI models?",
    a: "Yes. MyGrokFlow is agent-agnostic. We build with frontier models including Grok, the model from xAI (Elon Musk's AI company), alongside other leading LLMs, and we pick the best model and route for each task. If Grok is the optimal engine for your automation we ship on Grok; if another model wins, we use that.",
  },
  {
    q: "What is a Grok agent or Grok automation?",
    a: "A Grok agent is an AI agent powered by xAI's Grok that reads context, calls tools, and takes real actions, not just chats. Grok automation means wiring that agent into your workflow, from lead generation and customer support to ETL data pipelines and bookkeeping, so the work completes end to end with human approval on anything sensitive.",
  },
  {
    q: "Can you automate X (formerly Twitter) and the rest of our stack?",
    a: "Yes. We connect agents to X (formerly Twitter), your CRM, help desk, booking system, ERP, and data warehouse through native APIs and MCP, so posting, monitoring, support, reporting, and data pipelines run automatically and securely.",
  },
  {
    q: "Which industries and business types do you work with?",
    a: "We work across B2B niches: eCommerce, B2B SaaS, finance, professional services, agencies, and enterprise operations. Typical builds include AI lead generation, customer support, automated ETL and data pipelines, and finance and back-office automation tailored to each stack.",
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
    body: "A system that finds, qualifies, and books your best-fit prospects straight onto your calendar. Pipeline that fills while you sleep, not another list to work by hand.",
    media: "leadgen",
  },
  {
    title: "AI Customer Service",
    body: "A 24/7 support agent that answers, resolves, and escalates in your voice. Customers get instant help and your team stops answering the same question twice.",
    media: "support",
  },
  {
    title: "Ops & workflow automation",
    body: "The reporting, screening, and internal tools that eat your week: compiled, triaged, and run without you.",
    media: "ops",
  },
] as const;

// A dedicated email-outbound lead-gen card, grouped with the other lead
// generation systems at the front of the carousel.
export const EMAIL_LEADGEN = {
  title: "AI Email Lead Generation",
  body: "Cold email that runs itself: finds best-fit prospects, writes personalized sequences, sends and follows up on autopilot, warms the domain, and books replies straight onto your calendar.",
  media: "leadgen",
} as const;

// Industry-specific systems (eCommerce + B2B SaaS) featured near the front of
// the carousel. Offering-style cards like the flagships (no `shows` line).
export const VERTICALS = [
  {
    title: "Restock & Back-in-Stock Alerts",
    body: "Watches inventory and demand, warns you before a bestseller sells out, and pings customers the moment their size or SKU is back. Recovered revenue without a spreadsheet.",
    media: "restock",
  },
  {
    title: "eComm Customer Service Agent",
    body: "Answers “where's my order?”, processes returns and exchanges, and handles WISMO across email, chat, and DMs, in your brand voice, 24/7.",
    media: "cart",
  },
  {
    title: "AI Receptionist (24/7 & After-Hours)",
    body: "Answers every call and message (after hours and overflow included), greets callers, handles FAQs, books appointments to your calendar, and texts you the ones that can't wait. No more missed leads at 9pm.",
    media: "support",
  },
  {
    title: "AI Product Concierge",
    body: "Knows your whole catalog: answers product questions, checks fit and compatibility, and recommends the right item, turning browsers into buyers.",
    media: "knowledge",
  },
  {
    title: "AI BDR Team",
    body: "A team of outbound agents that researches accounts, writes personalized first-touches, runs the follow-up, and books qualified demos straight onto your calendar.",
    media: "leadgen",
  },
  {
    title: "AI CRM Hygiene",
    body: "Keeps your CRM clean on autopilot: dedupes records, enriches missing fields, fixes stages, and flags stale deals so your pipeline data is finally trustworthy.",
    media: "crm",
  },
  {
    title: "AI Ticket Support",
    body: "A front-line agent that resolves tier-1 tickets, drafts replies for the rest, and routes edge cases to the right human with full context attached.",
    media: "triage",
  },
  {
    title: "Churn-Risk & Renewal Agent",
    body: "Scores accounts on usage and sentiment, surfaces churn risk early, and drafts the renewal or save play so your CSMs act before it's too late.",
    media: "reporting",
  },
] as const;

// High-ticket enterprise / finance systems, featured up front with the
// verticals. Offering-style cards (no `shows` line).
export const ENTERPRISE = [
  {
    title: "AI ERP Optimization",
    body: "Plugs into NetSuite, SAP, or Microsoft Dynamics to auto-reconcile ledgers, match POs to receipts, sync inventory, and close the books faster. Fewer manual entries, cleaner month-end.",
    media: "ops",
  },
  {
    title: "AI Crypto On/Off-Ramp & Cross-Border FX",
    body: "Moves value between crypto and fiat and across borders, routing each transfer for best rate and speed across currencies, with KYC/AML checks and a full audit trail.",
    media: "fx",
  },
  {
    title: "AI Backtesting Trading Desk",
    body: "Backtests strategies over historical data with walk-forward validation and risk metrics, then surfaces the signals worth trading. Quant research at machine speed.",
    media: "trading",
  },
  {
    title: "AI Bookkeeping & Reconciliation",
    body: "Categorizes transactions, reconciles accounts, chases missing receipts, and syncs QuickBooks or Xero. A month-end close that runs itself.",
    media: "reporting",
  },
  {
    title: "AI Compliance & AML Monitoring",
    body: "Screens transactions and counterparties for KYC/AML risk, flags anomalies for human review, and files the audit trail. Coverage that scales with volume.",
    media: "screening",
  },
  {
    title: "AI Treasury & Cash-Flow Forecasting",
    body: "Forecasts cash across accounts and entities, models scenarios, and flags shortfalls before they hit, so finance can see around corners.",
    media: "reporting",
  },
] as const;

// Further build examples shown in the sliding carousel after the flagships.
// `shows` is the "what this proves" line rendered under the description.
export const PROJECTS = [
  {
    title: "Autonomous Ticket Resolution Engine",
    body: "An agent that reads the ticket, queries the database, applies the fix, and asks a human before anything destructive.",
    shows: "You build agents that resolve, not just reply.",
    media: "support",
  },
  {
    title: "Deep Research Agent with Citation Graph",
    body: "Multi-hop research, source grading, contradiction detection, and a fully cited final report.",
    shows: "You can orchestrate long-horizon reasoning safely.",
    media: "knowledge",
  },
  {
    title: "Self-Healing Data Pipeline Agent",
    body: "Detects schema drift in ETL jobs, drafts transformation fixes, and re-runs with rollback.",
    shows: "You can be trusted with production data, carefully.",
    media: "ops",
  },
  {
    title: "CI Triage Agent",
    body: "Reads failing pipeline logs, reproduces the error, opens a fix PR with tests, and waits for approval.",
    shows: "You can embed agents into engineering workflows.",
    media: "triage",
  },
  {
    title: "Multi-Agent Code Review Desk",
    body: "Reviewer, security scanner, and test-writer agents with consensus and conflict resolution.",
    shows: "You orchestrate teams of agents, not toys.",
    media: "content",
  },
  {
    title: "Computer-Use Back-Office Agent",
    body: "Browser automation for legacy portals: forms, uploads, extraction, and human takeover on CAPTCHA.",
    shows: "You ship agents in the messy real world.",
    media: "ops",
  },
  {
    title: "Invoice Processing Agent with 3-Way Match",
    body: "Reads invoices, matches POs and deliveries, flags exceptions, and posts to the ERP via MCP.",
    shows: "You automate expensive enterprise workflows.",
    media: "reporting",
  },
  {
    title: "Incident Response Agent",
    body: "Correlates alerts, traces, and logs; drafts the post-mortem; and suggests the rollback command.",
    shows: "You make on-call humans faster, not obsolete.",
    media: "triage",
  },
  {
    title: "Real-Time Voice Ops Agent",
    body: "Sub-second voice with tool calling, interruption handling, and clear escalation paths.",
    shows: "You can build multimodal agents that feel human.",
    media: "support",
  },
  {
    title: "Adaptive Tutor Agent with Mastery Memory",
    body: "Spaced repetition, difficulty routing, and long-term memory of the learner's state.",
    shows: "You use memory systems that personalize over time.",
    media: "knowledge",
  },
  {
    title: "Agentic Sales Ops Assistant",
    body: "Enriches leads, drafts personalized outreach, syncs the CRM, tracks replies, and updates forecasts.",
    shows: "You connect agents to revenue, not just demos.",
    media: "leadgen",
  },
  {
    title: "Agent Eval & Regression Platform",
    body: "Golden trajectories, CI gates that block bad prompts, and quality dashboards.",
    shows: "You ship agents like production software.",
    media: "screening",
  },
  {
    title: "Automated ETL & Data Pipelines",
    body: "Agents that pull from your apps, warehouses, and APIs, clean and transform on a schedule, and load it where teams need it, so sales, finance, and ops work from one trustworthy source instead of stale CSV exports.",
    shows: "You move and model data across the stack, not just query it.",
    media: "ops",
  },
] as const;

// Standing "team" systems — a full crew of coordinated agents. Shown toward
// the end of the carousel, with a `shows` line like the projects.
export const TEAMS = [
  {
    title: "AI DevOps Team",
    body: "A standing crew that watches CI/CD, triages incidents, ships deploys with rollback, and keeps infra and on-call humming. Your pipeline, run without you.",
    shows: "You run the pipeline, deploys, and incidents, not just advise on them.",
    media: "ops",
  },
  {
    title: "AI Software Engineering Team",
    body: "Spec-to-PR agents that scope the work, write the code, add tests, and open reviewed pull requests. A delivery team that scales with your backlog.",
    shows: "You ship real features end-to-end, reviewed and tested.",
    media: "content",
  },
  {
    title: "AI Project Manager Team",
    body: "Coordinator agents that break down work, assign and chase tasks, flag blockers and slippage, and keep every stakeholder updated. Status that maintains itself.",
    shows: "You keep scope, status, and stakeholders in sync automatically.",
    media: "triage",
  },
] as const;

export const WORK_STACK_NOTE =
  "Behind every build is hands-on work with the tools you already run: CRMs like HubSpot, Salesforce, and Pipedrive; booking systems like Cal.com and Calendly; help desks like Zendesk and Intercom; finance and ERP stacks like QuickBooks, Xero, NetSuite, SAP, and Microsoft Dynamics; plus data warehouses and the messaging and dev tools around them. We connect agents to your existing stack through native APIs and MCP, so you get the fullest possible value out of the software you already pay for.";

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
