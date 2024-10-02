import { useState } from 'react'

function FunWithNumbers() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h2>Fun with Numbers</h2>
      <h4>Number is: {count}</h4>
      <button
        onClick={() => {
          setCount(count + 5)
        }}
      >
        +5
      </button>
      <button
        onClick={() => {
          setCount(count - 5)
        }}
      >
        -5
      </button>
      <button
        onClick={() => {
          setCount(count * 0)
        }}
      >
        reset
      </button>
    </>
  )
}

export default FunWithNumbers
