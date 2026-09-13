export const DIAGNOSTIC_EMAIL = "clarktechventures@gmail.com";
export const DIAGNOSTIC_SUBJECT = "Diagnostic request";
export const DIAGNOSTIC_MAILTO = `mailto:${DIAGNOSTIC_EMAIL}?subject=${encodeURIComponent(DIAGNOSTIC_SUBJECT)}`;
export const APPLY_PATH = "/apply";
export const CAL_URL = "https://cal.com/mygrokflow-availability/15min";
export const SITE_URL = "https://mygrokflow.com";
export const SITE_NAME = "MyGrokFlow";
export const PLAYBOOK_PDF = "/mygrokflow-operator-playbook.pdf";
// Web3Forms access key: public by design (it ships in the client form) and
// only routes submissions to the inbox it was issued for. Free plan rejects
// server-side calls, so the browser posts to Web3Forms directly.
export const WEB3FORMS_ACCESS_KEY = "3a40628f-a25e-43d0-8136-59a44d0c6486";
// Buttondown embed: posting the email here subscribes them to the newsletter
// and triggers Buttondown's new-subscriber notification. No server key needed.
export const BUTTONDOWN_EMBED_URL =
  "https://buttondown.com/api/emails/embed-subscribe/MyGrokFlow";
export const BUTTONDOWN_REFER_URL = "https://buttondown.com/refer/MyGrokFlow";
export const PROMISE =
  "We take a painful recurring workflow and turn it into a system that runs without you.";

export const CONTACTS = [
  {
    label: "Email",
    href: DIAGNOSTIC_MAILTO,
    text: DIAGNOSTIC_EMAIL,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mygrokflow/",
    text: "MyGrokFlow on LinkedIn",
  },
  {
    label: "X",
    href: "https://x.com/MyGrokFlow",
    text: "@MyGrokFlow",
  },
  {
    label: "Substack",
    href: "https://substack.com/@josefucan",
    text: "@josefucan",
  },
] as const;
