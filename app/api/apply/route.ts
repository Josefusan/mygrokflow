import { NextResponse } from "next/server";
import { applyMailto, parseApplyPayload } from "@/lib/apply";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = parseApplyPayload(json);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
  }

  // No SMTP env and no paid mail vendor. Mailto-compose is the notify path
  // until DevOps sets a sender.
  return NextResponse.json({
    ok: true,
    sent: false,
    mailto: applyMailto(parsed.data),
  });
}
