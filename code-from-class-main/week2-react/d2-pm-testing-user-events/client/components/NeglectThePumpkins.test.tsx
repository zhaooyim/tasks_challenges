//@vitest-environment jsdom

import { afterEach, expect, test } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NeglectThePumpkins from './NeglectThePumpkins'
// Import Jest DOM matchers for 'expect' function
import matchers from '@testing-library/jest-dom/matchers'

// Register cleanup function to clean up rendered elements after each test
afterEach(cleanup)

expect.extend(matchers)

const user = userEvent.setup()

// Define a test case for button rendering
test.skip('Buttons render on screen', () => {
  // ARRANGE
  render(<NeglectThePumpkins />)

  // ACT
  // No specific action is performed

  // ASSERT
  // Check if all pumpkin buttons are visible on the screen - get byTestId
  const firstPumpkinButton = screen.getByTestId('first pumpkin')
  expect(firstPumpkinButton).toBeVisible()

  const secondPumpkinButton = screen.getByTestId('second pumpkin')
  expect(secondPumpkinButton).toBeVisible()

  const thirdPumpkinButton = screen.getByTestId('third pumpkin')
  expect(thirdPumpkinButton).toBeVisible()
})

// A test to see if pumpkin img are in the document.
test('Images are rendered on screen ', () => {
  // ARRANGE
  render(<NeglectThePumpkins/>)
  const pumpkinImg = screen.getByAltText('A cheerfully fresh Jack-o-Lantern - third pumpkin')
  // ACT
  // No specific action is performed
  // ASSERT
  // Check if first pumpkin img is in the document using getByAltText()
  expect(pumpkinImg).toBeVisible()
})

// A test for checking the img changes if user clicks on pumpkin-button
test.skip('Button click increases decay stage by 1', async () => {
  // ARRANGE
  // ACT
  // Simulate a click on the first pumpkin button - Asynch!
  // ASSERT
  // Check if the decay stage of the first pumpkin increases by 1,
  // use getByAltText() and check if it's in the document
})
