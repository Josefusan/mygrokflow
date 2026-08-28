import { DIAGNOSTIC_EMAIL, DIAGNOSTIC_SUBJECT } from "@/lib/site";

export const APPLY_ROLES = [
  "Founder",
  "Software engineer",
  "Operator",
  "Student or hobbyist",
  "$99 chatbot shopper",
] as const;

export const APPLY_RATES = [
  "$1,500/month",
  "$5K one-time",
  "$10K one-time",
  "Diagnostic first",
] as const;

export const APPLY_CHANNELS = [
  "Email",
  "Telegram",
  "Signal",
  "LinkedIn",
  "X",
] as const;

export type ApplyRole = (typeof APPLY_ROLES)[number];
export type ApplyRate = (typeof APPLY_RATES)[number];
export type ApplyChannel = (typeof APPLY_CHANNELS)[number];

export type ApplyPayload = {
  role: ApplyRole;
  workflow: string;
  who: string;
  rate: ApplyRate | "";
  decider: "Yes" | "No";
  need: string;
  channel: ApplyChannel;
  handle: string;
};

const ROLES = new Set<string>(APPLY_ROLES);
const RATES = new Set<string>(APPLY_RATES);
const CHANNELS = new Set<string>(APPLY_CHANNELS);

export function isDisqualifiedRole(role: string): boolean {
  return role === "Student or hobbyist" || role === "$99 chatbot shopper";
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function parseApplyPayload(
  input: unknown,
): { ok: true; data: ApplyPayload } | { ok: false; error: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Invalid body" };
  }

  const raw = input as Record<string, unknown>;
  const role = asString(raw.role);
  const workflow = asString(raw.workflow);
  const who = asString(raw.who);
  const rate = asString(raw.rate);
  const decider = asString(raw.decider);
  const need = asString(raw.need);
  const channel = asString(raw.channel);
  const handle = asString(raw.handle);

  if (!ROLES.has(role)) return { ok: false, error: "Invalid role" };
  if (!workflow) return { ok: false, error: "Workflow required" };
  if (!who) return { ok: false, error: "Who does it today required" };
  if (decider !== "Yes" && decider !== "No") {
    return { ok: false, error: "Decision-maker required" };
  }
  if (!need) return { ok: false, error: "What to build required" };
  if (!CHANNELS.has(channel)) return { ok: false, error: "Invalid channel" };
  if (!handle) return { ok: false, error: "Handle or email required" };

  const disqualified = isDisqualifiedRole(role);
  if (disqualified) {
    return {
      ok: true,
      data: {
        role: role as ApplyRole,
        workflow,
        who,
        rate: "",
        decider,
        need,
        channel: channel as ApplyChannel,
        handle,
      },
    };
  }

  if (!RATES.has(rate)) return { ok: false, error: "Invalid rate lane" };

  return {
    ok: true,
    data: {
      role: role as ApplyRole,
      workflow,
      who,
      rate: rate as ApplyRate,
      decider,
      need,
      channel: channel as ApplyChannel,
      handle,
    },
  };
}

export function applyMailto(data: ApplyPayload): string {
  const body = [
    `Role: ${data.role}`,
    `Workflow: ${data.workflow}`,
    `Who does it today: ${data.who}`,
    `Rate: ${data.rate || "(disqualified before Q4)"}`,
    `Decision-maker: ${data.decider}`,
    `What to build: ${data.need}`,
    `Contact channel: ${data.channel}`,
    `Handle or email: ${data.handle}`,
  ].join("\n");

  return `mailto:${DIAGNOSTIC_EMAIL}?subject=${encodeURIComponent(DIAGNOSTIC_SUBJECT)}&body=${encodeURIComponent(body)}`;
}
