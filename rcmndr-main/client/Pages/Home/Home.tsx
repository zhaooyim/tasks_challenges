import LoginButton from '../../components/Login/Login'
import RegisterButton from '../../components/RegisterButton/RegisterButton'
import * as motion from 'framer-motion/client'

function Home() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.8,
        delayChildren: 0.25,
        staggerChildren: 0.75,
      },
    },
  }

  const sloganItem = {
    hidden: {
      opacity: 0,
      scale: 3,
      filter: 'blur(30px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', bounce: 0, duration: 0.8 },
    },
  }

  return (
    <div className="pt-44 pl-4 flex flex-col gap-4 overflow-hidden">
      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.p variants={sloganItem} className="text-4xl">
          collate.
        </motion.p>
        <motion.p variants={sloganItem} className="text-4xl">
          recommend.
        </motion.p>
        <motion.p variants={sloganItem} className="text-4xl">
          discover.
        </motion.p>
      </motion.div>
      <div className="flex gap-2">
        <LoginButton />
        <RegisterButton />
      </div>
    </div>
  )
}

export default Home
