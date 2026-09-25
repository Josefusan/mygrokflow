"use client";

import { useContent } from "@/components/i18n-provider";
import { FadeUp } from "@/components/motion/fade-up";
import { CtaRow } from "./cta-buttons";
import { GrokMark } from "./grok-mark";
import { Counter, SectionHead } from "./section-bits";

const colHeading = "font-mono text-[12px] uppercase tracking-[0.14em] text-(--mgf-muted)";

const STRUCT = "var(--mgf-struct)";
const INK = "var(--mgf-ink)";
const ACCENT = "var(--mgf-accent)";

const flowLabel =
  "font-mono text-[11px] uppercase tracking-[0.12em] text-(--mgf-muted)";

/**
 * Branded end-to-end flow for the example: LinkedIn and email touchpoints
 * run into the MyGrokFlow agent (the bot mark sits in the hub) and come out as
 * booked, logged discovery calls. Animated accent dash-flows on a dark well.
 * Phones get a vertical rail (second SVG) so the labels stay readable.
 * Decorative; the copy carries meaning.
 */
function CaseFlow() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden rounded-[20px] border border-(--mgf-border) bg-(--mgf-bg)"
      style={{
        backgroundImage: "var(--mgf-well-wide)",
      }}
    >
      <svg viewBox="0 0 680 172" className="w-full max-[600px]:hidden" fill="none">
        {/* ── inbound: ringing phone (nights included) ── */}
        <path d="M40 44 a9 9 0 1 0 8 11 a7 7 0 0 1 -8 -11 z" stroke={STRUCT} strokeWidth="1.3" />
        <rect x="58" y="60" width="42" height="60" rx="9" stroke={INK} strokeWidth="1.5" />
        <path d="M71 68 h16" stroke={STRUCT} strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="79" cy="112" r="2.6" fill={STRUCT} />
        <path d="M110 70 q10 9 10 20 q0 11 -10 20" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" className="mgf-flow" />
        <path d="M104 78 q6 6 6 12 q0 6 -6 12" stroke={ACCENT} strokeWidth="1.4" strokeLinecap="round" />
        <text x="82" y="150" textAnchor="middle" className="fill-[var(--mgf-ink-soft)] font-mono text-[11px] tracking-[0.12em]">
          EMAIL &amp; LINKEDIN
        </text>

        {/* ── inbound → hub ── */}
        <path d="M132 90 H302" stroke={ACCENT} strokeWidth="1.4" className="mgf-flow" />

        {/* ── central hub: ring (bot mark overlaid in DOM) ── */}
        <circle cx="340" cy="90" r="38" stroke={STRUCT} strokeWidth="1.4" />
        <circle cx="340" cy="90" r="38" stroke={ACCENT} strokeWidth="1.6" strokeOpacity="0.9" className="mgf-flow" />
        <circle cx="340" cy="90" r="46" stroke={STRUCT} strokeWidth="1" strokeOpacity="0.5" />

        <text x="340" y="150" textAnchor="middle" className="fill-[var(--mgf-accent)] font-mono text-[11px] tracking-[0.16em]">
          MYGROKFLOW
        </text>

        {/* ── hub → booked ── */}
        <path d="M378 90 H548" stroke={ACCENT} strokeWidth="1.4" className="mgf-flow" style={{ animationDelay: "0.5s" }} />

        {/* ── outbound: calendar with a booked slot ── */}
        <rect x="556" y="58" width="60" height="60" rx="10" stroke={STRUCT} strokeWidth="1.4" />
        <path d="M556 76 H616" stroke={STRUCT} strokeWidth="1.4" />
        <path d="M572 50 v12 M600 50 v12" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
        <rect x="566" y="84" width="40" height="10" rx="2.5" stroke={STRUCT} strokeWidth="1.2" />
        <rect x="566" y="99" width="40" height="11" rx="2.5" fill={ACCENT} fillOpacity="0.92" />
        <path d="M573 105 l3.5 3.5 l7 -7" stroke="var(--mgf-bg)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <text x="586" y="150" textAnchor="middle" className="fill-[var(--mgf-ink-soft)] font-mono text-[11px] tracking-[0.12em]">
          BOOKED &amp; LOGGED
        </text>
      </svg>

      {/* Phone rail: same three stops top to bottom. Hub at (160, 210) of 320x400. */}
      <svg viewBox="0 0 320 400" className="w-full min-[601px]:hidden" fill="none">
        <path d="M148 22 a9 9 0 1 0 8 11 a7 7 0 0 1 -8 -11 z" stroke={STRUCT} strokeWidth="1.3" />
        <rect x="139" y="38" width="42" height="60" rx="9" stroke={INK} strokeWidth="1.5" />
        <path d="M152 46 h16" stroke={STRUCT} strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="160" cy="90" r="2.6" fill={STRUCT} />
        <path d="M191 52 q10 9 10 20 q0 11 -10 20" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" className="mgf-flow" />
        <text x="160" y="124" textAnchor="middle" className="fill-[var(--mgf-ink-soft)] font-mono text-[11px] tracking-[0.12em]">
          EMAIL &amp; LINKEDIN
        </text>

        <path d="M160 134 V 170" stroke={ACCENT} strokeWidth="1.4" className="mgf-flow" />

        <circle cx="160" cy="210" r="38" stroke={STRUCT} strokeWidth="1.4" />
        <circle cx="160" cy="210" r="38" stroke={ACCENT} strokeWidth="1.6" strokeOpacity="0.9" className="mgf-flow" />
        <circle cx="160" cy="210" r="46" stroke={STRUCT} strokeWidth="1" strokeOpacity="0.5" />
        <text x="218" y="214" className="fill-[var(--mgf-accent)] font-mono text-[11px] tracking-[0.16em]">
          MYGROKFLOW
        </text>

        <path d="M160 258 V 290" stroke={ACCENT} strokeWidth="1.4" className="mgf-flow" style={{ animationDelay: "0.5s" }} />

        <rect x="130" y="306" width="60" height="60" rx="10" stroke={STRUCT} strokeWidth="1.4" />
        <path d="M130 324 H190" stroke={STRUCT} strokeWidth="1.4" />
        <path d="M146 298 v12 M174 298 v12" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
        <rect x="140" y="332" width="40" height="10" rx="2.5" stroke={STRUCT} strokeWidth="1.2" />
        <rect x="140" y="347" width="40" height="11" rx="2.5" fill={ACCENT} fillOpacity="0.92" />
        <path d="M147 353 l3.5 3.5 l7 -7" stroke="var(--mgf-bg)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <text x="160" y="390" textAnchor="middle" className="fill-[var(--mgf-ink-soft)] font-mono text-[11px] tracking-[0.12em]">
          BOOKED &amp; LOGGED
        </text>
      </svg>

      {/* MyGrokFlow mark centered over the hub: 50% / 52.3% on desktop (340/680, 90/172)
          and 50% / 52.5% on the phone rail (160/320, 210/400), so one overlay serves both. */}
      <span
        className="pointer-events-none grid place-items-center"
        style={{
          position: "absolute",
          left: "50%",
          top: "52.3%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <GrokMark size={32} className="text-(--mgf-text)" />
      </span>
    </div>
  );
}

/**
 * Section 005. An illustrative, honest case study on the glass panel: one
 * B2B sales team modeled end to end, before/after columns, modeled target metrics,
 * and a plain disclaimer that these are projections.
 */
export function CaseStudy() {
  const { CASE_AFTER, CASE_AFTER_HEADING, CASE_BEFORE, CASE_BEFORE_HEADING, CASE_CLOSE, CASE_DISCLAIMER, CASE_HEADING, CASE_LABEL, CASE_METRICS } = useContent();
  return (
    <section
      id="case"
      className="relative z-[1] scroll-mt-[70px] border-t border-(--mgf-border) bg-(--mgf-glass) px-8 pt-[96px] pb-24 max-[900px]:px-[18px]"
    >
      <Counter n={6} className="mb-5" />
      <SectionHead heading={CASE_HEADING} tone="panel" />

      <FadeUp
        as="p"
        delay={0.2}
        className="inline-block rounded-full border border-(--mgf-border) px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-(--mgf-accent)"
      >
        {CASE_LABEL}
      </FadeUp>

      {/* Branded end-to-end flow */}
      <FadeUp delay={0.25} className="mt-8 mb-10">
        <CaseFlow />
      </FadeUp>

      {/* Before / after */}
      <div className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1">
        <FadeUp
          delay={0.3}
          className="rounded-[20px] border border-(--mgf-border) bg-(--mgf-card) p-7"
        >
          <p className={colHeading}>{CASE_BEFORE_HEADING}</p>
          <ul className="mt-5 flex flex-col gap-4">
            {CASE_BEFORE.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-[16px] leading-[1.6] text-(--mgf-muted)"
              >
                <span aria-hidden="true" className="text-(--mgf-muted)">
                  ✕
                </span>
                {line}
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp
          delay={0.4}
          className="rounded-[20px] border border-(--mgf-accent) bg-(--mgf-card) p-7 shadow-[0_0_0_1px_var(--mgf-accent)]"
        >
          <p className={`${colHeading} text-(--mgf-accent)`}>
            {CASE_AFTER_HEADING}
          </p>
          <ul className="mt-5 flex flex-col gap-4">
            {CASE_AFTER.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-[16px] leading-[1.6] text-(--mgf-text)"
              >
                <span aria-hidden="true" className="text-(--mgf-accent)">
                  ✓
                </span>
                {line}
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>

      {/* Modeled monthly targets */}
      <ul className="mt-5 grid grid-cols-4 gap-5 max-[1100px]:grid-cols-2 max-[600px]:grid-cols-1">
        {CASE_METRICS.map((m, i) => (
          <li key={m.value}>
            <FadeUp
              delay={0.45 + i * 0.08}
              className="h-full rounded-[20px] border border-(--mgf-border) bg-(--mgf-card) p-7"
            >
              <p className="text-[clamp(30px,3.2vw,44px)] font-bold leading-none tracking-[-0.01em] text-(--mgf-text)">
                {m.value}
              </p>
              <p className="mt-3 text-[15px] leading-[1.55] text-(--mgf-muted)">
                {m.label}
              </p>
            </FadeUp>
          </li>
        ))}
      </ul>

      <FadeUp
        as="p"
        delay={0.7}
        className="mt-8 max-w-[72ch] text-[16px] leading-[1.7] text-(--mgf-muted)"
      >
        {CASE_DISCLAIMER}
      </FadeUp>

      <FadeUp
        as="p"
        delay={0.78}
        className="mt-6 font-mono text-[12px] uppercase tracking-[0.06em] text-(--mgf-accent)"
      >
        {CASE_CLOSE}
      </FadeUp>

      <FadeUp delay={0.85} className="mt-10">
        <CtaRow />
      </FadeUp>
    </section>
  );
}
