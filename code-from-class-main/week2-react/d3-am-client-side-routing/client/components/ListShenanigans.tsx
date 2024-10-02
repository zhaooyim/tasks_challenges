import { useState } from 'react'

function ListShenanigans() {
  const [lists, setLists] = useState({
    left: [
      'Apple',
      'DVD Player',
      'Mysterious Smell',
      'Pompom Hat',
      'Praying Mantis',
      'Skeletor',
    ],
    right: [
      'Caltrops',
      'Chad Maywether Jr.',
      'Comedy Bang! Bang!',
      'Freshly Cut Grass',
      'Stop Sign',
    ],
  })

  function handleLeft(item: string): void {
    setLists({
      left: [...lists.left, item].sort(),
      right: lists.right.filter((el) => item != el).sort(),
    })
  }

  function handleRight(item: string): void {
    setLists({
      left: lists.left.filter((el) => item != el).sort(),
      right: [...lists.right, item].sort(),
    })
  }

  return (
    <>
      <h2>List Shenanegans</h2>
      <section className="container">
        {/* left list */}
        <ul>
          {lists.left.map((item) => (
            <li key={item}>
              {item} <button onClick={() => handleRight(item)}>→</button>
            </li>
          ))}
        </ul>
        {/* right list */}
        <ul>
          {lists.right.map((item) => (
            <li key={item}>
              {item} <button onClick={() => handleLeft(item)}>←</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default ListShenanigans
