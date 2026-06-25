# DECISIONS.md — Architectural Decision Records

## ADR-001 — Theme token extension for Projects feature

**Date:** 2026-06-25
**Status:** Accepted

### Context
`styles/theme.ts` originally contained only `colors.primary` and `colors.secondary`. The Projects feature spec required styled-components with no hardcoded colors or font sizes, but the theme lacked background, card, spacing, and border-radius tokens needed by `ProjectCard` and the `/projects` page.

### Decision
Extended `styles/theme.ts` with:
- `colors.background` — page background
- `colors.cardBackground` — card surface color
- `colors.textMuted` — description text color
- `spacing` (sm, md, lg, xl) — layout spacing scale
- `borderRadius.card` — card corner radius

### Consequences
All new components reference only theme tokens. Existing components are unaffected. The theme is now the single source of truth for all visual values.

---

## ADR-002 — `InternalIconLink` separate styled component in Contact

**Date:** 2026-06-25
**Status:** Accepted

### Context
The existing `IconLink` in `Contact/styles.ts` is `styled.a`, typed for external links. The Projects button requires a Next.js `Link` for internal navigation. Using `as={Link}` on `styled.a` causes TypeScript prop-type conflicts.

### Decision
Added `InternalIconLink = styled(Link)` with identical CSS to `IconLink`. Kept `IconLink` unchanged to avoid breaking existing external links.

### Consequences
Minor style duplication between `IconLink` and `InternalIconLink`. Justified by TypeScript safety and open/closed principle — existing code is not modified, new behavior is added by extension.

---

## ADR-003 — `page.module.css` excluded for Projects page

**Date:** 2026-06-25
**Status:** Accepted

### Context
TASK-4 offered `page.module.css` OR `styles.ts` for the projects page layout. The SPEC constraint requires styled-components throughout the codebase.

### Decision
Used `app/projects/styles.ts` (styled-components). `page.module.css` was not created.

### Consequences
Full consistency with the rest of the codebase. No CSS Modules introduced.
