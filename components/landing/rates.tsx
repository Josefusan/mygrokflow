import { FadeUp } from "@/components/motion/fade-up";
import { RATES, RATES_HEADING, RATES_NOTE } from "@/lib/content";
import { CtaRow, PrimaryCta } from "./cta-buttons";
import { Counter, SectionHead } from "./section-bits";

const label = "font-mono text-[11px] uppercase text-(--mgf-muted)";

/** Section 005. Four equal-weight rate cards; every card's CTA books a call. */
export function Rates() {
  return (
    <section
      id="rates"
      className="relative z-[1] scroll-mt-[70px] border-t border-(--mgf-border) bg-(--mgf-glass) px-8 pt-[70px] pb-20 backdrop-blur-xl max-[900px]:px-[18px]"
    >
      <Counter n={5} className="mb-5" />
      <SectionHead
        heading={RATES_HEADING}
        note={RATES_NOTE}
        tone="panel"
        uppercase
      />

      <ul className="grid auto-rows-fr grid-cols-4 gap-5 max-[1100px]:grid-cols-2 max-[600px]:grid-cols-1">
        {RATES.map((rate, i) => (
          <li key={rate.title}>
            <FadeUp
              delay={0.4 + i * 0.12}
              className="flex h-full flex-col rounded-[20px] border border-(--mgf-border) bg-(--mgf-card) p-7"
            >
              <p className={label}>{rate.eyebrow}</p>
              <h3 className="mt-2 text-[clamp(28px,2.6vw,36px)] font-bold tracking-[-0.02em] text-(--mgf-text)">
                {rate.price}{" "}
                <span className="font-mono text-[11px] font-normal tracking-normal text-(--mgf-muted)">
                  {rate.suffix}
                </span>
              </h3>

              <hr className="my-5 border-0 border-t border-(--mgf-border)" />

              <p className={label}>In</p>
              <ul className="mt-2 grid gap-1.5">
                {rate.included.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-2.5 text-[13px] leading-[1.6] text-(--mgf-text)"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[8px] size-1 shrink-0 bg-(--mgf-accent)"
                    />
                    {line}
                  </li>
                ))}
              </ul>

              <p className={`mt-5 ${label}`}>Not in</p>
              <ul className="mt-2 grid gap-1.5">
                {rate.excluded.map((line) => (
                  <li
                    key={line}
                    className="text-[13px] leading-[1.6] text-(--mgf-muted)"
                  >
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <PrimaryCta variant="secondary" className="w-full" />
              </div>
            </FadeUp>
          </li>
        ))}
      </ul>

      <FadeUp delay={0.9} className="mt-10">
        <CtaRow secondary="link" />
      </FadeUp>
    </section>
  );
}
