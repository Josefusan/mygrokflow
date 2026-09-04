import type { Metadata } from "next";
import Link from "next/link";
import { FooterContacts } from "@/components/footer-contacts";
import { SiteHeader } from "@/components/site-header";
import {
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

export default function PrivacyPage() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />

      <main id="main" className="mx-auto max-w-[42rem] px-4 py-16">
        <h1 className="text-4xl leading-[1.1] font-medium tracking-[-0.03em] text-foreground md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
          Last updated: September 4, 2026
        </p>
        <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
          MyGrokFlow, operated by Clark Tech Ventures LLC (&quot;MyGrokFlow&quot;,
          &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), operates
          https://www.mygrokflow.com (the &quot;site&quot;). This policy explains
          what information we handle when you use the site, why, the legal bases
          we rely on, and the rights you have. We are the controller of the
          personal information described here. We collect only what we need to
          respond to you and run the engagement, nothing more.
        </p>

        <section className="mt-12">
          <h2 className={sectionLabel}>Who we are</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            MyGrokFlow designs and ships AI automation systems. For any privacy
            question, or to exercise a right below, contact:{" "}
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
            The site is a marketing page. The only place you send us information
            is the application form at /apply and any message you send to our
            public contacts. Footer links (email, LinkedIn, X, and Substack) are outbound
            only. Tapping LinkedIn, X, or Substack leaves this site, and those
            platforms
            then handle your data under their own privacy policies, not this one.
            We do not run an account system, login, or user dashboard on this
            site, and we do not require you to create an account to browse it.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>Information we collect</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            <span className="font-medium">Information you send us.</span> If you
            email us, we receive that email and whatever you choose to put in it.
            If you submit the /apply form, we receive the answers you provide,
            for example your role, team size, the workflow you want automated,
            who handles it today, which rate lane fits, whether you are the
            decision-maker, what you need, and the contact channel plus handle or
            email you give us. Submitting sends those answers to{" "}
            {DIAGNOSTIC_EMAIL}. Where an internal notification (for example
            Telegram) is configured, the same answers are relayed to us there so
            we see them quickly; if that notification is not configured or fails,
            the form falls back to opening a pre-addressed email in your own mail
            app, which you send yourself. We only collect what you actively
            submit; there is no hidden tracking form field. If you choose a paid
            rate lane, we open a Stripe Checkout session and Stripe processes the
            payment (card details go to Stripe, never to us); booking a call
            happens on Cal.com under its own policy. Subscribing to our
            &quot;Without You&quot; note happens on Substack; we do not collect
            newsletter signups on this site.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed">
            <span className="font-medium">Technical information.</span> Our
            hosting provider (Vercel) automatically processes standard request
            data such as IP address, browser type, device information, referring
            URL, and timestamps, in order to serve, secure, and troubleshoot the
            site. We do not use this data to build advertising profiles, and we
            do not sell it.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed">
            <span className="font-medium">Cookies and similar storage.</span> We
            do not run analytics, advertising, or marketing pixels, and we set no
            tracking cookies. Vercel may set strictly necessary cookies or logs
            required to host and secure the site. If you make a choice on the
            cookie banner, or set a theme, that preference is saved in your
            browser&apos;s localStorage so we do not ask again; it stays on your
            device and is not a third-party cookie. We load no non-essential
            scripts. Stripe Checkout and Cal.com are hosted by those providers on
            their own domains and set their own cookies there when you use them;
            we do not set their cookies on this site.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>Legal bases</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            Where the GDPR or UK GDPR applies, we rely on: your{" "}
            <span className="font-medium">consent</span> (which you may withdraw
            at any time) for optional actions you initiate; the need to take{" "}
            <span className="font-medium">steps at your request</span> and to{" "}
            <span className="font-medium">perform a contract</span> when you apply
            or engage us; our <span className="font-medium">legitimate
            interests</span> in responding to enquiries, securing the site, and
            preventing abuse, balanced against your rights; and{" "}
            <span className="font-medium">legal obligations</span> such as tax and
            accounting. Where we rely on legitimate interests you may object, as
            described below.
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
            Vercel), with Telegram when /apply notify is configured, with Stripe
            when you complete a paid-lane Checkout, or when required by law. We
            do not sell personal information to third parties.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>Retention</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            Email and /apply answers are kept only as long as needed for the
            conversation, a possible engagement, or legal/accounting
            obligations, then deleted or archived when no longer needed. Stripe
            retains payment records under its own policy.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>Security</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            We use reputable providers (Vercel, Stripe, Cal.com) and reasonable
            technical and organizational measures to protect the limited
            information we handle, and we keep access on a need-to-know basis. No
            method of transmission or storage is perfectly secure, so we cannot
            guarantee absolute security; if a breach ever affects your personal
            information we will notify you and any regulator as required by law.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>International transfers</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            We operate from the United States, and our providers may process data
            in the US and other countries. Where we transfer personal information
            out of the UK, EEA, or another region with transfer rules, we rely on
            an appropriate safeguard such as the European Commission&apos;s
            Standard Contractual Clauses or an adequacy decision.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>Your rights and choices</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            Depending on where you live, you may have the right to access a copy
            of the personal information we hold about you, to correct it, to
            delete it, to port it, to restrict or object to certain processing,
            and to withdraw consent at any time without affecting prior
            processing. If you are in California, you also have the right to know,
            delete, correct, and to not be discriminated against for exercising
            these rights. We do not sell or share your personal information for
            cross-context behavioral advertising, and we do not use it for
            profiling that produces legal or similarly significant effects.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed">
            To exercise any of these, email{" "}
            <a
              href={DIAGNOSTIC_MAILTO}
              className="text-muted-foreground hover:text-foreground"
            >
              {DIAGNOSTIC_EMAIL}
            </a>
            . We will verify your request and respond within the time the
            applicable law requires (generally within 30–45 days), free of
            charge, and will not discriminate against you for asking. If you
            believe we have mishandled your information, you may also complain to
            your local data protection authority.
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
