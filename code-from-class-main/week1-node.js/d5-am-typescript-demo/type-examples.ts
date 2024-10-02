// --- BASIC TYPE ANNOTATIONS

// Number
const myNumber = 10
// String
const myString = 'Hello, TypeScript!'
// Boolean
const myBoolean = true
// Array of numbers
const myNumbersArray: number[] = [1, 2, 3, 4, 5]
// Array of strings
const myStringsArray: string[] = ['apple', 'banana', 'orange']
// Object with explicit type
const myObject: { name: string; age: number } = { name: 'John', age: 30 }
// Function with parameters and return type
function add(x: number, y: number): number {
  return x + y
}

// --- TYPE CASTING

// Explicit casting
const myAnyValue: any = 'Hello, TypeScript!'
const myStringValue: string = <string>myAnyValue
// Alternative syntax for explicit casting
const anotherStringValue: string = myAnyValue as string

// --- TYPE ASSERTION (Type casting alternative)

// Type assertion for a string
const someValue: any = 'This is a string'
const strLength: number = (someValue as string).length
// Type assertion for a number array
const someArray: any = [1, 2, 3, 4, 5]
const numLength: number = (someArray as number[]).length

// Type inference
const inferredString = 'Hello, TypeScript!' // TypeScript infers the type as string
const inferredNumber = 10 // TypeScript infers the type as number
