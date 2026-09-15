"use client";

import { useContent } from "@/components/i18n-provider";
import { FadeUp } from "@/components/motion/fade-up";
import { CtaRow } from "./cta-buttons";
import { Counter, display, eyebrow } from "./section-bits";

function ScrollIndicator() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-8 left-1/2 flex h-9 w-[22px] -translate-x-1/2 justify-center rounded-[11px] border-[1.5px] border-(--mgf-text)/60 pt-1.5"
    >
      <span className="h-2 w-[3px] rounded-[2px] bg-(--mgf-accent) motion-safe:animate-[scrollBounce_2s_ease-in-out_infinite]" />
    </div>
  );
}

/**
 * Section 001. Content sits over the fixed video against a soft left-anchored
 * scrim (no hard panel edge), in one ordered column: meta, eyebrow, headline,
 * promise, positioning, CTA.
 */
export function Hero() {
  const { EYEBROW, HEADLINE, HERO_PROMISE } = useContent();
  return (
    <section
      id="top"
      className="relative z-[1] flex min-h-svh scroll-mt-[70px] flex-col justify-center px-8 pt-[70px] pb-24 max-[900px]:px-[18px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--mgf-hero-scrim)" }}
      />

      <div className="relative max-w-[640px]">
        <Counter n={1} className="mb-6" />
        <FadeUp as="p" delay={0.05} className={`mb-4 ${eyebrow}`}>
          {EYEBROW}
        </FadeUp>
        <FadeUp as="h1" delay={0.1} className={display}>
          {HEADLINE}
        </FadeUp>
        <FadeUp
          as="p"
          delay={0.22}
          className="mt-6 max-w-[46ch] text-[22px] leading-[1.6] text-(--mgf-text)"
        >
          {HERO_PROMISE}
        </FadeUp>
        <FadeUp delay={0.4} className="mt-9">
          <CtaRow />
        </FadeUp>
      </div>

      <ScrollIndicator />
    </section>
  );
}
