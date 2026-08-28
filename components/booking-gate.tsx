"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CAL_URL } from "@/lib/site";

type BookingGateProps = {
  autoRedirect?: boolean;
  backHref: string;
  backLabel: string;
};

export function BookingGate({
  autoRedirect = false,
  backHref,
  backLabel,
}: BookingGateProps) {
  useEffect(() => {
    if (!autoRedirect) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setTimeout(() => {
      window.location.assign(CAL_URL);
    }, 1500);
    return () => window.clearTimeout(id);
  }, [autoRedirect]);

  return (
    <div className="mt-8 flex flex-col items-start gap-3">
      <Button asChild className="h-9 w-fit rounded-full px-4">
        <a href={CAL_URL}>Book a call</a>
      </Button>
      <Button
        asChild
        variant="ghost"
        className="h-9 w-fit rounded-full px-4 text-muted-foreground hover:text-foreground"
      >
        <Link href={backHref}>{backLabel}</Link>
      </Button>
    </div>
  );
}
