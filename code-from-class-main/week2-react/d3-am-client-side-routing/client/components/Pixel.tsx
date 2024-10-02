import { useState } from 'react'

function Pixel() {
  const [color, setColor] = useState(getColor())
  const [locked, setLocked] = useState(false)

  function getColor() {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`
  }

  return (
    // Accessibility - changed div to button
    <button
      data-testid="pixel-for-testing"
      className="pixel"
      style={{ background: color }}
      onClick={() => {
        if (!locked) setColor(getColor())
      }}
      onDoubleClick={() => {
        setColor('black')
        setLocked(true)
      }}
      onContextMenu={(e) => {
        e.preventDefault()
        setLocked(false)
        setColor(getColor())
      }}
      // Accessible feature for screen-reader users, so they can change colour with keyboard events
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !locked) {
          setColor(getColor())
        }
      }}
    ></button>
  )
}

export default Pixel
