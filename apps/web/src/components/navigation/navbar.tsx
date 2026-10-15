import { Github } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { externalLinks, navigationItems } from "@/data/navigation";

const iconLinkClass =
  "inline-flex size-10 items-center justify-center rounded-component text-muted transition hover:bg-surface hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Logo />
        <div className="flex items-center gap-5 sm:gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              className="text-sm text-muted transition hover:text-text"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            aria-label="Open GitHub profile"
            title="Open GitHub profile"
            className={iconLinkClass}
            href={externalLinks.github}
            rel="noreferrer"
            target="_blank"
          >
            <Github aria-hidden="true" size={18} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
