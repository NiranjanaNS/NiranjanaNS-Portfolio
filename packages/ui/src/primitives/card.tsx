import type { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={[
        "rounded-component border border-border bg-surface/80 p-5 text-text",
        "shadow-[0_16px_48px_rgba(15,23,42,0.28)] backdrop-blur",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
