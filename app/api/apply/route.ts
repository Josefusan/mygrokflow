import { NextResponse } from "next/server";
import { applyMailto, parseApplyPayload } from "@/lib/apply";
import { notifyTelegram } from "@/lib/telegram";

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

  const notify = await notifyTelegram(parsed.data);
  const mailto = applyMailto(parsed.data);

  if (!notify.sent) {
    return NextResponse.json(
      {
        ok: false,
        sent: false,
        error: notify.error || "Telegram not configured",
        mailto,
      },
      { status: 503 },
    );
  }

  return NextResponse.json({
    ok: true,
    sent: true,
    mailto,
  });
}
