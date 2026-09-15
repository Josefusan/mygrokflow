"use client";

import { useContent } from "@/components/i18n-provider";
import { FadeUp } from "@/components/motion/fade-up";
import { SITE_NAME } from "@/lib/site";
import { focusRing, PrimaryCta } from "./cta-buttons";
import { GrokMark } from "./grok-mark";
import { LanguageSwitch } from "./language-switch";

const navLink = `font-mono text-[12px] tracking-[0.06em] text-(--mgf-text) hover:opacity-60 ${focusRing}`;

export function LandingNav() {
  const { CTA_SECONDARY, NAV_LINKS } = useContent();
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 top-0 z-10 flex items-center justify-between border-b border-(--mgf-border) bg-transparent px-8 py-5 max-[900px]:px-[18px] max-[900px]:py-4"
    >
      <FadeUp delay={0}>
        <a
          href="#top"
          className={`inline-flex items-center gap-2 text-[16px] font-bold uppercase tracking-[0.12em] text-(--mgf-text) hover:opacity-60 max-[600px]:text-[15px] ${focusRing}`}
        >
          <GrokMark className="text-(--mgf-text)" />
          <span className="max-[600px]:sr-only">{SITE_NAME}</span>
        </a>
      </FadeUp>

      <ul className="flex items-center gap-12 max-[900px]:hidden">
        {NAV_LINKS.map(({ label, href }, i) => (
          <li key={href}>
            <FadeUp delay={0.05 + i * 0.05}>
              <a href={href} className={navLink}>
                {label}
              </a>
            </FadeUp>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 max-[600px]:gap-2.5">
        <FadeUp delay={0.3} className="max-[900px]:hidden">
          <a href="#playbook" className={navLink}>
            {CTA_SECONDARY}
          </a>
        </FadeUp>
        <FadeUp delay={0.33}>
          <LanguageSwitch />
        </FadeUp>
        <FadeUp delay={0.35}>
          <PrimaryCta size="compact" />
        </FadeUp>
      </div>
    </nav>
  );
}
