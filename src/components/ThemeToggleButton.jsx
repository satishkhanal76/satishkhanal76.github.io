import React, { useEffect } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ThemeToggleButton = () => {
    const [isLightTheme, setIsLightTheme] = React.useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'light' : false;
    });

    // Initialize the theme based on localStorage
    useEffect(() => {
        document.body.classList.toggle('light-theme', isLightTheme);
    }, [isLightTheme]);

    useEffect(() => {
        // Save the theme preference to localStorage
        localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
    }, [isLightTheme]);

    const toggleTheme = () => {
        setIsLightTheme(prev => {
        const newTheme = !prev;
        document.body.classList.toggle('light-theme', newTheme);
        return newTheme;
        });
    };


  return (
    <button className="toggle-theme-btn" onClick={toggleTheme}>
        {isLightTheme ? <FiMoon className="theme-icon moon" /> : <FiSun className="theme-icon sun" />}
    </button>
    )
}

export default ThemeToggleButton