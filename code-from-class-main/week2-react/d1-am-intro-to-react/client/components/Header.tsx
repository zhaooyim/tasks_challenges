import React from 'react'
function Header() {
  return (
    <header>
      <nav>
        <ul>
          {/* TODO: make these links do something - use either react router, or conditional rendering */}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
