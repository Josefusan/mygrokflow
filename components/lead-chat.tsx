"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APPLY_PATH } from "@/lib/site";

const OPENER = "What workflow still needs you in it?";

const REPLIES = {
  notFor:
    "This isn't a prompt pack or a $99 chatbot. If you already pay for time or a team and one loop still sits on you, request a diagnostic. Otherwise this isn't for you.",
  icp: "That's a system. Diagnostic is 15 minutes. We say yes or no, then which price.",
  what: "We take a painful recurring workflow and turn it into a system that runs without you. Implementation included.",
  who: "Founders who already pay a team and still wait on themselves. Engineers paid to ship product whose glue never hits it. Operators stuck on the same weekly loop.",
  notForList: "students, hobbyists, $99 chatbot shoppers.",
  pricing:
    "$1,500/month, $5K one-time, $10K one-time. Diagnostic qualifies which one. No discounts.",
  how: "Diagnostic, then build, then handoff.",
  examples:
    "Labeled examples, not case studies: ops reporting, recruiting screen, internal tools.",
  unknown:
    "I only know the offer, pricing, and who it's for. Request a diagnostic and we'll look at the actual workflow.",
} as const;

type Message = { role: "assistant" | "user"; text: string };

function replyTo(raw: string): string {
  const t = raw.toLowerCase();

  if (
    /\b(student|hobby|hobbyist|exploring|just looking|\$99|99 chatbot|chatbot shop|prompt pack)\b/.test(
      t,
    )
  ) {
    return REPLIES.notFor;
  }

  if (/\b(price|pricing|cost|\$1,?500|1,?500|5k|10k|discount)\b/.test(t)) {
    return REPLIES.pricing;
  }

  if (/\b(what (do you|we|is)|automation|system that runs)\b/.test(t)) {
    return REPLIES.what;
  }

  if (/\b(who|icp|audience)\b/.test(t)) {
    return REPLIES.who;
  }

  if (/\bnot for\b/.test(t)) {
    return REPLIES.notForList;
  }

  if (/\b(how|process|steps?|handoff)\b/.test(t)) {
    return REPLIES.how;
  }

  if (/\b(example|ops reporting|recruiting|internal tool)\b/.test(t)) {
    return REPLIES.examples;
  }

  if (
    /\b(founder|engineer|operator|workflow|loop|team|bottleneck|glue)\b/.test(t)
  ) {
    return REPLIES.icp;
  }

  return REPLIES.unknown;
}

const sectionLabel =
  "font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase";

export function LeadChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: OPENER },
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
    <section id="chat" className="fade-in scroll-mt-12 py-16">
      <h2 className={sectionLabel}>Ask about the offer</h2>
      <Card className="mt-6 rounded-lg p-4">
        <CardContent className="p-0">
          <div className="grid gap-3" aria-live="polite">
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
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Describe the loop that still sits on you"
              autoComplete="off"
              className="h-9 min-w-0 flex-1 rounded-full border border-border bg-background px-4 text-[13px] text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring"
            />
            <Button type="submit" className="h-9 rounded-full px-4">
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
