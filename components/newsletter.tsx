import { Button } from "@/components/ui/button";
import { CONTACTS } from "@/lib/site";

const sectionLabel =
  "font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase";

const SUBSTACK = CONTACTS.find((item) => item.label === "Substack")!;

export function Newsletter() {
  return (
    <section id="notes" className="fade-in scroll-mt-12 py-16">
      <h2 className={sectionLabel}>Without You</h2>
      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        A Wednesday note on work that still needs you.
      </p>
      <div className="mt-6">
        <Button asChild variant="outline" className="h-9 rounded-full px-4">
          <a href={SUBSTACK.href} rel="noopener noreferrer">
            Subscribe on Substack
          </a>
        </Button>
      </div>
    </section>
  );
}
