import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
    SiFramer,
    SiTailwindcss,
    SiReact,
    SiJavascript,
    SiCss3,
} from "react-icons/si";
import { FaChartPie,FaTachometerAlt, FaTimes } from 'react-icons/fa';
import { MdOutlineMarkUnreadChatAlt, MdDashboardCustomize } from "react-icons/md";
import { IoFileTrayFull } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { Link , useLocation} from 'react-router-dom';



const IconSideNav = () => {
    return (
        <div className="bg-slate-900 text-slate-100 flex">
            <SideNav />
            <div className="w-full">
                <div className="h-[35px] m-4 rounded border-2 border-dashed border-slate-600 bg-slate-800"></div>
                <div className="h-[690px] m-4 rounded border-2 border-dashed border-slate-600 bg-slate-800"></div>
            </div>
        </div>
    );
};

const SideNav = () => {
    const [selected, setSelected] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <div className="flex w-screen h-screen bg-gray-100  border-r border-gray-700 rounded-xl fixed -z-10">
                {/* Sidebar */}
                <div
                    className={`fixed top-0 left-0 h-full bg-gray-900 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        } transition-transform duration-300 ease-in-out w-[200px] mt-10 fixed`}
                >
                    {/* Toggle Button at the Top */}
                    <div className="flex items-center justify-between h-16 px-4 bg-gray-800 border-b border-gray-700">
                        <h1 className="text-lg font-bold">My Sidebar</h1>
                        <button onClick={toggleSidebar} className="focus:outline-none">
                            <FaTimes className="w-5 h-5" />
                        </button>
                    </div>

                    <nav className="flex-1 px-2 py-4 space-y-2">
                        <Link
                            to="/dashboard"
                            className={`flex items-center px-3 py-2 ${isActive('/dashboard') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                        >
                            <FaTachometerAlt className="w-4 h-4" />
                            <span className="ml-3 text-sm">Dashboard</span>
                        </Link>
                        <Link
                            to="/workspace"
                            className={`flex items-center px-3 py-2 ${isActive('/workspace') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                        >
                            <MdDashboardCustomize className="w-4 h-4" />
                            <span className="ml-3 text-sm">Workspace</span>
                        </Link>
                        <Link
                            to="/users"
                            className={`flex items-center px-3 py-2 ${isActive('/users') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                        >
                            <FaUsers className="w-4 h-4" />
                            <span className="ml-3 text-sm">Users</span>
                        </Link>
                        <Link
                            to="/chat"
                            className={`flex items-center px-3 py-2 ${isActive('/chat') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                        >
                            <MdOutlineMarkUnreadChatAlt className="w-4 h-4" />
                            <span className="ml-3 text-sm">Chat</span>
                        </Link>
                        <Link
                            to="/update_feed"
                            className={`flex items-center px-3 py-2 ${isActive('/update_feed') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                        >
                            <IoFileTrayFull className="w-4 h-4" />
                            <span className="ml-3 text-sm">Update feed</span>
                        </Link>
                        <Link
                            to="/analysis"
                            className={`flex items-center px-3 py-2 ${isActive('/analysis') ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} rounded-lg transition`}
                        >
                            <FaChartPie className="w-4 h-4" />
                            <span className="ml-3 text-sm">Analysis</span>
                        </Link>
                    </nav>
                </div>
            </div>
            {/* // NOTE: In prod, you'd likely set height to h-screen and fix to the viewport */}
            <nav className="h-screen w-fit bg-slate-950 p-4 flex flex-col items-center gap-7">
                {/* Temp logo from https://logoipsum.com/ */}
                <svg
                    width="40"
                    height="28"
                    viewBox="0 0 40 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-4"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.98578 4.11462L0 14C1.99734 15.9773 4.27899 17.6437 6.76664 18.9474C7.45424 20.753 8.53203 22.4463 10 23.8995C15.5229 29.3668 24.4772 29.3668 30 23.8995C31.468 22.4463 32.5458 20.753 33.2334 18.9473C35.721 17.6437 38.0027 15.9773 40 14L30.0223 4.12266C30.0149 4.11527 30.0075 4.10788 30 4.1005C24.4772 -1.36683 15.5229 -1.36683 10 4.1005C9.99527 4.10521 9.99052 4.10991 9.98578 4.11462ZM29.0445 20.7309C26.1345 21.7031 23.0797 22.201 20 22.201C16.9203 22.201 13.8656 21.7031 10.9556 20.7309C11.2709 21.145 11.619 21.5424 12 21.9196C16.4183 26.2935 23.5817 26.2935 28 21.9196C28.381 21.5424 28.7292 21.145 29.0445 20.7309ZM12.2051 5.8824C12.9554 6.37311 13.7532 6.79302 14.588 7.13536C16.3038 7.83892 18.1428 8.20104 20 8.20104C21.8572 8.20104 23.6962 7.83892 25.412 7.13536C26.2468 6.79302 27.0446 6.3731 27.795 5.88238C23.4318 1.77253 16.5682 1.77254 12.2051 5.8824Z"
                        fill="#FFFFFF"
                    ></path>
                </svg>
                <NavItem selected={selected === 0} id={0} setSelected={setSelected}>
                    <SiTailwindcss />
                </NavItem>
                <NavItem selected={selected === 1} id={1} setSelected={setSelected}>
                    <SiReact />
                </NavItem>
                <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
                    <SiJavascript />
                </NavItem>
                <NavItem selected={selected === 3} id={3} setSelected={setSelected}>
                    <SiFramer />
                </NavItem>
                <NavItem selected={selected === 4} id={4} setSelected={setSelected}>
                    <SiCss3 />
                </NavItem>
            </nav>
        </>
    );
};

const NavItem = ({ children, selected, id, setSelected }) => {
    return (
        <motion.button
            className="p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative"
            onClick={() => setSelected(id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="block relative z-10">{children}</span>
            <AnimatePresence>
                {selected && (
                    <motion.span
                        className="absolute inset-0 rounded-md bg-indigo-600 z-0"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                    ></motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    );
};

export default IconSideNav;