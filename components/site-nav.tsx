"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  House,
  Layers,
  Mail,
  Route,
  Users,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Mark } from "@/components/mark";
import { DIAGNOSTIC_MAILTO, NAV_ITEMS, SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

const ICONS = {
  top: House,
  for: Users,
  get: Layers,
  how: Route,
  examples: Workflow,
} as const;

export function SiteNav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.id);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-zinc-800 bg-black/85 px-4 py-3 backdrop-blur-md lg:hidden">
        <a href="#top" className="flex items-center gap-2">
          <Mark className="size-7" />
          <span className="text-sm font-medium tracking-tight">{SITE_NAME}</span>
        </a>
        <Button asChild size="sm" className="pressable rounded-full px-3">
          <a href={DIAGNOSTIC_MAILTO}>
            Request a diagnostic
            <ArrowUpRight data-icon="inline-end" />
          </a>
        </Button>
      </header>

      <nav
        aria-label="Primary"
        className="hidden h-screen sticky top-0 flex-col justify-between py-6 pr-4 lg:flex"
      >
        <div className="flex flex-col gap-6">
          <a href="#top" className="flex items-center gap-3 px-2">
            <Mark />
            <span className="text-[15px] font-medium tracking-tight">
              {SITE_NAME}
            </span>
          </a>
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = ICONS[item.id];
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-3 rounded-full px-3 py-2.5 text-[15px] transition-colors",
                      isActive
                        ? "bg-zinc-900 font-semibold text-zinc-50"
                        : "text-zinc-400 hover:bg-zinc-900/70 hover:text-zinc-50",
                    )}
                  >
                    <Icon
                      className={cn("size-[18px]", isActive && "text-zinc-50")}
                      strokeWidth={isActive ? 2.4 : 1.8}
                    />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="px-1">
          <Button asChild className="pressable h-11 w-full rounded-full text-sm">
            <a href={DIAGNOSTIC_MAILTO}>
              <Mail data-icon="inline-start" />
              Request a diagnostic
            </a>
          </Button>
        </div>
      </nav>
    </>
  );
}
