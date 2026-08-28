import type { Metadata } from "next";
import Link from "next/link";
import { BookingGate } from "@/components/booking-gate";
import { FooterContacts } from "@/components/footer-contacts";
import { SiteHeader } from "@/components/site-header";
import { APPLY_PATH, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Checkout cancelled",
  description: "Stripe Checkout was cancelled.",
  alternates: { canonical: "/apply/cancel" },
};

export default function ApplyCancelPage() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />

      <main id="main" className="mx-auto max-w-[42rem] px-4 py-16">
        <h1 className="text-4xl leading-[1.1] font-medium tracking-tight">
          Checkout cancelled
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          No charge. Paid lanes still go through Checkout after you qualify. You
          can still book the 15-minute diagnostic. No discounts.
        </p>
        <BookingGate backHref={APPLY_PATH} backLabel="Back to /apply" />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[42rem] flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-sm font-medium tracking-tight">
            {SITE_NAME}
          </Link>
          <FooterContacts />
        </div>
      </footer>
    </div>
  );
}
