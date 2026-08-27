"use client";

import { FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { DIAGNOSTIC_EMAIL, DIAGNOSTIC_SUBJECT } from "@/lib/site";

const fieldClass =
  "mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-[13px] text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring";
const labelClass = "text-[13px] font-medium tracking-tight";
const helpClass = "mt-1 text-[13px] leading-relaxed text-muted-foreground";

const ROLES = [
  "Founder",
  "Software engineer",
  "Operator",
  "Student or hobbyist",
  "$99 chatbot shopper",
] as const;

const RATES = [
  "$1,500/month",
  "$5K one-time",
  "$10K one-time",
  "Diagnostic first",
] as const;

const CHANNELS = ["Email", "Telegram", "Signal", "LinkedIn", "X"] as const;

export function ApplyForm() {
  const [role, setRole] = useState("");
  const [workflow, setWorkflow] = useState("");
  const [who, setWho] = useState("");
  const [rate, setRate] = useState("");
  const [decider, setDecider] = useState("");
  const [need, setNeed] = useState("");
  const [channel, setChannel] = useState("");
  const [handle, setHandle] = useState("");

  const disqualified =
    role === "Student or hobbyist" || role === "$99 chatbot shopper";

  const mailto = useMemo(() => {
    const body = [
      `Role: ${role}`,
      `Workflow: ${workflow}`,
      `Who does it today: ${who}`,
      `Rate: ${rate}`,
      `Decision-maker: ${decider}`,
      `What to build: ${need}`,
      `Contact channel: ${channel}`,
      `Handle or email: ${handle}`,
    ].join("\n");
    return `mailto:${DIAGNOSTIC_EMAIL}?subject=${encodeURIComponent(DIAGNOSTIC_SUBJECT)}&body=${encodeURIComponent(body)}`;
  }, [role, workflow, who, rate, decider, need, channel, handle]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailto;
  }

  return (
    <form className="mt-8 grid gap-6" onSubmit={onSubmit}>
      <p className={helpClass}>
        Diagnostic is 15 minutes. We say yes or no, then which price. No
        discounts.
      </p>

      <fieldset>
        <legend className={labelClass}>Q1. Role</legend>
        <select
          required
          value={role}
          onChange={(event) => setRole(event.target.value)}
          className={fieldClass}
        >
          <option value="">Select</option>
          {ROLES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {disqualified ? (
          <p className={`${helpClass} mt-2`}>
            This isn&apos;t a prompt pack or a $99 chatbot. If you already pay
            for time or a team and one loop still sits on you, request a
            diagnostic. Otherwise this isn&apos;t for you.
          </p>
        ) : null}
      </fieldset>

      <label className="grid gap-0">
        <span className={labelClass}>
          Q2. What workflow still needs you in it?
        </span>
        <textarea
          required
          rows={3}
          value={workflow}
          onChange={(event) => setWorkflow(event.target.value)}
          className={fieldClass}
        />
      </label>

      <label className="grid gap-0">
        <span className={labelClass}>Q3. Who does it today?</span>
        <input
          required
          value={who}
          onChange={(event) => setWho(event.target.value)}
          className={fieldClass}
        />
      </label>

      {disqualified ? null : (
        <fieldset>
          <legend className={labelClass}>Q4. Rate lane</legend>
          <select
            required
            value={rate}
            onChange={(event) => setRate(event.target.value)}
            className={fieldClass}
          >
            <option value="">Select</option>
            {RATES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <p className={helpClass}>
            Diagnostic first skips Checkout. Paid lanes are $1,500/month, $5K
            one-time, or $10K one-time.
          </p>
        </fieldset>
      )}

      <fieldset>
        <legend className={labelClass}>Q5. Are you the decision-maker?</legend>
        <select
          required
          value={decider}
          onChange={(event) => setDecider(event.target.value)}
          className={fieldClass}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </fieldset>

      <label className="grid gap-0">
        <span className={labelClass}>Q6. What do you need built?</span>
        <textarea
          required
          rows={3}
          value={need}
          onChange={(event) => setNeed(event.target.value)}
          className={fieldClass}
        />
      </label>

      <fieldset>
        <legend className={labelClass}>Q7. How should we contact you?</legend>
        <select
          required
          value={channel}
          onChange={(event) => setChannel(event.target.value)}
          className={fieldClass}
        >
          <option value="">Select</option>
          {CHANNELS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </fieldset>

      <label className="grid gap-0">
        <span className={labelClass}>Q8. Handle or email</span>
        <input
          required
          value={handle}
          onChange={(event) => setHandle(event.target.value)}
          className={fieldClass}
        />
      </label>

      <Button type="submit" className="h-9 w-fit rounded-full px-4">
        Request a diagnostic
      </Button>
    </form>
  );
}
