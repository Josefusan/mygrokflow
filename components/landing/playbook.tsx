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
  PLAYBOOK_NAME_PLACEHOLDER,
  PLAYBOOK_NOTE,
  PLAYBOOK_PHONE_PLACEHOLDER,
  PLAYBOOK_PLACEHOLDER,
  PLAYBOOK_SOCIAL_PLACEHOLDER,
} from "@/lib/content";
import { PLAYBOOK_PDF } from "@/lib/site";
import { emailLead } from "@/lib/web3forms";
import { focusRing } from "./cta-buttons";
import { Counter, SectionHead } from "./section-bits";

type State = "idle" | "submitting" | "done" | "error";

type Fields = {
  name: string;
  email: string;
  phone: string;
  social: string;
  company: string; // honeypot: real people leave this empty
};

const EMPTY: Fields = { name: "", email: "", phone: "", social: "", company: "" };

const inputClass = (invalid: boolean) =>
  `h-12 w-full rounded-full border bg-(--mgf-bg)/40 px-5 text-[14px] text-(--mgf-text) placeholder:text-(--mgf-muted) ${
    invalid ? "border-(--mgf-accent)" : "border-(--mgf-border)"
  } ${focusRing}`;

/**
 * Section 006. The lead magnet: a free PDF in exchange for name, email, phone,
 * and an Instagram or LinkedIn handle. On submit we POST the lead to our own
 * API (which emails and persists it), then deliver the PDF regardless, so the
 * download never breaks even when capture is unavailable.
 */
export function Playbook() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [state, setState] = useState<State>("idle");

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (state === "error") setState("idle");
  };

  function validate(f: Fields): boolean {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim());
    return Boolean(f.name.trim() && emailOk && f.phone.trim() && f.social.trim());
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate(fields)) {
      setState("error");
      return;
    }
    setState("submitting");
    // Honeypot filled means a bot: pretend it worked and send nothing.
    if (!fields.company) {
      const lead = {
        name: fields.name.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        social: fields.social.trim(),
      };
      // Email the lead (Web3Forms, browser-only) and persist it (our API) in
      // parallel. Both are best-effort: the asset is delivered either way.
      await Promise.all([
        emailLead(lead),
        fetch("/api/playbook", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        }).catch(() => undefined),
      ]);
    }
    // Open in a new tab from within the click handler so it is not blocked.
    window.open(PLAYBOOK_PDF, "_blank", "noopener,noreferrer");
    setState("done");
  }

  const invalid = state === "error";

  return (
    <section
      id="playbook"
      className="relative z-[1] scroll-mt-[70px] border-t border-(--mgf-border) bg-(--mgf-glass) px-8 pt-[70px] pb-20 max-[900px]:px-[18px]"
    >
      <Counter n={7} className="mb-5" />
      <SectionHead heading={PLAYBOOK_HEADING} note={PLAYBOOK_NOTE} tone="panel" />

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
            <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3" noValidate>
              <label htmlFor="playbook-name" className="sr-only">
                Your name
              </label>
              <input
                id="playbook-name"
                type="text"
                autoComplete="name"
                placeholder={PLAYBOOK_NAME_PLACEHOLDER}
                value={fields.name}
                onChange={set("name")}
                aria-invalid={invalid && !fields.name.trim()}
                className={inputClass(invalid && !fields.name.trim())}
              />

              <label htmlFor="playbook-email" className="sr-only">
                Email
              </label>
              <input
                id="playbook-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder={PLAYBOOK_PLACEHOLDER}
                value={fields.email}
                onChange={set("email")}
                aria-invalid={invalid && !fields.email.trim()}
                className={inputClass(invalid && !fields.email.trim())}
              />

              <label htmlFor="playbook-phone" className="sr-only">
                Mobile number
              </label>
              <input
                id="playbook-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder={PLAYBOOK_PHONE_PLACEHOLDER}
                value={fields.phone}
                onChange={set("phone")}
                aria-invalid={invalid && !fields.phone.trim()}
                className={inputClass(invalid && !fields.phone.trim())}
              />

              <label htmlFor="playbook-social" className="sr-only">
                Instagram @ or LinkedIn URL
              </label>
              <input
                id="playbook-social"
                type="text"
                autoComplete="off"
                placeholder={PLAYBOOK_SOCIAL_PLACEHOLDER}
                value={fields.social}
                onChange={set("social")}
                aria-invalid={invalid && !fields.social.trim()}
                className={inputClass(invalid && !fields.social.trim())}
              />

              {/* Honeypot: hidden from people, tempting to bots. */}
              <div aria-hidden="true" className="hidden">
                <label htmlFor="playbook-company">Company</label>
                <input
                  id="playbook-company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={fields.company}
                  onChange={set("company")}
                />
              </div>

              <button
                type="submit"
                disabled={state === "submitting"}
                className={`mt-1 inline-flex h-12 w-full items-center justify-center rounded-full border border-(--mgf-accent) bg-(--mgf-accent) text-[11px] font-semibold uppercase tracking-[0.08em] text-(--mgf-bg) hover:opacity-90 disabled:opacity-60 ${focusRing}`}
              >
                {state === "submitting" ? "Sending…" : PLAYBOOK_CTA}
              </button>

              {invalid ? (
                <p
                  role="alert"
                  className="text-[12px] leading-[1.5] text-(--mgf-accent)"
                >
                  {PLAYBOOK_ERROR}
                </p>
              ) : (
                <p className="text-[12px] leading-[1.5] text-(--mgf-muted)">
                  {PLAYBOOK_FINE_PRINT}
                </p>
              )}
            </form>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
