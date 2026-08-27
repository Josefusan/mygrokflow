import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("size-7", className)}
    >
      <rect width="32" height="32" rx="6" className="fill-card" />
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="5.5"
        className="stroke-border"
      />
      <path
        d="M8 23V9l8 8 8-8v14"
        className="stroke-foreground"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
