import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import { externalLinks } from "@/data/navigation";
import sunrise from "../../../../public/images/sunrise-base.png";

export function HeroWorld() {
  return (
    <section className="hero-world" id="hero" aria-labelledby="hero-heading">
      <Image src={sunrise} alt="" fill priority sizes="100vw" className="hero-landscape" />
      <div className="hero-wash" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-eyebrow">01 / Sunrise Base</p>
        <h1 id="hero-heading">Niranjana NS.</h1>
        <p className="hero-role">A developer. Always becoming.</p>
        <p className="hero-introduction">
          From a curious idea to a working product.
          <br />
          My journey through code, systems, and everything in between.
        </p>
        <div className="hero-actions">
          <a className="hero-primary" href="#journey">
            Begin journey <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a
            className="hero-secondary"
            href={externalLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} aria-hidden="true" />
            GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero-caption" aria-hidden="true">
        <span>A little curiosity. A world to build.</span>
        <span>THE JOURNEY BEGINS HERE</span>
      </div>
    </section>
  );
}
