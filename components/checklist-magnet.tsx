import { Button } from "@/components/ui/button";

const CHECKLIST_PDF = "/without-you-one-loop-audit.pdf";
const CHECKLIST_MD = "/without-you-one-loop-audit.md";

const sectionLabel =
  "font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase";

export function ChecklistMagnet() {
  return (
    <section id="checklist" className="fade-in scroll-mt-12 py-16">
      <h2 className={sectionLabel}>Without You — one-loop audit checklist</h2>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button asChild className="h-9 rounded-full px-4">
          <a href={CHECKLIST_PDF}>Get the checklist</a>
        </Button>
        <a
          href={CHECKLIST_MD}
          className="text-[13px] text-muted-foreground hover:text-foreground"
        >
          Plain text (.md)
        </a>
      </div>
    </section>
  );
}
