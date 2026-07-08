# Technical Architecture

## Planned Stack

- Framework: Next.js 15
- Language: TypeScript
- Styling: Tailwind CSS
- Components: Shadcn UI
- Animation: GSAP + ScrollTrigger, Framer Motion
- Smooth Scroll: Lenis
- Icons: Lucide React
- Forms: React Hook Form + Zod
- Deployment: Vercel

## Folder Structure

```text
src/
  app/
  components/
    ui/
    layout/
    navigation/
    sections/
    character/
    animations/
  features/
    hero/
    about/
    education/
    skills/
    projects/
    engineering/
    ai/
    achievements/
    contact/
  hooks/
  lib/
  data/
  types/
  utils/
  styles/
```

## Architecture Principles

- Shared UI belongs in `components/ui`.
- Portfolio-specific reusable pieces belong in `components/sections`, `components/character`, and
  `components/animations`.
- Scene-specific logic belongs inside `features`.
- Content should live in structured data files where possible.
- Animation setup should be isolated from content components.
- Components should be accessible by default.

## Data Files

Planned content modules:

- `site.ts`
- `navigation.ts`
- `skills.ts`
- `projects.ts`
- `education.ts`
- `achievements.ts`
- `social-links.ts`

## Rendering Strategy

- Use static rendering for most portfolio content.
- Use client components only where interaction or animation requires them.
- Lazy-load heavy animated scenes.
- Prefer server components for static content sections.

## Animation Architecture

Suggested modules:

- `useLenis`
- `useReducedMotion`
- `useScrollVelocity`
- `ScrollWorld`
- `ParallaxLayer`
- `Scene`

GSAP setup should be centralized so scenes do not each create disconnected scroll behavior.

## Accessibility Architecture

- Maintain semantic section landmarks.
- Provide skip links.
- Ensure keyboard navigation for project and skill interactions.
- Avoid hover-only content.
- Respect reduced-motion preferences.
- Test focus order after animation is added.

## Performance Architecture

- Optimize fonts with Next.js font loading.
- Use optimized images.
- Lazy-load heavy visuals.
- Keep animation layers GPU-friendly.
- Avoid large JavaScript bundles for content that can be static.
- Audit bundle size before launch.

## Deployment Architecture

Target deployment: Vercel.

Release checks:

- Build passes.
- Typecheck passes.
- Lint passes.
- Lighthouse audit completed.
- Links verified.
- Resume download verified.
