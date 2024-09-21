import React, { useState, useEffect, createContext } from 'react';
import { FaUserPlus, FaNewspaper, FaBell, FaBars, FaTimes } from 'react-icons/fa';
import { SiPolywork } from "react-icons/si";
import { MdInventory2, MdOutlinePointOfSale } from "react-icons/md";
import { BiPurchaseTagAlt, BiSolidReport } from "react-icons/bi";
import { LuFlower } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';
import Dropdown from '../Pages/PDropdown';
import ThemeToggle from '../Theme/ThemeToggle';
import useAxios from "../../utils/useAxios";
import { jwtDecode } from 'jwt-decode';
import DView from './Dview';

const DSidebar = () => {
    const [res, setRes] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); 
    const location = useLocation();
    const api = useAxios();
    const token = localStorage.getItem("authTokens");

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (token) {
            const decode = jwtDecode(token);
            setUser({
                user_id: decode.user_id,
                username: decode.username,
                full_name: decode.full_name,
                image: decode.image
            });
        }
    }, [token]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/test/");
                setRes(response.data.response);
            } catch (error) {
                console.log(error);
                setRes("Something went wrong");
            }
        };
        fetchData();
    }, [api]);

    const toggleSidebar = () => setIsOpen(!isOpen);
   
    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(prev => (prev === dropdownName ? null : dropdownName));  // Toggles the dropdowns and closes others
    };

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Top Navbar */}
            <nav className="flex items-center justify-between px-6 py-3 bg-white/30 dark:bg-gray-900/40 text-gray-900 dark:text-white backdrop-blur-lg shadow-md border-b border-gray-200 dark:border-gray-700 rounded-b-lg fixed z-10 w-full">
                <div className="flex items-center text-lg">
                    <LuFlower className='text-teal-400 h-6 w-6 dark:text-teal-300' />
                    <span className="font-bold text-gray-800 dark:text-white hover:cursor-pointer">
                        <Link to='/'>&nbsp;Storify</Link></span>
                    <span className='text-gray-600 dark:text-gray-300 font-normal'>&nbsp;Dashboard</span>
                </div>

                <div className="flex items-center gap-x-6">
                    {/* <SearchBar /> */}
                    <ThemeToggle />
                    
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
                        {/* Home Link */}
                        <Link
                            to="/dashboard/dashboardmainview"
                            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${isActive('/dashboardmainview') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                        >
                            <SiPolywork className="w-4 h-4" />
                            <span className="ml-2">Dashboard</span>
                        </Link>

                        {/* Inventory Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleDropdown('inventory')}
                                className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg focus:outline-none ${activeDropdown === 'inventory' ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                            >
                                <MdInventory2 className="w-4 h-4" />
                                <span className="ml-2">Inventory</span>
                            </button>
                            {activeDropdown === 'inventory' && (
                                <div className="ml-6 mt-2 space-y-2">
                                    <Link
                                        to="/dashboard/item"
                                        className={`block px-3 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/item') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                                    >
                                        Item
                                    </Link>
                                    <Link
                                        to="/dashboard/adjustment"
                                        className={`block px-3 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/adjustment') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                                    >
                                        Adjustment
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Sales Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleDropdown('sales')}
                                className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg focus:outline-none ${activeDropdown === 'sales' ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                            >
                                <MdOutlinePointOfSale className="w-4 h-4" />
                                <span className="ml-2">Sales</span>
                            </button>
                            {activeDropdown === 'sales' && (
                                <div className="ml-6 mt-2 space-y-2">
                                    <Link
                                        to="/dashboard/sales_orders"
                                        className={`block px-3 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/sales_orders') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                                    >
                                        Sales Orders
                                    </Link>
                                    <Link
                                        to="/dashboard/packages"
                                        className={`block px-3 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/packages') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                                    >
                                        Packages
                                    </Link>
                                    <Link
                                        to="/dashboard/invoice"
                                        className={`block px-3 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/invoice') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                                    >
                                        Invoice
                                    </Link>
                                    <Link
                                        to="/dashboard/payments"
                                        className={`block px-3 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/payments') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                                    >
                                        Payments Received
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Purchase Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleDropdown('purchase')}
                                className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg focus:outline-none ${activeDropdown === 'purchase' ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                            >
                                <BiPurchaseTagAlt className="w-4 h-4" />
                                <span className="ml-2">Purchase</span>
                            </button>
                            {activeDropdown === 'purchase' && (
                                <div className="ml-6 mt-2 space-y-2">
                                    <Link
                                        to="/dashboard/purchase_orders"
                                        className={`block px-3 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/purchase_orders') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                                    >
                                        Purchase Orders
                                    </Link>
                                    <Link
                                        to="/dashboard/purchases"
                                        className={`block px-3 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/purchases') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                                    >
                                        Purchase 
                                    </Link>
                                    <Link
                                        to="/dashboard/purchase_recieved"
                                        className={`block px-3 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/purchase_recieved') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                                    >
                                        Purchase Received
                                    </Link>
                                    <Link
                                        to="/dashboard/expenses"
                                        className={`block px-3 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/expenses') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                                    >
                                        Expenses
                                    </Link>
                                    <Link
                                        to="/dashboard/bills"
                                        className={`block px-3 py-2 text-sm font-medium rounded-lg ${isActive('/dashboard/bills') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                                    >
                                        Bills
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Reports */}
                        {/* <Link
                            to="/reports"
                            className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${isActive('/reports') ? 'bg-teal-500/80' : 'hover:bg-teal-400/40'}`}
                        >
                            <BiSolidReport className="w-4 h-4" />
                            <span className="ml-2">Reports</span>
                        </Link> */}
                    </nav>
                </div>

                {/* Small Sidebar */}
                {!isOpen && (
                    <div className="fixed top-16 left-0 h-full bg-white/20 dark:bg-gray-900/30 text-gray-800 dark:text-white flex flex-col items-center p-3 space-y-6 z-50 shadow-xl backdrop-blur-lg w-12 rounded-r-lg">
                        <button onClick={toggleSidebar} className="focus:outline-none p-2 bg-teal-500/60 hover:bg-teal-400/40 rounded-full">
                            <FaBars className="w-4 h-4 text-gray-800 dark:text-white" />
                        </button>
                        <Link to="/dashboard/dashboardmainview" className={`p-2 dark:bg-gray-700/30 rounded-full ${isActive('/dashboardmainview') ? 'bg-teal-500/60' : 'hover:bg-teal-400/40'}`} >
                            <SiPolywork  className="w-4 h-4 text-gray-800 dark:text-white" />
                        </Link>
                        <Link to="/dashboard/inventory_merge" className={`p-2 dark:bg-gray-700/30 rounded-full ${isActive('/inventory_merge') ? 'bg-teal-500/60' : 'hover:bg-teal-400/40'}`}>
                            <MdInventory2  className="w-4 h-4 text-gray-800 dark:text-white" />
                        </Link>
                        <Link to="/dashboard/sales_merge" className={`p-2 dark:bg-gray-700/30 rounded-full ${isActive('/sales_merge') ? 'bg-teal-500/60' : 'hover:bg-teal-400/40'}`}>
                            <MdOutlinePointOfSale  className="w-4 h-4 text-gray-800 dark:text-white" />
                        </Link>
                        <Link to="/dashboard/purchase_merge" className={`p-2 dark:bg-gray-700/30 rounded-full ${isActive('/purchase_merge') ? 'bg-teal-500/60' : 'hover:bg-teal-400/40'}`}>
                            <BiPurchaseTagAlt className="w-4 h-4 text-gray-800 dark:text-white" />
                        </Link>
                        {/* <Link to="/report" className={`p-2 dark:bg-gray-700/30 rounded-full ${isActive('/report') ? 'bg-teal-500/60' : 'hover:bg-teal-400/40'}`}>
                            <BiSolidReport className="w-4 h-4 text-gray-800 dark:text-white" />
                        </Link>                         */}
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
