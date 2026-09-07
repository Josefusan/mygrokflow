import { FadeUp } from "@/components/motion/fade-up";
import {
  SECURITY_LEAD,
  SECURITY_NOTE,
  SYSTEMS,
  WORK_HEADING,
  WORK_NOTE,
  WORK_STACK_NOTE,
} from "@/lib/content";
import { Counter, SectionHead } from "./section-bits";
import { WorkCarousel, type WorkItem } from "./work-carousel";

// One system, three cards, in the order the work happens.
const ITEMS: readonly WorkItem[] = SYSTEMS;

/** Section 003. The three parts of the client-outbound system we install. */
export function Work() {
  return (
    <section
      id="work"
      className="relative z-[1] scroll-mt-[70px] bg-(--mgf-glass) px-8 pt-[70px] pb-20 max-[900px]:px-[18px]"
    >
      <Counter n={3} className="mb-5" />
      <SectionHead heading={WORK_HEADING} note={WORK_NOTE} tone="panel" />

      <FadeUp delay={0.35}>
        <WorkCarousel items={ITEMS} />
      </FadeUp>

      <FadeUp
        as="p"
        delay={0.5}
        className="mt-8 max-w-[72ch] text-[13px] leading-[1.7] text-(--mgf-muted)"
      >
        {WORK_STACK_NOTE}
      </FadeUp>

      <FadeUp
        as="p"
        delay={0.6}
        className="mt-4 max-w-[72ch] text-[13px] leading-[1.7] text-(--mgf-muted)"
      >
        <span className="font-medium text-(--mgf-text)">{SECURITY_LEAD}</span>{" "}
        {SECURITY_NOTE}
      </FadeUp>
    </section>
  );
}
