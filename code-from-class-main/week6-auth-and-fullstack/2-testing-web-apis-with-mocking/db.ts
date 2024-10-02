import config from './knexfile'
import knex from 'knex'

type Environment = 'production' | 'development' | 'test'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export interface UserData {
  name: string
  email: string
}
interface User extends UserData {
  id: number
}

export async function getUsers(db = connection) {
  return await db('users').select()
}

export function getUser(id: number, db = connection) {
  return db<User>('users')
    .select()
    .where('id', id)
    .first()
    .then((user) => {
      if (!user) {
        throw new Error(`User with id ${id} not found`)
      }
      return user
    })
}

export async function addNewUser(newUser: UserData, db = connection) {
  const ids = await db<User>('users').insert(newUser)
  return ids[0]
}

export function deleteUser(id: number, db = connection) {
  return db<User>('users').where('id', id).delete()
}
