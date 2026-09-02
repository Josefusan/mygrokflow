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
import { isCheckoutLane } from "@/lib/checkout";
import { APPLY_PATH } from "@/lib/site";

const fieldClass =
  "mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-[13px] text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring";
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
      teamSize: teamSize as ApplyPayload["teamSize"],
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

      if (isCheckoutLane(data.rate)) {
        const checkout = await fetch("/api/checkout", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ rate: data.rate }),
        });
        const checkoutJson = (await checkout.json()) as {
          ok?: boolean;
          url?: string;
          error?: string;
        };
        if (checkout.ok && checkoutJson.ok && checkoutJson.url) {
          window.location.href = checkoutJson.url;
          return;
        }
        if (checkoutJson.error) setError(checkoutJson.error);
        window.location.href = json.mailto || fallback;
        return;
      }

      if (!disqualified) {
        window.location.href = `${APPLY_PATH}/success`;
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
            This isn&apos;t a prompt pack or a $99 chatbot. If you already pay
            for time or a team and one loop still sits on you, request a
            diagnostic. Otherwise this isn&apos;t for you.
          </p>
        ) : null}
      </fieldset>

      <fieldset>
        <legend className={labelClass}>Team size</legend>
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
            {APPLY_RATES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <p className={helpClass}>
            Diagnostic first skips Checkout. Paid lanes are $500 audit+report,
            $2,000/month, $7,500/month, or $9,500/month.
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
          {APPLY_CHANNELS.map((item) => (
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

      {error ? <p className={helpClass}>{error}</p> : null}

      <Button
        type="submit"
        disabled={pending}
        className="h-9 w-fit rounded-full px-4"
      >
        Request a diagnostic
      </Button>
    </form>
  );
}
