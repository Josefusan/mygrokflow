/**
 * On-brand inline-SVG diagrams for the Work cards. Every diagram shares the
 * same dark 4:3 well, thin structure lines, animated accent dash-flow, a
 * center node, and three mono stage labels — so the whole set reads as one
 * system. Decorative (aria-hidden); the card <h3>/<p> carry the meaning.
 *
 * Add a new diagram: draw it with the shared primitives below, then register
 * it in DIAGRAMS. Point a Work card at it with the matching `media` key.
 */

const CARD_RADIAL =
  "radial-gradient(70% 60% at 30% 20%, #1C1C22, transparent 70%)";
const STRUCT = "rgba(242,242,240,0.18)";
const INK = "rgba(242,242,240,0.85)";
const ACCENT = "var(--mgf-accent)";

const labelStyle = {
  fontFamily: "var(--font-mono), monospace",
  fontSize: "8.5px",
  letterSpacing: "0.14em",
  fill: "rgba(242,242,240,0.5)",
} as const;

const CX = 168;
const CY = 120;

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[4/3] w-full overflow-hidden bg-(--mgf-bg)"
      style={{ backgroundImage: CARD_RADIAL }}
    >
      <svg viewBox="0 0 320 240" className="absolute inset-0 h-full w-full" fill="none">
        {children}
      </svg>
    </div>
  );
}

/** Animated accent feed line. */
function Flow({ d, delay = 0, opacity = 0.7 }: { d: string; delay?: number; opacity?: number }) {
  return (
    <path
      d={d}
      stroke={ACCENT}
      strokeWidth="1.2"
      strokeOpacity={opacity}
      className="mgf-flow"
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

function Dot({ cx, cy, r = 4.5, delay = 0 }: { cx: number; cy: number; r?: number; delay?: number }) {
  return (
    <circle cx={cx} cy={cy} r={r} fill={ACCENT} className="mgf-pulse" style={{ animationDelay: `${delay}s` }} />
  );
}

/** Center node: static structure ring + animated accent dash ring. */
function Ring({ r = 30 }: { r?: number }) {
  return (
    <>
      <circle cx={CX} cy={CY} r={r} stroke={STRUCT} strokeWidth="1.2" />
      <circle cx={CX} cy={CY} r={r} stroke={ACCENT} strokeWidth="1.4" strokeOpacity="0.9" strokeDasharray="3 6" className="mgf-flow" />
    </>
  );
}

/** Bot-head motif for AI-agent centers. */
function BotHead({ cx = CX, cy = CY }: { cx?: number; cy?: number }) {
  return (
    <>
      <circle cx={cx} cy={cy} r="28" stroke={ACCENT} strokeWidth="1.4" className="mgf-pulse" />
      <rect x={cx - 13} y={cy - 9} width="26" height="20" rx="6" stroke={INK} strokeWidth="1.3" />
      <circle cx={cx - 5} cy={cy + 1} r="2.2" fill={ACCENT} />
      <circle cx={cx + 5} cy={cy + 1} r="2.2" fill={ACCENT} />
      <path d={`M${cx} ${cy - 15} v-4`} stroke={INK} strokeWidth="1.3" strokeLinecap="round" />
    </>
  );
}

function Doc({ x, y, w = 30, h = 38 }: { x: number; y: number; w?: number; h?: number }) {
  return (
    <>
      <rect x={x} y={y} width={w} height={h} rx="4" stroke={STRUCT} strokeWidth="1.2" />
      <path d={`M${x + 7} ${y + 11} H${x + w - 7} M${x + 7} ${y + 19} H${x + w - 7} M${x + 7} ${y + 27} H${x + w - 12}`} stroke={STRUCT} strokeWidth="1.1" />
    </>
  );
}

function Labels({ left, mid, right }: { left: string; mid: string; right: string }) {
  return (
    <>
      <text x="46" y="214" textAnchor="middle" style={labelStyle}>{left}</text>
      <text x={CX} y="214" textAnchor="middle" style={labelStyle}>{mid}</text>
      <text x="276" y="214" textAnchor="middle" style={labelStyle}>{right}</text>
    </>
  );
}

/* ── 1. Lead generation ─────────────────────────────────────────────── */
export function LeadGenDiagram() {
  const sources = [56, 96, 136, 176];
  return (
    <Frame>
      {sources.map((y, i) => (
        <g key={y}>
          <Flow d={`M52 ${y} C 100 ${y}, 110 ${CY}, ${CX - 30} ${CY}`} delay={i * 0.25} />
          <Dot cx={46} cy={y} delay={i * 0.35} />
        </g>
      ))}
      <Ring />
      <text x={CX} y={CY + 3.5} textAnchor="middle" style={labelStyle} fill={INK}>AI</text>
      <Flow d={`M${CX + 30} ${CY} H 258`} />
      <rect x="258" y="102" width="34" height="36" rx="5" stroke={STRUCT} strokeWidth="1.2" />
      <path d="M258 112 H292" stroke={STRUCT} strokeWidth="1.2" />
      <path d="M266 122 l5 5 l9 -10" stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <Labels left="LEADS" mid="QUALIFY" right="BOOKED" />
    </Frame>
  );
}

/* ── 2. Customer service ────────────────────────────────────────────── */
export function SupportDiagram() {
  const bubbles = [78, 120, 162];
  return (
    <Frame>
      {bubbles.map((y, i) => (
        <g key={y}>
          <rect x="26" y={y - 13} width="46" height="26" rx="8" stroke={STRUCT} strokeWidth="1.2" />
          <Flow d={`M72 ${y} C 110 ${y}, 116 ${CY}, ${CX - 26} ${CY}`} delay={i * 0.3} />
          {[38, 49, 60].map((dx) => (
            <Dot key={dx} cx={dx} cy={y} r={2} delay={(i + dx) * 0.12} />
          ))}
        </g>
      ))}
      <BotHead />
      <Flow d={`M${CX + 28} ${CY - 8} C 232 ${CY - 20}, 244 84, 262 78`} />
      <Flow d={`M${CX + 28} ${CY + 8} C 232 ${CY + 20}, 244 156, 262 162`} delay={0.5} opacity={0.5} />
      <circle cx="276" cy="78" r="13" stroke={STRUCT} strokeWidth="1.2" />
      <path d="M270 78 l4 4 l8 -9" stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="276" cy="162" r="13" stroke={STRUCT} strokeWidth="1.2" />
      <path d="M276 168 v-12 M271 161 l5 -5 l5 5" stroke={INK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <Labels left="INBOUND" mid="AI AGENT" right="ROUTED" />
    </Frame>
  );
}

/* ── 3. Ops & workflow automation ───────────────────────────────────── */
export function OpsDiagram() {
  const tools = [78, 120, 162];
  return (
    <Frame>
      {tools.map((y, i) => (
        <g key={y}>
          <rect x="32" y={y - 12} width="30" height="24" rx="6" stroke={STRUCT} strokeWidth="1.2" />
          <Dot cx={47} cy={y} r={2.4} delay={i * 0.3} />
          <Flow d={`M62 ${y} C 104 ${y}, 112 ${CY}, ${CX - 28} ${CY}`} delay={i * 0.28} />
        </g>
      ))}
      {/* engine: hexagon */}
      <path
        d={`M${CX} ${CY - 30} l26 15 v30 l-26 15 l-26 -15 v-30 z`}
        stroke={ACCENT}
        strokeWidth="1.4"
        strokeOpacity="0.9"
        className="mgf-pulse"
      />
      {[0, 60, 120, 180, 240, 300].map((a) => {
        const rad = (a * Math.PI) / 180;
        return (
          <path
            key={a}
            d={`M${CX + Math.cos(rad) * 9} ${CY + Math.sin(rad) * 9} L${CX + Math.cos(rad) * 15} ${CY + Math.sin(rad) * 15}`}
            stroke={INK}
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        );
      })}
      <Flow d={`M${CX + 30} ${CY} H 258`} />
      <Doc x={260} y={101} />
      <Labels left="TOOLS" mid="AUTOMATE" right="SHIP" />
    </Frame>
  );
}

/* ── 4. Reporting / analytics ───────────────────────────────────────── */
export function ReportingDiagram() {
  const data = [[40, 70], [66, 92], [38, 116], [70, 140], [46, 164]];
  return (
    <Frame>
      {data.map(([x, y], i) => (
        <g key={i}>
          <Dot cx={x} cy={y} r={2.6} delay={i * 0.2} />
          <Flow d={`M${x + 6} ${y} C 104 ${y}, 112 ${CY}, ${CX - 28} ${CY}`} delay={i * 0.22} opacity={0.55} />
        </g>
      ))}
      <Ring r={26} />
      <path d={`M${CX - 9} ${CY + 6} v-8 M${CX} ${CY + 6} v-14 M${CX + 9} ${CY + 6} v-5`} stroke={ACCENT} strokeWidth="1.8" strokeLinecap="round" />
      <Flow d={`M${CX + 26} ${CY} H 256`} />
      {/* bar chart */}
      <path d="M258 138 H298" stroke={STRUCT} strokeWidth="1.2" />
      <path d="M264 138 v-14 M274 138 v-24 M284 138 v-9 M294 138 v-19" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
      <Labels left="DATA" mid="COMPILE" right="REPORT" />
    </Frame>
  );
}

/* ── 5. Recruiting / screening ──────────────────────────────────────── */
export function ScreeningDiagram() {
  const cards = [96, 112, 128];
  return (
    <Frame>
      {cards.map((y, i) => (
        <rect key={y} x={30 + i * 5} y={y - 30 + i * 8} width="44" height="30" rx="6" stroke={STRUCT} strokeWidth="1.2" />
      ))}
      {[104, 120, 136].map((y, i) => (
        <Flow key={y} d={`M80 ${y} C 112 ${y}, 116 ${CY}, ${CX - 26} ${CY}`} delay={i * 0.25} opacity={0.6} />
      ))}
      {/* funnel */}
      <path d={`M${CX - 26} ${CY - 22} H${CX + 26} L${CX + 9} ${CY + 6} V${CY + 22} H${CX - 9} V${CY + 6} Z`} stroke={ACCENT} strokeWidth="1.4" className="mgf-pulse" />
      <Flow d={`M${CX + 20} ${CY} H 258`} />
      {/* shortlist star */}
      <circle cx="276" cy="120" r="15" stroke={STRUCT} strokeWidth="1.2" />
      <path d="M276 111 l2.4 5 l5.4 .6 l-4 3.7 l1.2 5.3 l-5 -2.8 l-5 2.8 l1.2 -5.3 l-4 -3.7 l5.4 -.6 z" fill={ACCENT} />
      <Labels left="INBOUND" mid="SCREEN" right="SHORTLIST" />
    </Frame>
  );
}

/* ── 6. Content / outbound ──────────────────────────────────────────── */
export function ContentDiagram() {
  const channels = [78, 120, 162];
  return (
    <Frame>
      <Doc x={30} y={101} />
      <Flow d={`M62 ${CY} C 104 ${CY}, 112 ${CY}, ${CX - 26} ${CY}`} />
      {/* spark node */}
      <Ring r={26} />
      <path d={`M${CX} ${CY - 11} V${CY + 11} M${CX - 11} ${CY} H${CX + 11} M${CX - 8} ${CY - 8} l16 16 M${CX + 8} ${CY - 8} l-16 16`} stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" />
      {channels.map((y, i) => (
        <g key={y}>
          <Flow d={`M${CX + 26} ${CY} C 228 ${CY}, 236 ${y}, 258 ${y}`} delay={i * 0.2} opacity={0.6} />
          <circle cx="272" cy={y} r="9" stroke={STRUCT} strokeWidth="1.2" />
          <Dot cx={272} cy={y} r={2.4} delay={i * 0.3} />
        </g>
      ))}
      <Labels left="BRIEF" mid="GENERATE" right="PUBLISH" />
    </Frame>
  );
}

/* ── 7. Knowledge / RAG assistant ───────────────────────────────────── */
export function KnowledgeDiagram() {
  return (
    <Frame>
      <Doc x={28} y={86} w={30} h={30} />
      <Doc x={36} y={124} w={30} h={30} />
      {[101, 139].map((y, i) => (
        <Flow key={y} d={`M${58 + i * 8} ${y + 15} C 110 ${y + 15}, 116 ${CY}, ${CX - 28} ${CY}`} delay={i * 0.3} opacity={0.6} />
      ))}
      {/* index grid */}
      <Ring r={28} />
      {[-9, 0, 9].map((dx) =>
        [-9, 0, 9].map((dy) => <circle key={`${dx}-${dy}`} cx={CX + dx} cy={CY + dy} r="1.6" fill={ACCENT} />)
      )}
      <Flow d={`M${CX + 28} ${CY} H 250`} />
      {/* answer bubble */}
      <path d="M252 104 h34 a6 6 0 0 1 6 6 v14 a6 6 0 0 1 -6 6 h-22 l-8 7 v-7 a6 6 0 0 1 -6 -6 v-14 a6 6 0 0 1 6 -6 z" stroke={STRUCT} strokeWidth="1.2" />
      <path d="M262 121 l4 4 l9 -9" stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <Labels left="DOCS" mid="INDEX" right="ANSWER" />
    </Frame>
  );
}

/* ── 8. Inbox triage ────────────────────────────────────────────────── */
export function TriageDiagram() {
  const mails = [86, 120, 154];
  const buckets = [82, 120, 158];
  return (
    <Frame>
      {mails.map((y, i) => (
        <g key={y}>
          <rect x="28" y={y - 11} width="42" height="22" rx="4" stroke={STRUCT} strokeWidth="1.2" />
          <path d={`M28 ${y - 6} l21 11 l21 -11`} stroke={STRUCT} strokeWidth="1.1" />
          <Flow d={`M70 ${y} C 108 ${y}, 114 ${CY}, ${CX - 26} ${CY}`} delay={i * 0.28} opacity={0.6} />
        </g>
      ))}
      <BotHead />
      {buckets.map((y, i) => (
        <g key={y}>
          <Flow d={`M${CX + 26} ${CY} C 226 ${CY}, 236 ${y}, 256 ${y}`} delay={i * 0.2} opacity={0.6} />
          <rect x="258" y={y - 9} width="30" height="18" rx="4" stroke={STRUCT} strokeWidth="1.2" />
          <Dot cx={273} cy={y} r={2.2} delay={i * 0.3} />
        </g>
      ))}
      <Labels left="INBOX" mid="CLASSIFY" right="ROUTE" />
    </Frame>
  );
}

/** Registry — a Work card's `media` key selects its diagram. */
export const DIAGRAMS: Record<string, () => React.ReactElement> = {
  leadgen: LeadGenDiagram,
  support: SupportDiagram,
  ops: OpsDiagram,
  reporting: ReportingDiagram,
  screening: ScreeningDiagram,
  content: ContentDiagram,
  knowledge: KnowledgeDiagram,
  triage: TriageDiagram,
};
