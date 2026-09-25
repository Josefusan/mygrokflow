// Every string the landing page renders lives here or in lib/site.ts.

export const EYEBROW =
  "AI sales and support automation for B2B teams";

export const HEADLINE = "Every lead worked. Every reply answered. Every account remembered.";

// Hero-only supporting line (the global PROMISE still runs in Work + footer).
export const HERO_PROMISE =
  "An AI revenue team that prospects on LinkedIn and email, qualifies and books the discovery call, keeps your CRM clean, and supports the customer after the close. We build it on your stack. You keep the relationships.";

export const SUPPORT_LINE = "Implementation included, not a prompt pack.";
export const TAGLINE = "Systems that run without you.";
export const AUDIENCE_LINE =
  "For B2B founders, sales leaders, and RevOps teams who sell a considered product and are done with revenue that depends on who remembered to follow up.";
// Statement (section 002): the pain, the fix in one line, the ask.
export const STATEMENT_LEAD = [
  "Here is what is happening in your pipeline right now. A prospect replied on Tuesday. Nobody saw it until Friday. By then they had booked a demo with someone else. Your CRM still says the deal is in progress. Nobody has touched it in three weeks.",
  "That is not a people problem. It is a system problem. Your team spends the day on the work around selling: chasing replies, updating fields, rereading threads to remember where they left off. Selling gets whatever time is left. The next hire inherits the same leak.",
  "We fix the loop, not the symptom. AI runs the touchpoints, the qualification, the CRM, the inbox, and the tickets after the close. Your people show up for the conversations that need a human. On the strategy call we map exactly what we would build, no obligation.",
] as const;

export const AUDIENCE_HEADING = "Who this is for";

export const APHORISM =
  "A lead you never followed up with is a lead you paid for and gave to a competitor.";

export const CTA_PRIMARY = "Book a strategy call";
// Short form for the compact nav pill on phones, where the select sits beside it.
export const CTA_PRIMARY_SHORT = "Book a call";
export const CTA_SECONDARY = "Get the free worksheet";

export const WORK_HEADING = "What we build";
export const SYSTEM_HEADING = "How it works";
export const PROCESS_HEADING = "Our process";
export const RATES_HEADING = "Rates";
export const FAQ_HEADING = "FAQ";
export const FAQ_NOTE =
  "Straight answers on AI outbound, qualification, CRM hygiene, support automation, and how we protect your data and your domain.";

export const SECTION_COUNT = 11;

// Honest, keyword-rich Q&A. Doubles as on-page content and FAQPage structured
// data, so searches around AI BDRs, AI SDRs, inbound sales automation, CRM
// hygiene, and customer support automation surface the site.
export const FAQS = [
  {
    q: "What does MyGrokFlow build for a B2B sales team?",
    a: "We build and run the automation around your revenue team: an AI BDR for LinkedIn and email outreach, inbound lead response and qualification, discovery call booking with a pre-call brief, CRM hygiene, email triage, reply assist in Slack and email, and customer support automation after the close. Implementation is included. You are not buying a tool or a prompt pack. You get the system installed on your stack and working.",
  },
  {
    q: "Does this replace my SDRs, BDRs, or account executives?",
    a: "No. It removes the work that burns them out: research, first touches, follow-up number six, data entry, and inbox archaeology. Your people spend their day in real conversations with qualified buyers. Most teams find they can grow pipeline without hiring ahead of revenue. Your people stay. The busywork goes.",
  },
  {
    q: "Do you make cold calls?",
    a: "No. Outreach runs on LinkedIn and email only. When a prospect is ready, the AI asks your qualification questions and books the discovery call on your team's calendar, with a brief attached. Every conversation that needs a human voice goes to a human.",
  },
  {
    q: "Will this burn my domain or my LinkedIn account?",
    a: "Not if it is built right, and that is the job. We set up sending domains and inbox warm-up, keep volume inside each platform's limits, personalize every message, and stop a sequence the moment someone replies or opts out. Deliverability and account health are part of the build, not an afterthought.",
  },
  {
    q: "Will prospects and customers know it's AI?",
    a: "It is built to be useful and honest, not to trick anyone. Messages are written in your voice from real research on the account. When a question needs judgment, pricing approval, or a person, it hands off to your team with the full thread and context instead of guessing.",
  },
  {
    q: "Does it work with my CRM and tools?",
    a: "Yes. We build on the tools you already pay for, including Salesforce, HubSpot, Pipedrive, Attio, Close, Gmail, Outlook, LinkedIn Sales Navigator, Slack, Zendesk, Intercom, and Freshdesk. Every touch, meeting, and ticket writes back to your CRM, so nobody does double entry and nothing gets ripped out.",
  },
  {
    q: "What is the real ROI?",
    a: "We do not sell you invented numbers. Count the replies that sat for more than a day last month, the deals that went quiet, and the hours your team spent updating the CRM. Then price one extra closed deal against the retainer. For most B2B teams with a real average contract value, a small number of saved deals covers it. We walk your actual numbers on the call.",
  },
] as const;

export const NEWSLETTER = {
  heading: "Without You",
  substack: { label: "Subscribe on Substack", href: "https://substack.com/@josefucan" },
} as const;

export const AUDIENCE = [
  {
    title: "Founders still running sales",
    body: "You are the best closer in the company and the worst at follow-up, because you also run the company. Deals do not die on the call. They die in your inbox.",
  },
  {
    title: "Sales and RevOps leaders",
    body: "You own the number. Your reps lose hours to data entry and chasing replies, and your forecast is only as good as the last time someone updated the CRM.",
  },
  {
    title: "Customer success and support leads",
    body: "Every new customer adds tickets, emails, and quick questions in Slack. You want fast, correct answers without hiring ahead of revenue.",
  },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Show us the leaks.",
    body: "Your pipeline, your inbox, your CRM, and the handoffs between them. Where replies wait, where deals go stale, and where tickets pile up.",
  },
  {
    n: "02",
    title: "Show us the stack.",
    body: "Salesforce or HubSpot, Gmail or Outlook, LinkedIn, Slack, Zendesk or Intercom. The tools you already pay for. Nothing gets ripped out.",
  },
  {
    n: "03",
    title: "We build the system.",
    body: "We wire outbound, qualification, CRM hygiene, and support end to end, with a human approving anything that matters. You get a revenue engine that runs without you in every step.",
  },
] as const;

// Section 004: the revenue loop, stage by stage. First touch to renewal, each
// stage paired with its on-brand diagram (`media` selects a DIAGRAMS SVG).
// This is the model we build and run for you.
export const SYSTEM_NOTE =
  "From first touch to renewal. Four stages, one loop, built and run for you.";
export const SYSTEM_STAGES = [
  {
    n: "Stage 1",
    title: "Prospect on LinkedIn and email",
    body: "Finds accounts that fit, reads what they care about, and runs personal touchpoints across LinkedIn and email. No cold calls. No spray and pray.",
    media: "leadgen",
  },
  {
    n: "Stage 2",
    title: "Qualify and book the discovery call",
    body: "Answers replies in minutes, handles the first objections, asks your qualification questions, and books the call on your calendar with a brief ready for your team.",
    media: "calendar",
  },
  {
    n: "Stage 3",
    title: "Remember everything",
    body: "Logs every touch, updates every field, cleans duplicates, and triages the inbox. Open any account and see exactly where you left off.",
    media: "crm",
  },
  {
    n: "Stage 4",
    title: "Support the customer after the close",
    body: "Answers tickets and customer email, drafts replies for your team in Slack and email, and escalates with full context. The customer you won stays won.",
    media: "support",
  },
] as const;

// Curated AI automations across the revenue loop, in carousel order. The
// flagships lead: AI BDR, inbound qualification, and booking, then the CRM,
// inbox, reply-assist, reporting, and post-sale support systems. `media`
// selects a DIAGRAMS SVG.
export const SYSTEMS = [
  {
    title: "AI BDR: LinkedIn and Email Outbound",
    body: "Researches each account, writes a first touch that proves it did the homework, and follows up across LinkedIn and email until the prospect replies or opts out. Consistent every day, not just the days someone has time.",
    media: "leadgen",
  },
  {
    title: "Inbound Lead Response and Qualification",
    body: "Every form fill, demo request, and inbound email gets a real answer in minutes, not days. Qualifies against your criteria and routes the good ones before they go shopping.",
    media: "screening",
  },
  {
    title: "Discovery Call Booking",
    body: "Offers real open times, handles the back and forth, and books the discovery call on the right seller's calendar. Reminders sent. No scheduling ping-pong.",
    media: "calendar",
  },
  {
    title: "Pre-Call Briefs and Prequalification",
    body: "Before every call, a one-page brief: who they are, what they said, what they need, and what to ask. Your team walks in prepared, every time.",
    media: "reporting",
  },
  {
    title: "CRM Hygiene on Autopilot",
    body: "Every email, message, meeting, and stage change logged without anyone typing. Duplicates merged, fields current, next steps set. A forecast you can actually trust.",
    media: "crm",
  },
  {
    title: "Email Triage and Where-We-Left-Off",
    body: "Reads every thread, flags what needs you, and keeps a running summary per client and prospect. Nobody rereads forty emails before a call again.",
    media: "triage",
  },
  {
    title: "Reply Assist in Slack and Email",
    body: "Drafts the best next reply in your voice, right where you work. You approve, edit, or send. Faster answers without a drop in quality.",
    media: "content",
  },
  {
    title: "Pipeline Reports and Feedback Loop",
    body: "Weekly reports on what books meetings and what stalls, fed back into the AI. Messaging, targeting, and qualification get sharper every week.",
    media: "ads",
  },
  {
    title: "AI Customer Support Agent",
    body: "Answers customer email and chat in your voice from your own docs. The routine questions get solved instantly. Anything else goes to your team with full context.",
    media: "support",
  },
  {
    title: "Post-Sale Ticket Automation",
    body: "Tickets tagged, prioritized, routed, and answered where the answer is known. Status updates go out on time, and the CRM knows when an account needs attention.",
    media: "knowledge",
  },
] as const;

export const SECURITY_LEAD = "Secure by default.";
export const SECURITY_NOTE =
  "Scoped, least-privilege access to your CRM, inboxes, and LinkedIn. Data encrypted in transit and at rest, inside infrastructure you control. Sending stays inside platform limits to protect your domain and accounts. Full audit trail. A human approves anything destructive.";

// Three public monthly retainers. eyebrow/price/suffix split the header; Core
// carries the badge as the default buy. Add-ons are quoted on the call, never
// listed as tiers. RATES_NOTE is the intro above the cards; RATES_FOOT is the
// line under them.
export const RATES_NOTE = "Three retainers. Most B2B teams land on Core.";
export const RATES_FOOT =
  "Add-ons quoted on the strategy call. No DIY products on this page. We commit to implementation and go-live dates, never to pipeline or revenue numbers.";
export const RATES = [
  {
    title: "Essential",
    eyebrow: "Essential",
    price: "$2,000",
    suffix: "/mo",
    badge: "",
    featured: false,
    tagline: "One revenue lane, built and run for you.",
    who: "Founder-led or early sales team with one clear leak. Not most teams.",
    note: "",
    included: [
      "One done-for-you lane: AI BDR outbound, inbound qualification and booking, or post-sale support",
      "CRM logging for every touch in that lane",
      "Implementation included for that lane",
      "Go-live and first booked meeting or resolved ticket dated on the strategy call",
      "In-lane fixes as things change",
      "One founder or sales lead point of contact",
    ],
    excluded: [
      "A second lane",
      "Full CRM hygiene and email triage",
      "Reply assist in Slack and email",
      "Multiple teams, brands, or regions",
      "Custom CRM rebuild",
      "Priority or weekly multi-lane cadence",
    ],
  },
  {
    title: "Core",
    eyebrow: "Core",
    price: "$3,500",
    suffix: "/mo",
    badge: "Recommended",
    featured: true,
    tagline:
      "Everything in Essential, plus a second lane and a CRM you can trust.",
    who: "B2B team of 2 to 15 sellers, where the founder or sales lead should not live in the inbox.",
    note: "The gap vs Essential is a second source of pipeline plus clean data. We map it against your average deal on the call.",
    included: [
      "Everything in Essential",
      "The higher-ROI second lane: outbound, inbound, or post-sale support. We choose it from your numbers on the strategy call",
      "CRM hygiene and email triage across both lanes",
      "Reply assist in Slack and email for your team",
      "Go-live dates for both lanes, set on the strategy call",
      "Monthly in-scope fixes",
      "Exception queue for edge cases and misfires",
      "Simple weekly status: meetings booked, replies handled, tickets resolved",
    ],
    excluded: [
      "All three lanes at once, that is Growth",
      "Cold calling or dialers",
      "Open-ended consulting",
      "Unlimited campaigns",
      "DIY or prompt packs",
    ],
  },
  {
    title: "Growth",
    eyebrow: "Growth",
    price: "$7,500",
    suffix: "/mo",
    badge: "",
    featured: false,
    tagline: "The full revenue loop, first touch to renewal.",
    who: "Multiple sellers, inboxes, or teams, or one high-volume motion where Core is too small.",
    note: "",
    included: [
      "Everything in Core",
      "Outbound, inbound qualification, and post-sale support, all included",
      "Multi-seller and multi-inbox routing",
      "Higher volume cap",
      "Weekly report feedback loop into messaging and targeting",
      "Faster go-live and priority async",
      "Weekly cadence until your first clean week of booked meetings",
    ],
    excluded: [
      "Staff augmentation",
      "Paid ads management",
      "Phone or voice calling",
      "Building you a SaaS",
    ],
  },
] as const;

// Section 005: an illustrative, honest case study. We do not have a client to
// name yet, so this is a working model of one B2B sales team, with modeled
// target math (not guarantees). Framed plainly so it reads as an example,
// never as a fabricated client result.
export const CASE_LABEL = "Illustrative example, not a client";
export const CASE_HEADING = "One B2B sales team, modeled end to end";

// Before / after the build.
export const CASE_BEFORE_HEADING = "Before";
export const CASE_BEFORE = [
  "Replies sit for days because nobody owns the inbox between meetings, and warm prospects go cold.",
  "Outbound happens in bursts. When the team gets busy closing, prospecting stops, and next quarter's pipeline dries up.",
  "Reps skip CRM updates, the forecast turns into guesswork, and after the close, support questions pile up in email and Slack.",
] as const;

export const CASE_AFTER_HEADING = "After we install the system";
export const CASE_AFTER = [
  "AI runs LinkedIn and email touchpoints every day and answers every reply within minutes, around the clock.",
  "Qualified prospects land on the calendar with a brief. Every touch is logged and every field is current.",
  "Tickets and customer emails are answered or routed with full context, and the team replies faster with AI drafts in Slack and email.",
] as const;

// Modeled monthly targets from the strategy call, not guarantees.
export const CASE_METRICS = [
  { value: "Minutes", label: "to answer every inbound and outbound reply, not days" },
  { value: "100%", label: "of touches, meetings, and stage changes logged to the CRM" },
  { value: "10 to 20", label: "qualified discovery calls booked a month from outbound, by market and offer" },
  { value: "Hours", label: "back per seller each week from data entry and inbox triage" },
] as const;

export const CASE_DISCLAIMER =
  "Modeled targets we map on the strategy call, not promises. Your numbers move with market, offer, list quality, and deal size, and we show you the math before you commit to anything.";
export const CASE_CLOSE =
  "No lead goes cold in the inbox. The CRM tells the truth. Your people spend their day selling.";

// Section 006: the lead magnet. A free PDF worksheet in exchange for an email,
// delivered on submit and captured to the list when the backend is configured.
export const PLAYBOOK_LABEL = "Free worksheet";
export const PLAYBOOK_HEADING = "Without You: The One-Loop Audit";
export const PLAYBOOK_NOTE =
  "For B2B founders and sales leaders. Find the one revenue loop that stops the week you stop touching it.";
export const PLAYBOOK_BULLETS = [
  "Name the one sales or support loop that still waits on you.",
  "Score it with the without-you test before you spend a dollar on tools.",
  "Decide if it is worth replacing or just loud, with honest math, not inflated promises.",
] as const;
export const PLAYBOOK_CTA = "Get the worksheet";
export const PLAYBOOK_NAME_PLACEHOLDER = "Your name";
export const PLAYBOOK_PLACEHOLDER = "you@company.com";
export const PLAYBOOK_PHONE_PLACEHOLDER = "Mobile number";
export const PLAYBOOK_SOCIAL_PLACEHOLDER = "LinkedIn URL or X @";
export const PLAYBOOK_DONE = "Your worksheet is ready.";
export const PLAYBOOK_DONE_NOTE =
  "It opened in a new tab. If it did not, use the link below.";
export const PLAYBOOK_DONE_LINK = "Download the One-Loop Audit";
export const PLAYBOOK_ERROR =
  "Add your name, email, phone, and LinkedIn or X, and we will hand it right over.";
export const PLAYBOOK_FINE_PRINT =
  "We send the worksheet and the occasional note on what is working. No spam, and we never share your details.";

// Section 008: the custom-build panel. Sits below the rate cards for the
// situations the standard packages do not cover. Anchored by "Book a call".
export const CUSTOM_LABEL = "Add-ons and custom builds";
export const CUSTOM_HEADING = "When you need more than the core";
export const CUSTOM_BULLETS = [
  "Multiple brands, regions, or sales teams wired into one CRM, one inbox view, and one set of reports.",
  "Custom agents for renewals, expansion, onboarding, and partner channels.",
  "Deeper builds for the workflows and tools the core loop does not already cover.",
] as const;
export const CUSTOM_CLOSE =
  "Bring the specific problem. On the strategy call we tell you plainly whether we can automate it, how we would build it, and what it takes. Add-ons are quoted there, not sold as tiers.";

// Section 009: the integrations marquee. A scrolling wall of the sales, CRM,
// and support tools we plug agents into, so buyers see their own stack and
// know nothing gets ripped out or re-platformed.
export const STACK_HEADING = "Works with your stack";
// name is the visible label; slug maps to /public/logos/<slug>.png (real brand
// favicons, self-hosted). Keep the two in sync when adding a tool.
export const STACK_TOOLS = [
  // Frontier AI models we build on
  { name: "ChatGPT", slug: "chatgpt" },
  { name: "Claude", slug: "claude" },
  { name: "Grok", slug: "grok" },
  { name: "Gemini", slug: "gemini" },
  { name: "DeepSeek", slug: "deepseek" },
  { name: "Kimi", slug: "kimi" },
  // Sales engagement and outbound (the BDR/AE core)
  { name: "Outreach", slug: "outreach" },
  { name: "Salesloft", slug: "salesloft" },
  { name: "Groove", slug: "groove" },
  { name: "Apollo", slug: "apollo" },
  { name: "Salesforge", slug: "salesforge" },
  { name: "Zevari", slug: "zevari" },
  { name: "Instantly", slug: "instantly" },
  { name: "Smartlead", slug: "smartlead" },
  { name: "Lemlist", slug: "lemlist" },
  { name: "Reply.io", slug: "reply" },
  { name: "Amplemarket", slug: "amplemarket" },
  { name: "Lavender", slug: "lavender" },
  { name: "Expandi", slug: "expandi" },
  { name: "Clay", slug: "clay" },
  // Data, enrichment, and intent
  { name: "ZoomInfo", slug: "zoominfo" },
  { name: "LinkedIn Sales Navigator", slug: "linkedin" },
  { name: "Lusha", slug: "lusha" },
  { name: "Cognism", slug: "cognism" },
  { name: "LeadIQ", slug: "leadiq" },
  { name: "Seamless.ai", slug: "seamless" },
  { name: "6sense", slug: "6sense" },
  // CRM
  { name: "Salesforce", slug: "salesforce" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Pipedrive", slug: "pipedrive" },
  { name: "GoHighLevel", slug: "gohighlevel" },
  { name: "Monday.com", slug: "monday" },
  { name: "Zoho CRM", slug: "zoho" },
  { name: "Close", slug: "close" },
  { name: "Copper", slug: "copper" },
  { name: "Attio", slug: "attio" },
  { name: "Keap", slug: "keap" },
  // Conversation intelligence (discovery call notes back into the CRM)
  { name: "Gong", slug: "gong" },
  { name: "Chorus", slug: "chorus" },
  { name: "Clari", slug: "clari" },
  // Meetings and video
  { name: "Calendly", slug: "calendly" },
  { name: "Cal.com", slug: "calcom" },
  { name: "Chili Piper", slug: "chilipiper" },
  { name: "Vidyard", slug: "vidyard" },
  { name: "Loom", slug: "loom" },
  // Channels and comms
  { name: "Gmail", slug: "gmail" },
  { name: "Outlook", slug: "outlook" },
  { name: "Slack", slug: "slack" },
  { name: "Microsoft Teams", slug: "teams" },
  { name: "LinkedIn", slug: "linkedin" },
  { name: "X (Twitter)", slug: "x" },
  { name: "WhatsApp", slug: "whatsapp" },
  { name: "Telegram", slug: "telegram" },
  { name: "Discord", slug: "discord" },
  // Customer support
  { name: "Zendesk", slug: "zendesk" },
  { name: "Intercom", slug: "intercom" },
  { name: "Freshdesk", slug: "freshdesk" },
  { name: "Help Scout", slug: "helpscout" },
  { name: "Front", slug: "front" },
  { name: "Gorgias", slug: "gorgias" },
  // Billing and finance (renewals, invoices, account status)
  { name: "Stripe", slug: "stripe" },
  { name: "QuickBooks", slug: "quickbooks" },
  { name: "Xero", slug: "xero" },
  { name: "NetSuite", slug: "netsuite" },
] as const;

// Shared promise line (Work head + footer) lives in site.ts; re-exported here so
// it travels with the locale dictionary.
export { PROMISE } from "./site";

// UI chrome strings that used to be literals in components. Kept here so every
// visible word on the landing page is translatable.
export const NAV_LINKS = [
  { label: "Worksheet", href: "#playbook" },
  { label: "Rates", href: "#rates" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;
export const RATES_IN = "In";
export const RATES_OUT = "Not in";
export const PLAYBOOK_SENDING = "Sending…";
export const WORK_SHOWS = "Shows:";
export const FOOTER_CONTACT = "Contact";
export const FOOTER_PRIVACY = "Privacy Policy";
export const FOOTER_DISCLAIMER = "Legal Disclaimer";
export const FOOTER_LEGAL =
  "MyGrokFlow is an independent, agent-agnostic AI automation business and a separate legal entity. It is not affiliated with, endorsed by, or connected to xAI, Grok, X (formerly Twitter), Tesla, SpaceX, or Elon Musk. All trademarks are the property of their respective owners and are used for identification only. See our";
export const LANG_LABEL = "Language";
export const THEME_TO_LIGHT = "Switch to light mode";
export const THEME_TO_DARK = "Switch to dark mode";
export const META_TITLE = "MyGrokFlow: AI BDR, inbound sales, and support automation for B2B";
export const META_DESCRIPTION =
  "An AI revenue team for B2B: LinkedIn and email outreach, inbound qualification, discovery call booking, CRM hygiene, email triage, and customer support automation. Built and installed on your stack.";
