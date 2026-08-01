import Link from "next/link";

export function Logo() {
  return (
    <Link
      aria-label="NiranjanaNS Engineering Journey home"
      className="group inline-flex items-center gap-3"
      href="/"
    >
      <span className="flex size-9 items-center justify-center rounded-component border border-primary/40 bg-primary/10 font-heading text-sm font-semibold text-primary">
        N
      </span>
      <span className="hidden font-heading text-sm font-semibold tracking-wide text-text sm:inline">
        NiranjanaNS
      </span>
    </Link>
  );
}
