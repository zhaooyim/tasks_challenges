import carDb from './data.js'

function getCarNames(cars) {
  return cars.map(car => car.vehicle)

  // Broken down version: 
  // const allCars = cars.map((car) => {
  //   return car.vehicle
  // })

  // return allCars
}

function getCarOwnersNames(cars) {
  return cars.map(car => car.owner.name)
}

function getCarOwnerPhones(cars) {
  return cars.map(car => car.owner.phone)
}

function countHybridCars(cars) {
  // Count how many cars have a fuel type of "Hybrid"
  return cars.filter(car => car.fuel === "Hybrid").length
}

function sumCarPrices(cars) {
return cars.reduce((sum, car) => sum + car.price, 0)
}

function sumHybridCarPrices(cars) {
  // Get the total price of ONLY the hybrid cars.
  return cars
    .filter(car => car.fuel === "Hybrid")
    .reduce((sum, car) => sum + car.price, 0)
}

const carNames5000 = getCarNames(carDb)
const carOwners = getCarOwnersNames(carDb)
const carOwnerPhones = getCarOwnerPhones(carDb)
const hybridCars = countHybridCars(carDb)
const carPrices = sumCarPrices(carDb)
const hybridCarPrices = sumHybridCarPrices(carDb)

console.log({
  carNames: carNames5000, // long form
  carOwners, // short form
  carOwnerPhones,
  hybridCars,
  carPrices,
  hybridCarPrices,
})


// ACCESSING NESTED DATA // 

// Objects inside objects
const obj1 = { a: { b: 'c' } }
// Get value 'c' inside obj1
const demo1 = obj1.a.b
console.log('demo1: ', demo1)


// Objects inside arrays
const arr1 = [ { a: 'b' }, { a: 'c' } ]
// Get value 'c' inside arr1 
const demo2 = arr1[1].a 
console.log('demo2: ', demo2)


// Arrays inside objects
const obj2 = { a: [ 1, 2, 3, 4 ] }
// Get value 2 inside obj2
const demo3 = obj2.a[1]
console.log('demo3: ', demo3)


// Arrays inside arrays (matrices)
const arr2 = [ [1, 2], [3, 4] ]
// Get value 3 inside arr2  
const demo4 = arr2[1][0]
console.log('demo4: ', demo4)
