// The playbook lead magnet payload. We ask for the four fields we actually act
// on: who they are, and two ways to reach them (inbox plus phone or social).
export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  social: string; // Instagram @ or LinkedIn URL
};

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/**
 * Validate a submitted lead. `botField` is a honeypot: real people leave it
 * empty, bots fill every field, so anything in it is a silent reject.
 */
export function parseLeadPayload(
  input: unknown,
): { ok: true; data: LeadPayload } | { ok: false; error: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Invalid body" };
  }

  const raw = input as Record<string, unknown>;

  // Honeypot: present and filled means a bot. Reported as a generic error so we
  // never tell the bot which field gave it away.
  if (asString(raw.company)) {
    return { ok: false, error: "Rejected" };
  }

  const name = asString(raw.name);
  const email = asString(raw.email);
  const phone = asString(raw.phone);
  const social = asString(raw.social);

  if (!name) return { ok: false, error: "Name required" };
  if (!looksLikeEmail(email)) return { ok: false, error: "Valid email required" };
  if (!phone) return { ok: false, error: "Phone required" };
  if (!social) return { ok: false, error: "Instagram or LinkedIn required" };

  return { ok: true, data: { name, email, phone, social } };
}
