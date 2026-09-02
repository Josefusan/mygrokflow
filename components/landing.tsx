import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArchitectureStrip } from "@/components/architecture-strip";
import { FooterContacts } from "@/components/footer-contacts";
import { ChecklistMagnet } from "@/components/checklist-magnet";
import { LeadChat } from "@/components/lead-chat";
import { SiteHeader } from "@/components/site-header";
import {
  APPLY_PATH,
  PROMISE,
  SITE_NAME,
} from "@/lib/site";

const HEADLINE =
  "Want hours back and more money from the work you already pay for, without doing it yourself.";

const AUDIENCE = [
  {
    title: "Founders",
    body: "You already pay a team. The work still waits on you.",
  },
  {
    title: "Software engineers",
    body: "They pay you to ship product. Glue is hours that never hit it.",
  },
  {
    title: "High-earning operators",
    body: "You are paid to think. You still spend nights on the same report, inbox, or status loop. That is a system problem.",
  },
] as const;

const NOT_FOR = ["students", "hobbyists", "$99 chatbot shoppers"] as const;

const PROCESS = [
  {
    n: "01",
    title: "Bring the work.",
    body: "Upload the knowledge you already have (docs, SOPs, examples) and name the outcome you want.",
  },
  {
    n: "02",
    title: "Show us the stack.",
    body: "Where this runs today. The tools you already pay for.",
  },
  {
    n: "03",
    title: "We build the system.",
    body: "We automate the loop and hand you something that runs without you.",
  },
] as const;

const EXAMPLES = [
  {
    title: "Ops reporting",
    body: "Weekly numbers that currently live in five tabs and your head, compiled and sent without you.",
  },
  {
    title: "Recruiting screen",
    body: "Inbound candidates triaged against your bar before they hit your calendar.",
  },
  {
    title: "Internal tools",
    body: "The internal app your team keeps asking for, shipped as a working system instead of another ticket.",
  },
] as const;

const RATES = [
  {
    title: "$500 audit (one-time)",
    included: [
      "One painful workflow on the table",
      "Written report of what to automate",
      "Which monthly lane fits, if any",
    ],
    excluded: [
      "A live build",
      "Monthly care",
      "A booked calendar from this card",
    ],
  },
  {
    title: "$2,000/mo",
    included: [
      "One recurring workflow kept running without you",
      "Implementation included (not a prompt pack)",
      "Ongoing fixes inside that lane",
      "Async support on the live system",
    ],
    excluded: [
      "A second unrelated workflow",
      "A product you resell",
      "Unlimited new projects",
      "On-site / embedded team time",
    ],
  },
  {
    title: "$7,500/mo",
    included: [
      "A larger or multi-step loop (or two tightly linked systems)",
      "Deeper stack integration across tools you already pay for",
      "Fuller handoff",
      "Ongoing care in that scope",
    ],
    excluded: [
      "Open-ended anything-goes",
      "Building a SaaS product",
      "Unlimited new projects",
      "Staff augmentation",
    ],
  },
  {
    title: "$9,500/mo",
    included: [
      "Several loops in one function kept running",
      "Deepest stack we’ll take",
      "Fuller docs",
      "Priority async on those systems",
    ],
    excluded: [
      "Building a product you resell",
      "Embedding a team",
      "Unlimited revisions across the company",
      "Training programs",
    ],
  },
] as const;

const sectionLabel =
  "font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase";

function Cta({ className }: { className?: string }) {
  return (
    <Button asChild className={`h-9 rounded-full px-4 ${className ?? ""}`}>
      <a href={APPLY_PATH}>Request a diagnostic</a>
    </Button>
  );
}

export function Landing() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader home />

      <main id="main">
        <div className="mx-auto max-w-[42rem] px-4">
          <section id="top" className="scroll-mt-12 py-16">
            <p className={`${sectionLabel} fade-in`}>High-ticket AI automations</p>
            <h1 className="fade-in fade-in-d60 mt-3 text-4xl leading-[1.1] font-medium tracking-[-0.03em] text-foreground md:text-5xl">
              {HEADLINE}
            </h1>
            <p className="fade-in fade-in-d120 mt-4 text-[15px] leading-relaxed text-muted-foreground">
              {PROMISE}
            </p>
            <p className="fade-in fade-in-d180 mt-2 text-[15px] leading-relaxed text-muted-foreground">
              implementation included, not a prompt pack.
            </p>
            <div className="fade-in fade-in-d180 mt-6">
              <Cta />
            </div>
          </section>

          <Separator />

          <section id="for" className="fade-in scroll-mt-12 py-16">
            <h2 className={sectionLabel}>Who it&apos;s for</h2>
            <ul className="mt-6">
              {AUDIENCE.map((item, index) => (
                <li key={item.title}>
                  {index > 0 ? <Separator /> : null}
                  <div className="py-4">
                    <p className="text-[15px] font-medium tracking-tight">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <Separator />

          <section id="not-for" className="fade-in scroll-mt-12 py-16">
            <h2 className={sectionLabel}>Not for</h2>
            <ul className="mt-6">
              {NOT_FOR.map((item, index) => (
                <li key={item}>
                  {index > 0 ? <Separator /> : null}
                  <p className="py-3 text-[13px] text-muted-foreground">{item}</p>
                </li>
              ))}
            </ul>
          </section>

          <Separator />

          <section id="process" className="fade-in scroll-mt-12 py-16">
            <h2 className={sectionLabel}>Our process</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              {PROMISE} Implementation included, not a prompt pack.
            </p>
            <ol className="mt-6">
              {PROCESS.map((item, index) => (
                <li key={item.n}>
                  {index > 0 ? <Separator /> : null}
                  <div className="py-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
                        {item.n}
                      </span>
                      <p className="text-[15px] font-medium tracking-tight">
                        {item.title}
                      </p>
                    </div>
                    <p className="mt-1 pl-[calc(11px+1rem+2ch)] text-[13px] leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6">
              <Cta />
            </div>
          </section>

          <Separator />

          <ArchitectureStrip />

          <Separator />

          <section id="examples" className="fade-in scroll-mt-12 py-16">
            <h2 className={sectionLabel}>Example workflows</h2>
            <div className="mt-6 grid gap-3">
              {EXAMPLES.map((item) => (
                <Card
                  key={item.title}
                  className="rounded-lg p-4 transition-colors duration-200 hover:bg-secondary/50"
                >
                  <CardHeader className="p-0">
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className="text-[15px] tracking-tight">
                        {item.title}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="font-mono text-[10px] uppercase"
                      >
                        Example
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 pt-2">
                    <p className="text-[13px] leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <section
          id="pricing"
          className="fade-in mx-auto w-full max-w-[72rem] scroll-mt-12 px-4 py-16"
        >
          <h2 className={sectionLabel}>Pricing</h2>
          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-4">
            {RATES.map((item) => (
              <Card
                key={item.title}
                className="flex flex-col rounded-[0.5rem] border-border p-4 transition-colors duration-200 hover:bg-secondary/50"
              >
                <CardHeader className="p-0">
                  <CardTitle className="text-[15px] tracking-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col p-0 pt-4">
                  <p className={sectionLabel}>In</p>
                  <ul className="mt-2 grid gap-1">
                    {item.included.map((line) => (
                      <li
                        key={line}
                        className="text-[13px] leading-relaxed text-muted-foreground"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                  <p className={`${sectionLabel} mt-4`}>Not in</p>
                  <ul className="mt-2 grid gap-1">
                    {item.excluded.map((line) => (
                      <li
                        key={line}
                        className="text-[13px] leading-relaxed text-muted-foreground"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[13px] text-muted-foreground">
                    The diagnostic qualifies. No discounts.
                  </p>
                  <div className="mt-auto pt-4">
                    <Cta />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="mx-auto max-w-[42rem] px-4">
          <section id="close" className="fade-in scroll-mt-12 py-16">
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              {PROMISE}
            </p>
            <div className="mt-6">
              <Cta />
            </div>
          </section>

          <Separator />

          <ChecklistMagnet />

          <Separator />

          <LeadChat />
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[42rem] flex-col gap-4 px-4 py-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium tracking-tight">{SITE_NAME}</span>
            <a
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy
            </a>
          </div>
          <FooterContacts />
        </div>
      </footer>
    </div>
  );
}
