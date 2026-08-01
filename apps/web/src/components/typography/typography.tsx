import type { HTMLAttributes } from "react";

export function Heading({ className = "", ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={["font-heading text-4xl font-semibold leading-tight md:text-6xl", className].join(
        " ",
      )}
      {...props}
    />
  );
}

export function Paragraph({ className = "", ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={["text-base leading-7 text-muted md:text-lg md:leading-8", className].join(" ")}
      {...props}
    />
  );
}

export function Caption({ className = "", ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={["text-xs font-medium uppercase tracking-[0.08em] text-primary", className].join(
        " ",
      )}
      {...props}
    />
  );
}

export function CodeText({ className = "", ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <code className={["font-code text-sm text-primarySoft", className].join(" ")} {...props} />
  );
}
