import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaTelegram, FaTwitter, FaDiscord, FaReddit, FaEllipsisV } from 'react-icons/fa';
import { MdDashboard, MdOutlineInventory, MdOutlinePointOfSale, MdReport, MdOutlineShoppingCart, MdShoppingCart } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../Theme/ThemeToggle';
import { jwtDecode } from 'jwt-decode';
import DView from './Dview';
import Dropdown from '../Pages/PDropdown';
import { LuFlower } from "react-icons/lu";
import { RiAlignItemHorizontalCenterLine } from "react-icons/ri";
import { BsWrenchAdjustableCircle } from "react-icons/bs";
import { Tooltip } from 'react-tooltip';
import { TbInvoice } from "react-icons/tb";
import { LuPackageOpen } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { TbShoppingBag } from "react-icons/tb";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaMoneyBills } from "react-icons/fa6";
import { SiExpensify } from "react-icons/si";

const IconToggleMenu = ({ type }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {type === 'Inventory' && (
        <div className="relative flex items-center justify-center" ref={menuRef}>
          <button
            onClick={toggleMenu}
            className="flex hover:bg-[#720455] items-center justify-center w-12 h-12 bg-[#526D82] dark:bg-[#3C0753] rounded-full shadow-md focus:outline-none z-50"
            data-tip="Toggle Inventory Menu"
            data-for="inventoryTooltip"
          >
            <MdOutlineInventory className="w-4 h-4 text-black dark:text-[#EEEDEB]" />
          </button>

          <Tooltip id="inventoryTooltip" place="top" effect="solid" />

          <div
            className={`hover:bg-[#720455] absolute flex space-x-2 p-2 bg-[#DDE6ED] dark:bg-[#3C0753] rounded-lg shadow-md left-14 top-0 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto z-50' : 'opacity-0 pointer-events-none'
              }`}
          >
            <Link to="/dashboard/item" className="p-2 hover:bg-[#526D82] dark:hover:bg-[#720455] rounded-full" data-tip="View Items" data-for="itemTooltip">
              <RiAlignItemHorizontalCenterLine className="w-4 h-4 text-[#364F6B] dark:text-[#EEEDEB]" />
              <Tooltip id="itemTooltip" place="top" effect="solid" />
            </Link>

            <Link to="/dashboard/adjustment" className="p-2 hover:bg-[#526D82] dark:hover:bg-[#720455] rounded-full" data-tip="Adjust Inventory" data-for="adjustmentTooltip">
              <BsWrenchAdjustableCircle className="w-4 h-4 text-[#364F6B] dark:text-[#EEEDEB]" />
            </Link>
            <Tooltip id="adjustmentTooltip" place="top" effect="solid" />
          </div>
        </div>
      )}

      {type === 'Sales' && (
        <div className="relative flex items-center justify-center" ref={menuRef}>
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center w-12 h-12 bg-[#526D82] dark:bg-[#3C0753] rounded-full shadow-md focus:outline-none z-50"
            data-tip="Toggle Sales Menu"
            data-for="salesTooltip"
          >
            <MdOutlinePointOfSale className="w-4 h-4 text-black dark:text-[#EEEDEB]" />
          </button>

          <Tooltip id="salesTooltip" place="top" effect="solid" />

          <div
            className={`absolute flex space-x-2 p-2 bg-[#DDE6ED] dark:bg-[#3C0753] rounded-lg shadow-md left-14 top-0 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto z-50' : 'opacity-0 pointer-events-none'
              }`}
          >
            <Link to="/dashboard/sales_orders" className="p-2 hover:bg-[#526D82] dark:hover:bg-[#720455] rounded-full" data-tip="View Sales Orders" data-for="salesOrdersTooltip">
              <TbShoppingBag className="w-4 h-4 text-[#364F6B] dark:text-[#EEEDEB]" />
            </Link>
            <Tooltip id="salesOrdersTooltip" place="top" effect="solid" className="z-50" />
            <Link to="/dashboard/invoice" className="p-2 hover:bg-[#526D82] dark:hover:bg-[#720455] rounded-full" data-tip="View Invoices" data-for="invoiceTooltip">
              <TbInvoice className="w-4 h-4 text-[#364F6B] dark:text-[#EEEDEB]" />
            </Link>
            <Tooltip id="invoiceTooltip" place="top" effect="solid" />
            <Link to="/dashboard/packages" className="p-2 hover:bg-[#526D82] dark:hover:bg-[#720455] rounded-full" data-tip="View Packages" data-for="packagesTooltip">
              <LuPackageOpen className="w-4 h-4 text-[#364F6B] dark:text-[#EEEDEB]" />
            </Link>
            <Tooltip id="packagesTooltip" place="top" effect="solid" />
            <Link to="/dashboard/payments" className="p-2 hover:bg-[#526D82] dark:hover:bg-[#720455] rounded-full" data-tip="View Payments" data-for="paymentsTooltip">
              <MdOutlinePayment className="w-4 h-4 text-[#364F6B] dark:text-[#EEEDEB]" />
            </Link>
            <Tooltip id="paymentsTooltip" place="top" effect="solid" />
          </div>
        </div>
      )}

      {type === 'Purchase' && (
        <div className="relative flex items-center justify-center" ref={menuRef}>
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center w-12 h-12 bg-[#526D82] dark:bg-[#3C0753] rounded-full shadow-md focus:outline-none z-50"
            data-tip="Toggle Purchase Menu"
            data-for="purchaseTooltip"
          >
            <MdOutlineInventory className="w-4 h-4 text-[#030405] dark:text-[#EEEDEB]" />
          </button>

          <Tooltip id="purchaseTooltip" place="top" effect="solid" />

          <div
            className={`absolute flex space-x-2 p-2 bg-[#DDE6ED] dark:bg-[#3C0753] rounded-lg shadow-md left-14 top-0 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto z-50' : 'opacity-0 pointer-events-none'
              }`}
          >
            <Link to="/dashboard/purchase_orders" className="p-2 hover:bg-[#526D82] dark:hover:bg-[#720455] rounded-full" data-tip="View Purchase Orders" data-for="purchaseItemTooltip">
              <BiSolidPurchaseTag className="w-4 h-4 text-black dark:text-[#EEEDEB]" />
            </Link>
            <Tooltip id="purchaseItemTooltip" place="top" effect="solid" />
            <Link to="/dashboard/expenses" className="p-2 hover:bg-[#526D82] dark:hover:bg-[#720455] rounded-full" data-tip="View Expenses" data-for="purchaseAdjustmentTooltip">
              <SiExpensify className="w-4 h-4 text-[#06080a] dark:text-[#EEEDEB]" />
            </Link>
            <Tooltip id="purchaseAdjustmentTooltip" place="top" effect="solid" />
            <Link to="/dashboard/bills" className="p-2 hover:bg-[#526D82] dark:hover:bg-[#720455] rounded-full" data-tip="View Bills" data-for="purchaseBillsTooltip">
              <FaMoneyBills className="w-4 h-4 text-[#364F6B] dark:text-[#EEEDEB]" />
            </Link>
            <Tooltip id="purchaseBillsTooltip" place="top" effect="solid" />
          </div>
        </div>
      )}
    </>
  );
};




// export default DSidebar;

const DSidebar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  // const location = useLocation();
  // const api = useAxios();
  const token = localStorage.getItem('authTokens');

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

  // Toggle the sidebar's open state
  // const toggleSidebar = () => setIsOpen(!isOpen);

  // Toggle the sidebar's collapsed state
  const collapseSidebar = () => setIsCollapsed(!isCollapsed);

  // Toggle dropdown menus inside the sidebar
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  // Check if the current route is active
  // const isActive = (path) => location.pathname === path;
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
    {/* Top Navbar */}
    <nav className="flex items-center justify-between bg-[#DDE6ED] px-4 py-2 dark:bg-[#030637] dark:border-[#720455]  dark:shadow-lg shadow-md z-50 border-b border-[#EEEDEB]/30 fixed w-screen">
      <div className="flex items-center">
        <LuFlower className="text-[#364F6B] dark:text-[#EEEDEB] h-5 w-5" />
        <span className="font-semibold">
          <Link to="/" className="text-2xl font-bold text-[#364F6B] dark:text-[#EEEDEB]">
            &nbsp;SHELFSHIFT
          </Link>
        </span>
        <span className="font-thin text-lg text-[#364F6B] dark:text-[#EEEDEB]">&nbsp;Dashboard</span>
      </div>
  
      <div className="flex items-center gap-x-4 justify-around">
        <div className="relative"></div>
        <div className="relative mt-1">
          <ThemeToggle />
        </div>
        <div className="relative">
          <Dropdown />
        </div>
      </div>
    </nav>
  
    <div className="flex w-screen h-screen bg-[#DDE6ED] border-r border-[#364F6B] rounded-xl fixed -z-10">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full dark:bg-[#17153B]  text-[#EEEDEB] shadow-lg border border-[#EEEDEB]/20 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out w-[200px] mt-14 `}
      >
        {/* Toggle Button at the Top */}
        <div className="flex items-center justify-between h-16 px-4 dark:bg-[#030637] border-b border-[#EEEDEB]/30">
          <h1 className="text-lg font-bold text-[#364F6B] dark:text-[#EEEDEB]">My Sidebar</h1>
          <button onClick={toggleSidebar} className="focus:outline-none">
            <FaTimes className="w-5 h-5 text-[#FEFBF6]" />
          </button>
        </div>
  
        <nav className="px-4 py-6 space-y-4">
          <Link
            to="/dashboard/dashboardmainview"
            className={`flex items-center p-3 rounded-xl transition-all duration-200 ${isActive('/dashboard/dashboardmainview') ? 'bg-[#EEEDEB]/30' : 'hover:bg-[#EEEDEB]/20'
              }`}
          >
            <MdDashboard className="w-4 h-4 text-[#364F6B] dark:text-[#EEEDEB]" />
            <span className={`${isCollapsed ? 'hidden' : 'ml-3'} transition-all duration-300 text-[#364F6B] dark:text-[#EEEDEB]`}>Dashboard</span>
          </Link>
  
          {/* Inventory Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('inventory')}
              className={`w-full flex items-center justify-between p-3 rounded-xl ${activeDropdown === 'inventory' ? 'bg-[#EEEDEB]/30' : 'hover:bg-[#EEEDEB]/20'
                }`}
            >
              <div className="flex items-center">
                <MdOutlineInventory className="w-4 h-4 text-[#364F6B] dark:text-[#EEEDEB]" />
                <span className={`${isCollapsed ? 'hidden' : 'ml-3'} transition-all duration-300 text-[#364F6B] dark:text-[#EEEDEB]`}>Inventory</span>
              </div>
            </button>
            {!isCollapsed && activeDropdown === 'inventory' && (
              <div className="ml-8 mt-2 space-y-2">
                <Link to="/dashboard/item" className="text-[#364F6B] dark:text-[#EEEDEB] block p-2 rounded-lg hover:bg-[#EEEDEB]/30 ">
                  Items
                </Link>
                <Link to="/dashboard/adjustment" className="text-[#364F6B] dark:text-[#EEEDEB] block p-2 rounded-lg hover:bg-[#EEEDEB]/30">
                  Adjustments
                </Link>
              </div>
            )}
          </div>
  
          {/* Sales Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown('sales')}
              className={`w-full flex items-center justify-between p-3 rounded-xl ${activeDropdown === 'sales' ? 'bg-[#EEEDEB]/30' : 'hover:bg-[#EEEDEB]/20'
                }`}
            >
              <div className="flex items-center">
                <MdOutlinePointOfSale className="w-4 h-4 text-[#364F6B] dark:text-[#EEEDEB]" />
                <span className={`${isCollapsed ? 'hidden' : 'ml-3'} transition-all duration-300 text-[#364F6B] dark:text-[#EEEDEB]`}>Sales</span>
              </div>
            </button>
            {!isCollapsed && activeDropdown === 'sales' && (
              <div className="ml-8 mt-2 space-y-2">
                <Link to="/dashboard/sales_orders" className="block p-2 rounded-lg hover:bg-[#EEEDEB]/30 text-[#364F6B] dark:text-[#EEEDEB]">
                  Sales Orders
                </Link>
                <Link to="/dashboard/invoice" className="block p-2 rounded-lg hover:bg-[#EEEDEB]/30 text-[#364F6B] dark:text-[#EEEDEB]">
                  Invoices
                </Link>
                <Link to="/dashboard/packages" className="block p-2 rounded-lg hover:bg-[#EEEDEB]/30 text-[#364F6B] dark:text-[#EEEDEB]">
                  Packages
                </Link>
                <Link to="/dashboard/payments" className="block p-2 rounded-lg hover:bg-[#EEEDEB]/30 text-[#364F6B] dark:text-[#EEEDEB]">
                  Payments
                </Link>
              </div>
            )}
          </div>
  
          <div>
            <button onClick={() => toggleDropdown('purchase')} className={`w-full flex items-center justify-between p-3 rounded-xl ${activeDropdown === 'purchase' ? 'bg-[#EEEDEB]/30' : 'hover:bg-[#EEEDEB]/20'}`}>
              <div className="flex items-center">
                <Link to='/dashboard/purchase_merge'>
                  <MdShoppingCart className="w-4 h-4 text-[#364F6B] dark:text-[#EEEDEB]" />
                </Link>
                <span className={`${isCollapsed ? 'hidden' : 'ml-3'} transition-all duration-300 text-[#364F6B] dark:text-[#EEEDEB]`}>Purchase</span>
              </div>
            </button>
            {!isCollapsed && activeDropdown === 'purchase' && (
              <div className="ml-8 mt-2 space-y-2">
                <Link to="/dashboard/purchase_orders" className="block p-2 rounded-lg hover:bg-[#EEEDEB]/30 text-[#364F6B] dark:text-[#EEEDEB]">Purchase Orders</Link>
                <Link to="/dashboard/expenses" className="block p-2 rounded-lg hover:bg-[#EEEDEB]/30 text-[#364F6B] dark:text-[#EEEDEB]">Expenses</Link>
                <Link to="/dashboard/bills" className="block p-2 rounded-lg hover:bg-[#EEEDEB]/30 text-[#364F6B] dark:text-[#EEEDEB]">Bills</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
  
      {/* Toggle Buttons Outside Sidebar for Opening */}
      {!isOpen && (
        <div className="flex items-center dark:bg-[#030637] text-[#FEFBF6] fixed h-full border-l-[1px] border-[#EEEDEB]/30 mt-14">
          <nav className="flex-1 space-y-8 mb-10">
            <button onClick={toggleSidebar} className="focus:outline-none flex items-center px-3 py-2 mb-44 text-black p-2 hover:bg-[#526D82] dark:hover:bg-[#720455] rounded-full transition">
              <FaBars className="w-4 h-4" />
            </button>
            <Link to='/dashboard/dashboardmainview'
              className={`flex items-center px-3 py-2 p-2 hover:bg-[#526D82] dark:hover:bg-[#720455]  rounded-full"  ${isActive('/dashboard/dashboardmainview') ? 'bg-[#3C0753] text-[#EEEDEB]' : 'text-[#DDE6ED] hover:bg-[#3C0753] hover:text-[#EEEDEB]'} rounded-full w-12 h-12 transition`}
            >
              <MdDashboard className="w-4 h-4 flex items-center justify-center ml-1 " />
            </Link>
            <IconToggleMenu type='Inventory' />
            <IconToggleMenu type='Sales' />
            <IconToggleMenu type='Purchase' />
          </nav>
        </div>
      )}
  
      {/* Main Content */}
      <div className={`transform ${!isOpen ? 'ml-[48px]' : 'ml-[200px]'} flex-1 transition-transform duration-700 ease-out overflow-y-auto mt-14 ml-2 bg-[#DDE6ED] dark:bg-[#030637] -z-10 `}>
        <DView />
      </div>
    </div>
  </>
  
  );
};

export default DSidebar;