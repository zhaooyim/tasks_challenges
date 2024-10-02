import { useState } from 'react'
import { addTodo } from '../apis/apiClient'
import { useMutation, useQueryClient } from '@tanstack/react-query'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const queryClient = useQueryClient()
  const addTodoMutation = useMutation({
    mutationFn: (task: string) => addTodo(task),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      })
    },
  })

  const [form, setForm] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    addTodoMutation.mutate(form)
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="task">New Todo: </label>
        <input
          onChange={(e) => handleChange(e)}
          id="task"
          name="task"
          className="new-todo"
          placeholder="What needs to be done?"
          value={form}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default AddTodo
