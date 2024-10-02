import { useState } from 'react'
import monstermash from '/monster-mash.mp3'
import monsterImg from '/monster-can.png'

function MonsterMash() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [showMonster, setShowMonster] = useState(false)

  const handleClick = () => {
    const audio = new Audio(monstermash)
    audio.play()

    setPos({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    })
    setShowMonster(true)
  }

  return (
    <>
      <button
        onClick={handleClick}
        style={{
          position: 'absolute',
          left: pos.x,
          top: pos.y,
        }}
      >
        Monster Mash!
      </button>

      {showMonster && (
        <img
          src={monsterImg}
          className="monster-img"
          alt="a scary can of monster"
        />
      )}
    </>
  )
}

export default MonsterMash
