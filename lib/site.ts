export const DIAGNOSTIC_EMAIL = "clarktechventures@gmail.com";
export const DIAGNOSTIC_SUBJECT = "Diagnostic request";
export const DIAGNOSTIC_MAILTO = `mailto:${DIAGNOSTIC_EMAIL}?subject=${encodeURIComponent(DIAGNOSTIC_SUBJECT)}`;
export const APPLY_PATH = "/apply";
export const CAL_URL = "https://cal.com/ctvllc-availability";
export const SITE_URL = "https://mygrokflow.com";
export const SITE_NAME = "MyGrokFlow";
export const PROMISE =
  "We take a painful recurring workflow and turn it into a system that runs without you.";

export const CONTACTS = [
  {
    label: "Email",
    href: DIAGNOSTIC_MAILTO,
    text: DIAGNOSTIC_EMAIL,
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
