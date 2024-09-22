import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SaleOrder = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-md flex justify-between items-center p-6 rounded-b-lg">
        <div className="relative">
          {/* Dropdown Button */}
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-lg font-bold text-gray-800 bg-blue-600 px-5 py-2 rounded-lg flex items-center"
          >
            All Sales Orders
            <span className="ml-2 transform transition-transform duration-200">{dropdownOpen ? '▲' : '▼'}</span>
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-md z-10">
              {["All", "Draft", "Pending Approval", "Approved", "Confirmed", "For Packaging", "To be Shipped", "Shipped", "On Hold", "New Custom View"].map((status) => (
                <Link to="#" key={status}>
                  <div className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition">
                    {status}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* New Sale Button */}
        <Link to="/dashboard/sale_form">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
            + New Sales Order
          </button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-white rounded-lg shadow-lg mt-6 mx-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Manage Your Sales Activities
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Create, customize, and send professional Sales Orders effortlessly.
        </p>
        <Link to="/dashboard/sale_form">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition">
            Create Sales Order
          </button>
        </Link>

        {/* Life Cycle of a Sales Order */}
        <section className="mt-10">
          <h3 className="text-center text-xl font-semibold text-gray-800 mb-4">
            Life Cycle of a Sales Order
          </h3>
          <div className="flex justify-around items-center">
            {["Customer Request", "Create Sales Order", "Confirm Sales Order", "Convert to Invoice"].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-lg shadow">
                  {step}
                </div>
                {index < 3 && <span className="block text-gray-500 text-lg">→</span>}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default SaleOrder;
