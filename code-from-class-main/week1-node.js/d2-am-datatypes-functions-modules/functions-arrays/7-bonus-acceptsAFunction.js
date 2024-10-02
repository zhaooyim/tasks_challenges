// Higher Order Function
function repeat(fn, times) {
  for (let i = 0; i < times; i++) {
    fn()
  }
}

// just a regular function
function sayHappyBirthday() {
  console.log('🎂🎂🎂 Happy Birthday! 🎂🎂🎂')
}

// pass a function as an argument, without calling it
repeat(sayHappyBirthday, 5)
