import type { ReactNode } from "react";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "./footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <div className="pt-16">{children}</div>
      <Footer />
    </div>
  );
}
