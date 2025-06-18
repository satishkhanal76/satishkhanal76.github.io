import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css'

import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme(prev => {
      const newTheme = !prev;
      document.body.classList.toggle('light-theme', newTheme);
      return newTheme;
    });
  };


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
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
        <nav className='container nav-wrapper'>
            <div className="logo-container"><a href="/">Satish</a></div>
            <div className="desktop-nav">
                <ul>
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#my-projects">My Projects</a></li>
                    <li><a href="#contact-me">Get In Touch</a></li>
                    <button className="toggle-theme-btn" onClick={toggleTheme}>
                      {isLightTheme ? <FaMoon className="theme-icon moon" /> : <FaSun className="theme-icon sun" />}
                    </button>
                </ul>
          </div>
        </nav>
    </motion.nav>
  )
}

export default Navbar