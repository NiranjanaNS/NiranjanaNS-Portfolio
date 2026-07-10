# State Diagram

## Purpose

This document defines the major UI and application states before implementation. It prevents the
scroll experience from becoming a pile of disconnected animations.

## Top-Level State Flow

```text
Initial
  |
Loading
  |
Ready
  |
JourneyStarted
  |
Scrolling
  |
SceneActive
  |
InteractionActive
  |
Completed
```

## Detailed Flow

```text
Initial
  -> Loading
  -> Ready
  -> IdleOnHero
  -> JourneyStarted
  -> Scrolling
  -> SceneActive(sceneId)
  -> AnimationTriggered(animationId)
  -> InteractionActive(type)
  -> InteractionClosed
  -> Scrolling
  -> ContactReached
  -> Completed
```

## Interaction States

### Skill Detail

```text
Closed
  -> HoverPreview
  -> FocusPreview
  -> Open
  -> Closed
```

Rules:

- Hover preview must not be the only access path.
- Keyboard focus and touch selection must open equivalent information.

### Project Room

```text
Closed
  -> Preview
  -> Open
  -> CaseStudyExpanded
  -> Closed
```

Rules:

- Opening a project should not trap keyboard users.
- Escape should close dialogs or expanded panels.

### Contact Form

```text
Idle
  -> Editing
  -> Validating
  -> Submitting
  -> Success
  -> Idle
```

Error path:

```text
Submitting
  -> Error
  -> Editing
```

## Character States

```text
Idle
  -> Walking
  -> Running
  -> Paused
  -> Thinking
  -> Waving
```

Rules:

- Scroll velocity can influence walking or running.
- Reduced motion forces static or minimal states.

## Reduced Motion State

```text
MotionAllowed
  -> ReducedMotion
```

When reduced motion is active:

- Disable parallax.
- Disable character walk cycles.
- Replace scene transitions with static sections or simple opacity changes.
- Keep all content accessible.

## Backend-Aware Future States

These states belong to later backend sprints:

```text
AuthLoggedOut
  -> AuthLoggingIn
  -> AuthLoggedIn
  -> DashboardReady
```

```text
ContactRequestCreated
  -> EmailQueued
  -> EmailSent
  -> AdminReviewed
```

```text
GitHubSyncIdle
  -> GitHubSyncRunning
  -> GitHubSyncComplete
  -> GitHubSyncFailed
```
