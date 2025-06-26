import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const RevealOnScroll = ({ children, index }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  return (
    <motion.div
        layout
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
            duration: 0.4,
            delay: 0.05 * (index % 3),
            ease: 'easeOut',
            },
        },
}}
    >
      {children}
    </motion.div>
  )
}

export default RevealOnScroll