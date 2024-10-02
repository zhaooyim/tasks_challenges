/// SPREAD OPERATOR
// The spread operator can be used to make shallow copy the contents of one array or object into a new array or object.

const numbers = [1, 2, 3, 4]
const numbers2 = [...numbers]
numbers2.push(5)

const moreNumbers = [5, 6, 7, ...numbers]
const evenMoreNumbers = [...numbers, ...numbers]

// console.log("more numbers", ...evenMoreNumbers)
// console.log("max", Math.max(...numbers))

// console.log("numbers", numbers)
// console.log("numbers", numbers)

const unwatchedMovie = {
  title: 'Hackers',
  watched: false,
  rating: 3,
}

const fubar = {
  age: 5,
}

const watchedMovie = { ...unwatchedMovie, rating: 1 }

//console.log(watchedMovie)
