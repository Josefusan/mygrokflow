import { FadeUp } from "@/components/motion/fade-up";
import { AGNOSTIC_TAG, EYEBROW, HEADLINE } from "@/lib/content";
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
 * Section 001. Content sits over the fixed video against a soft left-anchored
 * scrim (no hard panel edge), in one ordered column: meta, eyebrow, headline,
 * promise, positioning, CTA.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative z-[1] flex min-h-svh scroll-mt-[70px] flex-col justify-center px-8 pt-[70px] pb-24 max-[900px]:px-[18px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(11,11,13,0.94)_0%,rgba(11,11,13,0.6)_44%,transparent_74%)]"
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
          className="mt-6 max-w-[46ch] text-[18px] leading-[1.6] text-(--mgf-text)"
        >
          {PROMISE}
        </FadeUp>
        <FadeUp
          as="p"
          delay={0.3}
          className="mt-4 inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] text-(--mgf-muted-on-video)"
        >
          <span aria-hidden="true" className="size-1.5 rounded-full bg-(--mgf-accent)" />
          {AGNOSTIC_TAG}
        </FadeUp>
        <FadeUp delay={0.4} className="mt-9">
          <CtaRow />
        </FadeUp>
      </div>

      <ScrollIndicator />
    </section>
  );
}
