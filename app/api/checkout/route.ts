import Stripe from "stripe";
import { NextResponse } from "next/server";
import { CHECKOUT_LANES, isCheckoutLane } from "@/lib/checkout";
import { SITE_URL } from "@/lib/site";

export async function POST(request: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "Checkout not configured" },
      { status: 503 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const rate =
    json && typeof json === "object" && "rate" in json
      ? String((json as { rate: unknown }).rate)
      : "";

  if (!isCheckoutLane(rate)) {
    return NextResponse.json(
      { ok: false, error: "Diagnostic first skips Checkout" },
      { status: 400 },
    );
  }

  const lane = CHECKOUT_LANES[rate];
  const origin = request.headers.get("origin") || SITE_URL;
  const stripe = new Stripe(secret);

  const session = await stripe.checkout.sessions.create({
    mode: lane.mode,
    line_items: [{ price: lane.priceId, quantity: 1 }],
    success_url: `${origin}/apply/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/apply/cancel`,
    metadata: { rate },
  });

  if (!session.url) {
    return NextResponse.json(
      { ok: false, error: "Checkout session missing URL" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, url: session.url });
}
