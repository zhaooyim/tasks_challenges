import ScaresList from './ScaresList'
import SingleInputForm from './SingleInputForm'
import { useState } from 'react'

function Main() {
  const [scares, setScares] = useState([
    'ghosts',
    'overdue emails',
    'driving behind log trucks like the one in final destination',
  ])

  const handleAddScare = (newScare: string) => {
    setScares([...scares, newScare])
  }

  // const [showForm, setShowForm] = useState(false)

  // const handleShowForm = () => {
  //   setShowForm(!showForm)
  // }

  return (
    <section className="home">
      <ScaresList scares={scares} />
      <div>
        {/* <button onClick={handleShowForm}>
          {showForm ? 'Hide Form' : 'Add Scare'}
        </button> */}
        {/* {showForm &&  */}
        <SingleInputForm handleAddScare={handleAddScare} />
      </div>
    </section>
  )
}

export default Main
