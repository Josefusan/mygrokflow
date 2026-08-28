import type { Metadata } from "next";
import Link from "next/link";
import { BookingGate } from "@/components/booking-gate";
import { FooterContacts } from "@/components/footer-contacts";
import { SiteHeader } from "@/components/site-header";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book the diagnostic",
  description: "Book the 15-minute MyGrokFlow diagnostic on Cal.com.",
  alternates: { canonical: "/apply/success" },
};

export default function ApplySuccessPage() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />

      <main id="main" className="mx-auto max-w-[42rem] px-4 py-16">
        <h1 className="text-4xl leading-[1.1] font-medium tracking-tight">
          Next: the 15-minute diagnostic
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          If Checkout finished, we have the paid-lane session. Diagnostic first
          skips Checkout. Either way, we still qualify the workflow on a
          15-minute diagnostic. No discounts.
        </p>
        <BookingGate autoRedirect backHref="/" backLabel="Back to the site" />
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
