import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header>
        <h1>APIs demo</h1>
        <nav>
          <li>
            <Link to="/pokemon">Pokemon</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/affirmations">Affirmations</Link>
          </li>
          <li>
            <Link to="/puppies">{'Puppies (Not really an external api)'}</Link>
          </li>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>COPYRIGHT &copy; 2024 to infinity</footer>
    </>
  )
}
