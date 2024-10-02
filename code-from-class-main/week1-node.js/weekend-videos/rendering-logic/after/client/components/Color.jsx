import React from 'react'

function Color(props) {
  // const { color } = props
  const color = props.color
  return color === 'grey' ? (
    <p style={{ color: color }}>{color} - Really?!</p>
  ) : (
    <p style={{ color: color }}>{color} - Nice!</p>
  )
}

export default Color
