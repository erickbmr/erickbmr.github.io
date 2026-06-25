# SPEC.md — Projects Page

## Overview

Add a Projects section to the personal homepage. A new button on the homepage navigates users to a `/projects` route that displays a responsive card deck of projects the owner has built.

---

## Problem Statement

Visitors to the homepage have no way to browse the owner's portfolio of projects. This feature provides a dedicated page for that purpose.

---

## Users

Any visitor who opens the homepage to learn about the owner.

---

## Feature Description

### 1. Projects Button (Homepage)

- A new button is added to the homepage, **below the Telegram button**, in the same row/group as the existing social buttons (GitHub, LinkedIn, Telegram, WhatsApp).
- Icon: folder (consistent with the icon style used by other social buttons — SVG).
- Style: identical to the existing social icon buttons.
- Behavior: clicking navigates to `/projects` (Next.js internal link, not a new tab).

### 2. Projects Page (`/projects`)

#### Layout & Navigation
- Shares the site's global theme (colors, fonts, styled-components setup).
- A **back button** (left arrow icon) is fixed or prominently placed in the **top-left corner**. Clicking it navigates back to `/` (homepage).
- The **language switcher (EN / PT)** component is present on this page, identical to the one on the homepage.

#### Card Deck
- Displays all projects from the local JSON data source as a **responsive card grid**:
  - 1 column on mobile
  - 2 columns on medium screens
  - 3 columns on large screens
- Each card contains:
  - **Image** — project screenshot or thumbnail (`imageUrl`)
  - **Title** — project name (`name`)
  - **Description** — short text (`description`)
- Cards are **static** — no click, hover link, or modal interaction required.

### 3. Data Source

- A local JSON file at `data/projects.json` with the following shape:

```json
{
  "projects": [
    {
      "name": "Sample Project",
      "imageUrl": "/assets/projects/sample.png",
      "description": "A short description of what this project does."
    }
  ]
}
```

- The file must contain at least 3 sample entries so the card grid layout is visually testable.
- The owner will replace the sample data manually later.

### 4. Internationalization

- All UI strings on the `/projects` page must be added to both `i18n/locales/en-UK.json` and `i18n/locales/pt-BR.json`.
- Strings required:
  - Page title / heading (e.g., "Projects" / "Projetos")
  - Back button aria-label (e.g., "Back to home" / "Voltar para o início")

---

## Out of Scope

- Clicking a card to open a project link or modal.
- Fetching project data from an external API or CMS.
- Pagination or filtering of projects.
- Adding or editing projects through a UI.
- Animations or transitions between pages.

---

## Constraints

- Must use the existing Next.js app router (file-based routing under `app/`).
- Must use styled-components, consistent with the rest of the codebase.
- Must reuse existing theme tokens (colors, spacing, typography) from `styles/theme.ts`.
- Must reuse the existing `LanguageSwitcher` component without modification.
- Image assets for sample data can be placeholder URLs (e.g., `https://placehold.co/400x200`).

---

## Acceptance Criteria

- [ ] A folder-icon button appears on the homepage below the Telegram button, styled like the other social buttons.
- [ ] Clicking the button navigates to `/projects`.
- [ ] The `/projects` page renders without errors and shares the site's global theme.
- [ ] A back button (left arrow) in the top-left corner navigates back to `/`.
- [ ] The language switcher is visible and functional on the `/projects` page.
- [ ] At least 3 project cards are displayed using data from `data/projects.json`.
- [ ] Each card shows an image, title, and description.
- [ ] The card grid is responsive: 1 col (mobile) → 2 col (medium) → 3 col (large).
- [ ] All UI strings are translated in both `en-UK.json` and `pt-BR.json`.
- [ ] No TypeScript errors, no ESLint errors.
