/*
 * ARROW FUNCTION
 *******************************************/

const add = (num1, num2) => {
  return num1 + num2
}

const addv2 = (num1, num2) => num1 + num2 // Parentheses required

const emptyFunction = () => {}

const noParams2 = () => {
  return 'Hello!'
}

const greeting = noParams2()
// console.log(greeting)
// const noParams = () => 'Hello!' // Parentheses required

// const oneParamV1 = (name) => 'Hi ' + name // Parentheses optional
// const oneParamV2 = name => 'Hi ' + name // Parentheses optional

const result = add(1, 7)
const resultv2 = addv2(1, 7)

// console.log('Arrow function result:', result)
// console.log('Arrow function v2 result:', resultv2)

const names = ['rodolfo', 'laura', 'sharon']
const newNames = names.map((currentName) => currentName.toUpperCase())

// const capitaliseNames = currentName => currentName.toUpperCase()
// const newNames = names.map(capitaliseNames)
console.log('newNames', newNames)
