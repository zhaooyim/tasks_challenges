import type { PuppyData, Puppy } from '../models/Puppy.ts'
import initialData from './initial-data.ts'
import fs from 'node:fs/promises'
interface Data {
  puppies: Puppy[]
}

export async function getPuppies(): Promise<Data> {
  return initialData
}

export async function getPuppyById(id: number): Promise<Puppy> {
  const pup = initialData.puppies.find((puppy: Puppy) => puppy.id === id)
  if (pup === undefined) {
    throw new Error('Puppy not found')
  }
  return pup
}

export async function updatePuppy(
  id: number,
  formData: Partial<PuppyData>,
): Promise<Puppy> {
  // get all pups
  const { puppies } = await getPuppies()
  // replace only the contents of the pup that matches the pup id
  const newPuppies = puppies.map((pup) =>
    pup.id === id ? { ...pup, ...formData } : pup,
  )
  // Write the entire array in a new blank file in the storage folder (with fs.writeFile). We will call this file data.json. You don't actually have to create this file, the writeFile function will do it for you as long as the path is correct.
  await fs.writeFile('./data.json', JSON.stringify(newPuppies, null, 2))
  return getPuppyById(id)
}
