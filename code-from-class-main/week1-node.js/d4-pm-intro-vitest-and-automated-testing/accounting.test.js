import { test, expect } from 'vitest'
import { numberToAccountingString } from './accounting.js'

test('given 5, it should return "5.00"', () => {
  // Arrange
  const numInput = 5
  const expectedOutput = '5.00'
  // Act
  const actual = numberToAccountingString(numInput)
  // Assert
  expect(actual).toBe(expectedOutput)
})

test('given -5, it should return "(5.00)"', () => {
  // Arrange
  const negInput = -5
  const expectedOutput = "(5.00)"
  // Act
 const actual = numberToAccountingString(negInput)
  // Assert
  expect(actual).toBe(expectedOutput)
  
})

test('given an input that is not a number, it should return "-"', () => {
  // Arrange
  const objInput = {name: "test"}
  const strInput = "test str"
  const nanInput = NaN

  const outcome = "-"
  // Act
  const actual = numberToAccountingString(objInput)
  const actual2 = numberToAccountingString(strInput)
  const actual3 = numberToAccountingString(nanInput)
  // Assert
  expect(actual).toBe(outcome)
  expect(actual2).toBe(outcome)
  expect(actual3).toBe(outcome)
})

