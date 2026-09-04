import type { Metadata } from "next";
import {
  CartDiagram,
  ContentDiagram,
  CrmDiagram,
  FxDiagram,
  KnowledgeDiagram,
  LeadGenDiagram,
  OpsDiagram,
  ReportingDiagram,
  RestockDiagram,
  ScreeningDiagram,
  SupportDiagram,
  TradingDiagram,
  TriageDiagram,
} from "@/components/landing/diagrams";

export const metadata: Metadata = {
  title: "Diagram library · MyGrokFlow",
  robots: { index: false, follow: false },
};

const ITEMS = [
  { key: "leadgen", title: "AI Lead Generation", Diagram: LeadGenDiagram },
  { key: "support", title: "AI Customer Service", Diagram: SupportDiagram },
  { key: "ops", title: "Ops & workflow automation", Diagram: OpsDiagram },
  { key: "reporting", title: "AI Reporting", Diagram: ReportingDiagram },
  { key: "screening", title: "Recruiting / Screening", Diagram: ScreeningDiagram },
  { key: "content", title: "Content / Outbound", Diagram: ContentDiagram },
  { key: "knowledge", title: "Knowledge / RAG", Diagram: KnowledgeDiagram },
  { key: "triage", title: "Inbox Triage", Diagram: TriageDiagram },
  { key: "restock", title: "Restock Alerts (eComm)", Diagram: RestockDiagram },
  { key: "cart", title: "eComm Customer Service", Diagram: CartDiagram },
  { key: "crm", title: "CRM Hygiene (B2B SaaS)", Diagram: CrmDiagram },
  { key: "fx", title: "Crypto / Cross-Border FX", Diagram: FxDiagram },
  { key: "trading", title: "Backtesting Trading Desk", Diagram: TradingDiagram },
] as const;

/** Internal review gallery for the diagram library (noindex). */
export default function DiagramLibrary() {
  return (
    <main className="mgf-landing min-h-svh px-8 py-16 max-[900px]:px-[18px]">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-(--mgf-accent)">
        Diagram library
      </p>
      <h1 className="mt-2 text-[clamp(26px,3vw,42px)] font-bold tracking-[-0.01em] text-(--mgf-text)">
        Thirteen on-brand system diagrams
      </h1>
      <p className="mt-3 max-w-[60ch] text-[14px] leading-[1.6] text-(--mgf-muted)">
        Same green / black language as the cards. The key next to each title is
        its <code>media</code> value. Point any Work card at one to swap it in.
      </p>

      <ul className="mt-10 grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
        {ITEMS.map(({ key, title, Diagram }) => (
          <li
            key={key}
            className="overflow-hidden rounded-[20px] border border-(--mgf-border) bg-(--mgf-card)"
          >
            <Diagram />
            <div className="px-6 py-5">
              <h2 className="text-[16px] font-semibold text-(--mgf-text)">{title}</h2>
              <p className="mt-1 font-mono text-[11px] text-(--mgf-muted)">media: {key}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
