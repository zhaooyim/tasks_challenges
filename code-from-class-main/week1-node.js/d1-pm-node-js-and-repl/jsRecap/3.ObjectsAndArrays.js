/// ** Objects & Arrays **
// Objects & arrays are mutable data types - they can be changed after they are created
// Data in an object is not stored in any particular order and is referred to by using a 'key'
// Data in an array is stored in a particular order, and is referred to by using an index.

/// mutation

const obj = { name: 'Jared', age: 100 }

obj.height = 6.2
obj.name = 'Jared P'

const arr = ['Hannah', 'Jarrod', 'Daph']

arr.push('Barbora')
arr[1] = 'Jared'

console.log(arr)

/// OBJECT NOTATION
// There are two ways of accessing properties of an object
// 1. Dot notation // easier to read - used to access string literals as keys.
// 2. Square bracket notation // less easy to read - used to access dynamic content.

const daph = {
  name: 'Daph',
  pronouns: 'they/them',
  favouriteFood: 'Toastie',
  'fav karaoke song': 'Ayo Technology',
}

daph.name
daph['fav karaoke song']

const bestSong = 'fav karaoke song'

let key = 'name'

console.log(daph[key])
