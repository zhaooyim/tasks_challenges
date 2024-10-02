// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeAll, describe, it, vi, expect } from 'vitest'
import { renderRoute } from '../test-setup.tsx'

import nock from 'nock'

import { useAuth0 } from '@auth0/auth0-react'
vi.mock('@auth0/auth0-react')

beforeAll(() => {
  nock.disableNetConnect()
})

describe('The navigation', () => {
  it('shows the log out button when we are logged in', async () => {
    //ARRANGE
    //mock the Auth
    vi.mocked(useAuth0).mockReturnValue({
      isAuthenticated: true,
      user: {sub: "fred@example.com", nickname: 'fred'}
    } as any)
    //nock the API call
    nock('http://localhost')
    .get('/api/v1/fruits')
    .reply(200, {fruits: []})
    //ACT
    //render the route
    const screen = renderRoute('/')
    //find the "Sign out" button
    const button = await screen.findByRole('button', {name: "Sign out"})
    //find the info text
    const info = await screen.findByText('Signed in as: fred')

    //ASSERT
    //expect the sign out button to be visible
    expect(button).toBeVisible()
    //expect the info to say that fred is logged in
    expect(info).toBeVisible()
  })

  it('shows the log in button when we are not logged in', async () => {
    //ARRANGE
    //mock the Auth
    vi.mocked(useAuth0).mockReturnValue({
      isAuthenticated: false,
      user: undefined
    } as any)
    //nock the API call
    nock('http://localhost')
    .get('/api/v1/fruits')
    .reply(200, {fruits: []})

    //ACT
    //render the route
    const screen = renderRoute('/')
    const button = await screen.findByRole('button', {name: "Sign in"})
    //ASSERT
    //expect the sign in button to be visible
    expect(button).toBeVisible()
  })
})
