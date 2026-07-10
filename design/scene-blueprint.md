# Scene Blueprint

## Purpose

This blueprint defines the complete world before any React components are written. Each scene
must answer what it communicates, what the visitor sees, how it moves, and why it exists.

## World Flow

```text
Loading
  |
Hero / Sunrise Base
  |
Forest / About
  |
University / Education
  |
Skills Forest
  |
Developer City
  |
Project Laboratory
  |
AI Research Center
  |
Engineering Room
  |
GitHub Galaxy
  |
Contact Camp
  |
Ending / Launch
```

## Scene 1: Loading

Purpose:

- Introduce the product identity.
- Give the world a deliberate starting point.
- Prepare the visitor for a cinematic but professional experience.

Environment:

- Deep blue background.
- Small particles.
- Thin glowing line forming the product name.

UI:

- Product name: NiranjanaNS Engineering Journey.
- Loading percentage.
- Skip option if loading is longer than expected.

Character:

- Not visible at first.
- Small silhouette appears at the end.

Animation:

- Logo draws itself.
- Particles drift slowly.
- Loading percentage counts up.
- Fade into Hero.

Timing:

- Target duration: 1500ms to 2500ms.
- Hard maximum: 3000ms.

Accessibility:

- Do not block users indefinitely.
- Respect reduced motion by showing a static brand screen.

## Scene 2: Hero / Sunrise Base

Purpose:

- Communicate name, role, and value proposition within 10 seconds.
- Give the visitor a clear path to begin.

Environment:

- Sunrise.
- Distant mountains.
- Soft clouds.
- Grass foreground.
- Subtle floating particles.

UI:

- Name.
- Preferred role title.
- Tagline.
- Begin Journey CTA.
- Resume, GitHub, LinkedIn, email shortcuts.

Character:

- Fixed near the lower third.
- Idle pose.
- Blinks occasionally.
- Hair and hoodie move subtly.

Animation:

- Title fades and rises.
- CTA slides in.
- Birds move across background.
- Clouds move slowly.

Engineering note:

- Hero must remain readable without animations.

## Scene 3: Forest / About

Purpose:

- Explain who Niranjana is, what she values, and what she is currently focused on.

Environment:

- Forest path.
- Wooden signboards.
- Campfire or warm light source.
- Moving leaves.
- Grass layers.

UI:

- Short bio.
- Location.
- Current focus.
- Interests.
- Engineering values.

Character:

- Walk state as the visitor scrolls.
- Pauses near each signboard.

Animation:

- Leaves drift.
- Signboards reveal as the character approaches.
- Campfire flickers subtly.

Content rule:

- Keep copy short and specific.

## Scene 4: University / Education

Purpose:

- Present academic background and learning path.

Environment:

- University building.
- Books.
- Graduation cap.
- Certificate element.
- Timeline path.

UI:

- College.
- Degree.
- Graduation year.
- Relevant coursework or learning areas.
- Current learning goals.

Character:

- Holds laptop or notebook.
- Looks toward timeline markers.

Animation:

- Books float slowly.
- Graduation cap rotates once.
- Timeline draws in from left to right.

Content rule:

- CGPA is optional and should be shown only if the user wants it public.

## Scene 5: Skills Forest

Purpose:

- Show technical skills through context instead of percentage bars.

Environment:

- Dark forest clearing.
- Glowing skill crystals.
- Small labels and light beams.

UI:

- Skill groups: frontend, backend, database, DevOps, AI, tools.
- Skill detail panel on hover/focus/click.
- Related projects.
- Experience notes.

Character:

- Inspects crystals.
- Backpack begins to show progress badges.

Animation:

- Crystals float.
- Selected crystal rotates slightly.
- Detail panel expands.

Interaction rule:

- Hover effects must also work through keyboard focus and touch selection.

## Scene 6: Developer City

Purpose:

- Show experience, growth, responsibilities, and milestones.

Environment:

- Developer city skyline.
- Buildings represent experiences or milestones.
- Lit windows.
- Screens and code panels.

UI:

- Experience cards.
- Responsibilities.
- Achievements.
- Milestone timeline.

Character:

- Walks along a city walkway.
- Pauses near highlighted buildings.

Animation:

- Windows light up when active.
- Achievement numbers count up only when visible.

Content rule:

- If no formal experience exists, use learning milestones, internships, contributions, and project ownership.

## Scene 7: Project Laboratory

Purpose:

- Become the strongest section of the portfolio.
- Turn projects into engineering case studies.

Environment:

- Laboratory corridor.
- Each project is a lab room.
- Screens, whiteboards, architecture panels.

UI:

- Flagship project rooms.
- Project overview.
- Stack.
- GitHub and live demo.
- Architecture.
- Challenges.
- Lessons learned.

Character:

- Opens room doors.
- Uses laptop near project console.

Animation:

- Lab door opens when selected.
- Project preview slides in.
- Architecture panels reveal in order.

Engineering rule:

- Every flagship project must explain problem, solution, decisions, tradeoffs, and future improvements.

## Scene 8: AI Research Center

Purpose:

- Show AI interests, experiments, and roadmap concepts clearly.

Environment:

- Neon research lab.
- Floating model panels.
- Assistant robot.
- Screens for AI experiments.

UI:

- AI integrations.
- OCR ideas.
- Recommendation ideas.
- Automation ideas.
- Roadmap labels for unfinished concepts.

Character:

- Works beside the assistant robot.
- Observes model panels.

Animation:

- Robot waves.
- Floating cards drift slowly.
- Roadmap chips pulse once when revealed.

Honesty rule:

- Planned ideas must be labeled as roadmap, not completed work.

## Scene 9: Engineering Room

Purpose:

- Prove engineering thinking beyond frontend visuals.

Environment:

- Command center.
- Architecture wall.
- API flow panels.
- Database diagrams.
- Deployment console.

UI:

- Folder structure.
- Auth flow.
- API flow.
- Database schema.
- Testing strategy.
- CI/CD and deployment plan.
- Backend architecture.

Character:

- Points to system diagrams.
- Backpack appears full of experience.

Animation:

- Diagrams draw in.
- System panels activate in sequence.
- Terminal-style text appears in short bursts only.

Engineering rule:

- Every technology must have a reason.

## Scene 10: GitHub Galaxy

Purpose:

- Make GitHub activity and repositories feel discoverable.

Environment:

- Space scene.
- Repository planets.
- Language stars.
- Contribution orbit lines.

UI:

- Featured repositories.
- Languages.
- Stars.
- Commit highlights.
- GitHub profile link.

Character:

- Travels in a small launch platform or floating walkway.

Animation:

- Repository planets orbit slowly.
- Selected repo expands into a panel.

Backend note:

- GitHub API sync belongs in a later backend sprint.

## Scene 11: Contact Camp

Purpose:

- Convert interest into action.

Environment:

- Calm camp at night.
- Stars.
- Soft firelight.
- Final path marker.

UI:

- Email.
- LinkedIn.
- GitHub.
- Resume.
- Contact form.
- Availability and timezone.

Character:

- Idle, relaxed.
- Waves on final CTA.

Animation:

- Campfire flickers.
- Stars twinkle.
- CTA glow appears on focus and hover.

Accessibility:

- Form must have visible labels and validation.

## Scene 12: Ending / Launch

Purpose:

- Close the journey with confidence.

Environment:

- Launch station.
- Rocket or light beam.
- Star field.

UI:

- Final message.
- Resume download.
- Contact CTA.
- Back to top.

Character:

- Looks toward launch station.
- Optional wave.

Animation:

- Gentle launch light.
- No long forced ending animation.

Success:

- Visitor has a clear next action.
