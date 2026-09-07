import { FadeUp } from "@/components/motion/fade-up";
import {
  APHORISM,
  AUDIENCE,
  AUDIENCE_HEADING,
  DO_NOT_WANTS,
  HONEST_NUMBER,
  MAYBE_CLOSE,
  MAYBE_LADDER,
  NOT_FOR,
  SELECTIVITY_CLOSE,
  STATEMENT_LEAD,
  TAGLINE,
  WANTS,
  notForLine,
} from "@/lib/content";
import { Counter, SplitHeading } from "./section-bits";

const body = "text-[17px] leading-[1.6] text-(--mgf-text)";
const quiet = "text-[15px] leading-[1.65] text-(--mgf-muted-on-video)";
const mono = "font-mono text-[11px] uppercase text-(--mgf-muted-on-video)";

/**
 * Section 002. Transparent over the video. Long-form statement: the 360 trap,
 * who we work best with, the "maybe you're" and "you want" ladders, the honest
 * number, the not-for line, the selectivity close, and the aphorism callback.
 */
export function Statement() {
  return (
    <section className="relative z-[1] flex min-h-svh flex-col justify-center px-8 pt-[70px] pb-16 max-[900px]:px-[18px]">
      <div className="max-w-[720px]">
        <Counter n={2} className="mb-5" />

        <h2 className="text-[clamp(26px,3vw,42px)] font-bold uppercase leading-[1.08] tracking-[-0.01em] text-(--mgf-text)">
          <SplitHeading text={TAGLINE} baseDelay={0.15} stagger={0.08} y={32} />
        </h2>

        <div className="mt-8 flex max-w-[56ch] flex-col gap-4">
          {STATEMENT_LEAD.map((line, i) => (
            <FadeUp key={line} as="p" delay={0.45 + i * 0.08} className={body}>
              {line}
            </FadeUp>
          ))}
        </div>

        <FadeUp as="p" delay={0.85} className={`mt-12 ${mono}`}>
          {AUDIENCE_HEADING}
        </FadeUp>
        <ul className="mt-4 grid grid-cols-3 gap-8 max-[900px]:grid-cols-1">
          {AUDIENCE.map((item, i) => (
            <li key={item.title}>
              <FadeUp
                delay={0.9 + i * 0.1}
                className="border-t border-(--mgf-border) pt-4"
              >
                <h3 className="text-[14px] font-semibold text-(--mgf-text)">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.65] text-(--mgf-muted-on-video)">
                  {item.body}
                </p>
              </FadeUp>
            </li>
          ))}
        </ul>

        <ul className="mt-12 flex max-w-[60ch] flex-col gap-3">
          {MAYBE_LADDER.map((line, i) => (
            <li key={line}>
              <FadeUp as="p" delay={0.1 + i * 0.06} className={quiet}>
                {line}
              </FadeUp>
            </li>
          ))}
        </ul>
        <FadeUp as="p" delay={0.45} className={`mt-5 max-w-[56ch] ${body}`}>
          {MAYBE_CLOSE}
        </FadeUp>

        <div className="mt-12 grid grid-cols-2 gap-8 max-[900px]:grid-cols-1">
          <ul className="flex flex-col gap-3 border-t border-(--mgf-border) pt-4">
            {WANTS.map((line, i) => (
              <li key={line}>
                <FadeUp as="p" delay={0.1 + i * 0.06} className={quiet}>
                  {line}
                </FadeUp>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-3 border-t border-(--mgf-border) pt-4">
            {DO_NOT_WANTS.map((line, i) => (
              <li key={line}>
                <FadeUp as="p" delay={0.2 + i * 0.06} className={quiet}>
                  {line}
                </FadeUp>
              </li>
            ))}
          </ul>
        </div>

        <FadeUp as="p" delay={0.15} className={`mt-12 max-w-[60ch] ${quiet}`}>
          {HONEST_NUMBER}
        </FadeUp>

        <FadeUp as="p" delay={0.2} className={`mt-8 ${mono}`}>
          {notForLine(NOT_FOR)}
        </FadeUp>

        <FadeUp as="p" delay={0.25} className={`mt-8 max-w-[56ch] ${body}`}>
          {SELECTIVITY_CLOSE}
        </FadeUp>

        <FadeUp as="p" delay={0.3} className={`mt-10 ${mono} text-(--mgf-accent)`}>
          {APHORISM}
        </FadeUp>
      </div>
    </section>
  );
}
