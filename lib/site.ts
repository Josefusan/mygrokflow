export const DIAGNOSTIC_EMAIL = "clarktechventures@gmail.com";
export const DIAGNOSTIC_SUBJECT = "Diagnostic request";
export const DIAGNOSTIC_MAILTO = `mailto:${DIAGNOSTIC_EMAIL}?subject=${encodeURIComponent(DIAGNOSTIC_SUBJECT)}`;
export const SITE_URL = "https://mygrokflow.com";
export const SITE_NAME = "MyGrokFlow";
export const PROMISE =
  "We take a painful recurring workflow and turn it into a system that runs without you.";

export const NAV_ITEMS = [
  { href: "#top", id: "top", label: "Home" },
  { href: "#for", id: "for", label: "For" },
  { href: "#get", id: "get", label: "Get" },
  { href: "#how", id: "how", label: "How" },
  { href: "#examples", id: "examples", label: "Examples" },
] as const;
