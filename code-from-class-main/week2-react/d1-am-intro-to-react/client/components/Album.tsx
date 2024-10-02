import React from 'react'

// TODO: Write an interface for Props

function Album(props) {
  // Destructuring the props object:
  const { name, year, image } = props

  return (
    <div className="album">
      <h3>
        {name} - {year}
      </h3>
      {/* TODO: if the image is not available, show a friendly message to the user:  */}
        {image ? <img className="album-cover" src={image} alt={`Cover of ${name}`} /> : <p>woopsie, album art not found</p>}
        
    </div>
  )
}

export default Album
