# Deployment Plan

## Target Platform

Vercel.

## Deployment Goals

- Fast production builds.
- Reliable preview deployments.
- Easy rollback.
- Strong SEO defaults.
- Clear environment variable management if future features require it.

## Environments

### Local

Used for development and testing.

Expected commands after app setup:

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

### Preview

Created automatically for pull requests or pushed branches.

Purpose:

- Review UI changes.
- Test responsive layouts.
- Run Lighthouse checks before production.

### Production

The public portfolio URL.

Purpose:

- Recruiter and hiring manager access.
- Resume and profile linking.
- Long-term project showcase.

## Pre-Deployment Checklist

- Build passes.
- Typecheck passes.
- Lint passes.
- No critical console errors.
- Resume link works.
- GitHub and LinkedIn links work.
- Email link works.
- Metadata is configured.
- Mobile layout is checked.
- Keyboard navigation is checked.
- Reduced-motion behavior is checked.

## Performance Checklist

- Images are optimized.
- Heavy animation scenes are lazy-loaded.
- Fonts are optimized.
- Bundle size is reviewed.
- Lighthouse Performance target: 95+.

## Accessibility Checklist

- Semantic landmarks exist.
- Focus states are visible.
- All interactive controls are keyboard reachable.
- Meaningful images have alt text.
- Motion respects `prefers-reduced-motion`.
- Lighthouse Accessibility target: 95+.

## SEO Checklist

- Title and description are clear.
- Open Graph metadata is present.
- Sitemap is generated if multiple routes exist.
- Robots configuration is correct.
- Lighthouse SEO target: 95+.

## Rollback Plan

If production breaks:

1. Revert to the previous stable Vercel deployment.
2. Create a fix branch.
3. Document the issue in the decision log if it reveals a larger technical risk.
4. Add a regression check if possible.
