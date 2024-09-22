import React, { useState, useEffect } from 'react';
import { FaUserPlus, FaBell, FaBars, FaTimes } from 'react-icons/fa';
import { MdDashboard, MdOutlineInventory, MdOutlinePointOfSale, MdReport, MdOutlineShoppingCart, MdShoppingCart } from 'react-icons/md';
import { BiPurchaseTag, BiMoney } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../Theme/ThemeToggle';
import useAxios from "../../utils/useAxios";
import { jwtDecode } from 'jwt-decode';
import DView from './Dview';
import Dropdown from '../Pages/PDropdown';
import { Navigate } from 'react-router-dom';

const DSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
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
        image: decode.image,
      });
    }
  }, [token]);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const collapseSidebar = () => setIsCollapsed(!isCollapsed);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(prev => (prev === dropdownName ? null : dropdownName));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-20 flex justify-between items-center py-4 px-6 bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500 shadow-lg text-white">
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold">Shelf Shift</Link>
          <span className="ml-4 text-xl">Dashboard</span>
        </div>
        <div className="flex items-center space-x-6">
          <ThemeToggle />
          <button className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30">
           <Dropdown/>
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-16 left-0 h-full z-30 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} ${isCollapsed ? 'w-20' : 'w-64'} bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 shadow-lg rounded-r-3xl`}>
        <div className="flex justify-between items-center px-4 py-5">
          <h1 className={`${isCollapsed ? 'hidden' : 'block'} text-lg font-bold text-white`}>Menu</h1>
          <button onClick={collapseSidebar} className="text-white">
            {isCollapsed ? <FaBars className="h-5 w-5" /> : <FaTimes className="h-5 w-5" />}
          </button>
        </div>

        <nav className="px-4 py-6 space-y-4 text-white">
          {/* Dashboard */}
          <Link to="/dashboard/dashboardmainview" className={`flex items-center p-3 rounded-xl transition-all duration-200 ${isActive('/dashboard') ? 'bg-white/30' : 'hover:bg-white/20'}`}>
            <MdDashboard className="w-6 h-6" />
            <span className={`${isCollapsed ? 'hidden' : 'ml-3'} transition-all duration-300`}>Dashboard</span>
          </Link>

          {/* Inventory Dropdown */}
          <div>
            <button onClick={() => toggleDropdown('inventory')} className={`w-full flex items-center justify-between p-3 rounded-xl ${activeDropdown === 'inventory' ? 'bg-white/30' : 'hover:bg-white/20'}`}>
              <div className="flex items-center">
                <Link to='/dashboard/inventory_merge'>
                <MdOutlineInventory className="w-6 h-6" /></Link>
                <span className={`${isCollapsed ? 'hidden' : 'ml-3'} transition-all duration-300`}>Inventory</span>
              </div>
            </button>
            {!isCollapsed && activeDropdown === 'inventory' && (
              <div className="ml-8 mt-2 space-y-2">
                <Link to="/dashboard/item" className="block p-2 rounded-lg hover:bg-white/30">Items</Link>
                <Link to="/dashboard/adjustment" className="block p-2 rounded-lg hover:bg-white/30">Adjustments</Link>
              </div>
            )}
          </div>

          {/* Sales Dropdown */}
          <div>
            <button onClick={() => toggleDropdown('sales')} className={`w-full flex items-center justify-between p-3 rounded-xl ${activeDropdown === 'sales' ? 'bg-white/30' : 'hover:bg-white/20'}`}>
              <div className="flex items-center">
              <Link to='/dashboard/sales_merge'>
                <MdOutlinePointOfSale className="w-6 h-6" /></Link>
                <span className={`${isCollapsed ? 'hidden' : 'ml-3'} transition-all duration-300`}>Sales</span>
              </div>
            </button>
            {!isCollapsed && activeDropdown === 'sales' && (
              <div className="ml-8 mt-2 space-y-2">
                <Link to="/dashboard/sales_orders" className="block p-2 rounded-lg hover:bg-white/30">Sales Orders</Link>
                <Link to="/dashboard/invoice" className="block p-2 rounded-lg hover:bg-white/30">Invoices</Link>
                <Link to="/dashboard/packages" className="block p-2 rounded-lg hover:bg-white/30">Packages</Link>
                 <Link to="/dashboard/payments" className="block p-2 rounded-lg hover:bg-white/30">payments</Link>

              </div>
            )}
          </div>

       {/* Sales Dropdown */}
       <div>
            <button onClick={() => toggleDropdown('purchase')} className={`w-full flex items-center justify-between p-3 rounded-xl ${activeDropdown === 'purchase' ? 'bg-white/30' : 'hover:bg-white/20'}`}>
              <div className="flex items-center">
              <Link to='/dashboard/purchase_merge'>
              <MdShoppingCart className="w-6 h-6" /></Link>
                <span className={`${isCollapsed ? 'hidden' : 'ml-3'} transition-all duration-300`}>Purchase</span>
              </div>
            </button>
            {!isCollapsed && activeDropdown === 'purchase' && (
              <div className="ml-8 mt-2 space-y-2">
                 <Link to="/dashboard/purchase_orders" className="block p-2 rounded-lg hover:bg-white/30">Purchase Orders</Link>
                 <Link to="/dashboard/expenses" className="block p-2 rounded-lg hover:bg-white/30">Expenses</Link>
                 <Link to="/dashboard/bills" className="block p-2 rounded-lg hover:bg-white/30">Bills</Link>
                
              </div>
            )}
          </div>



          {/* Reports */}
          <Link to="/dashboard/reports" className={`flex items-center p-3 rounded-xl transition-all duration-200 ${isActive('/dashboard/reports') ? 'bg-white/30' : 'hover:bg-white/20'}`}>
            <MdReport className="w-6 h-6" />
            <span className={`${isCollapsed ? 'hidden' : 'ml-3'} transition-all duration-300`}>Reports</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ml-0 transition-all duration-500 ${isOpen ? (isCollapsed ? 'ml-20' : 'ml-64') : 'ml-0'} mt-16 p-6 bg-gray-100 dark:bg-gray-900`}>
        <DView />
      </div>

      {/* Sidebar Toggle Button */}
      {!isOpen && (
        <button onClick={toggleSidebar} className="fixed top-20 left-4 p-3 bg-teal-500 rounded-full text-white shadow-lg z-50">
          <FaBars className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default DSidebar;
