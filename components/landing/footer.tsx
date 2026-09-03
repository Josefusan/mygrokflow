import { FooterContacts } from "@/components/footer-contacts";
import { FadeUp } from "@/components/motion/fade-up";
import { NEWSLETTER } from "@/lib/content";
import { PROMISE, SITE_NAME } from "@/lib/site";
import { focusRing, PrimaryCta } from "./cta-buttons";
import { GrokMark } from "./grok-mark";

const heading = "font-mono text-[11px] uppercase text-(--mgf-muted)";
const link = `text-[13px] text-(--mgf-text) hover:opacity-60 ${focusRing}`;

/** Uncounted footer, id="contact". Newsletter and checklist links live here now. */
export function LandingFooter() {
  return (
    <footer
      id="contact"
      className="relative z-[2] scroll-mt-[70px] border-t border-(--mgf-border) bg-(--mgf-bg) px-8 pt-16 pb-10 max-[900px]:px-[18px]"
    >
      <div className="grid grid-cols-3 gap-12 max-[900px]:grid-cols-1 max-[900px]:gap-10">
        <FadeUp delay={0} className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-(--mgf-text)">
            <GrokMark className="text-(--mgf-text)" />
            {SITE_NAME}
          </span>
          <p className="max-w-[320px] text-[14px] leading-[1.65] text-(--mgf-muted)">
            {PROMISE}
          </p>
          <a
            href="/privacy"
            className={`font-mono text-[11px] text-(--mgf-muted) hover:text-(--mgf-text) ${focusRing}`}
          >
            Privacy
          </a>
        </FadeUp>

        <FadeUp delay={0.1} className="flex flex-col items-start gap-4">
          <h2 className={heading}>{NEWSLETTER.heading}</h2>
          <a
            href={NEWSLETTER.substack.href}
            rel="noopener noreferrer"
            className={link}
          >
            {NEWSLETTER.substack.label}
          </a>
          <a href={NEWSLETTER.checklist.href} className={link}>
            {NEWSLETTER.checklist.label}
          </a>
        </FadeUp>

        <FadeUp delay={0.2} className="flex flex-col items-start gap-4">
          <h2 className={heading}>Contact</h2>
          <FooterContacts />
        </FadeUp>
      </div>

      <div className="mt-16 flex items-center justify-between gap-4 border-t border-(--mgf-border) pt-6 max-[600px]:flex-col max-[600px]:items-start">
        <p className="font-mono text-[11px] text-(--mgf-muted)">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
        <PrimaryCta />
      </div>
    </footer>
  );
}
