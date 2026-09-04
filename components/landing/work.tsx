import { FadeUp } from "@/components/motion/fade-up";
import {
  EMAIL_LEADGEN,
  ENTERPRISE,
  EXAMPLES,
  PROJECTS,
  SECURITY_LEAD,
  SECURITY_NOTE,
  TEAMS,
  VERTICALS,
  WORK_HEADING,
  WORK_STACK_NOTE,
} from "@/lib/content";
import { PROMISE } from "@/lib/site";
import { Counter, SectionHead } from "./section-bits";
import { WorkCarousel, type WorkItem } from "./work-carousel";

const [LEADGEN, SUPPORT, OPS] = EXAMPLES;

// Full set in its natural authoring order; the carousel then leads with the
// lead-generation cards, followed by customer support & ticket escalation,
// then everything else (verticals, enterprise/finance, ops, projects, teams).
const ALL: readonly WorkItem[] = [
  LEADGEN,
  SUPPORT,
  EMAIL_LEADGEN,
  ...VERTICALS,
  ...ENTERPRISE,
  OPS,
  ...PROJECTS,
  ...TEAMS,
];

const LEADGEN_TITLES = new Set<string>([
  "AI Lead Generation",
  "AI Email Lead Generation",
  "AI BDR Team",
  "Agentic Sales Ops Assistant",
]);
const SUPPORT_TITLES = new Set<string>([
  "AI Customer Service",
  "eComm Customer Service Agent",
  "AI Receptionist (24/7 & After-Hours)",
  "AI Ticket Support",
  "Autonomous Ticket Resolution Engine",
  "Real-Time Voice Ops Agent",
]);

const ITEMS: readonly WorkItem[] = [
  ...ALL.filter((i) => LEADGEN_TITLES.has(i.title)),
  ...ALL.filter((i) => SUPPORT_TITLES.has(i.title)),
  ...ALL.filter(
    (i) => !LEADGEN_TITLES.has(i.title) && !SUPPORT_TITLES.has(i.title),
  ),
];

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
