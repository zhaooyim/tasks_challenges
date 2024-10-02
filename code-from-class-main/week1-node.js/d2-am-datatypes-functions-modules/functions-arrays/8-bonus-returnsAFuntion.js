/*
 * FUNCTION THAT ACCEPTS A FUNCTION
 *******************************************/

function planEvent(occasionFunc, myFriend) {
  const myName = 'Laché'
  return occasionFunc(myName, myFriend)
}

const birthdayResult = planEvent(birthday, 'Yuji')
console.log('Birthday:', birthdayResult)

const graduationResult = planEvent(graduation, 'Kiana')
console.log('Graduation:', graduationResult)

const matarikiResult = planEvent(matariki, 'Rio')
console.log('Matariki:', matarikiResult)

/*
 * Occasion functions
 *******************************************/
function birthday(person1, person2) {
  return `It's your birthday, ${person1}! ${person2} is invited to the pizza party!`
}

function graduation(person1, person2) {
  return `It's ${person2}'s graduation! Wear your funkiest outfit ${person1}!`
}

function matariki(person1, person2) {
  return `New year, new beginnings - it's Matariki! ${person1} and ${person2} will organise kai!`
}

// A Higher Order Function is a function that returns another function
function createCalculator(operation) {
  return function (a, b) {
    switch (operation) {
      case '+':
        return a + b
      case '-':
        return a - b
      case '*':
        return a * b
      case '/':
        return a / b
      default:
        return 'Invalid operation'
    }
  }
}

// 👇 add is a function waiting for two arguments
const add = createCalculator('+')
console.log(add(1, 2))

const multi = createCalculator('*')
console.log(multi(4, 2))
