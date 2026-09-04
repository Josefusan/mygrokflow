import type { Metadata } from "next";
import Link from "next/link";
import { FooterContacts } from "@/components/footer-contacts";
import { SiteHeader } from "@/components/site-header";
import { DIAGNOSTIC_EMAIL, DIAGNOSTIC_MAILTO, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description:
    "MyGrokFlow is an independent business with no affiliation to xAI, Grok, X, Elon Musk, or SpaceX. Trademarks, warranties, and liability terms.",
  alternates: { canonical: "/disclaimer" },
};

const sectionLabel =
  "font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />

      <main id="main" className="mx-auto max-w-[42rem] px-4 py-16">
        <h1 className="text-4xl leading-[1.1] font-medium tracking-[-0.03em] text-foreground md:text-5xl">
          Legal Disclaimer
        </h1>
        <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
          Last updated: September 4, 2026
        </p>
        <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
          MyGrokFlow, operated by Clark Tech Ventures LLC (&quot;MyGrokFlow&quot;,
          &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), provides this website
          and its content for general informational purposes. By using this
          site you agree to the terms below.
        </p>

        <section className="mt-12">
          <h2 className={sectionLabel}>
            No affiliation with xAI, Grok, X, Elon Musk, or SpaceX
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            MyGrokFlow is an independent business and a separate legal entity. We
            are not affiliated with, endorsed by, sponsored by, or in any way
            officially connected to xAI Corp., X.AI, Grok, X Corp., X (formerly
            Twitter), Tesla, Inc., Space Exploration Technologies Corp.
            (SpaceX), Elon Musk, or any of their subsidiaries, affiliates,
            officers, or representatives. No partnership, agency, joint venture,
            employment, or endorsement relationship exists or should be inferred
            from this site, our name, or our content.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed">
            &quot;Grok&quot; and &quot;xAI&quot; are trademarks of xAI Corp.
            &quot;X&quot; and &quot;Twitter&quot; are trademarks of X Corp.
            &quot;Tesla&quot; is a trademark of Tesla, Inc. &quot;SpaceX&quot; is
            a trademark of Space Exploration Technologies Corp. All other product,
            company, and service names, logos, and brands are the property of
            their respective owners. All such names are used on this site for
            identification and descriptive purposes only (nominative fair use),
            to describe the third-party AI models, platforms, and tools we may
            work with. Use of these names does not imply any affiliation with or
            endorsement by their owners.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed">
            MyGrokFlow is an agent-agnostic AI automation provider. We build with
            a range of third-party AI models and tools and select whatever is best
            for a given task; we are not a reseller of, and do not speak for, any
            model provider. Any reference to Grok or another model describes an
            engineering capability, not a commercial relationship with its maker.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>No professional advice</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            Nothing on this site constitutes legal, financial, investment, tax,
            accounting, or other professional advice, and it is not a substitute
            for advice from a licensed professional. You are responsible for your
            own decisions and should seek qualified advice for your specific
            situation.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>No guarantee of results</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            Any examples, systems, figures, or outcomes described are
            illustrative and not a promise of results. AI systems can produce
            errors or unexpected output; performance depends on your data,
            tools, and operating environment. We make no guarantee of specific
            revenue, savings, uptime, or performance.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>&quot;As is&quot; and limitation of liability</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            This site and its content are provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind, whether express or
            implied, including implied warranties of merchantability, fitness for
            a particular purpose, and non-infringement. To the fullest extent
            permitted by law, MyGrokFlow and Clark Tech Ventures LLC will not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits, data, or goodwill, arising
            from your use of or reliance on this site or its content.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>Third-party links and services</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            This site may link to third-party websites and services we do not
            control (for example X, LinkedIn, Substack, Cal.com, and Stripe). We
            are not responsible for their content, policies, or practices, and a
            link does not imply endorsement.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={sectionLabel}>Governing terms</h2>
          <p className="mt-4 text-[15px] leading-relaxed">
            This disclaimer is governed by the laws of the State in which Clark
            Tech Ventures LLC is organized, without regard to conflict-of-laws
            rules. If any provision is found unenforceable, the remaining
            provisions stay in effect. This disclaimer works alongside our{" "}
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground underline"
            >
              Privacy Policy
            </Link>
            . We may update it; the &quot;Last updated&quot; date will change when
            we do.
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
            <span className="text-sm text-foreground">Legal Disclaimer</span>
          </div>
          <FooterContacts />
        </div>
      </footer>
    </div>
  );
}
