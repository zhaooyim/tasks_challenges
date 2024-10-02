import React from 'react'
import Artist from './Artist.tsx'

interface AlbumInt {
  name: string
  year: string
  image?: string
}

interface ArtistInt {
  name: string
  albums: AlbumInt[]
}

interface Props {
  artists: ArtistInt[]
}

function Home(props: Props) {
  return (
    <>
      <h1>K-Pop Extravaganza!</h1>
      <ul>
        {props?.artists.map((artist, index) => (
          <li key={index}>
            <Artist name={artist.name} albums={artist.albums} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home
