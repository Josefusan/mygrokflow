import { FadeUp, SplitText } from "@/components/motion/fade-up";
import { SECTION_COUNT } from "@/lib/content";

export const display =
  "text-[clamp(26px,3vw,42px)] font-bold leading-[1.05] tracking-[-0.01em] text-(--mgf-text)";

export const eyebrow =
  "font-mono text-[11px] uppercase tracking-[0.16em] text-(--mgf-muted)";

/**
 * Word-by-word heading reveal. The split words are flex items with no
 * whitespace between them, so assistive tech gets the plain string and the
 * animated copy is hidden from it.
 */
export function SplitHeading({
  text,
  baseDelay,
  stagger,
  y,
}: {
  text: string;
  baseDelay: number;
  stagger: number;
  y: number;
}) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        <SplitText
          text={text}
          baseDelay={baseDelay}
          stagger={stagger}
          duration={0.7}
          y={y}
        />
      </span>
    </>
  );
}

/** "003 / 005" — accent mono counter shown at the top of each counted section. */
export function Counter({
  n,
  delay = 0,
  className = "",
}: {
  n: number;
  delay?: number;
  className?: string;
}) {
  const pad = (v: number) => String(v).padStart(3, "0");
  return (
    <FadeUp
      delay={delay}
      className={`font-mono text-[11px] tracking-[0.08em] text-(--mgf-accent) ${className}`}
    >
      {pad(n)} / {pad(SECTION_COUNT)}
    </FadeUp>
  );
}

/**
 * Head row: word-split h2 on the left (32%), supporting line on the right.
 * tone selects muted-on-panel vs muted-on-video for the supporting line.
 */
export function SectionHead({
  heading,
  note,
  tone,
  uppercase = false,
}: {
  heading: string;
  note: string;
  tone: "panel" | "video";
  uppercase?: boolean;
}) {
  const noteColor =
    tone === "panel" ? "text-(--mgf-muted)" : "text-(--mgf-muted-on-video)";
  return (
    <div className="mb-8 flex items-start gap-12 max-[900px]:flex-col max-[900px]:gap-4">
      <div className="w-[32%] max-[900px]:w-full">
        <h2 className={`max-w-[320px] ${display} ${uppercase ? "uppercase" : ""}`}>
          <SplitHeading text={heading} baseDelay={0.1} stagger={0.1} y={28} />
        </h2>
      </div>
      <FadeUp
        as="p"
        delay={0.25}
        className={`max-w-[320px] pt-2 text-[14px] leading-[1.65] max-[900px]:pt-0 ${noteColor}`}
      >
        {note}
      </FadeUp>
    </div>
  );
}
