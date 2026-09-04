import { FadeUp } from "@/components/motion/fade-up";
import { FAQ_HEADING, FAQ_NOTE, FAQS } from "@/lib/content";
import { Counter, SectionHead } from "./section-bits";

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/** Section 006. Honest Q&A that doubles as FAQPage structured data. */
export function Faq() {
  return (
    <section
      id="faq"
      className="relative z-[1] scroll-mt-[70px] border-t border-(--mgf-border) bg-(--mgf-glass) px-8 pt-[70px] pb-20 max-[900px]:px-[18px]"
    >
      <script
        type="application/ld+json"
        // Structured data for rich results; content mirrors the visible FAQ.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <Counter n={6} className="mb-5" />
      <SectionHead heading={FAQ_HEADING} note={FAQ_NOTE} tone="panel" uppercase />

      <ul className="mx-auto grid max-w-[820px] gap-3">
        {FAQS.map((f, i) => (
          <li key={f.q}>
            <FadeUp delay={0.3 + i * 0.06}>
              <details className="group rounded-[16px] border border-(--mgf-border) bg-(--mgf-card) px-6 py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[15px] font-semibold text-(--mgf-text) [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 font-mono text-[14px] text-(--mgf-accent) transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-(--mgf-muted)">
                  {f.a}
                </p>
              </details>
            </FadeUp>
          </li>
        ))}
      </ul>
    </section>
  );
}
