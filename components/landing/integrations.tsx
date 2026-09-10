import type { CSSProperties } from "react";
import { FadeUp } from "@/components/motion/fade-up";
import { STACK_HEADING, STACK_NOTE, STACK_TOOLS } from "@/lib/content";
import { Counter, SectionHead } from "./section-bits";

const chip =
  "inline-flex shrink-0 items-center gap-2.5 rounded-full border border-(--mgf-border) bg-(--mgf-card) py-1.5 pl-1.5 pr-4 font-mono text-[12px] tracking-[0.02em] whitespace-nowrap text-(--mgf-muted) transition-colors duration-200 hover:border-(--mgf-accent) hover:text-(--mgf-text)";

// Real logo on a small light tile so multicolor and dark brand marks stay
// legible over the dark section.
const tile =
  "grid size-7 shrink-0 place-items-center overflow-hidden rounded-full bg-white";

type Tool = { readonly name: string; readonly slug: string };

function Chip({ tool, dup = false }: { tool: Tool; dup?: boolean }) {
  return (
    <li
      className={chip}
      {...(dup ? { "data-dup": "true", "aria-hidden": "true" } : {})}
    >
      <span className={tile}>
        <img
          src={`/logos/${tool.slug}.png`}
          alt=""
          width={20}
          height={20}
          loading="lazy"
          decoding="async"
          className="size-5 object-contain"
        />
      </span>
      {tool.name}
    </li>
  );
}

/**
 * One marquee row. The tool list is rendered twice so a -50% translate loops
 * seamlessly; the second copy is aria-hidden. Under reduced motion the CSS in
 * globals.css stops the animation, wraps the row into a static cloud, and hides
 * the duplicate. Pure CSS, so this stays a server component.
 */
function Row({
  tools,
  dir,
  dur,
}: {
  tools: readonly Tool[];
  dir: "ltr" | "rtl";
  dur: string;
}) {
  return (
    <ul
      className="mgf-marquee-row"
      data-dir={dir}
      style={{ "--mgf-marquee-dur": dur } as CSSProperties}
      aria-label="Tools we integrate with"
    >
      {tools.map((t) => (
        <Chip key={t.slug} tool={t} />
      ))}
      {tools.map((t) => (
        <Chip key={`${t.slug}-dup`} tool={t} dup />
      ))}
    </ul>
  );
}

/**
 * Section 009. Two-row auto-scrolling wall of the sales, ATS, and support tools
 * we plug agents into. Rows drift in opposite directions and pause on hover.
 */
export function Integrations() {
  const half = Math.ceil(STACK_TOOLS.length / 2);
  const rowA = STACK_TOOLS.slice(0, half);
  const rowB = STACK_TOOLS.slice(half);

  return (
    <section
      id="stack"
      className="relative z-[1] scroll-mt-[70px] border-t border-(--mgf-border) bg-(--mgf-glass) px-8 pt-[70px] pb-20 max-[900px]:px-[18px]"
    >
      <Counter n={9} className="mb-5" />
      <SectionHead heading={STACK_HEADING} note={STACK_NOTE} tone="panel" />

      <FadeUp delay={0.3} className="mgf-marquee flex flex-col gap-3">
        <Row tools={rowA} dir="ltr" dur="62s" />
        <Row tools={rowB} dir="rtl" dur="74s" />
      </FadeUp>
    </section>
  );
}
