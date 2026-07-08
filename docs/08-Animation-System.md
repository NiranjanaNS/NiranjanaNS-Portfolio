# Animation System

## Principle

Animation should communicate state, guide attention, and support the journey. It should never
become the main product.

## Libraries

- GSAP + ScrollTrigger: scroll-driven world movement.
- Lenis: smooth scrolling.
- Framer Motion: component transitions and micro-interactions.

## Motion Rules

- UI interaction animations should usually stay under 600ms.
- Use consistent easing.
- Avoid infinite motion on important content.
- Respect `prefers-reduced-motion`.
- Ensure content remains usable when animations are reduced.
- Avoid scrolljacking that prevents normal user control.

## Scroll Experience

The page scrolls vertically, but the world moves horizontally.

Layer movement:

- Clouds: slow.
- Mountains: medium.
- Trees: faster.
- Ground: fastest.
- Character: fixed or semi-fixed with state changes.

## Character States

- Idle
- Walk
- Run
- Pause

Animation speed should respond to scroll velocity where practical.

## Scene Motions

### Hero

- Soft particle drift.
- Subtle cloud movement.
- CTA hover lift.

### About

- Leaves move gently.
- Signboards reveal on entry.
- Timeline items stagger in.

### Skills

- Crystals float slowly.
- Hover rotates and reveals metadata.
- Selected crystal expands into a detail panel.

### Projects

- Lab doors open on focus or selection.
- Project preview slides into view.
- Architecture panels reveal in sequence.

### Engineering Hub

- Diagrams draw in with simple line animation.
- Panels count or reveal as they enter viewport.

### AI Research Center

- Robot looks around subtly.
- Floating models drift.
- Cursor tracking should be gentle and optional.

### Contact

- Stars twinkle.
- Launch CTA receives subtle glow.

## Reduced Motion Strategy

When reduced motion is enabled:

- Disable parallax.
- Replace scroll-linked movement with static sections.
- Keep simple fade or instant transitions.
- Do not animate character walking.
- Preserve all content and navigation.

## Performance Rules

- Animate transform and opacity where possible.
- Avoid expensive layout animations.
- Lazy-load heavy sections.
- Use optimized image assets.
- Dynamically import Three.js only if a 3D scene is added later.
- Test on mobile early.
