import React from 'react'
import Color from './Color'

const colorData = ['magenta', 'turquoise', 'grey', 'darkslateblue']

function Colors(props) {
  return (
    <>
      {props.showColors && (
        <>
          <h3>These are your colours!</h3>

          {colorData.map((color) => (
            <Color key={color} color={color} />
          ))}
        </>
      )}
    </>
  )
}

export default Colors
