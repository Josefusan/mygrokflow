"use client";

import { useContent, useLocale } from "@/components/i18n-provider";
import Link from "next/link";
import { FooterContacts } from "@/components/footer-contacts";
import { FadeUp } from "@/components/motion/fade-up";
import { LOCALE_LABELS, LOCALES, localePath } from "@/lib/i18n";
import { SITE_NAME } from "@/lib/site";
import { focusRing, PrimaryCta } from "./cta-buttons";
import { GrokMark } from "./grok-mark";

const heading = "font-mono text-[12px] uppercase text-(--mgf-muted)";
const link = `text-[16px] text-(--mgf-text) hover:opacity-60 ${focusRing}`;

/** Uncounted footer, id="contact". Newsletter link lives here now. */
export function LandingFooter() {
  const { FOOTER_CONTACT, FOOTER_DISCLAIMER, FOOTER_LEGAL, FOOTER_PRIVACY, LANG_LABEL, NEWSLETTER, PROMISE } = useContent();
  const locale = useLocale();
  return (
    <footer
      id="contact"
      className="relative z-[2] scroll-mt-[70px] border-t border-(--mgf-border) bg-(--mgf-bg) px-8 pt-16 pb-10 max-[900px]:px-[18px]"
    >
      <div className="grid grid-cols-3 gap-12 max-[900px]:grid-cols-1 max-[900px]:gap-10">
        <FadeUp delay={0} className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 text-[16px] font-bold uppercase tracking-[0.12em] text-(--mgf-text)">
            <GrokMark className="text-(--mgf-text)" />
            {SITE_NAME}
          </span>
          <p className="max-w-[320px] text-[17px] leading-[1.65] text-(--mgf-muted)">
            {PROMISE}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className={`font-mono text-[12px] text-(--mgf-muted) hover:text-(--mgf-text) ${focusRing}`}
            >
              {FOOTER_PRIVACY}
            </Link>
            <Link
              href="/disclaimer"
              className={`font-mono text-[12px] text-(--mgf-muted) hover:text-(--mgf-text) ${focusRing}`}
            >
              {FOOTER_DISCLAIMER}
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="flex flex-col items-start gap-4">
          <h2 className={heading}>{NEWSLETTER.heading}</h2>
          <a
            href={NEWSLETTER.substack.href}
            rel="noopener noreferrer"
            className={link}
          >
            {NEWSLETTER.substack.label}
          </a>
        </FadeUp>

        <FadeUp delay={0.2} className="flex flex-col items-start gap-4">
          <h2 className={heading}>{FOOTER_CONTACT}</h2>
          <FooterContacts />
        </FadeUp>
      </div>

      <div className="mt-16 flex items-center justify-between gap-4 border-t border-(--mgf-border) pt-6 max-[600px]:flex-col max-[600px]:items-start">
        <p className="font-mono text-[12px] text-(--mgf-muted)">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
        <PrimaryCta />
      </div>

      <p className="mt-6 max-w-[720px] text-[12px] leading-[1.6] text-(--mgf-muted)">
        {FOOTER_LEGAL}{" "}
        <Link href="/disclaimer" className="underline hover:text-(--mgf-text)">
          {FOOTER_DISCLAIMER}
        </Link>
        .
      </p>

      <nav aria-label={LANG_LABEL} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
        <span className="font-mono text-[12px] uppercase text-(--mgf-muted)">{LANG_LABEL}</span>
        {LOCALES.map((l) => (
          <Link
            key={l}
            href={localePath(l)}
            hrefLang={l}
            aria-current={l === locale ? "page" : undefined}
            className={`text-[14px] hover:opacity-60 ${l === locale ? "text-(--mgf-text) underline underline-offset-4" : "text-(--mgf-muted)"} ${focusRing}`}
          >
            {LOCALE_LABELS[l]}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
