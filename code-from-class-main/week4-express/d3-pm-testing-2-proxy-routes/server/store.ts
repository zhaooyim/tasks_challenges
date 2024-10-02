import type { Puppy } from '../models/Puppy.ts'
import * as fs from 'node:fs/promises'
import * as Path from 'node:path'

const filePath = './puppy.json'
import initialData from './puppy.json'

export async function getPuppy() {
  try {
    const json = await fs.readFile(Path.resolve(filePath), 'utf-8')
    const data = JSON.parse(json)
    return data
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return initialData
    }
    throw error
  }
}
