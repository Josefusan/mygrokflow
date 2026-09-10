import { FadeUp } from "@/components/motion/fade-up";
import {
  CUSTOM_BULLETS,
  CUSTOM_CLOSE,
  CUSTOM_HEADING,
  CUSTOM_LABEL,
} from "@/lib/content";
import { CtaRow } from "./cta-buttons";
import { Counter, SectionHead } from "./section-bits";

/**
 * Section 008. The custom-build panel for boutique, niche situations the
 * standard packages do not cover. Anchored by a "Book a call" CTA.
 */
export function CustomSolution() {
  return (
    <section
      id="custom"
      className="relative z-[1] scroll-mt-[70px] border-t border-(--mgf-border) bg-(--mgf-glass) px-8 pt-[70px] pb-20 max-[900px]:px-[18px]"
    >
      <Counter n={8} className="mb-5" />
      <SectionHead heading={CUSTOM_HEADING} tone="panel" />

      <FadeUp
        delay={0.35}
        className="rounded-[20px] border border-(--mgf-accent) bg-(--mgf-card) p-8 shadow-[0_0_0_1px_var(--mgf-accent)] max-[600px]:p-6"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-(--mgf-accent)">
          {CUSTOM_LABEL}
        </p>

        <ul className="mt-6 grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
          {CUSTOM_BULLETS.map((line, i) => (
            <li key={line}>
              <FadeUp
                delay={0.4 + i * 0.1}
                className="flex gap-3 text-[14px] leading-[1.6] text-(--mgf-text)"
              >
                <span aria-hidden="true" className="text-(--mgf-accent)">
                  ✓
                </span>
                {line}
              </FadeUp>
            </li>
          ))}
        </ul>

        <p className="mt-7 max-w-[620px] text-[14px] leading-[1.65] text-(--mgf-muted)">
          {CUSTOM_CLOSE}
        </p>

        <div className="mt-7">
          <CtaRow />
        </div>
      </FadeUp>
    </section>
  );
}
