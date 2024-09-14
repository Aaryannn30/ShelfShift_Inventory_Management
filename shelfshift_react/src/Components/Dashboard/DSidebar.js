import React, { useState } from 'react';
import { FaChartPie, FaUserPlus, FaNewspaper, FaTachometerAlt, FaBell, FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineMarkUnreadChatAlt, MdDashboardCustomize } from "react-icons/md";
import { IoFileTrayFull } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { LuFlower } from "react-icons/lu";
// import SearchBar from '../SearchBar';
import Dropdown from '../Pages/PDropdown';
import { Link, useLocation } from 'react-router-dom';
// import DView from './DView';
import ThemeToggle from '../Theme/ThemeToggle';

const DSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Top Navbar */}
            <nav className="flex items-center justify-between px-6 py-3 bg-white/30 dark:bg-gray-900/40 text-gray-900 dark:text-white backdrop-blur-lg shadow-md border-b border-gray-200 dark:border-gray-700 rounded-b-lg">
                <div className="flex items-center text-lg">
                    <LuFlower className='text-teal-400 h-6 w-6 dark:text-teal-300' />
                    <span className="font-bold text-gray-800 dark:text-white">&nbsp;StaffSphere</span>
                    <span className='text-gray-600 dark:text-gray-300 font-normal'>&nbsp;Work Management</span>
                </div>

                <div className="flex items-center gap-x-6">
                    {/* <SearchBar /> */}
                    <ThemeToggle />
                    <FaBell className="w-4 h-4 text-gray-600 dark:text-gray-300 hover:text-teal-400 transition-colors cursor-pointer" />
                    <FaNewspaper className="w-4 h-4 text-gray-600 dark:text-gray-300 hover:text-teal-400 transition-colors cursor-pointer" />
                    <FaUserPlus className="w-4 h-4 text-gray-600 dark:text-gray-300 hover:text-teal-400 transition-colors cursor-pointer" />
                    <Dropdown />
                </div>
            </nav>

            <div className="flex w-full h-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                {/* Main Sidebar */}
                <div
                    className={`fixed top-16 left-0 h-full bg-white/30 dark:bg-gray-900/40 text-gray-800 dark:text-white backdrop-blur-lg shadow-lg rounded-r-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out w-48`}
                >
                    <div className="flex items-center justify-between h-12 px-4 bg-white/10 dark:bg-gray-800/30 backdrop-blur-md shadow-sm">
                        <h1 className="text-sm font-semibold">Menu</h1>
                        <button onClick={toggleSidebar} className="focus:outline-none">
                            <FaTimes className="w-4 h-4" />
                        </button>
                    </div>

                    <nav className="px-3 py-4 space-y-2">
                        <Link
                            to="/dashboard"
                            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                        >
                            <FaTachometerAlt className="w-4 h-4" />
                            <span className="ml-2">Dashboard</span>
                        </Link>
                        <Link
                            to="/workspace"
                            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${isActive('/workspace') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                        >
                            <MdDashboardCustomize className="w-4 h-4" />
                            <span className="ml-2">Workspace</span>
                        </Link>
                        <Link
                            to="/users"
                            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${isActive('/users') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                        >
                            <FaUsers className="w-4 h-4" />
                            <span className="ml-2">Users</span>
                        </Link>
                        <Link
                            to="/chat"
                            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${isActive('/chat') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                        >
                            <MdOutlineMarkUnreadChatAlt className="w-4 h-4" />
                            <span className="ml-2">Chat</span>
                        </Link>
                        <Link
                            to="/update_feed"
                            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${isActive('/update_feed') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                        >
                            <IoFileTrayFull className="w-4 h-4" />
                            <span className="ml-2">Update Feed</span>
                        </Link>
                        <Link
                            to="/analysis"
                            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${isActive('/analysis') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                        >
                            <FaChartPie className="w-4 h-4" />
                            <span className="ml-2">Analysis</span>
                        </Link>
                    </nav>
                </div>

                {/* Small Sidebar */}
                {!isOpen && (
                    <div className="fixed top-16 left-0 h-full bg-white/20 dark:bg-gray-900/30 text-gray-800 dark:text-white flex flex-col items-center p-3 space-y-6 z-50 shadow-xl backdrop-blur-lg w-12 rounded-r-lg">
                        <button onClick={toggleSidebar} className="focus:outline-none p-2 bg-teal-500/60 hover:bg-teal-400/40 rounded-full">
                            <FaBars className="w-4 h-4 text-gray-800 dark:text-white" />
                        </button>
                        <Link to="/dashboard" className="p-2 bg-gray-800/20 dark:bg-gray-700/30 hover:bg-teal-400/40 rounded-full">
                            <FaTachometerAlt className="w-4 h-4 text-gray-800 dark:text-white" />
                        </Link>
                        <Link to="/workspace" className="p-2 bg-gray-800/20 dark:bg-gray-700/30 hover:bg-teal-400/40 rounded-full">
                            <MdDashboardCustomize className="w-4 h-4 text-gray-800 dark:text-white" />
                        </Link>
                        <Link to="/users" className="p-2 bg-gray-800/20 dark:bg-gray-700/30 hover:bg-teal-400/40 rounded-full">
                            <FaUsers className="w-4 h-4 text-gray-800 dark:text-white" />
                        </Link>
                        <Link to="/chat" className="p-2 bg-gray-800/20 dark:bg-gray-700/30 hover:bg-teal-400/40 rounded-full">
                            <MdOutlineMarkUnreadChatAlt className="w-4 h-4 text-gray-800 dark:text-white" />
                        </Link>
                        <Link to="/update_feed" className="p-2 bg-gray-800/20 dark:bg-gray-700/30 hover:bg-teal-400/40 rounded-full">
                            <IoFileTrayFull className="w-4 h-4 text-gray-800 dark:text-white" />
                        </Link>
                        <Link to="/analysis" className="p-2 bg-gray-800/20 dark:bg-gray-700/30 hover:bg-teal-400/40 rounded-full">
                            <FaChartPie className="w-4 h-4 text-gray-800 dark:text-white" />
                        </Link>
                    </div>
                )}

                {/* Main Content Area */}
                <div className={`flex-1 transition-transform duration-300 ${isOpen ? 'ml-48' : 'ml-12'} p-6 overflow-y-auto dark:bg-green-700`}>
                    {/* <DView /> */}
                    <div>Hello</div>
                </div>
            </div>
        </>
    );
};

export default DSidebar;
