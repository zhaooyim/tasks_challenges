// @vitest-environment jsdom
import { describe, it, expect, beforeAll } from 'vitest'
import nock from 'nock'

import { setupApp } from './setup.tsx'

beforeAll(() => {
  nock.disableNetConnect()
})

const MOCK_DATA = [
  {
    id: 1,
    task: 'vaccuum the driveway',
    completed: 1,
  },
  {
    id: 2,
    task: 'remove bugs from garage',
    completed: 0,
  },
  {
    id: 3,
    task: 'ask insects to leave',
    completed: 0,
  },
]

describe('Adding a Todo', () => {
  it('The home page shows the current todo data', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/todos/')
      .reply(200, MOCK_DATA)

    // ARRANGE
    const { ...screen } = setupApp('/')
    // ACT
    // ASSERT
    const todoListHeading = await screen.findByText('ToDo List')
    expect(todoListHeading).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })

  it('Submit a new Todo updates the data', async () => {
    const initialScope = nock('http://localhost')
      .get('/api/v1/todos/')
      .reply(200, MOCK_DATA)

    // ARRANGE
    const { user, ...screen } = setupApp('/')

    const todoListLabel = await screen.findByText('ToDo List')
    expect(todoListLabel).toBeVisible()
    expect(initialScope.isDone()).toBe(true)

    const addScope = nock('http://localhost')
      .post('/api/v1/todos/', {
        task: 'test todo',
        completed: 0,
      })
      .reply(200)

    // when we create a new todo, we expect the page to refresh
    // its data
    const refreshScope = nock('http://localhost')
      .get('/api/v1/todos/')
      .reply(200, [
        ...MOCK_DATA,
        {
          id: 4,
          task: 'test todo',
          completed: false,
        },
      ])

    // ACT
    const todoInput = await screen.findByLabelText('New Todo:')
    await user.clear(todoInput)
    await user.type(todoInput, 'test todo')

    const submitButton = await screen.findByRole('button', {
      name: 'Submit',
    })

    await user.click(submitButton)
    // This verifies that the request to add the todo completed
    expect(addScope.isDone()).toBe(true)

    // Here we verify that adding a todo caused the data to refresh
    await screen.findByText('test todo')
    // I'm waiting on the _user visible thing_ before checking the
    // implementation detail
    expect(refreshScope.isDone()).toBe(true)
  })
})
