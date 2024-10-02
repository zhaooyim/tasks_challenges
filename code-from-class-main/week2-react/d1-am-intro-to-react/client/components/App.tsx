import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import data from '../data'

function App() {
  return (
    <>
      <Header />
      <Home artists={data.artists} />
      <Footer />
    </>
  )
}

export default App
