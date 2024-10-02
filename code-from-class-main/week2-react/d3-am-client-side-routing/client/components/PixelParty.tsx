import Pixel from './Pixel'
import { useParams, useSearchParams } from 'react-router-dom'
function PixelParty() {

// TODO: set number of pixels dynamically from URL params: 
  const { number, name } = useParams()

  // STRETCH: IF CURIOUS - Search Params:
  //  look up how to use the useSearchParams() hook

  // This is from the /:number param: 
  console.log("Pixel number: ", number)
  // This is from the /:name param: 
  console.log("User name: ", name)

  const pixels = new Array(Number(number)).fill(<Pixel />)

  return (
    <>
      <h2>Pixel Party</h2>
      <h3>User name: {name}</h3>
      <section className="container">
      {pixels}
      {/* <Pixel/>
      <Pixel/>
      <Pixel/> */}
      </section>
    </>
  )
}

export default PixelParty
