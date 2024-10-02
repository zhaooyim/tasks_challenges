import { Task, TaskData } from '../../models/tasks'
import connection from './connection'

export function getAllTasks(): Promise<Task[]> {
  return connection('todos').select()
}

// we won't use this properly in this app but this is a good future reference!
export function getTaskById(id: number): Promise<Task> {
  return connection('todos').where({ id }).first()
}

export function createTask(newTask: TaskData) {
  return connection('todos').insert(newTask)
}

export function updateTask(task: TaskData, id: number) {
  return connection('todos').where({ id }).update(task)
}
