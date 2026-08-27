import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function FeedPost({
  id,
  initials,
  name,
  meta,
  children,
  className,
}: {
  id?: string;
  initials: string;
  name: string;
  meta: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      id={id}
      className={cn(
        "scroll-mt-20 border-b border-zinc-800 px-4 py-6 last:border-b-0 sm:px-6",
        className,
      )}
    >
      <div className="flex gap-3">
        <Avatar className="mt-0.5 bg-zinc-900">
          <AvatarFallback className="bg-zinc-900 font-mono text-[11px] tracking-wide text-zinc-200">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <h2 className="text-[15px] font-semibold tracking-tight text-zinc-50">
              {name}
            </h2>
            <span className="font-mono text-[11px] tracking-[0.08em] text-zinc-500 uppercase">
              {meta}
            </span>
          </div>
          <div className="mt-2">{children}</div>
        </div>
      </div>
    </article>
  );
}
