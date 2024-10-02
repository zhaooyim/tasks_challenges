import { useState } from 'react'

// Define an array containing all possible pumpkin types
const allPumpkins = ['first', 'second', 'third'] as const

// Define a type for Pumpkin based on the possible values in allPumpkins array
type Pumpkin = (typeof allPumpkins)[number]

// Define an array containing descriptions of pumpkin decay stages
const decay = [
  'A cheerfully fresh Jack-o-Lantern',
  'A couple of days have passed and the Jack-o-Lantern is looking somewhat wrinkly',
  "Half of the Jack-o-Lantern's face is sagging as the pumpkin begins to collapse",
  "This Jack-o-Lantern is returning to the Earth from whence it came. Fungus and maggots infest it's once bright mortal shell",
]

// Define a functional component NeglectThePumpkins
function NeglectThePumpkins() {
  // Create a state to manage the pumpkin image props
  const [pumpk, setPumpk] = useState({
    // Initialize state with image props for each pumpkin type set to 0
    first: 0,
    second: 0,
    third: 0,
  })

  // Function to handle click events on pumpkin buttons
  function handleClick(pumpkin: Pumpkin) {
    // Version 1 - with If Else conditional:
    // If the current decay stage of the pumpkin is the last stage (3), reset it to the first stage (0)
    if (pumpk[pumpkin] === 3) {
      setPumpk({
        ...pumpk,
        [pumpkin]: 0,
      })
    } else {
      // Otherwise, increment the decay stage of the pumpkin by 1
      setPumpk({
        ...pumpk,
        [pumpkin]: pumpk[pumpkin] + 1,
      })
    }
  }

  // Version 2 - with ternary conditional:
  // function handleClick(pumpkin: Pumpkin) {
  //   setPumpk({
  //     ...pumpk,
  //     [pumpkin]: pumpk[pumpkin] === 3 ? 0 : pumpk[pumpkin] + 1,
  //   })
  // }

  // Render buttons for each pumpkin type
  return (
    <>
      {allPumpkins.map((pumpkin) => (
        <button
          data-testid={`${pumpkin} pumpkin`}
          key={pumpkin}
          // Attach click event handler to each button, passing the pumpkin type as argument
          onClick={() => handleClick(pumpkin)}
          className="p-button"
        >
          {/* Render an img element with src dynamically changing based on pumpkin's decay stage */}
          <img
            id={pumpkin}
            className="pumpkin"
            src={`client/images/pumpkin-${pumpk[pumpkin]}.png`}
            // Set alt text describing the decay stage of the pumpkin
            alt={`${decay[pumpk[pumpkin]]} - ${pumpkin} pumpkin`} // this should be the index of the image which is changing.
          />
        </button>
      ))}
    </>
  )
}

export default NeglectThePumpkins
