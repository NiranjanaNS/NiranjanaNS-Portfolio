import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  isLoading?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white shadow-[0_0_32px_rgba(59,130,246,0.28)]",
  secondary: "border border-border bg-surface text-text",
  ghost: "text-muted hover:bg-surface hover:text-text",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 gap-2 px-3 text-xs",
  md: "h-11 gap-2.5 px-5 text-sm",
  lg: "h-12 gap-3 px-6 text-base",
};

export function Button({
  children,
  className = "",
  disabled,
  icon,
  isLoading = false,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center rounded-component font-medium",
        "transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2",
        "focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none",
        "disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(" ")}
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      {isLoading ? <span aria-hidden="true">Loading...</span> : icon}
      <span>{children}</span>
    </button>
  );
}
