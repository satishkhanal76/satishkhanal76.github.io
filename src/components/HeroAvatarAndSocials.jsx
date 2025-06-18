import React, {useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as FaIcons from 'react-icons/fa'
import  mediaPlatforms from '/public/data/mediaPlatforms.json'

const HeroAvatarAndSocials = () => {
    const [showIcons, setShowIcons] = React.useState(false)
    const [socialMediaPlatforms, setSocialMediaPlatforms] = React.useState(mediaPlatforms)

    useEffect(() => {
      setShowIcons(true);
      const timer = setTimeout(() => setShowIcons(false), 1600); // fan out and in
      return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
      setSocialMediaPlatforms(p => p.filter(i => i.isVisible));
    }, [])

  return (
    <div className="hero-img-container" 
            onClick={() => setShowIcons(prev => !prev)}
        >
          <div className="hero-img-wrapper">
            <img
              src="./hero-img.jpeg"
              alt="Website Hero Image"
              className="hero-img"
            />
          </div>
          <AnimatePresence>
            {showIcons && (
                <motion.div 
                    className="hero-icons-container"
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {socialMediaPlatforms.map((item, index) => {
                      const angle = (index / socialMediaPlatforms.length) * (2 * Math.PI) + 0.5;
                      const radius = 150;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      const IconComponent = FaIcons[item.iconName] || FaIcons.FaGlobe; // Fallback icon if not found

                      return (
                        <motion.a
                            key={item.name}
                            className='hero-icon'
                            href={item.url}
                            target='_blank'
                            title={item.name}
                            rel='noopener noreferrer'
                            initial={{
                                x: '-50%',
                                y: '-50%',
                                rotate: 0
                            }}
                            animate={{x: `calc(${x}px - 50%)`, y: `calc(${y}px - 50%)`, rotate: 720 }}
                            transition={{type: 'spring', stiffness: 250, damping: 20, mass: 0.5, delay: index * 0.01}}
                            exit={{
                                x: '-50%',
                                y: '-50%',
                            }}
                        >
                          <IconComponent />
                        </motion.a>
                      );
                    })}
                </motion.div>
            )}
          </AnimatePresence>
        </div>
  )
}

export default HeroAvatarAndSocials