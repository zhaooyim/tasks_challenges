import { useParams } from 'react-router-dom'
import Pixel from './Pixel'

function PixelParty() {
  const { number } = useParams()
  const pixels = !isNaN(Number(number)) ? new Array(Number(number)).fill(null) : null
  return  (
    <>
      <h2>Pixel Party</h2>
      <section className="container">
        {pixels ? pixels.map((_, i) => <Pixel key={i}/> ) : <p>Okay, wise guy</p>}
      </section>
    </>
  )
}

export default PixelParty
