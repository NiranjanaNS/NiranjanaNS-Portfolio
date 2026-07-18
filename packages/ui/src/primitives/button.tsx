import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white shadow-[0_0_32px_rgba(59,130,246,0.28)]",
  secondary: "border border-border bg-surface text-text",
  ghost: "text-muted hover:text-text",
};

export function Button({
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex h-11 items-center justify-center rounded-component px-5 text-sm font-medium",
        "transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2",
        "focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none",
        "disabled:opacity-50",
        variantClasses[variant],
        className,
      ].join(" ")}
      type={type}
      {...props}
    />
  );
}
