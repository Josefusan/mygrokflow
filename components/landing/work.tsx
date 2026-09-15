"use client";

import { useContent } from "@/components/i18n-provider";
import { FadeUp } from "@/components/motion/fade-up";
import { Counter, SectionHead } from "./section-bits";
import { WorkCarousel, type WorkItem } from "./work-carousel";

/** Section 003. Front-desk, booking, and follow-up systems in a sliding carousel. */
export function Work() {
  const { PROMISE, SECURITY_LEAD, SECURITY_NOTE, SYSTEMS, WORK_HEADING } = useContent();
  // SYSTEMS is already in carousel order with the flagships first.
  const items: readonly WorkItem[] = SYSTEMS;
  return (
    <section
      id="work"
      className="relative z-[1] scroll-mt-[70px] bg-(--mgf-glass) px-8 pt-[96px] pb-24 max-[900px]:px-[18px]"
    >
      <Counter n={3} className="mb-5" />
      <SectionHead heading={WORK_HEADING} note={PROMISE} tone="panel" />

      <FadeUp delay={0.35}>
        <WorkCarousel items={items} />
      </FadeUp>

      <FadeUp
        as="p"
        delay={0.5}
        className="mt-8 max-w-[72ch] text-[16px] leading-[1.7] text-(--mgf-muted)"
      >
        <span className="font-medium text-(--mgf-text)">{SECURITY_LEAD}</span>{" "}
        {SECURITY_NOTE}
      </FadeUp>
    </section>
  );
}
