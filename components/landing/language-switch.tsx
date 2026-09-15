"use client";

import { useRouter } from "next/navigation";
import { useContent, useLocale } from "@/components/i18n-provider";
import { LOCALE_LABELS, LOCALES, localePath, type Locale } from "@/lib/i18n";
import { focusRing } from "./cta-buttons";

/**
 * Locale select for the nav. Every option is written in its own language so a
 * visitor can find theirs without reading the current one.
 */
export function LanguageSwitch({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const { LANG_LABEL } = useContent();
  const router = useRouter();

  return (
    <label className={`relative inline-flex items-center ${className}`}>
      <span className="sr-only">{LANG_LABEL}</span>
      <select
        value={locale}
        aria-label={LANG_LABEL}
        onChange={(e) => {
          const next = e.target.value as Locale;
          router.push(localePath(next) + window.location.hash);
        }}
        className={`h-9 cursor-pointer appearance-none rounded-full border border-(--mgf-border) bg-transparent pr-7 pl-3.5 font-mono text-[12px] tracking-[0.04em] text-(--mgf-text) hover:border-(--mgf-text) ${focusRing}`}
      >
        {LOCALES.map((l) => (
          <option key={l} value={l}>
            {LOCALE_LABELS[l]}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 12 12"
        className="pointer-events-none absolute right-3 size-3 text-(--mgf-muted)"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M2.5 4.5 6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </label>
  );
}
