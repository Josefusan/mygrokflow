import { FadeUp } from "@/components/motion/fade-up";
import { EXAMPLES, PROJECTS, WORK_HEADING, WORK_STACK_NOTE } from "@/lib/content";
import { PROMISE } from "@/lib/site";
import { Counter, SectionHead } from "./section-bits";
import { WorkCarousel, type WorkItem } from "./work-carousel";

const ITEMS: readonly WorkItem[] = [...EXAMPLES, ...PROJECTS];

/** Section 003. Two flagship systems + example builds in a sliding carousel. */
export function Work() {
  return (
    <section
      id="work"
      className="relative z-[1] scroll-mt-[70px] bg-(--mgf-glass) px-8 pt-[70px] pb-20 max-[900px]:px-[18px]"
    >
      <Counter n={3} className="mb-5" />
      <SectionHead heading={WORK_HEADING} note={PROMISE} tone="panel" />

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
    </section>
  );
}
