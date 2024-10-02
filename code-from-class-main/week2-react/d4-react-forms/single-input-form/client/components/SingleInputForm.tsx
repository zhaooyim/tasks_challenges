import { useState } from 'react'

interface Props {
  handleAddScare: (newScare: string) => void
}

function SingleInputForm({ handleAddScare }: Props) {
  // Text state needs to change
  const [text, setText] = useState('')

  // Function to handle change in form
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange', event.target.value)
    setText(event.target.value)
  }

  // Function to handle submit in form, prevent default and updates the text state.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault()
    console.log('handleSubmit', text)
    // Do something with our text state / form value
    handleAddScare(text) // this function has been prop drilled into the component from <Main/>
    // Set new text back to blank
    setText('')
  }

  return (
    <>
      <p>{text}</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="scare"
          id="scare"
          value={text}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default SingleInputForm
