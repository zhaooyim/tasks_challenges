//@vitest-environment jsdom

// Import necessary functions and objects from 'vitest' and '@testing-library/react'
import { afterEach, expect, test } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'

// Import Jest DOM matchers for 'expect' function
import matchers from '@testing-library/jest-dom/matchers'

// Import userEvent library for simulating user events
// **** Check out more user events available at the testing library docs:
// **** https://testing-library.com/docs/user-event/v13/
import userEvent from '@testing-library/user-event'

// Import the component to be tested
import FunWithNumbers from './FunWithNumbers'

// Call cleanup function after each test to clean up rendered elements
afterEach(cleanup)

// Extend Jest expect with matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

// Set up userEvent for simulating user events
const user = userEvent.setup()

// TEST 1
test('Button renders on screen', () => {
  // ARRANGE
  // Render the FunWithNumbers component
  render(<FunWithNumbers/>
  )
  // Get the button element with text '+5' by its role
  const button = screen.getByRole('button', {name: '+5'})
  // ACT
  // No specific action is performed
  // ASSERT
  // Check if the button element is present in the document
  expect(button).toBeInTheDocument()
})

// TEST 2
test('Counter initial state starts at 0', () => {
  // ARRANGE
  // Render the FunWithNumbers component
  render(<FunWithNumbers/>)
  // Get the heading element with level 4
  const heading = screen.getByRole('heading', {level: 4})
  console.log(heading)
  // ACT
  // No specific action is performed
  // ASSERT
  // Check if the text content of the counter element is 'Number is: 0'
  const counter = heading.textContent
  expect(counter).toBe('Number is: 0')
})

// TEST 3
test('Button click increases counter by 5', async () => {
  // ARRANGE
  // Render the FunWithNumbers component
  render(<FunWithNumbers/>)
  // Get the button element with text '+5' by its role
  const button = screen.getByRole('button', {name: '+5'})

  // ACT
  // Simulate a click event on the button element
  await user.click(button)
  // use await to handle an asynchronous operation
  // Get the counter via the heading element with level 4
  const heading = screen.getByRole('heading', {level: 4})
  // ASSERT
  // Check if the text content of the counter element is 'Number is: 5' after the click event
  expect(heading.textContent).toBe('Number is: 5')
})
