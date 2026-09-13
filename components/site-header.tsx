import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { CAL_URL, SITE_NAME } from "@/lib/site";

export function SiteHeader({ home = false }: { home?: boolean }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-[42rem] items-center justify-between px-4">
        {home ? (
          <a href="#top" className="text-sm font-medium tracking-tight">
            {SITE_NAME}
          </a>
        ) : (
          <Link href="/" className="text-sm font-medium tracking-tight">
            {SITE_NAME}
          </Link>
        )}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="h-9 rounded-full px-4">
            <a href={CAL_URL} target="_blank" rel="noopener noreferrer">
              Book a strategy call
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
