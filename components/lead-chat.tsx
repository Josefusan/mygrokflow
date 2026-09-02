"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APPLY_PATH } from "@/lib/site";

const SCRIPT = [
  "Hi — this is a quick trial chat, not a live person. We take a painful recurring workflow and turn it into a system that runs without you.",
  "Best fit: founders, agency owners, and software engineers who already pay for the work and still do the glue themselves.",
  "Not a fit: students, hobbyists, or $99 chatbot shoppers.",
  "Three honest prices: $1,500/month, $5K one-time, or $10K one-time. The diagnostic qualifies which one. No discounts.",
  "Implementation is included. Not a prompt pack.",
  "Ready for a real look? Request a diagnostic",
] as const;

type Message = { role: "assistant" | "user"; text: string };

function replyTo(raw: string): string {
  const t = raw.toLowerCase();

  if (
    /\b(student|hobby|hobbyist|exploring|just looking|\$99|99 chatbot|chatbot shop|prompt pack)\b/.test(
      t,
    )
  ) {
    return SCRIPT[2];
  }

  if (/\b(price|pricing|cost|\$1,?500|1,?500|5k|10k|discount)\b/.test(t)) {
    return SCRIPT[3];
  }

  if (/\b(who|icp|audience|founder|agency|engineer|fit)\b/.test(t)) {
    return SCRIPT[1];
  }

  if (/\b(implement|included|prompt pack)\b/.test(t)) {
    return SCRIPT[4];
  }

  if (/\b(what (do you|we|is)|automation|system that runs|workflow)\b/.test(t)) {
    return SCRIPT[0];
  }

  return SCRIPT[5];
}

const sectionLabel =
  "font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase";

export function LeadChat() {
  const [messages, setMessages] = useState<Message[]>(
    SCRIPT.map((text) => ({ role: "assistant" as const, text })),
  );
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
