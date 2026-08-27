import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FooterContacts } from "@/components/footer-contacts";
import {
  APPLY_PATH,
  DIAGNOSTIC_EMAIL,
  DIAGNOSTIC_MAILTO,
  SITE_NAME,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What information MyGrokFlow handles when you use the marketing site.",
  alternates: { canonical: "/privacy" },
};

const sectionLabel =
  "font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase";

function Cta() {
  return (
    <Button asChild className="h-9 rounded-full px-4">
      <Link href={APPLY_PATH}>Request a diagnostic</Link>
    </Button>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-[42rem] items-center justify-between px-4">
          <Link href="/" className="text-sm font-medium tracking-tight">
            {SITE_NAME}
          </Link>
          <Cta />
        </div>
      </header>

      <main id="main" className="mx-auto max-w-[42rem] px-4 py-16">
        <h1 className="text-4xl leading-[1.1] font-medium tracking-[-0.03em] text-foreground md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
          Last updated: August 27, 2026
        </p>
        <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
          MyGrokFlow (&quot;we&quot;, &quot;us&quot;) operates https://www.mygrokflow.com. This
          policy explains what information we handle when you use the site.
        </p>

        <section className="mt-12">
          <h2 className={sectionLabel}>Who we are</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            MyGrokFlow designs and ships high-ticket AI automations. Contact:{" "}
            <a
              href={DIAGNOSTIC_MAILTO}
              className="text-muted-foreground hover:text-foreground"
            >
              {DIAGNOSTIC_EMAIL}
            </a>
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>What this site does</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            The site is a marketing page. Request a diagnostic is a form on{" "}
            /apply. Email and other channels are public contact, not the buy
            path. We do not run an account system or user dashboard on this
            site.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>Information we collect</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            <span className="font-medium">Information you send us.</span> If you
            email us, we receive that email. If you submit /apply, we receive
            your answers: role, workflow, who does it today, price lane, whether
            you are the decision-maker, what you need, and the contact channel
            plus handle or email you gave. Submit sends that to{" "}
            {DIAGNOSTIC_EMAIL}.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed">
            <span className="font-medium">Technical information.</span> Our
            hosting provider (Vercel) may automatically process standard request
            data such as IP address, browser type, device information, referring
            URL, and timestamps, in order to serve and secure the site. We do
            not sell this data.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed">
            <span className="font-medium">Cookies and similar storage.</span> We
            do not run analytics, ads, or marketing pixels. Essential: Vercel may
            set cookies or logs required to host and serve this site. If you tap
            Accept or Manage on the banner, that choice is stored in your
            browser&apos;s localStorage so we don&apos;t ask every load. That is
            not a third-party cookie. We do not load non-essential scripts. There
            are none on this site today.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>How we use information</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            We use information you send us to respond to diagnostic requests,
            scope work, communicate about a possible engagement, and improve our
            offer. We do not sell your personal information.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>Sharing</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            We share information only when needed to run the business: with
            service providers that host or secure our systems (for example
            Vercel), or when required by law. We do not sell personal
            information to third parties.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>Retention</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            Email and /apply answers are kept only as long as needed for the
            conversation, a possible engagement, or legal/accounting
            obligations, then deleted or archived when no longer needed.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>Your choices</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            Email{" "}
            <a
              href={DIAGNOSTIC_MAILTO}
              className="text-muted-foreground hover:text-foreground"
            >
              {DIAGNOSTIC_EMAIL}
            </a>{" "}
            to ask what we hold about you, request a correction, or ask us to
            delete records we no longer need to keep.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>Children</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            This site is not directed at children under 13. We do not knowingly
            collect personal information from children.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>Changes</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            We may update this policy. The &quot;Last updated&quot; date at the top will
            change when we do.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>Contact</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            Questions:{" "}
            <a
              href={DIAGNOSTIC_MAILTO}
              className="text-muted-foreground hover:text-foreground"
            >
              {DIAGNOSTIC_EMAIL}
            </a>
          </p>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[42rem] flex-col gap-4 px-4 py-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-sm font-medium tracking-tight">
              {SITE_NAME}
            </Link>
            <span className="text-sm text-foreground">Privacy</span>
          </div>
          <FooterContacts />
        </div>
      </footer>
    </div>
  );
}
