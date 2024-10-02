interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <header>
          <a href="/logout">Logout</a>
          <a href="/login">Login</a>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default Layout
