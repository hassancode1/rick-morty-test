# Testing Plan

## Scope
This plan covers UI rendering, API integration, navigation, and basic interaction for the Rick & Morty character explorer.

## Key Functionality
- Home page renders and navigates to character page
- Header and Footer render and are reusable
- Character page fetches and displays characters
- Search filters characters by name
- Character cards render core details and are clickable
- Loading and error states render appropriately

## Test Scenarios and Expected Outcomes

### Home Page
- Renders title and CTA
  - Expect: "Rick And Morty" and "Get Started" visible
- Clicking header logo navigates to `/`
  - Expect: location.pathname === '/'
- CTA click navigates to `/character-page`
  - Expect: location.pathname === '/character-page'

### Header/Footer Components
- Header shows optional button when `showGetStarted=true`
  - Expect: button exists; click triggers handler
- Footer shows resources section
  - Expect: static content rendered

### Character Page
- Initial load
  - Mock API returns results; expect grid renders 1..n cards
  - Loading indicator shown while fetching
- Search
  - Enter text and submit; expect API called with `name` query; grid updates
  - Clearing search shows default results
- Error state
  - Mock 500 response; expect error message visible
- Card click
  - Expect click handler called (console/log or mock)

## Testing Strategy

### Unit Tests
- Pure components with props-only behavior (e.g., `CharacterCard` rendering fields)

### Integration Tests
- `HomePage` navigation using a memory router
- `CharacterPage` end-to-end flow with mocked `fetch`:
  - loading -> data -> render
  - search -> new fetch -> new render
  - error -> error UI

### End-to-End (E2E) Considerations (optional)
- Using Playwright or Cypress:
  - Visit `/` and navigate to `/character-page`
  - Search for "Rick" and verify filtered results
  - Simulate network error using route interception and verify error UI

## Tooling
- Test runner: Vitest + React Testing Library (suggested)
- Mocking: `vi.spyOn(global, 'fetch')` or `msw`

## Sample Test Skeletons (Vitest)
```ts
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import CharacterCard from './src/components/CharacterCard'

describe('CharacterCard', () => {
  it('renders name and basic details', () => {
    render(<CharacterCard character={{
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: { name: 'Earth', url: '' },
      location: { name: 'Citadel', url: '' },
      image: 'https://example.com/rick.png',
      episode: [], url: '', created: ''
    }} />)
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
  })
})
```

