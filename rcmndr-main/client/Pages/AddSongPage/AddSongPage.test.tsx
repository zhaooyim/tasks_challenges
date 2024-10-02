import { describe, it, expect, vi } from 'vitest'
import nock from 'nock'
import { waitFor } from '@testing-library/react'

import { renderWithQuery } from '../../test-utils'
import AddSongPage from './AddSongPage'
import userEvent from '@testing-library/user-event'

beforeAll(() => {
  nock.disableNetConnect()
})

vi.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    user: {
      sub: 'auth0|123',
      email: '',
    },
    isAuthenticated: true,
    getAccessTokenSilently: vi.fn(() => 'token'),
  }),
}))

describe('AddSongPage', () => {
  it('should render add song form', async () => {
    // Arrange

    // Action
    const container = renderWithQuery(<AddSongPage />)

    // Assert
    const title = container.getByRole('textbox', { name: /title/i })
    const artist = container.getByRole('textbox', { name: /artist/i })
    const genre = container.getByRole('textbox', { name: /genre/i })
    const link = container.getByRole('textbox', {
      name: /link/i,
    })
    const description = container.getByRole('textbox', { name: /description/i })

    expect(title).toHaveAttribute('placeholder', 'The full title of the song')
    expect(artist).toHaveAttribute(
      'placeholder',
      'Name of the artist / singer / group'
    )
    expect(genre).toHaveAttribute('placeholder', 'Genre of music')
    expect(link).toHaveAttribute(
      'placeholder',
      'A link so others can listen (optional)'
    )
    expect(description).toHaveAttribute(
      'placeholder',
      'What do you like about this song?'
    )
  })

  it('should submit song draft after clicking Save', async () => {
    const scope = nock('http://localhost')
      .post('/api/v1/songs')
      .reply(201, [{ id: 999 }])

    const container = renderWithQuery(<AddSongPage />)

    const titleInput = container.getByRole('textbox', { name: /title/i })
    const artistInput = container.getByRole('textbox', { name: /artist/i })
    const saveButton = container.getByRole('button', { name: 'Save' })

    await waitFor(() => expect(titleInput).toBeVisible())
    await waitFor(() => expect(artistInput).toBeVisible())
    await waitFor(() => expect(saveButton).toBeVisible())

    const testTitle = 'Test Song'
    const testArtist = 'Test Singer'
    await userEvent.type(titleInput, testTitle)
    await waitFor(() => expect(titleInput).toHaveValue(testTitle))
    await userEvent.type(artistInput, testArtist)
    await waitFor(() => expect(artistInput).toHaveValue(testArtist))

    // ACTION
    await userEvent.click(saveButton)

    // ASSERT
    expect(scope.isDone()).toBe(true)
  })
})
