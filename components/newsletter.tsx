"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

const sectionLabel =
  "font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      setStatus(response.ok ? "ok" : "err");
      if (response.ok) setEmail("");
    } catch {
      setStatus("err");
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="notes" className="fade-in scroll-mt-12 py-16">
      <h2 className={sectionLabel}>Without You</h2>
      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        A Wednesday note on work that still needs you.
      </p>
      <form className="mt-6 flex flex-wrap gap-2" onSubmit={onSubmit}>
        <label className="sr-only" htmlFor="newsletter-email">
          Your email
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-9 min-w-0 flex-1 rounded-full border border-border bg-background px-4 text-[13px] text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring"
        />
        <Button
          type="submit"
          variant="outline"
          disabled={pending}
          className="h-9 rounded-full px-4"
        >
          Send me the next note.
        </Button>
      </form>
      {status === "ok" ? (
        <p className="mt-3 text-[13px] text-muted-foreground">
          Check your inbox to confirm.
        </p>
      ) : null}
      {status === "err" ? (
        <p className="mt-3 text-[13px] text-muted-foreground">
          That didn&apos;t go through. Try again.
        </p>
      ) : null}
    </section>
  );
}
