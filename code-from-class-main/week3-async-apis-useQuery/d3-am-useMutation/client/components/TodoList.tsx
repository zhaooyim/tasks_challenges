import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchTodos, addTodo } from '../apis/todo.ts'
import LoadingSnapper from './LoadingSnapper.tsx'
import { useState } from 'react'
import { Todo, TodoData } from '../../models/todo.ts'

export default function TodosList() {
  const [text, setText] = useState('')
  const {
    data: todos,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetchTodos(),
  })

  // 1 - set up a queryClient with useQueryClient
  const queryClient = useQueryClient()

  // 2 - set up useMutation for invalidating query
const mutation = useMutation({
    mutationFn: addTodo, 
    onSuccess: () => {
      console.log('successful mutation!')
      queryClient.invalidateQueries({queryKey: ['todos']})
    }
})
  // STRETCH - useMutation for modifying query - with getQueryData and setQueryData
  const mutation2 = useMutation({
    mutationFn: addTodo,
    onSuccess: (res) => {
      // get current query data
      const currentData = queryClient.getQueryData(['todos']) as Todo[]
      // add a new todo to our local queryData 
      queryClient.setQueryData(['todos'], [...currentData, res])
    }
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(text)
    // 3 - do something with our 'text' state (send an API request or do a mutation)
    const newToDo: TodoData = {
      userId: 157654,
      title: text,
      completed: true
    }
    mutation2.mutate(newToDo)
    setText("")
  }

  if (isError) {
    return <div>An error occurred</div>
  }

  if (isPending) {
    return <LoadingSnapper />
  }

  // 4 - add status indicators for mutation error, pending or success: 
  return (
    <>
    {/* status indicators go here */}
    {mutation.isError && <p>Error!</p>}
    {mutation.isPending && <p>Adding to do.... </p>}
    {mutation.isSuccess && <p>Todo added!</p>}
        <form onSubmit={handleSubmit}>
        <label htmlFor="todo">{"What's your next task?"} </label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Add todo</button>
      </form>

      <h2>My Todo list:</h2>
      <ul>
        {todos.map((p: Todo) => (
          <li key={p.id + Math.random()}>
            {p.completed ? (
              <span style={{ color: 'green' }}>Complete ✅</span>
            ) : (
              <span style={{ color: 'red' }}>Complete ❌</span>
            )}{' '}
            {p.title}
          </li>
        ))}
      </ul>
    </>
  )
}
