import React from 'react'
import Album from './Album'
interface AlbumInt {
  name: string
  year: string
  image?: string
}
interface Props {
  name: string
  albums: AlbumInt[]
}
function Artist(props: Props) {
  // TODO: Handle the possibility of unavailable props data! 

  if (props) {
  return (
    <article className="artist">
      <h2>{props.name}</h2>
      <ul>
        {props.albums.map((album, index) => (
          <li key={index}>
            <Album {...album} />
          </li>
        ))}
      </ul>
    </article>
  )
}
}

export default Artist
