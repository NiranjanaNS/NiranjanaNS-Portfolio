import type { HTMLAttributes } from "react";

type CardVariant = "default" | "interactive";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const variantClasses: Record<CardVariant, string> = {
  default: "",
  interactive: "transition duration-200 hover:-translate-y-1 hover:border-primary/40",
};

export function Card({ className = "", variant = "default", ...props }: CardProps) {
  return (
    <div
      className={[
        "rounded-component border border-border bg-surface/80 p-5 text-text",
        "shadow-[0_16px_48px_rgba(15,23,42,0.28)] backdrop-blur",
        variantClasses[variant],
        className,
      ].join(" ")}
      {...props}
    />
  );
}
