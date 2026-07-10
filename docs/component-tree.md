# Component Tree

## Purpose

This document plans the application structure before implementation. The goal is to keep the
portfolio maintainable as it grows from a static experience into a full-stack product.

## High-Level Tree

```text
App
  RootLayout
    Metadata
    Providers
      ThemeProvider
      MotionProvider
      SmoothScrollProvider
    SiteShell
      SkipLink
      Navigation
      JourneyProgress
      MainWorld
        LoadingScene
        ScrollWorld
          CharacterLayer
          SceneTrack
            HeroScene
            AboutScene
            EducationScene
            SkillsScene
            DeveloperCityScene
            ProjectLabScene
            AiResearchScene
            EngineeringScene
            GitHubGalaxyScene
            ContactScene
            EndingScene
          ForegroundLayer
          BackgroundLayer
        ReducedMotionFallback
      Footer
```

## Shared UI Components

```text
components/ui
  Button
  IconButton
  Badge
  Chip
  Card
  Tooltip
  Dialog
  Drawer
  Input
  Textarea
  Select
  Tabs
```

## Layout Components

```text
components/layout
  SiteShell
  SectionContainer
  SceneFrame
  ResponsiveGrid
```

## Navigation Components

```text
components/navigation
  Navbar
  MobileMenu
  JourneyProgress
  SectionJumpMenu
```

## Animation Components

```text
components/animations
  ScrollWorld
  SceneTrack
  ParallaxLayer
  ParticleField
  FloatingClouds
  StarField
  Reveal
```

## Character Components

```text
components/character
  Character
  CharacterShadow
  CharacterAccessory
  BackpackProgress
```

## Feature Components

```text
features/hero
  HeroScene
  HeroActions
  HeroBackground

features/about
  AboutScene
  AboutSignboard
  AboutTimeline

features/education
  EducationScene
  EducationTimeline
  CertificatePanel

features/skills
  SkillsScene
  SkillCrystal
  SkillDetailPanel
  SkillGroupFilter

features/projects
  ProjectLabScene
  ProjectRoom
  ProjectConsole
  ProjectCaseStudyPreview

features/engineering
  EngineeringScene
  ArchitecturePanel
  ApiFlowPanel
  DatabaseSchemaPanel

features/ai
  AiResearchScene
  AiModelCard
  RoadmapConceptCard

features/achievements
  AchievementsScene
  AchievementMarker

features/contact
  ContactScene
  ContactForm
  SocialLinks
  ResumeDownload
```

## Data Modules

```text
src/data
  site.ts
  navigation.ts
  skills.ts
  projects.ts
  education.ts
  achievements.ts
  social-links.ts
  scenes.ts
```

## Rules

- UI primitives should not know portfolio content.
- Feature components can know scene-specific content.
- Animation logic should be isolated and reusable.
- Data should be structured, not scattered across components.
- Components must support keyboard and reduced-motion behavior.
