export interface TodoData {
  userId: number
  title: string
  completed: boolean
} 

export interface Todo extends TodoData {
  id: number
}
