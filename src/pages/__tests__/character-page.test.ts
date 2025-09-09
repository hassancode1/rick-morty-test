import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import CharacterPage from '../character-page'

vi.stubGlobal('fetch', vi.fn())

const mockCharacters = {
  info: { count: 2, pages: 1, next: null, prev: null },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive' as const,
      species: 'Human',
      type: '',
      gender: 'Male' as const,
      origin: { name: 'Earth (C-137)', url: '' },
      location: { name: 'Citadel of Ricks', url: '' },
      image: 'https://example.com/rick.png',
      episode: [],
      url: '',
      created: '',
    },
  ],
}

describe('CharacterPage', () => {
  beforeEach(() => {
    ;(fetch as unknown as ReturnType<typeof vi.fn>).mockReset()
  })

  it('loads and renders characters', async () => {
    ;(fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => mockCharacters,
    })

    render(<CharacterPage />)

    expect(screen.getByText('Characters')).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
    })
  })

  it('handles search submit', async () => {
    ;(fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      json: async () => mockCharacters,
    })

    render(<CharacterPage />)
    const input = screen.getByPlaceholderText('Search characters...')
    fireEvent.change(input, { target: { value: 'rick' } })
    fireEvent.submit(input.closest('form')!)

    await waitFor(() => {
      expect(fetch).toHaveBeenCalled()
    })
  })

  it('shows error state', async () => {
    ;(fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: false,
    })

    render(<CharacterPage />)

    await waitFor(() => {
      expect(screen.getByText(/Error/i)).toBeInTheDocument()
    })
  })
})


