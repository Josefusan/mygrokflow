import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Gauge,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DiagnosticForm } from "@/components/diagnostic-form";
import { FeedPost } from "@/components/feed-post";
import { Reveal } from "@/components/reveal";
import { RunLog } from "@/components/run-log";
import { SiteNav } from "@/components/site-nav";
import { Mark } from "@/components/mark";
import {
  DIAGNOSTIC_EMAIL,
  DIAGNOSTIC_MAILTO,
  PROMISE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const AUDIENCE = [
  {
    initials: "FD",
    title: "Founders",
    body: "You are the bottleneck. Recurring ops still live in your head and on your calendar. The work does not ship unless you touch it.",
  },
  {
    initials: "SE",
    title: "Software engineers",
    body: "You keep getting pulled into glue work that is not the product. The same handoff. The same script. The same fire.",
  },
  {
    initials: "OP",
    title: "High-earning operators",
    body: "You are paid to think. You still spend nights on the same report, inbox, or status loop. That is a system problem.",
  },
] as const;

const GET = [
  {
    n: "01",
    title: "Scoped diagnostic",
    body: "We name the workflow, the constraint, and the system that should replace it. Tight written scope. No fishing expedition.",
  },
  {
    n: "02",
    title: "Paid build",
    body: "We implement it. You do not get a prompt pack. You get a working path with an owner and a defined output.",
  },
  {
    n: "03",
    title: "A system, not a chatbot",
    body: "It runs without you. Inputs in. Result out. Exceptions surface. The rest stays out of your queue.",
  },
] as const;

const STEPS = [
  {
    n: "01",
    title: "Send the workflow that hurts",
    body: "What repeats. Who does it. What a good week looks like without it.",
  },
  {
    n: "02",
    title: "We scope the outcome",
    body: "A written diagnostic. Price against the outcome, not hours. You decide whether to build.",
  },
  {
    n: "03",
    title: "We ship the system",
    body: "Implementation included. You get something that runs. Then we get out of the way.",
  },
] as const;

const EXAMPLES = [
  {
    initials: "OR",
    title: "Ops reporting",
    meta: "example · not a case study",
    body: "Weekly numbers from three tools into one note. No spreadsheet archaeology. The report exists before you sit down.",
  },
  {
    initials: "RS",
    title: "Recruiting screen",
    meta: "example · not a case study",
    body: "Inbound applications triaged against a written bar. You only see the shortlist. The rest is logged, not dumped in your inbox.",
  },
  {
    initials: "IT",
    title: "Internal tools",
    meta: "example · not a case study",
    body: "The form-to-chat-to-sheet loop replaced with one path. Request in. Status visible. Output where the work already lives.",
  },
] as const;

export function Landing() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <div className="mx-auto grid min-h-screen max-w-[1280px] lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_320px]">
        <div className="lg:border-r lg:border-zinc-800 lg:px-3 xl:px-4">
          <SiteNav />
        </div>

        <main
          id="main"
          className="min-w-0 border-zinc-800 lg:border-r xl:border-x"
        >
          <article
            id="top"
            className="scroll-mt-16 border-b border-zinc-800 px-4 py-8 sm:px-6 sm:py-10"
          >
            <div className="flex gap-3">
              <Mark className="mt-1 hidden size-10 sm:block" />
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[11px] tracking-[0.18em] text-zinc-500 uppercase">
                  AI automations · implementation included
                </p>
                <h1 className="mt-2 text-3xl leading-[1.05] font-semibold tracking-tighter text-zinc-50 sm:text-5xl">
                  {SITE_NAME}
                </h1>
                <p className="mt-4 max-w-xl text-lg leading-snug tracking-tight text-zinc-100 sm:text-2xl">
                  {PROMISE}
                </p>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-zinc-400">
                  High-ticket systems for founders, software engineers, and
                  high-earning operators. Scoped outcome, not hours. We build
                  it. You stop doing it.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="pressable h-11 rounded-full px-5"
                  >
                    <a href={DIAGNOSTIC_MAILTO}>
                      Request a diagnostic
                      <ArrowUpRight data-icon="inline-end" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="pressable h-11 rounded-full border-zinc-800 bg-transparent px-5"
                  >
                    <a href="#examples">See example workflows</a>
                  </Button>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                  <Badge
                    variant="outline"
                    className="border-zinc-800 font-mono text-[10px] tracking-wider uppercase"
                  >
                    scoped builds
                  </Badge>
                  <span>No prompt pack.</span>
                  <span aria-hidden="true">·</span>
                  <span>No hours theater.</span>
                  <span aria-hidden="true">·</span>
                  <span>A system that runs.</span>
                </div>
              </div>
            </div>
          </article>

          <Reveal>
            <FeedPost
              id="for"
              initials="WHO"
              name="Who it's for"
              meta="three seats · same offer"
            >
              <p className="text-[15px] leading-relaxed text-zinc-300">
                If the work is expensive, repeating, and still manual, it is in
                scope. If you want a toy demo, it is not.
              </p>
              <div className="mt-4 grid gap-3">
                {AUDIENCE.map((item) => (
                  <Card
                    key={item.title}
                    className="feed-lift rounded-2xl border border-zinc-800 bg-zinc-950 ring-0"
                  >
                    <CardHeader className="flex-row items-start gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-zinc-800 bg-black font-mono text-[10px] text-zinc-300">
                        {item.initials}
                      </span>
                      <div>
                        <CardTitle className="text-[15px] tracking-tight">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="mt-1 text-[13px] leading-relaxed text-zinc-400">
                          {item.body}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </FeedPost>
          </Reveal>

          <Reveal>
            <FeedPost
              id="get"
              initials="GET"
              name="What you get"
              meta="diagnostic → build → system"
            >
              <p className="text-[15px] leading-relaxed text-zinc-300">
                A chatbot is a conversation. This is a machine for a job you
                already hate.
              </p>
              <ol className="mt-4 grid gap-3">
                {GET.map((item) => (
                  <li
                    key={item.n}
                    className="feed-lift rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-4"
                  >
                    <p className="font-mono text-[11px] tracking-[0.16em] text-zinc-500 uppercase">
                      {item.n}
                    </p>
                    <h3 className="mt-1 text-[15px] font-medium tracking-tight text-zinc-50">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-zinc-400">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ol>
            </FeedPost>
          </Reveal>

          <Reveal>
            <FeedPost
              id="how"
              initials="HOW"
              name="How it works"
              meta="three steps"
            >
              <ol className="relative mt-1 grid gap-0">
                {STEPS.map((item, index) => (
                  <li key={item.n} className="flex gap-3">
                    <div className="flex w-8 flex-col items-center">
                      <span className="flex size-8 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 font-mono text-[11px] text-zinc-200">
                        {item.n}
                      </span>
                      {index < STEPS.length - 1 ? (
                        <span className="w-px flex-1 bg-zinc-800" aria-hidden />
                      ) : null}
                    </div>
                    <div className={index < STEPS.length - 1 ? "pb-6" : "pb-0"}>
                      <h3 className="pt-1.5 text-[15px] font-medium tracking-tight text-zinc-50">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-zinc-400">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </FeedPost>
          </Reveal>

          <Reveal>
            <FeedPost
              id="examples"
              initials="EX"
              name="Example workflows"
              meta="examples · not case studies"
            >
              <p className="text-[15px] leading-relaxed text-zinc-300">
                These are patterns we build against. They are not logos, not
                testimonials, not proof of someone else&apos;s revenue.
              </p>
              <div className="mt-4 grid gap-3">
                {EXAMPLES.map((item) => (
                  <Card
                    key={item.title}
                    className="feed-lift rounded-2xl border border-zinc-800 bg-zinc-950 ring-0"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="flex size-8 items-center justify-center rounded-full border border-zinc-800 font-mono text-[10px] text-zinc-300">
                            {item.initials}
                          </span>
                          <CardTitle className="text-[15px] tracking-tight">
                            {item.title}
                          </CardTitle>
                        </div>
                        <Badge
                          variant="outline"
                          className="border-zinc-800 font-mono text-[10px] tracking-wider text-zinc-500 uppercase"
                        >
                          example
                        </Badge>
                      </div>
                      <CardDescription className="font-mono text-[11px] tracking-wide text-zinc-500 uppercase">
                        {item.meta}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[13px] leading-relaxed text-zinc-400">
                        {item.body}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FeedPost>
          </Reveal>

          <Reveal>
            <section
              id="diagnostic"
              className="scroll-mt-20 border-b border-zinc-800 px-4 py-8 sm:px-6"
            >
              <p className="font-mono text-[11px] tracking-[0.16em] text-zinc-500 uppercase">
                Start here
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tighter text-zinc-50">
                Request a diagnostic
              </h2>
              <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-zinc-400">
                Tell us the workflow. This opens your mail client to{" "}
                {DIAGNOSTIC_EMAIL}. No fake thank-you screen. No backend.
              </p>
              <div className="mt-5">
                <DiagnosticForm />
              </div>
            </section>
          </Reveal>

          <footer className="px-4 py-8 sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Mark className="size-7" />
                <div>
                  <p className="text-sm font-medium tracking-tight">
                    {SITE_NAME}
                  </p>
                  <p className="font-mono text-[11px] text-zinc-500">
                    mygrokflow.com
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-400">
                <a
                  href={SITE_URL}
                  className="hover:text-zinc-100"
                >
                  mygrokflow.com
                </a>
                <a
                  href={DIAGNOSTIC_MAILTO}
                  className="inline-flex items-center gap-1 hover:text-zinc-100"
                >
                  <Mail className="size-3.5" />
                  {DIAGNOSTIC_EMAIL}
                </a>
              </div>
            </div>
            <Separator className="my-5 bg-zinc-800" />
            <p className="text-xs text-zinc-600">
              {PROMISE}
            </p>
          </footer>
        </main>

        <aside className="hidden xl:block">
          <div className="sticky top-0 flex h-screen flex-col gap-4 overflow-y-auto px-4 py-6">
            <Card className="rounded-2xl border border-zinc-800 bg-zinc-950 ring-0">
              <CardHeader>
                <CardTitle className="text-[15px] tracking-tight">
                  Request a diagnostic
                </CardTitle>
                <CardDescription className="text-[13px] leading-relaxed">
                  Opens mail to {DIAGNOSTIC_EMAIL}. Subject is prefilled.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DiagnosticForm compact />
              </CardContent>
            </Card>
            <RunLog />
            <div className="rounded-2xl border border-zinc-800 px-4 py-4">
              <p className="font-mono text-[11px] tracking-[0.16em] text-zinc-500 uppercase">
                Not this
              </p>
              <ul className="mt-3 space-y-2 text-[13px] text-zinc-400">
                <li className="flex items-center gap-2">
                  <Briefcase className="size-3.5 text-zinc-500" />
                  Hours billed as a product
                </li>
                <li className="flex items-center gap-2">
                  <Code2 className="size-3.5 text-zinc-500" />
                  A folder of prompts
                </li>
                <li className="flex items-center gap-2">
                  <Gauge className="size-3.5 text-zinc-500" />
                  A generic agent demo
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
