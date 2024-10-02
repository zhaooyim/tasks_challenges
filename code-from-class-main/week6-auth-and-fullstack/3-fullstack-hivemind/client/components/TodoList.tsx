import { Task } from '../../models/tasks'
interface Props {
  todos: Task[]
}
export default function ToDoList({ todos }: Props) {
  return (
    <>
      <h2>ToDo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </>
  )
}
