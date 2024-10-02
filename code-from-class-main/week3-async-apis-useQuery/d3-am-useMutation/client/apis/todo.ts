import request from 'superagent'
import type { Todo, TodoData } from '../../models/todo.ts'

// Create
export async function addTodo(newTodo: TodoData): Promise<Todo> {
  const res = await request
    .post(`https://jsonplaceholder.typicode.com/todos`)
    .send(newTodo)
  return res.body
}

// Read
export async function fetchTodos(): Promise<Todo[]> {
  const res = await request.get(`https://jsonplaceholder.typicode.com/todos`)
  return res.body.slice(190)
}

// Update
export async function updateTodo(updatedTodo: Todo): Promise<Todo> {
  const res = await request
    .patch(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`)
    .send(updatedTodo)
  return res.body
}

// Delete
export async function deleteTodo(todoId: number): Promise<object> {
  const res = await request.delete(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  )
  return res.body
}
