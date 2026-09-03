/**
 * On-brand inline-SVG diagrams for the flagship Work cards. Dark 4:3 well
 * matching CardVideo; thin accent lines with a dash-flow, mono labels.
 * Decorative — marked aria-hidden; the card <h3>/<p> carry the meaning.
 */

const CARD_RADIAL =
  "radial-gradient(70% 60% at 30% 20%, #1C1C22, transparent 70%)";

const line = "rgba(242,242,240,0.18)";
const label = {
  fontFamily: "var(--font-mono), monospace",
  fontSize: "8.5px",
  letterSpacing: "0.14em",
  fill: "rgba(242,242,240,0.5)",
} as const;

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[4/3] w-full overflow-hidden bg-(--mgf-bg)"
      style={{ backgroundImage: CARD_RADIAL }}
    >
      <svg
        viewBox="0 0 320 240"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        {children}
      </svg>
    </div>
  );
}

/** Sources → AI qualify → booked calendar. */
export function LeadGenDiagram() {
  const sources = [56, 96, 136, 176];
  const cx = 168;
  const cy = 120;
  return (
    <Frame>
      {/* converging feeds */}
      {sources.map((y, i) => (
        <g key={y}>
          <path
            d={`M52 ${y} C 100 ${y}, 110 ${cy}, ${cx - 30} ${cy}`}
            stroke="var(--mgf-accent)"
            strokeWidth="1.2"
            strokeOpacity="0.7"
            className="mgf-flow"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
          <circle
            cx="46"
            cy={y}
            r="4.5"
            fill="var(--mgf-accent)"
            className="mgf-pulse"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        </g>
      ))}

      {/* AI qualify node */}
      <circle cx={cx} cy={cy} r="30" stroke={line} strokeWidth="1.2" />
      <circle
        cx={cx}
        cy={cy}
        r="30"
        stroke="var(--mgf-accent)"
        strokeWidth="1.4"
        strokeOpacity="0.9"
        strokeDasharray="3 6"
        className="mgf-flow"
      />
      <text x={cx} y={cy + 3.5} textAnchor="middle" style={label} fill="rgba(242,242,240,0.85)">
        AI
      </text>

      {/* output to booked */}
      <path
        d={`M${cx + 30} ${cy} H 258`}
        stroke="var(--mgf-accent)"
        strokeWidth="1.2"
        strokeOpacity="0.7"
        className="mgf-flow"
      />
      <rect x="258" y="102" width="34" height="36" rx="5" stroke={line} strokeWidth="1.2" />
      <path d="M258 112 H292" stroke={line} strokeWidth="1.2" />
      <path
        d="M266 122 l5 5 l9 -10"
        stroke="var(--mgf-accent)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <text x="46" y="214" textAnchor="middle" style={label}>LEADS</text>
      <text x={cx} y="214" textAnchor="middle" style={label}>QUALIFY</text>
      <text x="275" y="214" textAnchor="middle" style={label}>BOOKED</text>
    </Frame>
  );
}

/** Inbound messages → AI agent → resolved / escalate. */
export function SupportDiagram() {
  const cx = 168;
  const cy = 120;
  const bubbles = [78, 120, 162];
  return (
    <Frame>
      {/* inbound bubbles */}
      {bubbles.map((y, i) => (
        <g key={y}>
          <rect x="26" y={y - 13} width="46" height="26" rx="8" stroke={line} strokeWidth="1.2" />
          <path
            d={`M72 ${y} C 110 ${y}, 116 ${cy}, ${cx - 26} ${cy}`}
            stroke="var(--mgf-accent)"
            strokeWidth="1.2"
            strokeOpacity="0.7"
            className="mgf-flow"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
          {[38, 49, 60].map((dx) => (
            <circle
              key={dx}
              cx={dx}
              cy={y}
              r="2"
              fill="var(--mgf-accent)"
              className="mgf-pulse"
              style={{ animationDelay: `${(i + dx) * 0.12}s` }}
            />
          ))}
        </g>
      ))}

      {/* AI agent (bot head) */}
      <circle cx={cx} cy={cy} r="28" stroke="var(--mgf-accent)" strokeWidth="1.4" className="mgf-pulse" />
      <rect x={cx - 13} y={cy - 9} width="26" height="20" rx="6" stroke="rgba(242,242,240,0.85)" strokeWidth="1.3" />
      <circle cx={cx - 5} cy={cy + 1} r="2.2" fill="var(--mgf-accent)" />
      <circle cx={cx + 5} cy={cy + 1} r="2.2" fill="var(--mgf-accent)" />
      <path d={`M${cx} ${cy - 15} v-4`} stroke="rgba(242,242,240,0.85)" strokeWidth="1.3" strokeLinecap="round" />

      {/* branches: resolved (up) / escalate (down) */}
      <path
        d={`M${cx + 28} ${cy - 8} C 232 ${cy - 20}, 244 84, 262 78`}
        stroke="var(--mgf-accent)"
        strokeWidth="1.2"
        strokeOpacity="0.7"
        className="mgf-flow"
      />
      <path
        d={`M${cx + 28} ${cy + 8} C 232 ${cy + 20}, 244 156, 262 162`}
        stroke="var(--mgf-accent)"
        strokeWidth="1.2"
        strokeOpacity="0.5"
        className="mgf-flow"
        style={{ animationDelay: "0.5s" }}
      />
      {/* resolved check */}
      <circle cx="276" cy="78" r="13" stroke={line} strokeWidth="1.2" />
      <path d="M270 78 l4 4 l8 -9" stroke="var(--mgf-accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      {/* escalate arrow */}
      <circle cx="276" cy="162" r="13" stroke={line} strokeWidth="1.2" />
      <path d="M276 168 v-12 M271 161 l5 -5 l5 5" stroke="rgba(242,242,240,0.85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      <text x="49" y="214" textAnchor="middle" style={label}>INBOUND</text>
      <text x={cx} y="214" textAnchor="middle" style={label}>AI AGENT</text>
      <text x="276" y="214" textAnchor="middle" style={label}>ROUTED</text>
    </Frame>
  );
}
