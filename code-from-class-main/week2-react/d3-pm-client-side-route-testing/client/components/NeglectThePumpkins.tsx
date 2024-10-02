import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const allPumpkins = ['first', 'second', 'third'] as const
type Pumpkin = typeof allPumpkins[number]
const decay = [
  'A cheerfully fresh Jack-o-Lantern',
  'A couple of days have passed and the Jack-o-Lantern is looking somewhat wrinkly',
  "Half of the Jack-o-Lantern's face is sagging as the pumpkin begins to collapse",
  "This Jack-o-Lantern is returning to the Earth from whence it came. Fungus and maggots infest it's once bright mortal shell",
]

function NeglectThePumpkins() {
  // Create a state for the changing img props÷
  const [pumpk, setPumpk] = useState({
    // a pumpk with an img prop that starts at 0
    first: 0,
    second: 0,
    third: 0,
  })
  //  Version 1 - longer with if else:
  function handleClick(pumpkin: Pumpkin) {
    if (pumpk[pumpkin] === 3) {
      setPumpk({
        ...pumpk,
        [pumpkin]: 0,
      })
    } else {
      setPumpk({
        ...pumpk,
        [pumpkin]: pumpk[pumpkin] + 1,
      })
    }
  }

  // Version 2 - shorter with ternary babyyyyy:
  // function handleClick(pumpkin: Pumpkin) {
  //   setPumpk({
  //     ...pumpk,
  //     [pumpkin]: pumpk[pumpkin] === 3 ? 0 : pumpk[pumpkin] + 1,
  //   })
  // }

  return (
    <>
      {allPumpkins.map((pumpkin) => (
        <button
          key={pumpkin}
          onClick={() => handleClick(pumpkin)}
          className="p-button"
        >
          <img
            id={pumpkin}
            className="pumpkin"
            src={`/client/images/pumpkin-${pumpk[pumpkin]}.png`}
            alt={`${decay[pumpk[pumpkin]]} - ${pumpkin} pumpkin`} // this should be the index of the image which is changing.
          />
        </button>
      ))}
      <Outlet />
    </>
  )
}

export default NeglectThePumpkins