import { describe, it, expect, vi } from 'vitest'
import { waitFor } from '@testing-library/react'
import nock from 'nock'

import { renderWithQuery } from '../../test-utils'
import ProfilePage from './ProfilePage'

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

describe('ProfilePage', () => {
  it('should render form', async () => {
    const scope = nock('http://localhost').get('/api/v1/users/').reply(200, {
      firstName: 'John',
      lastName: 'Doe',
      nickname: 'John Doe',
    })

    const container = renderWithQuery(<ProfilePage />)
    await waitFor(() => expect(scope.isDone()).toBeTruthy())

    const nickname = container.getByRole('textbox', { name: /nickname/i })
    const firstName = container.getByRole('textbox', { name: /first name/i })
    const lastName = container.getByRole('textbox', { name: /last name/i })
    const isPublic = container.getByRole('checkbox', {
      name: /visible to everyone/i,
    })

    expect(nickname).toHaveValue('John Doe')
    expect(firstName).toHaveValue('John')
    expect(lastName).toHaveValue('Doe')
    expect(isPublic).not.toBeChecked()
    expect(nickname).toHaveValue('John Doe')
  })
})
