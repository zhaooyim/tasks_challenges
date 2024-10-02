import { Link, Outlet } from 'react-router-dom'
// import Nav from './Nav'

function Layout() {
  return (
    <>
      <header>
        <Link to="/">
          <h1>React Kata</h1>
        </Link>
      </header>
      <nav>
        <Link to="/numbers" >Number Party </Link>
        <Link to="/list">List Shenanegians</Link>
        <Link to="/pixel">Pixel Party</Link>
        <Link to="/pumpkins">Neglect the Pumpkins</Link>
      </nav>
      <Outlet />
      <footer data-testid="footer">Copyright: Rotten Pumpkins Anonymous 2024</footer>
    </>
  )
}

export default Layout