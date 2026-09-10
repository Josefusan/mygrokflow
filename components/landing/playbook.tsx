"use client";

import { useState } from "react";
import { FadeUp } from "@/components/motion/fade-up";
import {
  PLAYBOOK_BULLETS,
  PLAYBOOK_CTA,
  PLAYBOOK_DONE,
  PLAYBOOK_DONE_LINK,
  PLAYBOOK_DONE_NOTE,
  PLAYBOOK_ERROR,
  PLAYBOOK_FINE_PRINT,
  PLAYBOOK_HEADING,
  PLAYBOOK_LABEL,
  PLAYBOOK_PLACEHOLDER,
  PLAYBOOK_POWERED,
} from "@/lib/content";
import { BUTTONDOWN_EMBED_URL, BUTTONDOWN_REFER_URL, PLAYBOOK_PDF } from "@/lib/site";
import { focusRing } from "./cta-buttons";
import { Counter, SectionHead } from "./section-bits";

type State = "idle" | "submitting" | "done" | "error";

/**
 * Section 006. The lead magnet: a free PDF in exchange for an email. On submit
 * we attempt to capture the email to the list, then deliver the PDF regardless,
 * so the download never breaks even when capture is unavailable.
 */
export function Playbook() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value.includes("@") || !value.includes(".")) {
      setState("error");
      return;
    }
    setState("submitting");
    try {
      // Subscribe them to the Buttondown newsletter (which also fires
      // Buttondown's new-subscriber notification). no-cors keeps them on-page;
      // the response is opaque but the subscription still registers.
      await fetch(BUTTONDOWN_EMBED_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({ email: value }),
      });
    } catch {
      // Capture is best-effort; deliver the asset either way.
    }
    // Open in a new tab from within the click handler so it is not blocked.
    window.open(PLAYBOOK_PDF, "_blank", "noopener,noreferrer");
    setState("done");
  }

  return (
    <section
      id="playbook"
      className="relative z-[1] scroll-mt-[70px] border-t border-(--mgf-border) bg-(--mgf-glass) px-8 pt-[70px] pb-20 max-[900px]:px-[18px]"
    >
      <Counter n={7} className="mb-5" />
      <SectionHead heading={PLAYBOOK_HEADING} tone="panel" />

      <div className="grid grid-cols-2 items-start gap-8 max-[900px]:grid-cols-1">
        {/* What is inside */}
        <ul className="flex flex-col gap-4">
          {PLAYBOOK_BULLETS.map((line, i) => (
            <li key={line}>
              <FadeUp
                delay={0.3 + i * 0.08}
                className="flex gap-3 text-[14px] leading-[1.6] text-(--mgf-text)"
              >
                <span aria-hidden="true" className="text-(--mgf-accent)">
                  ✓
                </span>
                {line}
              </FadeUp>
            </li>
          ))}
        </ul>

        {/* The capture card */}
        <FadeUp
          delay={0.4}
          className="rounded-[20px] border border-(--mgf-accent) bg-(--mgf-card) p-7 shadow-[0_0_0_1px_var(--mgf-accent)]"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-(--mgf-accent)">
            {PLAYBOOK_LABEL}
          </p>

          {state === "done" ? (
            <div className="mt-5">
              <p className="text-[16px] font-semibold text-(--mgf-text)">
                {PLAYBOOK_DONE}
              </p>
              <p className="mt-2 text-[13px] leading-[1.6] text-(--mgf-muted)">
                {PLAYBOOK_DONE_NOTE}
              </p>
              <a
                href={PLAYBOOK_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex text-[13px] font-medium text-(--mgf-accent) underline underline-offset-4 hover:opacity-70 ${focusRing}`}
              >
                {PLAYBOOK_DONE_LINK}
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-5" noValidate>
              <label htmlFor="playbook-email" className="sr-only">
                Work email
              </label>
              <input
                id="playbook-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder={PLAYBOOK_PLACEHOLDER}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (state === "error") setState("idle");
                }}
                aria-invalid={state === "error"}
                className={`h-12 w-full rounded-full border border-(--mgf-border) bg-(--mgf-bg)/40 px-5 text-[14px] text-(--mgf-text) placeholder:text-(--mgf-muted) ${focusRing}`}
              />
              <button
                type="submit"
                disabled={state === "submitting"}
                className={`mt-3 inline-flex h-12 w-full items-center justify-center rounded-full border border-(--mgf-accent) bg-(--mgf-accent) text-[11px] font-semibold uppercase tracking-[0.08em] text-(--mgf-bg) hover:opacity-90 disabled:opacity-60 ${focusRing}`}
              >
                {state === "submitting" ? "Sending…" : PLAYBOOK_CTA}
              </button>
              {state === "error" ? (
                <p
                  role="alert"
                  className="mt-3 text-[12px] leading-[1.5] text-(--mgf-accent)"
                >
                  {PLAYBOOK_ERROR}
                </p>
              ) : (
                <p className="mt-3 text-[12px] leading-[1.5] text-(--mgf-muted)">
                  {PLAYBOOK_FINE_PRINT}
                </p>
              )}
            </form>
          )}

          <a
            href={BUTTONDOWN_REFER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-5 inline-flex text-[10px] uppercase tracking-[0.12em] text-(--mgf-muted) hover:text-(--mgf-text) ${focusRing}`}
          >
            {PLAYBOOK_POWERED}
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
