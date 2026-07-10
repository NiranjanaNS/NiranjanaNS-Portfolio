# NiranjanaNS Portfolio

An engineering-focused portfolio built as a product, not just a personal website.

The goal is to demonstrate full-stack engineering ability through immersive storytelling,
strong documentation, production-quality UI, accessibility, performance, and clear project
case studies.

## Product Direction

**Tagline:** Building scalable software with modern web technologies.

The portfolio is designed as a horizontal journey through an engineering world:

1. Hero
2. About
3. Education
4. Skills Forest
5. Developer City
6. Project Laboratory
7. Engineering Hub
8. AI Research Center
9. Achievements
10. Contact

## Documentation

Start here:

- [Vision](docs/01-Vision.md)
- [Product Requirements](docs/02-PRD.md)
- [PRD PDF](docs/NiranjanaNS_Portfolio_PRD_v1.pdf)
- [Goals](docs/03-Goals.md)
- [User Personas](docs/04-User-Personas.md)
- [User Journey](docs/05-User-Journey.md)
- [Site Map](docs/06-Site-Map.md)
- [Design System](docs/07-Design-System.md)
- [Animation System](docs/08-Animation-System.md)
- [Technical Architecture](docs/09-Architecture.md)
- [Development Roadmap](docs/10-Development-Roadmap.md)
- [Deployment Plan](docs/11-Deployment.md)
- [Future Roadmap](docs/12-Future-Roadmap.md)
- [Decision Log](docs/13-Decision-Log.md)
- [Competitive Research](docs/Competitive-Research.md)
- [Animation Research](docs/Animation-Research.md)
- [Component Tree](docs/component-tree.md)
- [State Diagram](docs/state-diagram.md)
- [Interaction Map](docs/interaction-map.md)
- [Backend Architecture](docs/backend-architecture.md)
- [Scene Blueprint](design/scene-blueprint.md)
- [Character Sheet](design/character-sheet.md)
- [Animation Specification](design/animation-specification.md)

## Current Phase

Phase 2: UX, Design, and Architecture

This phase focuses on designing the experience before implementation:

- Finish the scene blueprint.
- Create low-fidelity wireframes.
- Define the character sheet.
- Create design tokens.
- Plan component structure.
- Map states and interactions.
- Define detailed animation behavior.

## Planned Stack

- Next.js 15
- NestJS
- TypeScript
- Tailwind CSS
- Shadcn UI
- GSAP + ScrollTrigger
- Lenis
- Framer Motion
- Lucide React
- React Hook Form + Zod
- Prisma
- PostgreSQL
- Vercel

## Wireframes

Low-fidelity Sprint 2 wireframes live in [wireframes](wireframes/).

Regenerate them with:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\generate-wireframes.ps1
```

## Success Standard

The finished portfolio should feel cinematic, but the lasting impression should be:

> This was engineered with care.

## Generate The PRD PDF

```bash
node scripts/generate-prd-pdf.mjs
```

This regenerates `docs/NiranjanaNS_Portfolio_PRD_v1.pdf` from `docs/02-PRD.md`.
