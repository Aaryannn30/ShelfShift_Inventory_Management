import React, { useState , useEffect ,  createContext} from 'react';
import { FaUserPlus, FaNewspaper, FaBell, FaBars, FaTimes } from 'react-icons/fa';
import { SiPolywork } from "react-icons/si";
import { MdInventory2 } from "react-icons/md";
import { MdOutlinePointOfSale } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { BiSolidReport } from "react-icons/bi";

import { LuFlower } from "react-icons/lu";
// import SearchBar from '../SearchBar';
import Dropdown from '../Pages/PDropdown';
import { Link, useLocation } from 'react-router-dom';
import DView from './Dview';
import ThemeToggle from '../Theme/ThemeToggle';

import useAxios from "../../utils/useAxios"
import { jwtDecode } from 'jwt-decode';

const DSidebar = () => {
    const [res, setRes] = useState("")
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const api = useAxios();
    const token = localStorage.getItem("authTokens")
    


    if (token){
      const decode = jwtDecode(token)
      var user_id = decode.user_id
      var username = decode.username
      var full_name = decode.full_name
      var image = decode.image

    }

    const userName = createContext(username)

    useEffect(() => {
      const fetchData = async () => {
        try{
          const response = await api.get("/test/")
          setRes(response.data.response)
        } catch (error) {
          console.log(error);
          setRes("Something went wrong")
        }
      }
      fetchData()
    }, [])

    useEffect(() => {
        const fetchPostData = async () => {
          try{
            const response = await api.post("/test/")
            setRes(response.data.response)
          } catch (error) {
            console.log(error);
            setRes("Something went wrong")
          }
        }
        fetchPostData()
      }, [])

    
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Top Navbar */}
            <nav className="flex items-center justify-between px-6 py-3 bg-white/30 dark:bg-gray-900/40 text-gray-900 dark:text-white backdrop-blur-lg shadow-md border-b border-gray-200 dark:border-gray-700 rounded-b-lg fixed z-10 w-full">
                <div className="flex items-center text-lg">
                    <LuFlower className='text-teal-400 h-6 w-6 dark:text-teal-300' />
                    <span className="font-bold text-gray-800 dark:text-white hover:cursor-pointer">
                        <Link to='/'>&nbsp;StaffSphere</Link></span>
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
                            to="/dashboardmainview"
                            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${isActive('/dashboardmainview') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                        >
                            <SiPolywork className="w-4 h-4" />
                            <span className="ml-2">Dashboard</span>
                        </Link>
                        <Link
                            to="/inventory"
                            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${isActive('/inventory') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                        >
                            <MdInventory2  className="w-4 h-4" />
                            <span className="ml-2">Inventory</span>
                        </Link>
                        <Link
                            to="/sales"
                            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${isActive('/sales') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                        >
                            <MdOutlinePointOfSale  className="w-4 h-4" />
                            <span className="ml-2">Sales</span>
                        </Link>
                        <Link
                            to="/purchase"
                            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${isActive('/purchase') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                        >
                            <BiPurchaseTagAlt className="w-4 h-4" />
                            <span className="ml-2">Purchase</span>
                        </Link>
                        <Link
                            to="/report"
                            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${isActive('/report') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                        >
                            <BiSolidReport className="w-4 h-4" />
                            <span className="ml-2">Report</span>
                        </Link>                                                                   
                    </nav>
                </div>

                {/* Small Sidebar */}
                {!isOpen && (
                    <div className="fixed top-16 left-0 h-full bg-white/20 dark:bg-gray-900/30 text-gray-800 dark:text-white flex flex-col items-center p-3 space-y-6 z-50 shadow-xl backdrop-blur-lg w-12 rounded-r-lg">
                        <button onClick={toggleSidebar} className="focus:outline-none p-2 bg-teal-500/60 hover:bg-teal-400/40 rounded-full">
                            <FaBars className="w-4 h-4 text-gray-800 dark:text-white" />
                        </button>
                        <Link to="/dashboardmainview" className={`p-2 dark:bg-gray-700/30 0 rounded-full ${isActive('/dashboardmainview') ? 'bg-teal-500/60' : 'hover:bg-teal-400/40'}`} >
                            <SiPolywork  className="w-4 h-4 text-gray-800 dark:text-white" />
                        </Link>
                        <Link to="/inventory" className={`p-2  dark:bg-gray-700/30  rounded-full ${isActive('/inventory') ? 'bg-teal-500/60' : 'hover:bg-teal-400/40'}`}>
                            <MdInventory2  className="w-4 h-4 text-gray-800 dark:text-white" />
                        </Link>
                        <Link to="/sales" className={`p-2  dark:bg-gray-700/30  rounded-full ${isActive('/sales') ? 'bg-teal-500/60' : 'hover:bg-teal-400/40'}`}>
                            <MdOutlinePointOfSale  className="w-4 h-4 text-gray-800 dark:text-white" />
                        </Link>
                        <Link to="/purchase" className={`p-2  dark:bg-gray-700/30  rounded-full ${isActive('/purchase') ? 'bg-teal-500/60' : 'hover:bg-teal-400/40'}`}>
                            <BiPurchaseTagAlt className="w-4 h-4 text-gray-800 dark:text-white" />
                        </Link>
                        <Link to="/report" className={`p-2  dark:bg-gray-700/30 rounded-full ${isActive('/report') ? 'bg-teal-500/60' : 'hover:bg-teal-400/40'}`}>
                            <BiSolidReport className="w-4 h-4 text-gray-800 dark:text-white" />
                        </Link>                        
                    </div>
                )}

                {/* Main Content Area */}
                <div className={`flex-1 transition-transform duration-300 ${isOpen ? 'ml-48' : 'ml-12'} mt-11 p-6 overflow-y-auto backdrop-blur-md dark:bg-slate-900`}>
                    <DView />                    
                </div>
            </div>
        </>
    );
};

export default DSidebar;
