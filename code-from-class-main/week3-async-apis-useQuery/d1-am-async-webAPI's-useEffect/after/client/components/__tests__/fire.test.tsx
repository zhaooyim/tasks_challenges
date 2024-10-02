//@vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import { renderApp } from '../../test/setup'
import nock from 'nock'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
beforeEach(cleanup)
expect.extend(matchers)

describe('<Fire>', () => {
  it('should render a boss', async () => {
    // ARRANGE
    // 'nock' an http network call
nock('https://jsonplaceholder.typicode.com')
      .get('/users/')
      // Fake the 'get' request and reply
      .reply(200, [
        {
          name: 'Boss 1',
          email: 'bossy-boots-1@example.org',
          username: 'CEO-007',
          id: 7,
        },
        {
          name: 'Boss 2',
          email: 'bossy-boots-2@example.org',
          username: 'CEO-008',
          id: 8,
        },
      ])
    // ACT
    //  render app
    renderApp('/')
    // await waitForElementToBeRemoved(() => screen.getByText(/loading/i))
    //  async wait for screen
    const boss1 = await waitFor(() => screen.getByText("Boss 2"))
    // ASSERT
    expect(boss1).toBeInTheDocument()
  })
 
  // SAD PATH! ERRORS ERRORS ERRORS
  it('should render an error message when things go wrong', async () => {
    // ARRANGE
    // 'nock' an http network call
       nock('https://jsonplaceholder.typicode.com')
             // Fake the 'get' request and reply
      .get('/users/')
       // Fake the 'get' request and reply's with 500 server error
      .reply(500)
    // ACT
    renderApp('/')
    // await waitForElementToBeRemoved(() => screen.getByText(/loading/i))

    // check that error message exists
    const errorMsg = screen.getByText("Error!")

    // ASSERT
    expect(errorMsg).toBeInTheDocument()
  })
})
