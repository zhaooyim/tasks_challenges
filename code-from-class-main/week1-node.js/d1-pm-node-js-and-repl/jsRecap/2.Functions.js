/// ** Functions **
// Functions are reusable blocks of code

function myFunction(a, b) {
  console.log('Parameters: ', a, b) // side effect

  // Do something

  return 'return value'
}

// invoke / call the function

myFunction('hello', 'world')


// Another example of a side-effect
// Introduce `let counter = 0` above myFunction and then re-assign (increment) in the function scope.
// This is a side effect because it is interacting with something (counter) outside of it's scope!
// General best practise with 'functional programming' - minimise side effects, but they are necessary sometimes - for changing databases, or creating outputs, etc.

let count = 0

function increment() {
  count = count + 1
}
