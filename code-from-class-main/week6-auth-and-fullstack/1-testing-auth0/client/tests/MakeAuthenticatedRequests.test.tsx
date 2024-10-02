// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeAll, describe, it, vi, expect } from 'vitest'
import { renderRoute } from '../test-setup.tsx'
import nock from 'nock'

import { useAuth0 } from '@auth0/auth0-react'
import { shouldProcessLinkClick } from 'react-router-dom/dist/dom'
vi.mock('@auth0/auth0-react')

beforeAll(() => {
  nock.disableNetConnect()
})

const ACCESS_TOKEN = 'testing_access_token'

describe('Adding a fruit', () => {
  it('sends the correct credentials', async () => {
    // mock auth0 incl. getAccessTokenSilently
    vi.mocked(useAuth0).mockReturnValue({
      isAuthenticated: true,
      user: {sub: 'fred@example.org', nickname: 'fred'},
      getAccessTokenSilently: vi.fn(async () => ACCESS_TOKEN)
    } as any)
    //nock (persist)
    nock('http://localhost')
    .get('/api/v1/fruits')
    .reply(200, {fruits: []})
    .persist()
    
    // destructure user and screen from '/'
    const {user, ...screen} = renderRoute('/')

    // get 'Add a Fruit' button, expect it to be there, click on it
   const addFruitButton = await screen.findByRole('button', {name: 'Add a Fruit'})
    expect(addFruitButton).toBeVisible()
    await user.click(addFruitButton)
    // find inputs for "Name" and "Average Grams Each", and fill them out
 const nameInput = await screen.findByLabelText('Name:')
 await user.type(nameInput, 'Snozberry')
 const weightInput = await screen.findByLabelText('Average Grams Each:')
await user.type(weightInput, '35')
    //find the "Add fruit" button
  const submitButton = await screen.findByRole('button', {name: 'Add fruit'})

    //create a scope for this nock
    const scope = nock('http://localhost', {
      reqheaders: {
        authorization: `Bearer ${ACCESS_TOKEN}`
      }
    })
    .post('/api/v1/fruits', {fruit: {name: 'Snozberry', averageGramsEach: '35'}})
    .reply(201)

      // click the button and expect the nock scope to be done
      await user.click(submitButton)
expect(scope.isDone()).toBe(true)
  })
})
