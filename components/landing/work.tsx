import { FadeUp } from "@/components/motion/fade-up";
import { EXAMPLES, WORK_HEADING, WORK_NOTE } from "@/lib/content";
import { PLACEHOLDER_CARD_VIDEOS } from "@/lib/media";
import { PROMISE } from "@/lib/site";
import { CardVideo } from "./card-video";
import { Counter, SectionHead } from "./section-bits";

/** Section 003. Panel with three example-workflow cards. */
export function Work() {
  return (
    <section
      id="work"
      className="relative z-[1] scroll-mt-[70px] bg-(--mgf-glass) px-8 pt-[70px] pb-20 backdrop-blur-xl max-[900px]:px-[18px]"
    >
      <Counter n={3} className="mb-5" />
      <SectionHead heading={WORK_HEADING} note={PROMISE} tone="panel" />

      <ul className="grid auto-rows-fr grid-cols-3 gap-5 max-[900px]:grid-cols-1">
        {EXAMPLES.map((item, i) => (
          <li key={item.title}>
            <FadeUp
              delay={0.4 + i * 0.15}
              className="flex h-full flex-col overflow-hidden rounded-[20px] border border-(--mgf-border) bg-(--mgf-card) pt-4"
            >
              <CardVideo src={PLACEHOLDER_CARD_VIDEOS[i]} />
              <div className="px-7 pt-6 pb-7">
                <h3 className="mb-3.5 text-[18px] font-semibold text-(--mgf-text)">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-(--mgf-muted)">
                  {item.body}
                </p>
              </div>
            </FadeUp>
          </li>
        ))}
      </ul>

      <FadeUp
        as="p"
        delay={0.85}
        className="mt-6 font-mono text-[11px] text-(--mgf-muted)"
      >
        {WORK_NOTE}
      </FadeUp>
    </section>
  );
}
