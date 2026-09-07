import { CTA_PRIMARY, CTA_SECONDARY } from "@/lib/content";
import { APPLY_PATH, CAL_URL } from "@/lib/site";

export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--mgf-accent)";

const pillBase = `inline-flex items-center justify-center rounded-full border text-[11px] font-medium uppercase tracking-[0.08em] ${focusRing}`;

const pillSize = {
  default: "min-h-11 px-9 py-3.5",
  compact: "min-h-9 px-5 py-2.5",
} as const;

const pillVariant = {
  primary:
    "border-(--mgf-text) bg-(--mgf-text) text-(--mgf-bg) hover:border-white hover:bg-white",
  secondary:
    "border-white/35 bg-transparent text-(--mgf-text) hover:border-(--mgf-text) hover:bg-(--mgf-text) hover:text-(--mgf-bg)",
} as const;

export const textLink = `font-mono text-[11px] uppercase tracking-[0.08em] text-(--mgf-text) hover:opacity-60 ${focusRing}`;

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
  return (
    <a
      href={CAL_URL}
      rel="noopener noreferrer"
      className={`${pillBase} ${pillSize[size]} ${pillVariant[variant]} ${className}`}
    >
      {CTA_PRIMARY}
    </a>
  );
}

/** "Apply" → /apply (the application funnel), as an outline pill or a plain text link. */
export function SecondaryCta({
  variant = "pill",
  className = "",
}: {
  variant?: "pill" | "link";
  className?: string;
}) {
  const cls =
    variant === "link"
      ? `${textLink} ${className}`
      : `${pillBase} ${pillSize.default} ${pillVariant.secondary} ${className}`;
  return (
    <a href={APPLY_PATH} className={cls}>
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
