// @vitest-environment jsdom
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { routes } from '../../routes'
import { describe, it, expect, beforeEach } from 'vitest'
import { screen, render } from '@testing-library/react/pure'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'

beforeEach(cleanup)
expect.extend(matchers)

describe('<PixelParty />', () => {
  it('renders 1 pixel based on the given param of 1', () => {
    // ARRANGE
    const router = createMemoryRouter(routes, {
      initialEntries: ['/pixel/1']
    })
    render(<RouterProvider router={router} />)
    // ACT
    const pixels = screen.getAllByTestId('pixel-for-testing')
    // ASSERT
    expect(pixels).toHaveLength(1)
    // expect(pixels.length).toBe(1)
  })

  it('renders 12 pixels based on the given param of 12', () => {
    // ARRANGE
    const router = createMemoryRouter(routes, {
      initialEntries: ['/pixel/12']
    })
    render(<RouterProvider router={router} />)
    // ACT
    const pixels = screen.getAllByTestId('pixel-for-testing')
    // ASSERT
    expect(pixels).toHaveLength(12)
  })

  it('renders a sassy message if param is not a number', () => {
    // ARRANGE
    const router = createMemoryRouter(routes, {
      initialEntries: ['/pixel/']
    })
    render(<RouterProvider router={router} />)
    // ACT
    const message = screen.getByText('Okay, wise guy')
    // ASSERT
    expect(message).toBeInTheDocument()
  })
})
