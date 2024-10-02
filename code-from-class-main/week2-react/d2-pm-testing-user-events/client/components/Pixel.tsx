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
    <div
      data-testid="pixel-for-testing"
      className="pixel"
      style={{ background: color }}
      role="button"
      tabIndex={0}
      onClick={() => {
        if (!locked) setColor(getColor())
      }}
      onDoubleClick={() => {
        setColor('#000000')
        setLocked(true)
      }}
      onContextMenu={(e) => {
        e.preventDefault()
        setLocked(false)
        setColor(getColor())
      }}
    ></div>
  )
}

export default Pixel
