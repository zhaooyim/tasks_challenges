import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'
import { renderComponent } from '../../test-utils'
import FindFriendsSearch from '../../components/UI/TextBox/FindFriendsSearch'

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

describe('FindFriends client', () => {
  it('Rendering search input', () => {
    renderComponent(
      <FindFriendsSearch queryState={'han'} handleChange={() => {}} />
    )

    const input = screen.getByTestId('textbox-search-input')

    expect(input).toBeVisible()
  })
})
