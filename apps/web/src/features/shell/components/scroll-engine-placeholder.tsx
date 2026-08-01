export function ScrollEnginePlaceholder({ progress }: { progress: number }) {
  return (
    <div className="rounded-component border border-border bg-surface/70 p-5 shadow-[0_16px_48px_rgba(15,23,42,0.28)]">
      <div className="mb-5 flex items-center justify-between text-sm text-muted">
        <span>Horizontal world placeholder</span>
        <span>{Math.round(progress * 100)}%</span>
      </div>
      <div className="relative h-56 overflow-hidden rounded-component border border-border bg-background">
        <div
          className="absolute inset-y-0 left-0 w-[180%] bg-[linear-gradient(90deg,#0F172A_0%,#111827_35%,#1E293B_70%,#050816_100%)]"
          style={{ transform: `translateX(-${progress * 35}%)` }}
        />
        <div className="absolute bottom-8 left-1/2 size-12 -translate-x-1/2 rounded-full border border-primary/50 bg-primary/20 shadow-[0_0_32px_rgba(59,130,246,0.45)]" />
        <div className="absolute inset-x-6 bottom-5 h-1 rounded-full bg-border">
          <div className="h-full rounded-full bg-primary" style={{ width: `${progress * 100}%` }} />
        </div>
      </div>
    </div>
  );
}
