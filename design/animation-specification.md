# Animation Specification

## Purpose

This document defines animation behavior in implementation-ready detail. Each animation includes
trigger, duration, easing, delay, repeat behavior, and performance notes.

## Easing Tokens

- Standard: `power3.out`
- Soft: `sine.out`
- Emphasis: `expo.out`
- Loop: `sine.inOut`

## Global Motion Rules

- UI feedback should usually stay under 300ms.
- Scene reveals should usually stay under 800ms.
- Avoid animating layout-heavy properties.
- Prefer `transform` and `opacity`.
- Respect `prefers-reduced-motion`.

## Loading

### Logo Draw

- Trigger: app load.
- Duration: 900ms.
- Ease: `power3.out`.
- Delay: 100ms.
- Repeat: none.
- Performance cost: low.

### Loading Percentage

- Trigger: app load.
- Duration: 1200ms.
- Ease: `sine.out`.
- Delay: 0ms.
- Repeat: none.
- Performance cost: low.

### Loading Fade Out

- Trigger: loading complete.
- Duration: 450ms.
- Ease: `power3.out`.
- Delay: 0ms.
- Repeat: none.
- Performance cost: low.

## Hero

### Hero Title Reveal

- Trigger: page ready.
- Duration: 800ms.
- Ease: `expo.out`.
- Delay: 150ms.
- Repeat: none.
- Performance cost: low.

### Hero Subtitle Reveal

- Trigger: page ready.
- Duration: 650ms.
- Ease: `power3.out`.
- Delay: 260ms.
- Repeat: none.
- Performance cost: low.

### Hero CTA Reveal

- Trigger: page ready.
- Duration: 550ms.
- Ease: `power3.out`.
- Delay: 360ms.
- Repeat: none.
- Performance cost: low.

### Cloud Drift

- Trigger: scene active.
- Duration: 18000ms.
- Ease: `sine.inOut`.
- Delay: 0ms.
- Repeat: infinite.
- Performance cost: low if transform-only.

## Character

### Idle Breathing

- Trigger: character visible.
- Duration: 2200ms.
- Ease: `sine.inOut`.
- Delay: 0ms.
- Repeat: infinite.
- Performance cost: low.

### Blink

- Trigger: timer.
- Duration: 120ms.
- Ease: `sine.out`.
- Delay: random between 2500ms and 6000ms.
- Repeat: intermittent.
- Performance cost: low.

### Walk Cycle

- Trigger: scroll velocity above idle threshold.
- Duration: linked to scroll velocity.
- Ease: linear sprite or timeline loop.
- Delay: 0ms.
- Repeat: while scrolling.
- Performance cost: medium.

### Run Cycle

- Trigger: high scroll velocity.
- Duration: linked to scroll velocity.
- Ease: linear sprite or timeline loop.
- Delay: 0ms.
- Repeat: while fast scrolling.
- Performance cost: medium.

## Scene Reveals

### Signboard Reveal

- Trigger: about scene enters active range.
- Duration: 550ms.
- Ease: `power3.out`.
- Delay: stagger 100ms.
- Repeat: once.
- Performance cost: low.

### Education Timeline Draw

- Trigger: education scene active.
- Duration: 900ms.
- Ease: `power3.out`.
- Delay: 150ms.
- Repeat: once.
- Performance cost: medium.

### Skill Crystal Float

- Trigger: skills scene active.
- Duration: 2600ms to 4200ms.
- Ease: `sine.inOut`.
- Delay: stagger 80ms.
- Repeat: infinite.
- Performance cost: medium.

### Skill Crystal Select

- Trigger: hover, focus, or tap.
- Duration: 220ms.
- Ease: `power3.out`.
- Delay: 0ms.
- Repeat: none.
- Performance cost: low.

### Project Door Open

- Trigger: project room selected.
- Duration: 650ms.
- Ease: `power3.out`.
- Delay: 0ms.
- Repeat: none.
- Performance cost: medium.

### Architecture Panel Reveal

- Trigger: engineering scene active.
- Duration: 600ms.
- Ease: `power3.out`.
- Delay: stagger 120ms.
- Repeat: once.
- Performance cost: low.

## Contact

### Campfire Flicker

- Trigger: contact scene active.
- Duration: 900ms.
- Ease: `sine.inOut`.
- Delay: 0ms.
- Repeat: infinite.
- Performance cost: low if opacity/scale only.

### Final CTA Glow

- Trigger: hover or focus.
- Duration: 240ms.
- Ease: `power3.out`.
- Delay: 0ms.
- Repeat: none.
- Performance cost: low.

## Reduced Motion

When reduced motion is enabled:

- Disable cloud drift.
- Disable particle drift.
- Disable character walk/run cycles.
- Disable parallax.
- Keep simple opacity reveals or static rendering.
