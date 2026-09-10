import { FadeUp } from "@/components/motion/fade-up";
import { RATES, RATES_FOOT, RATES_HEADING, RATES_NOTE } from "@/lib/content";
import { CtaRow, PrimaryCta } from "./cta-buttons";
import { Counter, SectionHead } from "./section-bits";

const label = "font-mono text-[11px] uppercase text-(--mgf-muted)";

/** Section 008. Three public retainers; Core is the highlighted default buy. */
export function Rates() {
  return (
    <section
      id="rates"
      className="relative z-[1] scroll-mt-[70px] border-t border-(--mgf-border) bg-(--mgf-glass) px-8 pt-[70px] pb-20 max-[900px]:px-[18px]"
    >
      <Counter n={8} className="mb-5" />
      <SectionHead heading={RATES_HEADING} note={RATES_NOTE} tone="panel" uppercase />

      <ul className="grid auto-rows-fr grid-cols-3 gap-5 max-[900px]:grid-cols-1">
        {RATES.map((rate, i) => {
          const featured = rate.featured;
          return (
            <li key={rate.title}>
              <FadeUp
                delay={0.4 + i * 0.12}
                className={`relative flex h-full flex-col rounded-[20px] border p-7 ${
                  featured
                    ? "border-(--mgf-accent) bg-(--mgf-card) shadow-[0_0_0_1px_var(--mgf-accent)]"
                    : "border-(--mgf-border) bg-(--mgf-card)"
                }`}
              >
                {rate.badge && (
                  <span
                    className={`absolute -top-2.5 left-7 rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] ${
                      featured
                        ? "bg-(--mgf-accent) text-(--mgf-bg)"
                        : "border border-(--mgf-border) bg-(--mgf-card) text-(--mgf-muted)"
                    }`}
                  >
                    {rate.badge}
                  </span>
                )}
                <p className={label}>{rate.eyebrow}</p>
                <h3 className="mt-2 text-[clamp(28px,2.6vw,36px)] font-bold tracking-[-0.02em] text-(--mgf-text)">
                  {rate.price}{" "}
                  <span className="font-mono text-[11px] font-normal tracking-normal text-(--mgf-muted)">
                    {rate.suffix}
                  </span>
                </h3>

                <p className="mt-3 text-[13.5px] font-medium leading-[1.5] text-(--mgf-text)">
                  {rate.tagline}
                </p>
                <p className="mt-2 text-[12px] leading-[1.55] text-(--mgf-muted)">
                  {rate.who}
                </p>

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

                {rate.excluded.length > 0 && (
                  <>
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
                  </>
                )}

                {rate.note && (
                  <p className="mt-5 border-t border-(--mgf-border) pt-4 text-[12px] leading-[1.55] text-(--mgf-muted)">
                    {rate.note}
                  </p>
                )}

                <div className="mt-auto pt-7">
                  <PrimaryCta
                    variant={featured ? "primary" : "secondary"}
                    className="w-full"
                  />
                </div>
              </FadeUp>
            </li>
          );
        })}
      </ul>

      <FadeUp
        as="p"
        delay={0.85}
        className="mt-7 max-w-[72ch] text-[13px] leading-[1.7] text-(--mgf-muted)"
      >
        {RATES_FOOT}
      </FadeUp>

      <FadeUp delay={0.9} className="mt-8">
        <CtaRow secondary="link" />
      </FadeUp>
    </section>
  );
}
