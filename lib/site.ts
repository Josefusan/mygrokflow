export const DIAGNOSTIC_EMAIL = "clarktechventures@gmail.com";
export const DIAGNOSTIC_SUBJECT = "Diagnostic request";
export const DIAGNOSTIC_MAILTO = `mailto:${DIAGNOSTIC_EMAIL}?subject=${encodeURIComponent(DIAGNOSTIC_SUBJECT)}`;
export const APPLY_PATH = "/apply";
export const SITE_URL = "https://mygrokflow.com";
export const SITE_NAME = "MyGrokFlow";
export const PROMISE =
  "We take a painful recurring workflow and turn it into a system that runs without you.";

// CMO drops the published Jotform URL here. Empty = native questions on /apply.
export const JOTFORM_EMBED_URL = "";

export const CONTACTS = [
  {
    label: "Email",
    href: DIAGNOSTIC_MAILTO,
    text: DIAGNOSTIC_EMAIL,
  },
  {
    label: "Telegram",
    href: "https://t.me/jdev_1",
    text: "@jdev_1",
  },
  {
    label: "Signal",
    href: "https://signal.me/#p/Josephpaisanu.888",
    text: "@Josephpaisanu.888",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joedeveloper1/",
    text: "LinkedIn",
  },
  {
    label: "X",
    href: "https://x.com/Josefusan111",
    text: "@Josefusan111",
  },
] as const;
