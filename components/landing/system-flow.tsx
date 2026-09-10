import { FadeUp } from "@/components/motion/fade-up";
import { SYSTEM_HEADING, SYSTEM_NOTE, SYSTEM_STAGES } from "@/lib/content";
import { DIAGRAMS } from "./diagrams";
import { Counter, SectionHead } from "./section-bits";

function StageMedia({ media }: { media: string }) {
  const Diagram = DIAGRAMS[media];
  return Diagram ? <Diagram /> : null;
}

/**
 * Section 004. The lead engine, stage by stage: the four stages every AI lead
 * generation system moves through, each on its own card with the matching
 * on-brand diagram. A connector arrow ties the stages into one flow. Static,
 * so this stays a server component.
 */
export function SystemFlow() {
  return (
    <section
      id="system"
      className="relative z-[1] scroll-mt-[70px] border-t border-(--mgf-border) bg-(--mgf-glass) px-8 pt-[70px] pb-20 max-[900px]:px-[18px]"
    >
      <Counter n={4} className="mb-5" />
      <SectionHead heading={SYSTEM_HEADING} note={SYSTEM_NOTE} tone="panel" />

      <ol className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1">
        {SYSTEM_STAGES.map((stage, i) => (
          <li key={stage.n}>
            <FadeUp
              delay={0.3 + i * 0.1}
              className="flex h-full flex-col overflow-hidden rounded-[20px] border border-(--mgf-border) bg-(--mgf-card) pt-4"
            >
              <StageMedia media={stage.media} />
              <div className="flex flex-1 flex-col px-7 pt-6 pb-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-(--mgf-accent)">
                  {stage.n}
                </span>
                <h3 className="mt-2.5 text-[18px] font-semibold text-(--mgf-text)">
                  {stage.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.6] text-(--mgf-muted)">
                  {stage.body}
                </p>
              </div>
            </FadeUp>
          </li>
        ))}
      </ol>
    </section>
  );
}
