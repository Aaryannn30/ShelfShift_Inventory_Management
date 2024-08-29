// ThemeToggle.js
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
        <label className="relative inline-block w-16 h-8">
            <input
                type="checkbox"
                checked={isDarkMode}
                onChange={handleToggle}
                className="absolute opacity-0 w-0 h-0"
            />
            <span className={`slider absolute top-0 left-0 right-0 bottom-0 rounded-full transition-all duration-400 ${isDarkMode ? 'bg-blue-900' : 'bg-blue-300'}`}></span>
            <span className={`absolute top-1 left-1 z-10 w-6 h-6 transition-transform duration-400 ${isDarkMode ? 'transform translate-x-8' : 'transform translate-x-0'}`}>
                    {isDarkMode ? <GrSun className='text-yellow-500 m-1'/> : 
                        <BsMoonStarsFill className='text-cyan-800 m-1'/> }
            </span>
        </label>
    );
};

export default ThemeToggle;
