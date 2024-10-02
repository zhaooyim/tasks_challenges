// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeAll, describe, it, vi, expect } from 'vitest'
import { renderRoute } from '../../test-setup.tsx'
import nock from 'nock'

import { useAuth0 } from '@auth0/auth0-react'
vi.mock('@auth0/auth0-react')

beforeAll(() => {
  nock.disableNetConnect()
})

const ACCESS_TOKEN = 'testing_access_token'

describe('Adding a fruit', () => {
  it('sends the correct credentials', async () => {
    vi.mocked(useAuth0).mockReturnValue({
      isAuthenticated: true,
      user: { sub: 'fred@example.com', nickname: 'fred' },
      // Since we are testing an authenticated request we need
      // to mock out more methods of the useAuth0 return value
      getAccessTokenSilently: vi.fn(async () => {
        return ACCESS_TOKEN
      }),
      // vi.fn() returns a spy-function, which means that later we
      // can make assertions about when and how it was called
      // https://vitest.dev/api/vi.html#vi-fn
    } as any)

    nock('http://localhost')
      .get('/api/v1/fruits')
      .reply(200, { fruits: [] })
      // we're not testing this endpoint right now we just need it for the
      // component to work so we can set `.persist()` which means that this nock
      // will continue to work instead of being "used-up" the first time it is used
      .persist()

    const { user, ...screen } = renderRoute('/')

    // I'm not sure if this button should be rendered immediately or
    // not, but I almost exclusively use the `.findBy...` queries because
    // that way I never have to remember the difference
    const showFormButton = await screen.findByRole('button', {
      name: 'Add a Fruit',
    })

    // we also could have used `.toBeInTheDocument()` or other
    // assertions from 'jest-dom'
    // https://github.com/testing-library/jest-dom?tab=readme-ov-file#custom-matchers
    expect(showFormButton).toBeVisible()

    // every `user.` interaction method is async and must be awaited
    await user.click(showFormButton)

    const nameInput = await screen.findByLabelText('Name:')
    // user.type is not "type" as in "typescript" it means
    // "type" as in "typewriter", it simulates key events to write
    // a string value into an input just like a user would
    await user.type(nameInput, 'Snozzberry')

    // is this technically mass? I'm not sure how fruit work
    const weightInput = await screen.findByLabelText('Average Grams Each:')
    await user.type(weightInput, '35')

    const submitButton = await screen.findByRole('button', {
      name: 'Add fruit',
    })

    // Before we submit the form, let's get a nock scope ready to
    // accept the submission
    const createScope = nock('http://localhost', {
      reqheaders: {
        // this scope will only match requests authenticated with
        // the expected bearer token
        authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
      .post('/api/v1/fruits', {
        // here we are being very specific about what payload we
        // expect, requests with payloads that don't match will
        // fail the test
        fruit: { name: 'Snozzberry', averageGramsEach: '35' },
      })
      .reply(201)

    await user.click(submitButton)
    expect(createScope.isDone()).toBe(true)
  })
})
