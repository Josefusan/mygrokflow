import { FadeUp } from "@/components/motion/fade-up";
import {
  CASE_AFTER,
  CASE_AFTER_HEADING,
  CASE_BEFORE,
  CASE_BEFORE_HEADING,
  CASE_CLOSE,
  CASE_DISCLAIMER,
  CASE_HEADING,
  CASE_INTRO,
  CASE_LABEL,
  CASE_METRICS,
} from "@/lib/content";
import { CtaRow } from "./cta-buttons";
import { Counter, SectionHead } from "./section-bits";

const colHeading = "font-mono text-[11px] uppercase tracking-[0.14em] text-(--mgf-muted)";

/**
 * Section 005. An illustrative, honest case study on the glass panel: one
 * boutique recruiting desk modeled end to end, before/after columns, modeled
 * target metrics, and a plain disclaimer that these are projections.
 */
export function CaseStudy() {
  return (
    <section
      id="case"
      className="relative z-[1] scroll-mt-[70px] border-t border-(--mgf-border) bg-(--mgf-glass) px-8 pt-[70px] pb-20 max-[900px]:px-[18px]"
    >
      <Counter n={5} className="mb-5" />
      <SectionHead heading={CASE_HEADING} note={CASE_INTRO} tone="panel" />

      <FadeUp
        as="p"
        delay={0.2}
        className="mb-10 inline-block rounded-full border border-(--mgf-border) px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-(--mgf-accent)"
      >
        {CASE_LABEL}
      </FadeUp>

      {/* Before / after */}
      <div className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1">
        <FadeUp
          delay={0.3}
          className="rounded-[20px] border border-(--mgf-border) bg-(--mgf-card) p-7"
        >
          <p className={colHeading}>{CASE_BEFORE_HEADING}</p>
          <ul className="mt-5 flex flex-col gap-4">
            {CASE_BEFORE.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-[13px] leading-[1.6] text-(--mgf-muted)"
              >
                <span aria-hidden="true" className="text-(--mgf-muted)">
                  ✕
                </span>
                {line}
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp
          delay={0.4}
          className="rounded-[20px] border border-(--mgf-accent) bg-(--mgf-card) p-7 shadow-[0_0_0_1px_var(--mgf-accent)]"
        >
          <p className={`${colHeading} text-(--mgf-accent)`}>
            {CASE_AFTER_HEADING}
          </p>
          <ul className="mt-5 flex flex-col gap-4">
            {CASE_AFTER.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-[13px] leading-[1.6] text-(--mgf-text)"
              >
                <span aria-hidden="true" className="text-(--mgf-accent)">
                  ✓
                </span>
                {line}
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>

      {/* Modeled monthly targets */}
      <ul className="mt-5 grid grid-cols-4 gap-5 max-[1100px]:grid-cols-2 max-[600px]:grid-cols-1">
        {CASE_METRICS.map((m, i) => (
          <li key={m.value}>
            <FadeUp
              delay={0.45 + i * 0.08}
              className="h-full rounded-[20px] border border-(--mgf-border) bg-(--mgf-card) p-7"
            >
              <p className="text-[clamp(28px,3vw,40px)] font-bold leading-none tracking-[-0.01em] text-(--mgf-text)">
                {m.value}
              </p>
              <p className="mt-3 text-[12px] leading-[1.55] text-(--mgf-muted)">
                {m.label}
              </p>
            </FadeUp>
          </li>
        ))}
      </ul>

      <FadeUp
        as="p"
        delay={0.7}
        className="mt-8 max-w-[72ch] text-[13px] leading-[1.7] text-(--mgf-muted)"
      >
        {CASE_DISCLAIMER}
      </FadeUp>

      <FadeUp
        as="p"
        delay={0.78}
        className="mt-6 font-mono text-[11px] uppercase tracking-[0.06em] text-(--mgf-accent)"
      >
        {CASE_CLOSE}
      </FadeUp>

      <FadeUp delay={0.85} className="mt-10">
        <CtaRow />
      </FadeUp>
    </section>
  );
}
