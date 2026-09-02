import { Button } from "@/components/ui/button";
import { APPLY_PATH } from "@/lib/site";

const FLOWS = [
  {
    title: "AI lead generation",
    nodes: ["Source", "Qualify", "Handoff"],
  },
  {
    title: "AI lead follow-up",
    nodes: ["Inbox", "Next step", "Close"],
  },
  {
    title: "AI lead reactivation",
    nodes: ["Cold", "Check-in", "Route"],
  },
  {
    title: "AI appointment setting",
    nodes: ["Qualified", "Times", "Book"],
  },
  {
    title: "AI customer service",
    nodes: ["Question", "Answer", "Human"],
  },
] as const;

const sectionLabel =
  "font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase";

function FlowDiagram({ nodes }: { nodes: readonly string[] }) {
  return (
    <svg
      viewBox="0 0 264 48"
      className="mt-3 h-12 w-full text-foreground"
      aria-hidden
    >
      {nodes.map((label, index) => {
        const x = 4 + index * 88;
        return (
          <g key={label}>
            <rect
              x={x}
              y={8}
              width={72}
              height={32}
              rx={1}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <text
              x={x + 36}
              y={28}
              textAnchor="middle"
              fill="currentColor"
              fontSize="10"
              fontFamily="ui-monospace, monospace"
            >
              {label}
            </text>
            {index < nodes.length - 1 ? (
              <path
                d={`M ${x + 72} 24 H ${x + 88}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}

export function ArchitectureStrip() {
  return (
    <section id="architectures" className="fade-in scroll-mt-12 py-16">
      <h2 className={sectionLabel}>AI automations</h2>
      <div className="-mx-4 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 [scrollbar-width:thin]">
        {FLOWS.map((item) => (
          <details
            key={item.title}
            className="w-[min(100%,20rem)] shrink-0 snap-center rounded-[0.5rem] border border-border bg-background p-4 open:bg-secondary/50"
          >
            <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <p className="text-[15px] font-medium tracking-tight">{item.title}</p>
              <FlowDiagram nodes={item.nodes} />
            </summary>
            <p className="mt-3 font-mono text-[13px] leading-relaxed text-muted-foreground">
              {item.nodes.join(" · ")}
            </p>
          </details>
        ))}
      </div>
      <div className="mt-6">
        <Button asChild className="h-9 rounded-full px-4">
          <a href={APPLY_PATH}>Request a diagnostic</a>
        </Button>
      </div>
    </section>
  );
}
