import type { HTMLAttributes } from "react";

export function Badge({ className = "", ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={[
        "inline-flex w-fit items-center rounded-full border border-primary/40",
        "bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-primarySoft",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
