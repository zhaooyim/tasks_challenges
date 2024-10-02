import { useState } from 'react'
import { ScaresForm } from '../models/scares'

// TODO 3.d: Create Interface for { handleAdd }: Props 
interface Props {
  handleAdd: (obj: ScaresForm) => void
}

function MultiInputForm({handleAdd}: Props) {
  //  TODO 3.a : Create a form state, set the initial state to be an object. 
  //  e.g. {scare: "darkness", animal: "hippo" }

  const [form, setForm] = useState({scare: "", animal: "" })
  // TODO 3.b: Create handleChange function.
 function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
  // console.log(event.target)
  const name = event.target.name 
  const value = event.target.value
// console.log({name: name,  value: value})
  setForm({...form, [name]: value})
 }
  // TODO 3.c: Create handleSubmit function, 
  // prevent default html form behaviour 
  // update the scaryStuff state - handleAdd()
  // reset the form state

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    handleAdd(form)
    setForm({ scare: "", animal: "" })
  }
 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="scare">Scare:</label>
        <input
        onChange={handleChange}
          type="text"
          name="scare"
          id="scare"
          placeholder="enter a scare"
          // TODO 3.a: make the input value dynamic/ stateful
          value={form.scare}
        />
        <br></br>
        <label htmlFor="animal">Animal:</label>
        <input
        onChange={handleChange}
          type="text"
          name="animal"
          id="animal"
          placeholder="enter an animal"
          // TODO 3.a: make the input value dynamic/ stateful
          value={form.animal}

        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default MultiInputForm
