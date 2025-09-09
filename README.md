# Rick & Morty Character Explorer

A React + TypeScript + Vite app to browse Rick & Morty characters with search, reusable UI, and clean architecture.

## Requirements & Prerequisites
- Node.js: 20.19+ (or 22.12+). Vite 7 requires this.
- Package manager: npm (or yarn/pnpm – adjust commands accordingly)

Quick start for Node using nvm:
```bash
nvm use || nvm install
```
This project includes an `.nvmrc` set to `20.19.0`.

## Setup & Installation
```bash
# install deps
npm install

# start dev server
npm run dev

# type-check + build
npm run build

# preview production build
npm run preview

# lint
npm run lint
```

## App Structure
```
src/
  components/
    Header.tsx
    Footer.tsx
    CharacterCard.tsx
  pages/
    home-page.tsx
    character-page.tsx
  types/
    character.ts
  App.tsx
  main.tsx
  index.css
```

## Functional Overview
- Home page with CTA to character explorer
- Reusable `Header` and `Footer` across pages
- Character explorer:
  - Fetches from `https://rickandmortyapi.com/api/character`
  - Search by name
  - Responsive grid of `CharacterCard`
  - Loading and error states

## Design Decisions & Rationale
- Reusable layout primitives (`Header`, `Footer`) for consistency and maintainability
- `CharacterCard` encapsulates character presentation to keep pages lean
- Type safety via shared `types/character.ts` to avoid duplication and ensure API parity
- Fetch API for simplicity; easy to replace with a data layer if needed
- Tailwind CSS utility classes for fast, consistent styling
- React Router for client navigation

## Technical Approach & Architecture
- Presentation components in `components/`; route-level containers in `pages/`
- Stateless UI where possible; `character-page` owns data fetching and state
- Search debounced via form submit (keeps API calls predictable). Can swap to onChange debounce later
- Pagination removed in UI for simplicity after design iteration; API queries default to page 1 but code is structured to reintroduce pagination easily

## Assumptions
- Character detail page is out of scope; card click is a placeholder
- Minimal global state; per-page local state suffices
- Basic accessibility via semantic elements and alt text; can be expanded

## Environment Notes
- If you see a Vite error about Node versions, ensure you are using Node 20.19+ or 22.12+
- Use `nvm use` to switch quickly

## Deployment
- Static build via `npm run build`
- Serve `dist/` on any static host (Vercel/Netlify/GH Pages)

## Testing
See `TESTING.md` for the testing plan, scenarios, and tooling suggestions.
