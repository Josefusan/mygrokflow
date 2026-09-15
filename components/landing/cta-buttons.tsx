"use client";

import { useContent } from "@/components/i18n-provider";
import { CAL_URL } from "@/lib/site";

// The free lead magnet lives in the Playbook section; the secondary CTA scrolls
// to it rather than to the application funnel.
const PLAYBOOK_ANCHOR = "#playbook";

export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--mgf-accent)";

const pillBase = `inline-flex items-center justify-center whitespace-nowrap rounded-full border text-[12px] font-medium uppercase tracking-[0.08em] ${focusRing}`;

const pillSize = {
  default: "min-h-11 px-9 py-3.5",
  compact: "min-h-9 px-5 py-2.5",
} as const;

const pillVariant = {
  primary:
    "border-(--mgf-text) bg-(--mgf-text) text-(--mgf-bg) hover:opacity-85",
  secondary:
    "border-(--mgf-text)/35 bg-transparent text-(--mgf-text) hover:border-(--mgf-text) hover:bg-(--mgf-text) hover:text-(--mgf-bg)",
} as const;

export const textLink = `font-mono text-[12px] uppercase tracking-[0.08em] text-(--mgf-text) hover:opacity-60 ${focusRing}`;

type PillProps = {
  variant?: keyof typeof pillVariant;
  size?: keyof typeof pillSize;
  className?: string;
};

/** The conversion action: always "Book a call" → CAL_URL. */
export function PrimaryCta({
  variant = "primary",
  size = "default",
  className = "",
}: PillProps) {
  const { CTA_PRIMARY, CTA_PRIMARY_SHORT } = useContent();
  return (
    <a
      href={CAL_URL}
      rel="noopener noreferrer"
      className={`${pillBase} ${pillSize[size]} ${pillVariant[variant]} ${className}`}
    >
      {size === "compact" ? (
        <>
          <span className="max-[1100px]:hidden">{CTA_PRIMARY}</span>
          <span className="min-[1101px]:hidden">{CTA_PRIMARY_SHORT}</span>
        </>
      ) : (
        CTA_PRIMARY
      )}
    </a>
  );
}

/** The free lead magnet → the Playbook section, as an outline pill or a text link. */
export function SecondaryCta({
  variant = "pill",
  className = "",
}: {
  variant?: "pill" | "link";
  className?: string;
}) {
  const { CTA_SECONDARY } = useContent();
  const cls =
    variant === "link"
      ? `${textLink} ${className}`
      : `${pillBase} ${pillSize.default} ${pillVariant.secondary} ${className}`;
  return (
    <a href={PLAYBOOK_ANCHOR} className={cls}>
      {CTA_SECONDARY}
    </a>
  );
}

export function CtaRow({ secondary = "pill" }: { secondary?: "pill" | "link" }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 max-[900px]:gap-3">
      <PrimaryCta />
      <SecondaryCta variant={secondary} />
    </div>
  );
}
