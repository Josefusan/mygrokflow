import { FadeUp } from "@/components/motion/fade-up";
import { CTA_SECONDARY } from "@/lib/content";
import { APPLY_PATH, SITE_NAME } from "@/lib/site";
import { focusRing, PrimaryCta } from "./cta-buttons";

const LINKS = [
  ["Work", "#work"],
  ["Process", "#process"],
  ["Rates", "#rates"],
  ["Contact", "#contact"],
] as const;

const navLink = `font-mono text-[11px] tracking-[0.06em] text-(--mgf-text) hover:opacity-60 ${focusRing}`;

export function LandingNav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 top-0 z-10 flex items-center justify-between border-b border-(--mgf-border) bg-transparent px-8 py-5 max-[900px]:px-[18px] max-[900px]:py-4"
    >
      <FadeUp delay={0}>
        <a
          href="#top"
          className={`text-[13px] font-bold uppercase tracking-[0.12em] text-(--mgf-text) hover:opacity-60 max-[600px]:text-[12px] ${focusRing}`}
        >
          {SITE_NAME}
        </a>
      </FadeUp>

      <ul className="flex items-center gap-12 max-[900px]:hidden">
        {LINKS.map(([label, href], i) => (
          <li key={href}>
            <FadeUp delay={0.05 + i * 0.05}>
              <a href={href} className={navLink}>
                {label}
              </a>
            </FadeUp>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <FadeUp delay={0.3} className="max-[900px]:hidden">
          <a href={APPLY_PATH} className={navLink}>
            {CTA_SECONDARY}
          </a>
        </FadeUp>
        <FadeUp delay={0.35}>
          <PrimaryCta size="compact" />
        </FadeUp>
      </div>
    </nav>
  );
}
