"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  APPLY_CHANNELS,
  APPLY_RATES,
  APPLY_ROLES,
  APPLY_TEAM_SIZES,
  applyMailto,
  isDisqualifiedRole,
  type ApplyPayload,
} from "@/lib/apply";

const fieldClass =
  "mt-2 w-full cursor-pointer rounded-lg border border-border bg-background px-3 py-2 text-[13px] text-foreground outline-none transition-[color,background-color,border-color] duration-180 placeholder:text-muted-foreground hover:border-foreground/20 focus-visible:border-ring";
const labelClass = "text-[13px] font-medium tracking-tight";
const helpClass = "mt-1 text-[13px] leading-relaxed text-muted-foreground";

export function ApplyForm() {
  const [role, setRole] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [workflow, setWorkflow] = useState("");
  const [who, setWho] = useState("");
  const [rate, setRate] = useState("");
  const [decider, setDecider] = useState("");
  const [need, setNeed] = useState("");
  const [channel, setChannel] = useState("");
  const [handle, setHandle] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const disqualified = isDisqualifiedRole(role);

  function payload(): ApplyPayload {
    return {
      role: role as ApplyPayload["role"],
      teamSize: disqualified ? "" : (teamSize as ApplyPayload["teamSize"]),
      workflow: workflow.trim(),
      who: who.trim(),
      rate: disqualified ? "" : (rate as ApplyPayload["rate"]),
      decider: decider as ApplyPayload["decider"],
      need: need.trim(),
      channel: channel as ApplyPayload["channel"],
      handle: handle.trim(),
    };
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);
    const data = payload();
    const fallback = applyMailto(data);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await response.json()) as {
        ok?: boolean;
        mailto?: string;
        error?: string;
      };
      if (!response.ok || !json.ok) {
        setError(json.error || "Could not submit.");
        window.location.href = fallback;
        return;
      }
      window.location.href = json.mailto || fallback;
    } catch {
      window.location.href = fallback;
    } finally {
      setPending(false);
    }
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
          {APPLY_ROLES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {disqualified ? (
          <p className={`${helpClass} mt-2`}>
            This isn&apos;t a fit. We work with founders, agency owners, and
            software engineers on high-ticket automations.
          </p>
        ) : null}
      </fieldset>

      {disqualified ? null : (
        <fieldset>
          <legend className={labelClass}>Q2. Team size</legend>
          <select
            required
            value={teamSize}
            onChange={(event) => setTeamSize(event.target.value)}
            className={fieldClass}
          >
            <option value="">Select</option>
            {APPLY_TEAM_SIZES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </fieldset>
      )}

      <label className="grid gap-0">
        <span className={labelClass}>
          Q3. What workflow still needs you in it?
        </span>
        <textarea
          required
          rows={3}
          value={workflow}
          onChange={(event) => setWorkflow(event.target.value)}
          className={fieldClass.replace("cursor-pointer", "cursor-text")}
        />
      </label>

      <label className="grid gap-0">
        <span className={labelClass}>Q4. Who does it today?</span>
        <input
          required
          value={who}
          onChange={(event) => setWho(event.target.value)}
          className={fieldClass.replace("cursor-pointer", "cursor-text")}
        />
      </label>

      {disqualified ? null : (
        <fieldset>
          <legend className={labelClass}>Q5. Rate lane</legend>
          <select
            required
            value={rate}
            onChange={(event) => setRate(event.target.value)}
            className={fieldClass}
          >
            <option value="">Select</option>
            {APPLY_RATES.map((item) => (
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
        <legend className={labelClass}>Q6. What do you need built?</legend>
        <textarea
          required
          rows={3}
          value={need}
          onChange={(event) => setNeed(event.target.value)}
          className={fieldClass.replace("cursor-pointer", "cursor-text")}
        />
      </fieldset>

      <fieldset>
        <legend className={labelClass}>Q7. Are you the decision-maker?</legend>
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

      <fieldset>
        <legend className={labelClass}>Q8. How should we contact you?</legend>
        <select
          required
          value={channel}
          onChange={(event) => setChannel(event.target.value)}
          className={fieldClass}
        >
          <option value="">Select</option>
          {APPLY_CHANNELS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </fieldset>

      <label className="grid gap-0">
        <span className={labelClass}>Q9. Handle or email</span>
        <input
          required
          value={handle}
          onChange={(event) => setHandle(event.target.value)}
          className={fieldClass.replace("cursor-pointer", "cursor-text")}
        />
      </label>

      {error ? <p className={helpClass}>{error}</p> : null}

      <Button
        type="submit"
        disabled={pending}
        className="h-9 w-fit cursor-pointer rounded-full px-4"
      >
        Request a diagnostic
      </Button>
    </form>
  );
}
