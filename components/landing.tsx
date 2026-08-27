import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FooterContacts } from "@/components/footer-contacts";
import { LeadChat } from "@/components/lead-chat";
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

const STEPS = [
  { n: "01", title: "Diagnostic" },
  { n: "02", title: "Build" },
  { n: "03", title: "Handoff" },
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
  { rate: "$1,500/month" },
  { rate: "$5K", cadence: "one-time" },
  { rate: "$10K", cadence: "one-time" },
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
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-[42rem] items-center justify-between px-4">
          <a href="#top" className="text-sm font-medium tracking-tight">
            {SITE_NAME}
          </a>
          <Cta />
        </div>
      </header>

      <main id="main" className="mx-auto max-w-[42rem] px-4">
        <section id="top" className="fade-in scroll-mt-12 py-16">
          <p className={sectionLabel}>High-ticket AI automations</p>
          <h1 className="mt-3 text-4xl leading-[1.1] font-medium tracking-[-0.03em] text-foreground md:text-5xl">
            {HEADLINE}
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            {PROMISE}
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
            implementation included, not a prompt pack.
          </p>
          <div className="mt-6">
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

        <section id="how" className="fade-in scroll-mt-12 py-16">
          <h2 className={sectionLabel}>How it works</h2>
          <ol className="mt-6">
            {STEPS.map((item, index) => (
              <li key={item.n}>
                {index > 0 ? <Separator /> : null}
                <div className="flex items-baseline gap-4 py-3">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground">
                    {item.n}
                  </span>
                  <span className="text-[15px] font-medium tracking-tight">
                    {item.title}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <Separator />

        <section id="examples" className="fade-in scroll-mt-12 py-16">
          <h2 className={sectionLabel}>Example workflows</h2>
          <div className="mt-6 grid gap-3">
            {EXAMPLES.map((item) => (
              <Card key={item.title} className="rounded-lg p-4">
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

        <Separator />

        <section id="pricing" className="fade-in scroll-mt-12 py-16">
          <h2 className={sectionLabel}>Pricing</h2>
          <div className="mt-6 rounded-lg border border-border">
            {RATES.map((item, index) => (
              <div key={item.rate}>
                {index > 0 ? <Separator /> : null}
                <div className="flex items-center justify-between gap-4 px-4 py-4">
                  <p className="text-[15px] font-medium tracking-tight">
                    {item.rate}
                    {"cadence" in item ? (
                      <span className="ml-2 font-normal text-muted-foreground">
                        {item.cadence}
                      </span>
                    ) : null}
                  </p>
                  <a
                    href={APPLY_PATH}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Apply
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-muted-foreground">
            The diagnostic qualifies. No discounts.
          </p>
        </section>

        <Separator />

        <section id="close" className="fade-in scroll-mt-12 py-16">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            {PROMISE}
          </p>
          <div className="mt-6">
            <Cta />
          </div>
        </section>

        <Separator />

        <LeadChat />
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
