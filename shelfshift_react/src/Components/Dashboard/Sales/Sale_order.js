import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Sale_order = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="relative">
          {/* Dropdown Button */}
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-xl font-semibold bg-gray-200 px-4 py-2 rounded-lg"
          >
            All Sales Orders ▼
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
              <a href="/dorder" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                All
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Draft
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Pending Approval
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Approved
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Confirmed
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                For Packaging
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                To be Shipped
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Shipped
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                On Hold
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                New Custom View
              </a>
            </div>
          )}
        </div>

        {/* Buttons on the Right */}
        <div className="flex space-x-4">
          <Link to='/sale_form'>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">
            + New
          </button></Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="bg-white p-8 shadow rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Start Managing Your Sales Activities!
            </h2>
            <p className="text-gray-600 mb-6">
              Create, customize and send professional Sales Orders.
            </p>
            <Link to='/sale_form'>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full">
              Create Sales Order
            </button></Link>
          </div>

          {/* Life Cycle of a Sales Order */}
          <div className="mt-12">
            <h3 className="text-center text-lg font-semibold mb-6">
              Life Cycle of a Sales Order
            </h3>
            <div className="flex justify-center items-center space-x-4">
              {/* Life Cycle Steps */}
              <div className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg">Customer Request</div>
                <span className="block text-gray-500 text-sm">→</span>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg">Create Sales Order</div>
                <span className="block text-gray-500 text-sm">→</span>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg">Confirm Sales Order</div>
                <span className="block text-gray-500 text-sm">→</span>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg">Convert to Invoice</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sale_order;
