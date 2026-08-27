const STEPS = [
  { id: "intake", label: "intake captured", state: "done" },
  { id: "scope", label: "scope written", state: "done" },
  { id: "build", label: "system compiling", state: "running" },
  { id: "handoff", label: "handoff queued", state: "idle" },
] as const;

export function RunLog() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="font-mono text-[11px] tracking-[0.16em] text-zinc-500 uppercase">
          Sample run log
        </p>
        <span className="rounded-full border border-zinc-800 px-2 py-0.5 font-mono text-[10px] tracking-wide text-zinc-500 uppercase">
          example
        </span>
      </div>
      <p className="mt-1 text-xs text-zinc-500">
        Not a client. A sequence a build often follows.
      </p>
      <ol className="mt-4 flex flex-col gap-3">
        {STEPS.map((step, index) => (
          <li key={step.id} className="flex items-start gap-3">
            <span className="relative mt-1.5 flex size-2.5 shrink-0">
              {step.state === "running" ? (
                <span className="run-dot absolute inset-0 rounded-full bg-zinc-100" />
              ) : (
                <span
                  className={
                    step.state === "done"
                      ? "size-2.5 rounded-full bg-zinc-400"
                      : "size-2.5 rounded-full border border-zinc-600"
                  }
                />
              )}
            </span>
            <div className="min-w-0 flex-1">
              <p className="flex items-center justify-between gap-2 text-[13px] text-zinc-200">
                <span>{step.label}</span>
                <span className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </p>
              {step.state === "running" ? (
                <p className="run-pulse mt-0.5 font-mono text-[10px] tracking-[0.14em] text-zinc-400 uppercase">
                  automations running
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
