# Interaction Map

## Purpose

This document defines how visitors interact with the portfolio across mouse, keyboard, touch,
scroll, resize, and future backend-powered features.

## Global Interactions

### Scroll

Action:

- Vertical page scroll drives horizontal world movement.

Expected result:

- Active scene changes.
- Character state updates.
- Background layers move at different speeds.

Accessibility:

- Native scroll should still feel predictable.
- Reduced-motion users receive a simpler stacked experience.

### Keyboard

Required support:

- Tab through navigation.
- Activate buttons and links with Enter or Space.
- Close dialogs with Escape.
- Reach all skill and project details.

Expected result:

- Focus states are visible.
- No content is hover-only.

### Touch

Required support:

- Tap to open skill details.
- Tap to open project rooms.
- Swipe/scroll naturally.
- Large enough touch targets.

Expected result:

- Mobile users can access the full portfolio without mouse interactions.

### Resize

Action:

- Browser width or orientation changes.

Expected result:

- Scene layout recalculates.
- Horizontal world adapts.
- Text remains readable.
- No overlapping UI.

## Scene Interactions

### Loading

- Skip loading if it exceeds the expected duration.
- Respect reduced motion.

### Hero

- Begin Journey scrolls to the next scene.
- Resume opens or downloads resume.
- Social links open external profiles.

### About

- Signboards reveal concise information.
- Keyboard focus reveals the same information as hover.

### Education

- Timeline markers reveal details.
- Timeline remains readable without animation.

### Skills

- Hover/focus/tap a crystal to reveal details.
- Select a skill to show related projects.
- Filter by skill category if needed.

### Projects

- Select a lab room to preview project.
- Open project case study.
- Use GitHub and live demo links.
- Close expanded project with Escape or close button.

### Engineering

- Select architecture panels.
- Toggle between auth flow, API flow, database, deployment, and testing.

### AI Research

- Select AI experiment cards.
- Roadmap concepts are visibly labeled.

### GitHub Galaxy

- Select repository planet.
- Open GitHub link.
- Future backend: refresh synced GitHub data.

### Contact

- Fill contact form.
- Validate fields.
- Submit message.
- Show success or error state.
- Resume and social links remain available.

## Micro-Interactions

- Buttons lift slightly on hover.
- Icon buttons show tooltip on hover and focus.
- Cards can tilt subtly only when it does not affect readability.
- Active navigation marker updates as scenes change.
- Count-up numbers only animate once and only when visible.

## Interaction Rules

- Every interaction must have a keyboard equivalent.
- Every hover reveal must have a touch equivalent.
- Motion should provide feedback, not hide information.
- Form validation should be clear and specific.
- External links should be visually recognizable.
