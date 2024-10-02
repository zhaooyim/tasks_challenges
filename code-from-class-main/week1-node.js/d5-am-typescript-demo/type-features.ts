// -- TYPE SYSTEM FEATURES:
//  Used to defining and manipulating types, which are fundamental to how TypeScript adds static typing to JavaScript

// INTERFACES: Used to define the shape of objects in TypeScript.

// Interface for defining the shape of an object

interface Person {
  name: string 
  age?: number | string
}

interface IDedPerson {
  id: number 
  name: string 
  age?: number 
}



let person: IDedPerson = {
  id: 5,
  name: 'John', 
  age: 30

}



// ARRAYS: Collections of elements of the same type.

// Array of numbers
const numbers: Array<number> = [1, 2, 3, 4, 5]
// Array of strings
const fruits: string[] = ['apple', 'banana', 'orange']

// ENUMS: Used to define a set of named constants.

// Enum for representing days of the week
enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const today: Days = Days.Monday
console.log(today) // Output: 0 (Monday)

// TUPLES: Arrays with a fixed number of elements, where each element may be of a different type.

// Tuple representing coordinates
const coordinates: [number, number] = [10, 20]

// GENERICS: Used to create reusable components that can work with any data type.

// Generic function to reverse an array
function reverseArray<T>(array: T[]): T[] {
  return array.reverse()
}

const numbersArray = [1, 2, 3, 4, 5]
const reversedNumbers: number[] = reverseArray(numbersArray)

const stringsArray: string[] = ['apple', 'banana', 'orange']
const reversedStrings: string[] = reverseArray(stringsArray)

// UNION TYPES: Allows a value to be one of several specified types.

// Function that accepts either a string or a number
function printId(id: string | number) {
  if (typeof id === 'string') {
    console.log('string!')
  } else {
    console.log('number')
  }

  console.log(`ID: ${id}`)
}

printId('ABC123') // Output: ID: ABC123
printId(1001) // Output: ID: 1001

// INTERSECTION TYPES: Combines multiple types into one.

// Interface for a printable object
interface Printable {
  print: () => void
}

// Interface for a scannable object
interface Scannable {
  scan: () => void
}

// Object that implements both Printable and Scannable interfaces
const printerScanner: Printable & Scannable = {
  print() {
    console.log('Printing...')
  },
  scan() {
    console.log('Scanning...')
  },
}

printerScanner.print() // Output: Printing...
printerScanner.scan() // Output: Scanning...
