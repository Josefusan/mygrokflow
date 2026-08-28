import type { Metadata } from "next";
import Link from "next/link";
import { ApplyForm } from "@/components/apply-form";
import { FooterContacts } from "@/components/footer-contacts";
import { SiteHeader } from "@/components/site-header";
import { APPLY_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a diagnostic",
  description:
    "Qualify for a MyGrokFlow diagnostic. We say yes or no, then which price.",
  alternates: { canonical: APPLY_PATH },
};

const sectionLabel =
  "font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase";

export default function ApplyPage() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />

      <main id="main" className="mx-auto max-w-[42rem] px-4 py-16">
        <p className={sectionLabel}>Apply</p>
        <h1 className="mt-3 text-4xl leading-[1.1] font-medium tracking-[-0.03em] text-foreground md:text-5xl">
          Request a diagnostic
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          Implementation included, not a prompt pack. Students, hobbyists, and
          $99 chatbot shoppers are not a fit.
        </p>

        <ApplyForm />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[42rem] flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-sm font-medium tracking-tight">
            MyGrokFlow
          </Link>
          <FooterContacts />
        </div>
      </footer>
    </div>
  );
}
