import { NextResponse } from "next/server";
import { parseLeadPayload } from "@/lib/lead";
import { saveLead } from "@/lib/leads-store";

// Persists a playbook lead. Email delivery happens in the browser (Web3Forms
// only accepts client-side calls on its plan), so this route owns the record.
export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = parseLeadPayload(json);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined;

  // Best-effort: the payload is valid, so ok is true even if the store is down
  // and the visitor still gets the PDF.
  const store = await saveLead(parsed.data, ip);

  return NextResponse.json({ ok: true, saved: store.saved });
}
