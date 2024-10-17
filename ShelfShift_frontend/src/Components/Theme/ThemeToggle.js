import React, { useState, useEffect } from 'react';
import { GrSun } from "react-icons/gr";
import { BsMoonStarsFill } from "react-icons/bs";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

    const handleToggle = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return (
        <label className={`relative inline-block w-16 h-8`}>
            <input
                type="checkbox"
                checked={isDarkMode}
                onChange={handleToggle}
                className={`absolute opacity-0 w-0 h-0`}              
            />
            {/* Slider background depending on dark/light mode */}
            <span className={`slider absolute top-0 left-0 right-0 bottom-0 rounded-full transition-all duration-400
                ${isDarkMode ? 'bg-[#3C0753] border-[#DDE6ED]' : 'bg-[#DDE6ED] border-[#3C0753]'} border-2 dark:bg-[#720455]`}>
            </span>
            {/* Icon inside the slider */}
            <span className={`absolute top-1 left-1 z-10 w-6 h-6 transition-transform duration-400
                ${isDarkMode ? 'transform translate-x-8' : 'transform translate-x-0'}`}>
                {isDarkMode 
                    ? <GrSun className='text-[#FEFBF6] m-1' />  // Sun icon in dark mode
                    : <BsMoonStarsFill className='text-[#364F6B] m-1' />  // Moon icon in light mode
                }
                
            </span>
        </label>
    );
};

export default ThemeToggle;
