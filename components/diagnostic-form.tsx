"use client";

import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DIAGNOSTIC_MAILTO, DIAGNOSTIC_EMAIL } from "@/lib/site";

export function DiagnosticForm({ compact = false }: { compact?: boolean }) {
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const role = String(data.get("role") ?? "").trim();
    const workflow = String(data.get("workflow") ?? "").trim();
    const lines = [
      name && `Name: ${name}`,
      role && `Role: ${role}`,
      workflow && `Workflow:\n${workflow}`,
    ].filter(Boolean);
    const href = `${DIAGNOSTIC_MAILTO}&body=${encodeURIComponent(lines.join("\n\n"))}`;
    window.location.href = href;
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <div className={compact ? "grid gap-3" : "grid gap-3 sm:grid-cols-2"}>
        <label className="grid gap-1.5">
          <span className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 uppercase">
            Name
          </span>
          <Input name="name" autoComplete="name" placeholder="Your name" />
        </label>
        <label className="grid gap-1.5">
          <span className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 uppercase">
            Role
          </span>
          <Input name="role" placeholder="Founder, engineer, operator" />
        </label>
      </div>
      <label className="grid gap-1.5">
        <span className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 uppercase">
          The workflow that hurts
        </span>
        <Textarea
          name="workflow"
          required
          rows={compact ? 3 : 4}
          placeholder="What repeats. Who does it. What a good week looks like without it."
          className="min-h-20 resize-y"
        />
      </label>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          className="pressable h-10 rounded-full px-5 text-sm"
        >
          Request a diagnostic
        </Button>
        <a
          href={DIAGNOSTIC_MAILTO}
          className="text-sm text-zinc-400 underline-offset-4 hover:text-zinc-100 hover:underline"
        >
          {DIAGNOSTIC_EMAIL}
        </a>
      </div>
      {opened ? (
        <p className="text-xs text-zinc-500">
          Your mail client should open. If it does not, send the same note to{" "}
          {DIAGNOSTIC_EMAIL}.
        </p>
      ) : null}
    </form>
  );
}
