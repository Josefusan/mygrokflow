import { FadeUp } from "@/components/motion/fade-up";
import { PROCESS, PROCESS_HEADING, SUPPORT_LINE } from "@/lib/content";
import { CtaRow } from "./cta-buttons";
import { Counter, SectionHead } from "./section-bits";

/** Section 004. Transparent over the video: three steps and a CTA row. */
export function Process() {
  return (
    <section
      id="process"
      className="relative z-[1] flex min-h-svh scroll-mt-[70px] flex-col justify-center px-8 pt-[70px] pb-20 max-[900px]:px-[18px]"
    >
      <Counter n={4} className="mb-5" />
      <SectionHead heading={PROCESS_HEADING} note={SUPPORT_LINE} tone="video" />

      <ol className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
        {PROCESS.map((step, i) => (
          <li key={step.n}>
            <FadeUp
              delay={0.35 + i * 0.12}
              className="border-t border-(--mgf-border) py-6"
            >
              <span className="font-mono text-[11px] text-(--mgf-accent)">
                {step.n}
              </span>
              <h3 className="mt-3 text-[18px] font-semibold text-(--mgf-text)">
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.65] text-(--mgf-muted-on-video)">
                {step.body}
              </p>
            </FadeUp>
          </li>
        ))}
      </ol>

      <FadeUp delay={0.75} className="mt-10">
        <CtaRow />
      </FadeUp>
    </section>
  );
}
