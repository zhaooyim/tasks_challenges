/*
 * SOME ARRAY METHODS
 *******************************************/

const exampleArray = [4, 2, 3, 2, 2, 7, 6]

function filteringFunction(item) {
  return item !== 2
}

/*
 * TRY IT
 *******************************************/

// Use the .filter() method to return a filteredArray that uses the filteringFunction:

const filteredArray = exampleArray.filter(filteringFunction)
// console.log('filteredArray:', filteredArray)

// Use .map() to return a new array with all the items increased by 1!

const mappedArray = exampleArray.map((item) => item + 1)
// console.log('mappedArray:', mappedArray)

// Use .find() to get the first odd number in the exampleArray
// > Should return 3
const foundItem = exampleArray.find((item) => item % 2 !== 0)
// console.log('foundItem:', foundItem)

// Use .forEach() to console.log() each individual number in the exampleArray
// > Should console log each number on a new line
exampleArray.forEach((item) => {
  console.log(item, '\n')
})

// STRETCH: Use .reduce() to multiply all of the numbers together
// > Should return 4032
const multiplied = exampleArray.reduce((total, item) => total * item, 0)
// console.log('multiplied:', multiplied)

// STRETCH: Use .reduce() to put a bunch  of words in an array together in a sentence:

const array1 = ['Hi', 'my', 'name', 'is', 'reduce']

const sentence = array1.reduce((total, currentValue) => {
  return total + ' ' + currentValue.toUpperCase()
}, '')

// console.log(sentence)

