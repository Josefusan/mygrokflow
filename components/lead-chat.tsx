"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APPLY_PATH } from "@/lib/site";

const SCRIPT = [
  "Hi, this is a quick trial chat, not a live person. We take a painful recurring workflow and turn it into a system that runs without you.",
  "Best fit: founders, agency owners, and software engineers who already pay for the work and still do the glue themselves.",
  "Not a fit: students, hobbyists, or $99 chatbot shoppers.",
  "Four honest prices: $500 audit (one-time), then $2,000/mo, $7,500/mo, or $9,500/mo. The diagnostic qualifies which one. No discounts.",
  "Implementation is included. Not a prompt pack.",
  "Ready for a real look? Request a diagnostic → /apply",
  "How it works: 01 Bring the work (docs, SOPs, examples, the outcome). 02 Show us the stack you already pay for. 03 We build the system so the loop runs without you.",
  "What we build: one painful loop as a system. Trigger in, work done, record left, you only on exceptions.",
  "What we do not build: a prompt you still paste, a dashboard you babysit, a $99 chatbot, a SaaS you resell.",
  "How long / what’s next: we don’t quote days in this chat. The diagnostic names the lane. Request a diagnostic → /apply",
  "Who does the work: we implement. You bring the loop, the stack, and a decider.",
  "$500 audit: one workflow on the table, a written what-to-automate, which monthly lane fits if any. Not a live build.",
  "$2,000/mo: one recurring workflow kept running, implementation, fixes in that lane, async support. Not a second unrelated workflow.",
  "$7,500/mo: a larger or multi-step loop (or two tightly linked systems), deeper stack, fuller handoff, care in that scope.",
  "$9,500/mo: several loops in one function, deepest stack we’ll take, fuller docs, priority async on those systems.",
  "No named case studies yet. Trading desk, CS, and BDR cards are examples of the work, not clients or metrics.",
  "Example flows on the site: AI lead generation, follow-up, reactivation, appointment setting, customer service. Labels only.",
  "Free worksheet: Without You, one-loop audit checklist. Get it on the site. Then request a diagnostic → /apply",
  "Without You is on Substack: https://substack.com/@josefucan",
] as const;

const FALLBACK =
  "This chat is a trial FAQ, not a live person. If you have a loop that still needs you, request a diagnostic → /apply";

type Message = { role: "assistant" | "user"; text: string };

function replyTo(raw: string): string {
  const t = raw.toLowerCase();

  if (
    /\b(student|hobby|hobbyist|exploring|just looking|\$99|99 chatbot|chatbot shop)\b/.test(
      t,
    )
  ) {
    return SCRIPT[2];
  }

  if (/\b(newsletter|buttondown|subscribe|public list|substack)\b/.test(t)) {
    return SCRIPT[18];
  }

  if (/\b(worksheet|checklist|without you|magnet|download)\b/.test(t)) {
    return SCRIPT[17];
  }

  if (
    /\b(case study|case studies|proof|testimonial|clients?|metrics?|trading desk)\b/.test(
      t,
    )
  ) {
    return SCRIPT[15];
  }

  if (
    /\b(lead gen|follow-up|reactivation|appointment|customer service|example flow)\b/.test(
      t,
    )
  ) {
    return SCRIPT[16];
  }

  if (/\b9,?500\b/.test(t)) return SCRIPT[14];
  if (/\b7,?500\b/.test(t)) return SCRIPT[13];
  if (/\b2,?000\b/.test(t)) return SCRIPT[12];
  if (/\b(\$500|500 audit|audit)\b/.test(t)) return SCRIPT[11];

  if (/\b(price|pricing|cost|discount|lane)\b/.test(t)) return SCRIPT[3];

  if (
    /\b(not build|don'?t build|prompt pack|saas you resell|dashboard you babysit)\b/.test(
      t,
    )
  ) {
    return SCRIPT[8];
  }

  if (/\b(what we build|what do you build|exceptions)\b/.test(t)) {
    return SCRIPT[7];
  }

  if (/\b(how it works|process|bring the work|sops?)\b/.test(t)) {
    return SCRIPT[6];
  }

  if (/\b(how long|timeline|how soon|what.?s next|days)\b/.test(t)) {
    return SCRIPT[9];
  }

  if (/\b(who (does|implements)|you implement|decider)\b/.test(t)) {
    return SCRIPT[10];
  }

  if (/\b(implement|included|not a prompt)\b/.test(t)) return SCRIPT[4];

  if (/\b(who|icp|audience|founder|agency|engineer|fit)\b/.test(t)) {
    return SCRIPT[1];
  }

  if (/\b(ready|diagnostic|apply|book)\b/.test(t)) return SCRIPT[5];

  if (
    /\b(what (do you|we|is)|automation|system that runs|workflow|trial chat)\b/.test(
      t,
    )
  ) {
    return SCRIPT[0];
  }

  return FALLBACK;
}

const sectionLabel =
  "font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase";

export function LeadChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: SCRIPT[0] },
  ]);
  const [draft, setDraft] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    setMessages((current) => [
      ...current,
      { role: "user", text },
      { role: "assistant", text: replyTo(text) },
    ]);
    setDraft("");
  }

  return (
    <section id="chat" data-slot="lead-chat" className="fade-in scroll-mt-12 py-16">
      <h2 className={sectionLabel}>Ask about the offer</h2>
      <Card className="mt-6 rounded-lg p-4">
        <CardContent className="p-0">
          <div
            className="grid gap-3"
            role="log"
            aria-live="polite"
            aria-label="Trial chat"
          >
            {messages.map((message, index) => (
              <p
                key={`${message.role}-${index}`}
                className={
                  message.role === "user"
                    ? "text-[13px] leading-relaxed text-foreground"
                    : "text-[13px] leading-relaxed text-muted-foreground"
                }
              >
                {message.text}
              </p>
            ))}
          </div>
          <form className="mt-4 flex flex-wrap gap-2" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="lead-chat-input">
              Your question
            </label>
            <input
              id="lead-chat-input"
              type="text"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Describe the loop that still sits on you"
              autoComplete="off"
              className="h-9 min-w-0 flex-1 rounded-full border border-border bg-background px-4 text-[13px] text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring"
            />
            <Button type="submit" variant="outline" className="h-9 rounded-full px-4">
              Send
            </Button>
          </form>
          <div className="mt-4">
            <Button asChild className="h-9 rounded-full px-4">
              <a href={APPLY_PATH}>Request a diagnostic</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
