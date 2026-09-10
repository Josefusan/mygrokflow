// Every string the landing page renders lives here or in lib/site.ts.

export const EYEBROW =
  "AI receptionist and booking systems for med spas and aesthetics clinics";

export const HEADLINE = "Stop losing consults to missed calls and no-shows.";

// Hero-only supporting line (the global PROMISE still runs in Work + footer).
export const HERO_PROMISE =
  "We build the systems that answer every call, book the appointment, and follow up on every lead, so your front desk is covered during treatments, after hours, and on your busiest days. Implementation included, not a prompt pack.";

export const SUPPORT_LINE = "Implementation included, not a prompt pack.";
export const TAGLINE = "Systems that run without you.";
export const AUDIENCE_LINE =
  "For owners, co-owners, and clinic managers at independent med spas and aesthetics clinics in Dallas to Fort Worth.";
// Statement (section 002): the gap we fill, the process in one line, the ask.
export const STATEMENT_LEAD = [
  "We fill that gap with AI systems. They answer every call and message, book the consult, send the reminders, and follow up on every lead, day or night. You keep the client relationship and the treatment.",
  "Bring your calls, calendar, and lead sources, show us your booking software, and we build it. Book a strategy call and we'll tell you exactly what we'd build. No obligation.",
] as const;

export const AUDIENCE_HEADING = "Here's who we work best with";

export const APHORISM =
  "Every missed call is a booking that went to another clinic.";

export const CTA_PRIMARY = "Book a strategy call";
export const CTA_SECONDARY = "Free playbook";

export const WORK_HEADING = "What we build";
export const SYSTEM_HEADING = "How it works";
export const PROCESS_HEADING = "Our process";
export const RATES_HEADING = "Rates";
export const FAQ_HEADING = "FAQ";
export const FAQ_NOTE =
  "AI receptionist and booking automation for med spas and aesthetics clinics, the tools we integrate with, and how we keep your data secure.";

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
    body: "You inject, you consult, and you run the business. Calls go to voicemail while you are with a client, and that voicemail is a lost booking.",
  },
  {
    title: "Clinic and office managers",
    body: "You own the schedule. Your day goes to phone tag, reminders, and lead follow-up instead of the clients in the room.",
  },
  {
    title: "Clinics of 2 to 10 staff, up to 3 locations",
    body: "Small enough that one missed call matters. Busy enough that no one can sit on the phone all day.",
  },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Bring the work.",
    body: "Your calls, calendar, lead sources, and the questions clients ask most. Share the intake forms, offers, and scripts you already have.",
  },
  {
    n: "02",
    title: "Show us the stack.",
    body: "Your booking software (Zenoti, Boulevard, Mindbody, and the rest), phones, and calendar. The tools you already pay for.",
  },
  {
    n: "03",
    title: "We build the system.",
    body: "We automate the receptionist, booking, reminder, and follow-up loop end to end and hand you a schedule that fills without you.",
  },
] as const;

// Section 004: the lead engine, stage by stage. The four stages every AI lead
// generation system moves through, each paired with its on-brand diagram
// (`media` selects a DIAGRAMS SVG). This is the model we build and run for you.
export const SYSTEM_NOTE =
  "From missed call to booked consult, the loop we build and run for you. Four stages, one engine.";
export const SYSTEM_STAGES = [
  {
    n: "Stage 1",
    title: "Answer every call and DM",
    body: "The AI receptionist picks up when your team is in a room, after hours, and during the rush. Callers get a real answer instead of voicemail, and new Instagram and Facebook DMs get caught instead of lost.",
    media: "phone",
  },
  {
    n: "Stage 2",
    title: "Book the consult",
    body: "It answers the common questions, checks your live availability, and books the consult straight into Zenoti, Boulevard, or Mindbody. No callback loop, no double entry.",
    media: "calendar",
  },
  {
    n: "Stage 3",
    title: "Cut the no-shows",
    body: "Automatic reminders and confirmations go out before every visit, and a freed-up slot gets offered to your waitlist when someone cancels, so chairs get filled instead of written off.",
    media: "ops",
  },
  {
    n: "Stage 4",
    title: "Reactivate and repeat",
    body: "Old leads, missed calls, and lapsed clients get a fast, on-brand recall with a booking link, so the list you already own starts producing again and the loop keeps filling your calendar.",
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
    body: "Answers inbound calls and messages around the clock, captures who is calling and what they want, handles the common questions about hours and treatments, and books the consult, so nothing lands in voicemail at 6pm on a Friday.",
    media: "support",
  },
  {
    title: "After-Hours Call Answering",
    body: "Answers every call the moment your front desk cannot: nights, weekends, lunch, and back-to-back appointments. Callers get a real conversation in your clinic's voice, their details are captured, and the consult is booked before they hang up.",
    media: "phone",
  },
  {
    title: "AI Appointment Booking",
    body: "Turns every call, form, and message into a confirmed appointment on your calendar. It answers the questions, offers real open slots, books the time, and sends the reminders, so your schedule fills itself without anyone playing phone tag.",
    media: "calendar",
  },
  {
    title: "Missed-Call Text-Back",
    body: "The second a call goes unanswered, the caller gets a friendly text that answers their question and offers a time to book. The consult you would have lost to voicemail turns into an appointment while your team stays with the client in the room.",
    media: "leadgen",
  },
  {
    title: "No-Show Reduction",
    body: "Automatic confirmations and reminders go out before every visit, and when someone cancels, the open slot is offered to your waitlist. Fewer empty chairs and fewer last-minute holes in the day, with no one chasing anyone by hand.",
    media: "ops",
  },
  {
    title: "Lapsed-Client Recall",
    body: "Mines your list for clients who are due for a touch-up or went quiet, picks the right moment, drafts the note, and books the return visit. Revenue hiding in the list you already own.",
    media: "crm",
  },
  {
    title: "Inbound Form & DM Qualification",
    body: "Reads every website form, Instagram and Facebook DM, and inbound message, answers the first questions, and books the ready ones or routes the rest, so no inquiry sits unread overnight.",
    media: "triage",
  },
  {
    title: "AI Follow-Up & Nurture",
    body: "Never lets a warm inquiry go cold: keeps every lead moving with timely, personalized follow-ups, answers questions about treatments and pricing, and books the consult, so the conversations you started actually turn into visits.",
    media: "crm",
  },
  {
    title: "AI Ad Campaign Manager",
    body: "Launches, tests, and optimizes your paid ads across Google, Meta, and Instagram: writes the copy and creative, shifts budget to what converts, and pauses what does not, so every dollar chases the lowest cost per booked consult.",
    media: "ads",
  },
  {
    title: "AI Customer Support Agent",
    body: "Answers, resolves, and escalates across email, chat, and web in your clinic's voice. Handles the repeat questions about pricing, hours, and scheduling instantly and hands the rest to your team with full context, so response times drop.",
    media: "support",
  },
] as const;

export const SECURITY_LEAD = "Secure by default.";
export const SECURITY_NOTE =
  "Every automation runs on scoped, least-privilege access (no shared logins, no standing keys), with your data encrypted in transit and at rest and kept inside infrastructure you control. Full audit trails, and human approval on anything destructive. The point is simple: add AI without widening your attack surface.";

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
    tagline: "Missed and after-hours calls become booked consults on your stack.",
    who: "Single-location clinic where the main leak is missed or after-hours calls. Not most clinics.",
    note: "",
    included: [
      "One done-for-you lane only: missed-call and after-hours capture, booked as a consult on your booking software (Zenoti, Boulevard, Mindbody, and the rest)",
      "Missed-call text-back installed with the lane, same lane, not a second product",
      "Implementation included for that lane",
      "Go-live and your first booked consult from this lane, dated on the strategy call",
      "In-lane fixes as things change",
      "One admin or owner point of contact",
    ],
    excluded: [
      "Recall and reactivation",
      "Inbound lead or DM follow-up beyond the missed and after-hours lane",
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
      "After-hours stops leaking, and a second source of booked consults comes back online.",
    who: "Independent med spa, 2 to 10 staff, up to 3 locations, where the owner should not live in follow-up.",
    note: "The gap vs Essential is a second booked-consult source. We map it against your average consult on the call.",
    included: [
      "Everything in Essential",
      "The higher-ROI second lane: dead-list recall and reactivation, or inbound lead and DM follow-up. We choose it on the strategy call from your numbers, you do not pick here",
      "One outcome either way: booked consults",
      "Go-live and first booked consult dates for lane one and lane two, set on the strategy call",
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
      "Recall and reactivation AND new-lead and inbound follow-up, both included",
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
  "These are modeled targets we map on the strategy call, not promises. Answer, booking, and no-show rates move with your call volume, schedule, and offer. We show you the math for your clinic before you commit to anything.";
export const CASE_CLOSE =
  "The front desk stops missing calls. The chairs stay full while your team treats clients.";

// Section 006: the lead magnet. A free PDF in exchange for an email, delivered
// on submit and captured to the list when the backend is configured.
export const PLAYBOOK_LABEL = "Free download";
export const PLAYBOOK_HEADING = "The Med Spa Front Desk Playbook";
export const PLAYBOOK_BULLETS = [
  "The systems that keep your schedule full while your team stays with clients.",
  "The missed-call, after-hours, and no-show fixes, in the order we install them.",
  "The honest math on missed calls, no-shows, and booked consults, not inflated promises.",
] as const;
export const PLAYBOOK_CTA = "Get the playbook";
export const PLAYBOOK_PLACEHOLDER = "you@yourclinic.com";
export const PLAYBOOK_DONE = "Your playbook is ready.";
export const PLAYBOOK_DONE_NOTE =
  "It opened in a new tab. If it did not, use the link below.";
export const PLAYBOOK_DONE_LINK = "Download the Med Spa Front Desk Playbook";
export const PLAYBOOK_ERROR =
  "Enter a valid email and we will hand it right over.";
export const PLAYBOOK_FINE_PRINT =
  "One email, the playbook, and the occasional note on what is working. Unsubscribe anytime.";
export const PLAYBOOK_POWERED = "Powered by Buttondown.";

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
  "Bring the specific problem. On the strategy call we will tell you plainly whether we can automate it, how we would build it, and what it takes. Add-ons are quoted there, not sold as tiers.";

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
