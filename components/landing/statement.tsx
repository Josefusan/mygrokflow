import { FadeUp } from "@/components/motion/fade-up";
import {
  APHORISM,
  AUDIENCE,
  AUDIENCE_HEADING,
  NOT_FOR,
  STATEMENT_LEAD,
  TAGLINE,
  notForLine,
} from "@/lib/content";
import { Counter, SplitHeading } from "./section-bits";

const body = "text-[17px] leading-[1.6] text-(--mgf-text)";
const mono = "font-mono text-[11px] uppercase text-(--mgf-muted-on-video)";

/**
 * Section 002. Transparent over the video: the gap we fill (the 360 trap),
 * the process in one line, who we work best with, the not-for line, and the
 * aphorism callback.
 */
export function Statement() {
  return (
    <section className="relative z-[1] flex min-h-svh flex-col justify-center px-8 pt-[70px] pb-12 max-[900px]:px-[18px]">
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

        <FadeUp as="p" delay={1.25} className={`mt-8 ${mono}`}>
          {notForLine(NOT_FOR)}
        </FadeUp>

        <FadeUp as="p" delay={1.3} className={`mt-6 ${mono} text-(--mgf-accent)`}>
          {APHORISM}
        </FadeUp>
      </div>
    </section>
  );
}
