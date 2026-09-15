// Every string the landing page renders lives here or in lib/site.ts.

export const EYEBROW =
  "The AI front desk for med spas and aesthetics clinics";

export const HEADLINE = "Every call answered. Every consult booked. Even at 6pm on a Friday.";

// Hero-only supporting line (the global PROMISE still runs in Work + footer).
export const HERO_PROMISE =
  "An AI receptionist that picks up when your team is in a treatment room, books the consult into your own calendar, and follows up on every lead. We install it. You keep the client.";

export const SUPPORT_LINE = "Implementation included, not a prompt pack.";
export const TAGLINE = "Systems that run without you.";
export const AUDIENCE_LINE =
  "For owners, co-owners, and clinic managers at independent med spas and aesthetics clinics in Dallas to Fort Worth.";
// Statement (section 002): the gap we fill, the process in one line, the ask.
export const STATEMENT_LEAD = [
  "Right now a caller hits voicemail while you are mid-treatment. Most never call back. They book with whoever picks up.",
  "We fix that. Our AI answers every call and DM, books the consult, sends the reminders, and follows up on every lead. Day or night. You keep the client and the treatment.",
  "Show us your phones, calendar, and booking software. We build the rest. On the strategy call we tell you exactly what we would install, no obligation.",
] as const;

export const AUDIENCE_HEADING = "Who this is for";

export const APHORISM =
  "Every missed call is a booking that went to another clinic.";

export const CTA_PRIMARY = "Book a strategy call";
// Short form for the compact nav pill on phones, where the select sits beside it.
export const CTA_PRIMARY_SHORT = "Book a call";
export const CTA_SECONDARY = "Get the free playbook";

export const WORK_HEADING = "What we build";
export const SYSTEM_HEADING = "How it works";
export const PROCESS_HEADING = "Our process";
export const RATES_HEADING = "Rates";
export const FAQ_HEADING = "FAQ";
export const FAQ_NOTE =
  "Straight answers on the AI front desk, the software we plug into, and how we keep your data safe.";

export const SECTION_COUNT = 11;

// Honest, keyword-rich Q&A. Doubles as on-page content and FAQPage structured
// data, so searches around AI receptionists, after-hours booking, no-shows, and
// med spa and aesthetics clinic software surface the site.
export const FAQS = [
  {
    q: "What is MyGrokFlow for a med spa?",
    a: "We build the automation that runs the front-desk work your team cannot get to: an AI receptionist for missed and after-hours calls, appointment booking into your existing software, no-show reduction, and follow-up on every lead and DM. Implementation is included. You are not buying a prompt pack, you get the system installed and working.",
  },
  {
    q: "Does this replace my front desk staff?",
    a: "No. It covers the calls, DMs, and messages your team cannot get to: after hours, weekends, and the hour they are all in treatment rooms. Your front desk stops losing consults to voicemail and gets to focus on the clients in front of them. Your people stay, the busywork goes.",
  },
  {
    q: "Will patients know it's AI?",
    a: "It is built to be helpful and clear, not to trick anyone. It answers fast, sounds natural, and books the consult. When something needs a person, it hands off to your team with the context instead of guessing.",
  },
  {
    q: "Does it work with my booking software?",
    a: "Yes. We build on the tools you already run, including Zenoti, Mindbody, Boulevard, Vagaro, Fresha, Aesthetic Record, AestheticsPro, and Weave. Booking, reminders, and follow-up write into your current system, so your front desk is not doing double entry.",
  },
  {
    q: "Do you touch our patient records or medical charts?",
    a: "No. We work booking, reminders, follow-up, and front-desk conversations. We stay out of clinical records and medical data, and we do not handle protected health information. This is about filling the calendar, not managing charts.",
  },
  {
    q: "What is the real ROI?",
    a: "We do not sell you invented numbers. Count the calls that go to voicemail and the no-shows in a normal week, then price one recovered consult against the retainer. For most injectable and laser clinics, a small number of saved bookings a month covers it. We walk your actual numbers on the call.",
  },
] as const;

export const NEWSLETTER = {
  heading: "Without You",
  substack: { label: "Subscribe on Substack", href: "https://substack.com/@josefucan" },
} as const;

export const AUDIENCE = [
  {
    title: "Owners and co-owners",
    body: "You inject, you consult, and you run the business. A call that hits voicemail while you are with a client is a consult that booked somewhere else.",
  },
  {
    title: "Clinic and office managers",
    body: "You own the schedule. Your day goes to phone tag, reminders, and chasing leads instead of the clients in the lobby.",
  },
  {
    title: "Clinics of 2 to 10 staff, up to 3 locations",
    body: "Small enough that one missed call matters. Busy enough that no one can sit on the phone all day.",
  },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Show us the leaks.",
    body: "Your call log, calendar, lead sources, and the questions clients ask most. Plus any intake forms and scripts you already use.",
  },
  {
    n: "02",
    title: "Show us the stack.",
    body: "Your booking software, phones, and calendar. Zenoti, Boulevard, Mindbody, and the rest. The tools you already pay for.",
  },
  {
    n: "03",
    title: "We build the system.",
    body: "We wire the receptionist, booking, reminder, and follow-up loop end to end. You get a schedule that fills without you.",
  },
] as const;

// Section 004: the lead engine, stage by stage. The four stages every AI lead
// generation system moves through, each paired with its on-brand diagram
// (`media` selects a DIAGRAMS SVG). This is the model we build and run for you.
export const SYSTEM_NOTE =
  "From missed call to booked consult. Four stages, one loop, built and run for you.";
export const SYSTEM_STAGES = [
  {
    n: "Stage 1",
    title: "Answer every call and DM",
    body: "Picks up when your team is in a room, after hours, and during the rush. A real answer instead of voicemail. DMs caught instead of lost.",
    media: "phone",
  },
  {
    n: "Stage 2",
    title: "Book the consult",
    body: "Answers the common questions, checks live availability, and books straight into Zenoti, Boulevard, or Mindbody. No callback, no double entry.",
    media: "calendar",
  },
  {
    n: "Stage 3",
    title: "Cut the no-shows",
    body: "Reminders and confirmations before every visit. A cancelled slot goes to your waitlist. Chairs get filled instead of written off.",
    media: "ops",
  },
  {
    n: "Stage 4",
    title: "Reactivate and repeat",
    body: "Old leads, missed calls, and lapsed clients get an on-brand recall with a booking link. The list you already own starts producing again.",
    media: "crm",
  },
] as const;

// Curated AI automations for a med spa front desk, in carousel order. The
// flagships lead: receptionist, after-hours answering, and booking, then the
// missed-call, no-show, recall, follow-up, ads, and support systems. `media`
// selects a DIAGRAMS SVG.
export const SYSTEMS = [
  {
    title: "24/7 AI Receptionist",
    body: "Picks up every call and message, answers the questions about hours and treatments, and books the consult. Nothing lands in voicemail at 6pm on a Friday.",
    media: "support",
  },
  {
    title: "After-Hours Call Answering",
    body: "Nights, weekends, lunch, and back-to-back appointments. Callers get a real conversation in your clinic's voice and a booked consult before they hang up.",
    media: "phone",
  },
  {
    title: "AI Appointment Booking",
    body: "Every call, form, and DM becomes a confirmed appointment in Zenoti, Boulevard, or Mindbody. Real open slots, reminders sent. No phone tag.",
    media: "calendar",
  },
  {
    title: "Missed-Call Text-Back",
    body: "A call goes unanswered. Seconds later the caller has a text that answers their question and offers a time. Voicemail becomes an appointment while your team stays in the room.",
    media: "leadgen",
  },
  {
    title: "No-Show Reduction",
    body: "Confirmations and reminders before every visit. When someone cancels, the slot goes to your waitlist. Fewer empty chairs, and nobody chasing anyone by hand.",
    media: "ops",
  },
  {
    title: "Lapsed-Client Recall",
    body: "Finds the clients due for a touch-up or gone quiet, sends the right note at the right time, and books the return visit. Revenue hiding in the list you already own.",
    media: "crm",
  },
  {
    title: "Inbound Form & DM Qualification",
    body: "Reads every website form and Instagram or Facebook DM, answers the first questions, and books the ready ones. No inquiry sits unread overnight.",
    media: "triage",
  },
  {
    title: "AI Follow-Up & Nurture",
    body: "Every warm inquiry gets a timely, personal follow-up until it books or says no. Questions about treatments and pricing answered on the spot.",
    media: "crm",
  },
  {
    title: "AI Ad Campaign Manager",
    body: "Runs your Google, Meta, and Instagram ads. Moves budget to what books consults and pauses what does not.",
    media: "ads",
  },
  {
    title: "AI Customer Support Agent",
    body: "Answers email, chat, and web in your clinic's voice. Pricing, hours, and scheduling handled instantly. Anything else goes to your team with full context.",
    media: "support",
  },
] as const;

export const SECURITY_LEAD = "Secure by default.";
export const SECURITY_NOTE =
  "Scoped, least-privilege access. Your data encrypted in transit and at rest, inside infrastructure you control. Full audit trail. A human approves anything destructive.";

// Three public monthly retainers. eyebrow/price/suffix split the header; Core
// carries the badge as the default buy. Add-ons are quoted on the call, never
// listed as tiers. RATES_NOTE is the intro above the cards; RATES_FOOT is the
// line under them.
export const RATES_NOTE = "Three retainers. Most independent spas land on Core.";
export const RATES_FOOT =
  "Add-ons quoted on the strategy call. No DIY products on this page. We commit to implementation and go-live dates, never to patient volume or revenue.";
export const RATES = [
  {
    title: "Essential",
    eyebrow: "Essential",
    price: "$2,000",
    suffix: "/mo",
    badge: "",
    featured: false,
    tagline: "Missed and after-hours calls become booked consults.",
    who: "Single-location clinic where the main leak is missed or after-hours calls. Not most clinics.",
    note: "",
    included: [
      "One done-for-you lane: missed-call and after-hours capture, booked as a consult on your booking software",
      "Missed-call text-back, installed with the lane",
      "Implementation included for that lane",
      "Go-live and first booked consult dated on the strategy call",
      "In-lane fixes as things change",
      "One admin or owner point of contact",
    ],
    excluded: [
      "Recall and reactivation",
      "Inbound lead or DM follow-up",
      "Multi-channel lead gen or ads management",
      "Multiple locations",
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
      "Everything in Essential, plus a second source of booked consults.",
    who: "Independent med spa, 2 to 10 staff, up to 3 locations, where the owner should not live in follow-up.",
    note: "The gap vs Essential is a second booked-consult source. We map it against your average consult on the call.",
    included: [
      "Everything in Essential",
      "The higher-ROI second lane: recall and reactivation, or inbound lead and DM follow-up. We choose it from your numbers on the strategy call",
      "One outcome either way: booked consults",
      "Go-live and first booked consult dates for both lanes, set on the strategy call",
      "Monthly in-scope fixes",
      "Exception queue for edge cases and misfires",
      "Simple status: consults booked and no-shows touched",
    ],
    excluded: [
      "Both extra lanes at once, that is Growth",
      "Open-ended consulting",
      "Unlimited campaigns",
      "Reputation or Google-ads agency retainers",
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
    tagline: "Missed calls, recall, and inbound follow-up, multi-location ready.",
    who: "2 to 3 locations, or one high-volume clinic where Core is too small.",
    note: "",
    included: [
      "Everything in Core",
      "Recall and reactivation plus new-lead and inbound follow-up, both included",
      "Multi-location routing included for up to 3 locations",
      "Higher volume cap",
      "Faster go-live and priority async",
      "Weekly cadence until your first clean week of booked consults",
      "Go-live and first booked consult dates prioritized on the strategy call",
    ],
    excluded: [
      "Staff augmentation",
      "Unlimited new products",
      "Ads spend management",
      "Building you a SaaS",
    ],
  },
] as const;

// Section 005: an illustrative, honest case study. We do not have a client to
// name yet, so this is a working model of one med spa, with modeled target math
// (not guarantees). Framed plainly so it reads as an example, never as a
// fabricated client result.
export const CASE_LABEL = "Illustrative example, not a client";
export const CASE_HEADING = "One med spa, modeled end to end";

// Before / after the build.
export const CASE_BEFORE_HEADING = "Before";
export const CASE_BEFORE = [
  "The front desk misses a third of inbound calls while in treatment, and most callers never leave a voicemail.",
  "Nights, weekends, and lunch go to voicemail, so new-client consults book with whoever answers first.",
  "No-shows and last-minute cancels leave chairs empty, and lapsed clients are never followed up.",
] as const;

export const CASE_AFTER_HEADING = "After we install the system";
export const CASE_AFTER = [
  "An AI receptionist answers every call and message, day or night, in the clinic's own voice.",
  "New and returning clients are booked straight into the schedule, with the reason for visit captured up front.",
  "Automatic reminders and reactivation win back no-shows and lapsed clients before a chair sits empty.",
] as const;

// Modeled monthly targets from the strategy call, not guarantees.
export const CASE_METRICS = [
  { value: "100%", label: "of inbound calls and messages answered, including nights and weekends" },
  { value: "30 to 40%", label: "fewer no-shows once automated reminders and confirmations run" },
  { value: "15 to 25", label: "new-client consults booked a month, beyond walk-ins and referrals" },
  { value: "40+", label: "lapsed clients reactivated a month from the list you already own" },
] as const;

export const CASE_DISCLAIMER =
  "Modeled targets we map on the strategy call, not promises. Your numbers move with call volume, schedule, and offer, and we show you the math before you commit to anything.";
export const CASE_CLOSE =
  "The front desk stops missing calls. The chairs stay full while your team treats clients.";

// Section 006: the lead magnet. A free PDF in exchange for an email, delivered
// on submit and captured to the list when the backend is configured.
export const PLAYBOOK_LABEL = "Free download";
export const PLAYBOOK_HEADING = "The Clinic Front Desk Playbook";
export const PLAYBOOK_NOTE =
  "Written for med spas, hair transplant clinics, and beauty clinics.";
export const PLAYBOOK_BULLETS = [
  "The systems that keep your schedule full while your team stays with clients.",
  "The missed-call, after-hours, and no-show fixes, in the order we install them.",
  "The honest math on missed calls, no-shows, and booked consults, not inflated promises.",
] as const;
export const PLAYBOOK_CTA = "Get the playbook";
export const PLAYBOOK_NAME_PLACEHOLDER = "Your name";
export const PLAYBOOK_PLACEHOLDER = "you@yourclinic.com";
export const PLAYBOOK_PHONE_PLACEHOLDER = "Mobile number";
export const PLAYBOOK_SOCIAL_PLACEHOLDER = "Instagram @ or LinkedIn URL";
export const PLAYBOOK_DONE = "Your playbook is ready.";
export const PLAYBOOK_DONE_NOTE =
  "It opened in a new tab. If it did not, use the link below.";
export const PLAYBOOK_DONE_LINK = "Download the Clinic Front Desk Playbook";
export const PLAYBOOK_ERROR =
  "Add your name, email, phone, and Instagram or LinkedIn, and we will hand it right over.";
export const PLAYBOOK_FINE_PRINT =
  "We send the playbook and the occasional note on what is working. No spam, and we never share your details.";

// Section 008: the custom-build panel. Sits below the rate cards for the
// situations the standard packages do not cover. Anchored by "Book a call".
export const CUSTOM_LABEL = "Add-ons and custom builds";
export const CUSTOM_HEADING = "When you need more than the core";
export const CUSTOM_BULLETS = [
  "Extra locations wired into one schedule, one inbox, and one set of reports.",
  "Customer support automation and custom recall or reactivation campaigns for your offers.",
  "Deeper builds for the workflows and tools the core loop does not already cover.",
] as const;
export const CUSTOM_CLOSE =
  "Bring the specific problem. On the strategy call we tell you plainly whether we can automate it, how we would build it, and what it takes. Add-ons are quoted there, not sold as tiers.";

// Section 009: the integrations marquee. A scrolling wall of the sales, ATS,
// and support tools we plug agents into, so buyers see their own stack and
// know nothing gets ripped out or re-platformed. Names only, no logos: the
// list stays honest and easy to extend from here.
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
  { name: "Follow Up Boss", slug: "followupboss" },
  { name: "Keap", slug: "keap" },
  { name: "Bullhorn", slug: "bullhorn" },
  // Conversation intelligence and dialers
  { name: "Gong", slug: "gong" },
  { name: "Chorus", slug: "chorus" },
  { name: "Clari", slug: "clari" },
  { name: "Orum", slug: "orum" },
  { name: "Nooks", slug: "nooks" },
  { name: "Aircall", slug: "aircall" },
  // Meetings and video
  { name: "Calendly", slug: "calendly" },
  { name: "Cal.com", slug: "calcom" },
  { name: "Chili Piper", slug: "chilipiper" },
  { name: "Vidyard", slug: "vidyard" },
  { name: "Loom", slug: "loom" },
  // Real estate agent and broker software
  { name: "BoldTrail", slug: "kvcore" },
  { name: "Lofty", slug: "lofty" },
  { name: "BoomTown", slug: "boomtown" },
  { name: "CINC", slug: "cinc" },
  { name: "Real Geeks", slug: "realgeeks" },
  { name: "Sierra Interactive", slug: "sierra" },
  { name: "Top Producer", slug: "topproducer" },
  { name: "Dotloop", slug: "dotloop" },
  { name: "SkySlope", slug: "skyslope" },
  { name: "Zillow", slug: "zillow" },
  // Channels and comms
  { name: "Gmail", slug: "gmail" },
  { name: "Outlook", slug: "outlook" },
  { name: "Slack", slug: "slack" },
  { name: "Microsoft Teams", slug: "teams" },
  { name: "LinkedIn", slug: "linkedin" },
  { name: "X (Twitter)", slug: "x" },
  { name: "Instagram", slug: "instagram" },
  { name: "TikTok", slug: "tiktok" },
  { name: "Facebook", slug: "facebook" },
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
  // Finance, accounting, and ERP
  { name: "QuickBooks", slug: "quickbooks" },
  { name: "Xero", slug: "xero" },
  { name: "NetSuite", slug: "netsuite" },
  { name: "Sage", slug: "sage" },
  { name: "Stripe", slug: "stripe" },
  { name: "Bill.com", slug: "billcom" },
  { name: "FreshBooks", slug: "freshbooks" },
  // Med spa, spa, and wellness
  { name: "Zenoti", slug: "zenoti" },
  { name: "Mindbody", slug: "mindbody" },
  { name: "Boulevard", slug: "boulevard" },
  { name: "Vagaro", slug: "vagaro" },
  { name: "Fresha", slug: "fresha" },
  { name: "AestheticsPro", slug: "aestheticspro" },
  { name: "Aesthetic Record", slug: "aestheticrecord" },
  { name: "Pabau", slug: "pabau" },
  // Dental practice management
  { name: "Dentrix", slug: "dentrix" },
  { name: "Open Dental", slug: "opendental" },
  { name: "Curve Dental", slug: "curvedental" },
  { name: "Denticon", slug: "denticon" },
  { name: "Weave", slug: "weave" },
  { name: "NexHealth", slug: "nexhealth" },
] as const;

// Shared promise line (Work head + footer) lives in site.ts; re-exported here so
// it travels with the locale dictionary.
export { PROMISE } from "./site";

// UI chrome strings that used to be literals in components. Kept here so every
// visible word on the landing page is translatable.
export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "How", href: "#system" },
  { label: "Process", href: "#process" },
  { label: "Example", href: "#case" },
  { label: "Playbook", href: "#playbook" },
  { label: "Rates", href: "#rates" },
  { label: "Custom", href: "#custom" },
  { label: "Stack", href: "#stack" },
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
export const META_TITLE = "MyGrokFlow: AI front desk for med spas and aesthetics clinics";
export const META_DESCRIPTION =
  "An AI receptionist that answers every call, books the consult into your own software, cuts no-shows, and follows up on every lead. Built and installed for independent med spas and aesthetics clinics.";
