/*
 * FIRST CLASS FUNCTIONS
 *******************************************/

function helloWorld() {
  return 'Hello World!'
}
// --- ASSIGN TO VARIABLE

const greeting1 = helloWorld
// console.log(greeting1()) // 'Hello World!'

// ---- PASSED AS ARGUMENTS TO OTHER FUNCTIONS

function helloWorld() {
  return 'Hello World'
}

function sayHello(fn) {
  const result = fn()
  // console.log(result)
}
// Pass as argument
sayHello(helloWorld) // 'Hello World'

// --- RETURNED FROM FUNCTIONS

function helloWorld() {
  return 'Hello World'
}

function getGreeting() {
  // Return from function
  return helloWorld
}

const greeting2 = getGreeting()

// console.log(greeting2()) // 'Hello World'
