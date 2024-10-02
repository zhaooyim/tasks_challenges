//@vitest-environment jsdom

// Import necessary functions and objects from 'vitest' and '@testing-library/react'
import { afterEach, expect, test } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

// Import Jest DOM matchers for 'expect' function
import matchers from '@testing-library/jest-dom/matchers'

// Import userEvent library for simulating user events
import userEvent from '@testing-library/user-event'
import Pixel from './Pixel'

// Call cleanup function after each test to clean up rendered elements
afterEach(cleanup)

// Extend Jest expect with matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

// Set up userEvent for simulating user events
const user = userEvent.setup()

// Define a test case
test('double click turns pixel black', async () => {
  // ARRANGE
  // Render the Pixel component
  render(<Pixel/>)
  // Get the pixel element by its data-testid attribute
  const pixel = screen.getByTestId('pixel-for-testing')
  // ACT
  // Simulate a double click event on the pixel element
  // use await to handle an asynchronous operation
  await user.dblClick(pixel)
  // ASSERT
  // Check if the pixel element has a style property with a background color of black
  expect(pixel).toHaveStyle(`background: black`)
})
