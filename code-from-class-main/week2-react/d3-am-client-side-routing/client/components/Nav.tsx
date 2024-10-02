import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav>
        <Link to="/numbers">Number Party</Link>
        <Link to="/list">List Shenanegians</Link>
        <Link to="/pixel/5/vengaboys">Pixel Party</Link>
        <Link to="/pumpkins">Neglect the Pumpkins</Link>
      </nav>
    </>
  )
}

export default Nav
