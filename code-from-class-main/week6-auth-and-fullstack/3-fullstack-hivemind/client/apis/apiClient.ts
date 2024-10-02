import request from 'superagent'
import { Task, TaskData } from '../../models/tasks'

const rootUrl = '/api/v1/todos/'

export async function fetchTodos(): Promise<Task[]> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function addTodo(todo: string) {
  const newTask: TaskData = {
    task: todo,
    completed: 0,
  }

  await request.post(rootUrl).send(newTask)
}

export async function updateTodo(updatedTodo: string, id: number) {
  await request.patch(`${rootUrl}${id}`).send(updatedTodo)
}
