import { FadeUp } from "@/components/motion/fade-up";
import { AGNOSTIC_LINE, AUDIENCE, NOT_FOR, TAGLINE, notForLine } from "@/lib/content";
import { Counter, SplitHeading } from "./section-bits";

/** Section 002. Transparent over the video: tagline, audience, and who it is not for. */
export function Statement() {
  return (
    <section className="relative z-[1] flex min-h-svh flex-col justify-center px-8 pt-[70px] pb-8 max-[900px]:px-[18px]">
      <div className="max-w-[720px]">
        <Counter n={2} className="mb-5" />

        <h2 className="text-[clamp(26px,3vw,42px)] font-bold uppercase leading-[1.08] tracking-[-0.01em] text-(--mgf-text)">
          <SplitHeading text={TAGLINE} baseDelay={0.15} stagger={0.08} y={32} />
        </h2>

        <FadeUp
          as="p"
          delay={0.55}
          className="mt-6 max-w-[52ch] text-[18px] leading-[1.55] text-(--mgf-text)"
        >
          {AGNOSTIC_LINE}
        </FadeUp>

        <ul className="mt-12 grid grid-cols-3 gap-8 max-[900px]:grid-cols-1">
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

        <FadeUp
          as="p"
          delay={1.25}
          className="mt-8 font-mono text-[11px] uppercase text-(--mgf-muted-on-video)"
        >
          {notForLine(NOT_FOR)}
        </FadeUp>
      </div>
    </section>
  );
}
