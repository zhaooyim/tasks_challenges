import { ScaresForm } from '../models/scares'
import AnimalsList from './AnimalsList'
import ScaresList from './ScaresList'
import MultiInputForm from './MultiInputForm'
import { useState } from 'react'

function Main() {
  const initialState = {
    scares: [
      'ghosts',
      'overdue emails',
      'driving behind log trucks like the one in final destination',
    ],
    animals: ['snake', 'mantis shrimp', 'worm'],
  }

  // TODO PART 1: Pass `scaryStuff` state down as props to <List/> components
  const [scaryStuff, setScaryStuff] = useState(initialState)


  // TODO PART 3: Create and prop drill a `handleAdd` function into <MultipleInputForm/>
  const handleAdd = (obj: ScaresForm) => {
    setScaryStuff({
      scares: [...scaryStuff.scares, obj.scare],
      animals: [...scaryStuff.animals, obj.animal],
    })
  }


  return (
    <section className="home">
      <h2>Scares & Animals</h2>
      {/* TODO PART 2: Render state in these Lists */}

      <ScaresList scares={scaryStuff.scares}/>
      <AnimalsList animals={scaryStuff.animals} />
      <div>
        <h2>Add more</h2>
      <MultiInputForm  handleAdd={handleAdd}/>
      </div>
    </section>
  )
}

export default Main
