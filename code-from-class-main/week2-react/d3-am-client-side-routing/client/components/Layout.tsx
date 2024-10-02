import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header>
        <Link to="/">
          <h1>React Kata</h1>
        </Link>
        <nav>
          <Link to="/numbers">Fun with Numbers</Link>
          <Link to="/pixel/5/vengaboys">Pixel Party</Link>
          <Link to="/list">List Shenanigans</Link>
          <Link to="/pumpkins">Neglect the Pumpkins</Link>
        </nav>
      </header>

      <Outlet />
      
    </>
  )
}

export default Layout
