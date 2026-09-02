import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { APPLY_PATH } from "@/lib/site";

const FLOWS = [
  {
    title: "Ops reporting",
    body: "Weekly numbers that currently live in five tabs and your head, compiled and sent without you.",
    nodes: ["Tabs", "Compile", "Send"],
  },
  {
    title: "Recruiting screen",
    body: "Inbound candidates triaged against your bar before they hit your calendar.",
    nodes: ["Inbound", "Bar", "Calendar"],
  },
  {
    title: "Internal tools",
    body: "The internal app your team keeps asking for, shipped as a working system instead of another ticket.",
    nodes: ["Ask", "Build", "Runs"],
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
    <section id="examples" className="fade-in scroll-mt-12 py-16">
      <h2 className={sectionLabel}>Example flows</h2>
      <div className="-mx-4 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 [scrollbar-width:thin]">
        {FLOWS.map((item) => (
          <details
            key={item.title}
            className="w-[min(100%,20rem)] shrink-0 snap-center rounded-[0.5rem] border border-border bg-background p-4 open:bg-secondary/50"
          >
            <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[15px] font-medium tracking-tight">
                  {item.title}
                </p>
                <Badge
                  variant="outline"
                  className="font-mono text-[10px] uppercase"
                >
                  Example
                </Badge>
              </div>
              <FlowDiagram nodes={item.nodes} />
            </summary>
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
              {item.body}
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
