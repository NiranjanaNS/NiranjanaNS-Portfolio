# Site Map

## Primary Site Structure

```text
Home
About
Skills
Projects
Engineering
Contact
Resume
404
```

## Route Plan

### `/`

The main immersive portfolio experience.

Sections:

- Hero
- About
- Education
- Skills Forest
- Developer City
- Project Laboratory
- Engineering Hub
- AI Research Center
- Achievements
- Contact

### `/projects`

Optional future route for all project case studies.

Purpose:

- Give recruiters and interviewers a direct way to explore technical work.
- Support deeper project pages if the home journey becomes too dense.

### `/projects/[slug]`

Optional future route for individual project case studies.

Suggested sections:

- Problem
- Goals
- Features
- Architecture
- Tech stack
- Data model
- API flow
- Authentication
- Challenges
- Lessons learned
- Future improvements
- Links

### `/engineering-notes`

Optional future route for engineering notes.

Purpose:

- Show thinking process.
- Turn development journal insights into polished case study material.
- Help with interview preparation.

### `/resume`

Resume route or redirect to a PDF stored in `public/`.

Purpose:

- Make resume sharing reliable.
- Support direct linking from LinkedIn, GitHub, and job applications.

### `/404`

Friendly not-found page.

Purpose:

- Keep the product polished even when a visitor reaches an invalid URL.

## Navigation Requirements

- Main navigation should prioritize Home, Projects, Engineering, Resume, and Contact.
- Mobile navigation must be simple and keyboard accessible.
- Contact and resume actions should never be hard to find.
- The main journey can be cinematic, but the navigation must remain practical.

## SEO Requirements

- Home page should communicate the portfolio clearly.
- Project routes should have unique titles and descriptions if added.
- Resume should be index-safe only if the final resume is intended to be public.
- Open Graph metadata should make the portfolio look professional when shared.
