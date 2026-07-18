# Design System

## Design Principles

- Content first, motion second.
- Premium, minimal, and engineering-focused.
- Consistent spacing and type scale.
- Strong contrast and readable text.
- Components should feel reusable, not one-off.
- Every visual effect should support orientation, hierarchy, or feedback.

## Color Tokens

| Token      | Hex       | Use                                 |
| ---------- | --------- | ----------------------------------- |
| Background | `#050816` | Main page background                |
| Surface    | `#0F172A` | Section surfaces and deep panels    |
| Card       | `#111827` | Cards and elevated UI               |
| Border     | `#1E293B` | Subtle dividers                     |
| Primary    | `#3B82F6` | Main actions and engineering accent |
| Secondary  | `#7C3AED` | Creative accent                     |
| Success    | `#22C55E` | Positive states                     |
| Warning    | `#F59E0B` | Warnings and attention states       |
| Error      | `#EF4444` | Error states                        |
| Text       | `#F8FAFC` | Primary text                        |
| Muted Text | `#94A3B8` | Secondary text                      |

## Typography

| Role    | Font           | Use                                |
| ------- | -------------- | ---------------------------------- |
| Heading | Space Grotesk  | Hero, section titles, major labels |
| Body    | Inter          | Paragraphs, labels, navigation     |
| Code    | JetBrains Mono | Code snippets, technical labels    |

## Type Scale

Initial scale:

- Display: 56px / 64px
- H1: 48px / 56px
- H2: 36px / 44px
- H3: 28px / 36px
- H4: 22px / 30px
- Body large: 18px / 30px
- Body: 16px / 26px
- Small: 14px / 22px
- Caption: 12px / 18px

Mobile type should use fixed responsive breakpoints, not viewport-width scaling.

## Spacing System

Use an 8px grid:

`8, 16, 24, 32, 40, 48, 64, 80, 96, 128`

## Radius

- Buttons: 8px
- Cards: 8px
- Inputs: 8px
- Modals and drawers: 8px to 12px if needed

Avoid overly rounded pill shapes unless the component is a chip or badge.

## Component Inventory

### Foundation

- Button
- Icon button
- Card
- Badge
- Chip
- Tooltip
- Dialog
- Drawer
- Input
- Textarea

### Navigation

- Navbar
- Mobile menu
- Journey progress indicator
- Section jump menu

### Portfolio Components

- Section header
- Timeline item
- Skill crystal
- Project lab room
- Project case study card
- Engineering diagram panel
- Architecture callout
- Social link
- Resume CTA

### Motion Components

- Character
- Parallax layer
- Floating particle
- Animated cloud
- Star field
- Skill crystal hover state
- Project door reveal

## Icon System

Use Lucide React as the primary icon library.

Do not mix icon libraries unless there is a strong reason.

## Interaction States

Every interactive element needs:

- Default
- Hover
- Focus-visible
- Active
- Disabled

Focus states must be visible and keyboard-friendly.
