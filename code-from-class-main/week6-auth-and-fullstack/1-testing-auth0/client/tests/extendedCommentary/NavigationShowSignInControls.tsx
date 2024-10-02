// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */
// In our feature code, we really want our errors at compile time
// in test code, it's almost as good to get our errors at
// "runtime" (aka. while the test is running), so we can allow
// explicit any types. Still, we will use them sparingly.
import { beforeAll, describe, it, vi, expect } from 'vitest'
import { renderRoute } from '../test-setup.tsx'
// nock is a library that replaces the _real_ network with a fake
// one, where each request is handled by a single-use scope
// https://www.npmjs.com/package/nock
import nock from 'nock'

import { useAuth0 } from '@auth0/auth0-react'
// vi.mock(...) means "when the code I'm testing imports the module
// give them a fake one instead"
// the string we pass to vi.mock() should be the exact same as the import
vi.mock('@auth0/auth0-react')

beforeAll(() => {
  // Optional, but it means our tests can't make _real_ requests by accident
  // e.g. if we make a typo or forget to set up a nock
  // this forces us to handle every request our app makes
  nock.disableNetConnect()
})

describe('The navigation', () => {
  it('shows the log out button when we are logged in', async () => {
    // for tests where we want to simulate "the user is logged in"
    // we will return an object that has `isAuthenticated: true` and
    // provide some mock data for the user property
    // https://auth0.github.io/auth0-react/functions/useAuth0.html
    vi.mocked(useAuth0).mockReturnValue({
      isAuthenticated: true,
      user: { sub: 'fred@example.com', nickname: 'fred' },
    } as any)
    // since the return type of useAuth0 is so complicated, we're
    // just going to use `any`

    // When our page loads it will immediately hit this endpoint so
    // we set up a scope with nock to avoid an error
    nock('http://localhost') // we don't specify a port for localhost
      .get('/api/v1/fruits')
      .reply(200, { fruits: [] })
    // These scopes are single-use so this will reply to the first reques
    // that matches and subsequent requests would fail.

    // any route could do here, since we're testing the Navigation
    // (reminder: this is a **client-side route**)
    const screen = renderRoute('/')
    // For a <button /> the "accessible-name" is the text content
    // of that button.
    // https://accessibilityinsights.io/info-examples/web/button-name/
    const link = await screen.findByRole('button', { name: 'Sign out' })
    // .toBeVisible() is a method from @testing-library/jest-dom
    expect(link).toBeVisible()

    // "fred" is the nickname we provided in our mock above so
    // we check for exactly that
    const info = await screen.findByText('Signed in as: fred')
    expect(info).toBeVisible()
  })

  it('shows the log in button when we are not logged in', async () => {
    // for tests where we want to simulate "the user is NOT logged in"
    // we will return an object that has `isAuthenticated: false` and
    // undefined for the `user` property
    // https://auth0.github.io/auth0-react/functions/useAuth0.html
    vi.mocked(useAuth0).mockReturnValue({
      isAuthenticated: false,
      user: undefined,
    } as any) // we talked about this at the top of the file
    // When our page loads it will immediately hit this endpoint so
    // we set up a scope with nock to avoid an error
    nock('http://localhost') // we don't specify a port for localhost
      .get('/api/v1/fruits')
      .reply(200, { fruits: [] })
    const screen = renderRoute('/')
    // Now we're asserting that the opposite button is visible, in theory
    // we _could_ assert that the "Sign out" button is _not_ visible but
    // it gets pretty awkward and generally speaking positive assertions
    // match better with user expectations
    const link = await screen.findByRole('button', { name: 'Sign in' })
    expect(link).toBeVisible()
  })
})
