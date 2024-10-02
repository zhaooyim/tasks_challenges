// --- PRIMITIVE DATA TYPES
// --- Passed by value

const bool = true
const num = 342
const str = '342'
const nll = null
const undfn = undefined

// --- Checking the type:
// console.log(typeof bool)
// console.log(typeof num)
// console.log(typeof str)
// console.log(typeof nll)
// console.log(typeof undfn)

// --- Casting values to another type
// ---- examples of these js constructor:
Number()
String()
Boolean()

const str2 = '342'
const num2 = 342

const strNum = Number(str2) // expected output: 342
const numStr = String(num2) // expected output: '342'

// console.log(typeof strNum) //
// console.log(typeof numStr) //

const notANum = Number('a') // expected output: NaN

// console.log(notANum)
// console.log(isNaN(notANum))

// --- NON-PRIMITIVE DATA TYPES
// ----Passed by reference

// -- Objects:
// Description: Objects are collections of key-value pairs, where values can be of any data type, including other objects, arrays, functions, etc.

let person = {
  name: 'John',
  age: 30,
  city: 'New York',
}
// -- Arrays:
// Description: Arrays are ordered collections of values. They can contain elements of any data type and are accessed by numeric indices.

let colors = ['red', 'green', 'blue']

// -- Functions:
// Description: Functions are blocks of reusable code that can be called with specified arguments. They can be assigned to variables, passed as arguments, and returned from other functions.

function greet(name) {
  console.log('Hello, ' + name + '!')
}

// Dates:
// Description: Date objects are used for working with dates and times. They represent a particular moment in time, down to milliseconds.

let currentDate = new Date()

// RegExpressions:
// Description: Regular expressions are used for pattern matching within strings. They are objects that represent patterns of text.

let pattern = /[a-z]+/

// Symbols:
// Description: Symbols are unique and immutable data types introduced in ECMAScript 6 (ES6). They are often used as property keys in objects to prevent name collisions.

let mySymbol = Symbol('description')
let obj = {
  [mySymbol]: 'This is a symbol property',
}

console.log(obj[mySymbol]) // Output: This is a symbol property
