export interface Task {
  id: number
  task: string
  completed: number
}

export type TaskData = Omit<Task, 'id'>
