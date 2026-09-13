import { Redis } from "@upstash/redis";
import type { LeadPayload } from "@/lib/lead";

const LEADS_KEY = "leads:playbook";

// A stored lead is the submission plus when and (roughly) from where it came.
export type StoredLead = LeadPayload & {
  ts: string; // ISO timestamp
  ip?: string;
};

let client: Redis | null | undefined;

// Build the client lazily from the Upstash REST env vars. Returns null when the
// store is not configured so persistence degrades to a no-op instead of a crash.
function getClient(): Redis | null {
  if (client !== undefined) return client;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  client = url && token ? new Redis({ url, token }) : null;
  return client;
}

/**
 * Persist a lead to a Redis list (newest first). Every submission is a JSON
 * entry under `leads:playbook`, so the full set is exportable with one LRANGE.
 * Best-effort: an unconfigured or unreachable store never blocks the download.
 */
export async function saveLead(
  data: LeadPayload,
  ip?: string,
): Promise<{ saved: boolean; error?: string }> {
  const redis = getClient();
  if (!redis) return { saved: false, error: "Store not configured" };

  const record: StoredLead = { ...data, ts: new Date().toISOString(), ip };
  try {
    await redis.lpush(LEADS_KEY, JSON.stringify(record));
    return { saved: true };
  } catch {
    return { saved: false, error: "Store write failed" };
  }
}
