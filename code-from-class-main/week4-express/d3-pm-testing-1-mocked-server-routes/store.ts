// TODO: Write your fs functions that affect the puppy data in this file and export them. 

// TODO: Write your fs functions that affect the puppy data in this file and export them. 

import { readFile, writeFile } from 'node:fs/promises'
import { PuppyData, type Puppy } from './models/Puppy'

interface StoreData {
  puppies: Puppy[]
}

export async function getPuppies() {
    const json = await readFile('./storage/data.json', 'utf8')
    const data = JSON.parse(json)
    if (!data.puppies) {
      return { puppies: [] }
    }
    return data as StoreData
}

export async function getPuppyById(id: number) {
  const data = await getPuppies()
  return data.puppies.find((puppy) => puppy.id === id)
}

export async function deletePuppy(id: number) {
  const { puppies } = await getPuppies()
  const newPuppies = puppies.filter((puppy) => puppy.id !== id)
  await savePuppies({ puppies: newPuppies })
  return id
}

export async function savePuppies(data: StoreData) {
  const json = JSON.stringify(data, null, 2)
  await writeFile('./storage/data.json', json, 'utf-8')
}

export async function addPuppy(puppy: PuppyData) {
  const data = await getPuppies()
  const ids = data.puppies.map((puppy) => puppy.id)
  const id = Math.max(...ids) + 1

  await savePuppies({
    puppies: [...data.puppies, { id, ...puppy }],
  })
  return id
}

export async function updatePuppy(id: number, newPuppy: Puppy) {
  const { puppies } = await getPuppies()
  const newPuppies = puppies.map((puppy) => {
    if (puppy.id === id) {
      return newPuppy
    }
    return puppy
  })
  await savePuppies({ puppies: newPuppies })
}


