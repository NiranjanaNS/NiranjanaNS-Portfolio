# Backend Architecture Decision

## Decision

Use NestJS for the backend when the project reaches the backend phase.

## Why Not Express For This Project

Express is excellent for small APIs and quick prototypes, but this portfolio is intended to show
engineering growth and product architecture. NestJS gives the backend a clearer structure for a
portfolio that may include authentication, CMS features, analytics, GitHub sync, and an admin
dashboard.

## Why NestJS

- First-class TypeScript.
- Feature-based modules.
- Strong architecture conventions.
- Built-in dependency injection.
- Good testing support.
- Good fit for enterprise-style APIs.
- Swagger support for API documentation.

## Planned Backend Features

### Contact Form

Flow:

```text
Visitor
  -> Next.js form
  -> NestJS API
  -> Validation
  -> Database
  -> Email service
  -> Admin dashboard
```

### Admin Dashboard

Flow:

```text
Admin login
  -> JWT auth
  -> Dashboard
  -> Manage projects
  -> Manage skills
  -> Publish updates
```

### Blog or Engineering Notes CMS

Flow:

```text
Admin writes note
  -> Save draft
  -> Publish
  -> Portfolio updates without redeploy
```

### Visitor Analytics

Track privacy-friendly metrics:

- Visited sections.
- Resume downloads.
- Project clicks.
- Device type.
- Referrer.

### GitHub Sync

Fetch and cache:

- Repositories.
- Stars.
- Languages.
- Recent commits.

## Planned Backend Stack

- NestJS.
- TypeScript.
- Prisma.
- PostgreSQL.
- Redis.
- JWT and Passport.
- Swagger.
- Docker.

## Technologies To Delay

RabbitMQ:

- Add only if background jobs become real, such as email queueing, GitHub sync jobs, or image
  processing.

WebSockets:

- Add only for real-time admin notifications or live visitor counts.

Redis:

- Add when caching GitHub API results, analytics summaries, or rate-limited data.

## Future Monorepo Structure

```text
apps/
  web/
  api/
packages/
  ui/
  types/
  config/
docker/
docs/
```

## Recommendation

Use pnpm workspaces first. It is simpler than a full Turborepo setup while still preparing the
repository for a professional monorepo.

## Rule

Every backend technology must answer:

> Why does this exist in the system?
