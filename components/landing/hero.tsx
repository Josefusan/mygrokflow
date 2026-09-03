import { FadeUp } from "@/components/motion/fade-up";
import { AUDIENCE_LINE, EYEBROW, HEADLINE, SUPPORT_LINE } from "@/lib/content";
import { PROMISE } from "@/lib/site";
import { CtaRow } from "./cta-buttons";
import { Counter, display, eyebrow } from "./section-bits";

function ScrollIndicator() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-8 left-1/2 flex h-9 w-[22px] -translate-x-1/2 justify-center rounded-[11px] border-[1.5px] border-[rgba(242,242,240,0.6)] pt-1.5"
    >
      <span className="h-2 w-[3px] rounded-[2px] bg-(--mgf-accent) motion-safe:animate-[scrollBounce_2s_ease-in-out_infinite]" />
    </div>
  );
}

/**
 * Section 001. Top ~48% is a --mgf-panel overlay holding the headline row; the
 * lower area is open to the fixed video and carries the support line.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative z-[1] flex min-h-svh scroll-mt-[70px] flex-col"
    >
      <div className="flex min-h-[48svh] flex-col bg-(--mgf-panel) pt-[70px] max-[600px]:min-h-[56svh] max-[600px]:pt-16">
        <div className="flex flex-1 items-end px-8 pb-6 max-[900px]:px-[18px]">
          <div className="flex w-full items-stretch gap-12 max-[900px]:flex-col max-[900px]:gap-6">
            <div className="flex w-[32%] flex-col justify-between gap-10 max-[900px]:w-full max-[900px]:gap-6">
              <div>
                <FadeUp as="p" delay={0.05} className={`mb-3.5 ${eyebrow}`}>
                  {EYEBROW}
                </FadeUp>
                <FadeUp as="h1" delay={0.1} className={display}>
                  {HEADLINE}
                </FadeUp>
              </div>
              <Counter n={1} delay={0.5} />
            </div>

            <div className="flex flex-1 flex-col justify-between gap-10 max-[900px]:gap-6">
              <FadeUp
                as="p"
                delay={0.25}
                className="max-w-[340px] text-[18px] leading-[1.6] text-(--mgf-muted)"
              >
                {PROMISE}
              </FadeUp>
              <FadeUp delay={0.4}>
                <CtaRow />
              </FadeUp>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center px-8 max-[900px]:items-end max-[900px]:px-[18px] max-[900px]:pb-20">
        <FadeUp delay={0.6} className="max-w-[260px]">
          <p className="text-[14px] leading-[1.65] text-(--mgf-text)">
            {SUPPORT_LINE}
          </p>
          <p className="text-[14px] leading-[1.65] text-(--mgf-muted-on-video)">
            {AUDIENCE_LINE}
          </p>
        </FadeUp>
      </div>

      <ScrollIndicator />
    </section>
  );
}
