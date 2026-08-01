import { Github, Moon, ScrollText } from "lucide-react";
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
        <div className="hidden items-center gap-6 md:flex">
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
            className={iconLinkClass}
            href={externalLinks.github}
            rel="noreferrer"
            target="_blank"
          >
            <Github aria-hidden="true" size={18} />
          </Link>
          <Link aria-label="Open resume" className={iconLinkClass} href={externalLinks.resume}>
            <ScrollText aria-hidden="true" size={18} />
          </Link>
          <button aria-label="Dark theme active" className={iconLinkClass} type="button">
            <Moon aria-hidden="true" size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
}
