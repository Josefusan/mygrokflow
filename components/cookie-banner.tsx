"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "mygrokflow-cookie-choice";

type Choice = "accept" | "manage";

export function CookieBanner() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [ready, setReady] = useState(false);
  const [managing, setManaging] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "accept" || stored === "manage") {
      setChoice(stored);
    }
    setReady(true);
  }, []);

  function save(next: Choice) {
    window.localStorage.setItem(STORAGE_KEY, next);
    setChoice(next);
    setManaging(false);
  }

  if (!ready || choice) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-[42rem] px-4 py-4">
        {managing ? (
          <>
            <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              Manage
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
              There&apos;s nothing extra to turn on. We don&apos;t set
              non-essential cookies.
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
              Essential: Vercel serving the page and request logs. Your choice is
              stored in this browser (`localStorage`), not as a tracking cookie.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                className="h-9 rounded-full px-4"
                onClick={() => save("manage")}
              >
                Save
              </Button>
              <Button
                variant="outline"
                className="h-9 rounded-full px-4"
                onClick={() => setManaging(false)}
              >
                Back
              </Button>
            </div>
          </>
        ) : (
          <>
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              We don&apos;t run analytics or marketing cookies. The host may set
              what&apos;s needed to serve the page. Accept saves that choice on this
              device.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                className="h-9 rounded-full px-4"
                onClick={() => save("accept")}
              >
                Accept
              </Button>
              <Button
                variant="outline"
                className="h-9 rounded-full px-4"
                onClick={() => setManaging(true)}
              >
                Manage
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
