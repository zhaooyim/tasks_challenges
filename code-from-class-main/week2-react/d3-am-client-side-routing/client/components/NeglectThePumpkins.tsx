import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import pumpkinImages from '../images/index'

const allPumpkins = ['first', 'second', 'third'] as const
type Pumpkin = typeof allPumpkins[number]
const decay = [
  'A cheerfully fresh Jack-o-Lantern',
  'A couple of days have passed and the Jack-o-Lantern is looking somewhat wrinkly',
  "Half of the Jack-o-Lantern's face is sagging as the pumpkin begins to collapse",
  "This Jack-o-Lantern is returning to the Earth from whence it came. Fungus and maggots infest it's once bright mortal shell",
]

function NeglectThePumpkins() {
  const [pumpkins, setPumpkins] = useState({
    first: 0,
    second: 0,
    third: 0,
  })

  function handleClick(pumpkin: Pumpkin) {
    pumpkins[pumpkin] < 3 && setPumpkins({
      ...pumpkins,
      [pumpkin]: pumpkins[pumpkin] === 3 ? 0 : pumpkins[pumpkin] + 1,
    })
  }

  return (
    <>
      {allPumpkins.map((pumpkin) => (
        <button
          key={pumpkin}
          onClick={() => handleClick(pumpkin)}
          className="pumpkin-button"
        >
          <img
            id={pumpkin}
            className="pumpkin"
            src={pumpkinImages[pumpkins[pumpkin]]}
            alt={decay[pumpkins[pumpkin]]}
          />
        </button>
      ))}
    </>
  )
}

export default NeglectThePumpkins
