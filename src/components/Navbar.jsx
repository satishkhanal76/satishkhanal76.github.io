import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css'

import ThemeToggleButton from './ThemeToggleButton';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className="desktop-nav-section"
      initial={{ y: 0, display: "block", opacity: 1 }}
      animate={ showNavbar ? { opacity: 1, y: 0, display: "block" } : {opacity: 0, y: -100, display: "none"}}
      transition={{ duration: 0.25, ease: 'easeInOut' }} 
    >
        <nav className='container nav-wrapper'>
            {/* <a className='logo-container' href="/"><img alt='logo-image' src='./hero-img.jpeg' /></a> */}
            <div className="desktop-nav">
                <ul>
                    <li><a href="./">Home</a></li>
                    <li><a href="#my-projects">My Projects</a></li>
                    <li><a href="#contact-me">Get In Touch</a></li>
                    <li><ThemeToggleButton /></li>
                </ul>
          </div>
        </nav>
    </motion.nav>
  )
}

export default Navbar