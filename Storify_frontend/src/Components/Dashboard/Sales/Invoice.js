import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Invoice = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg p-4 flex justify-between items-center">
        <div className="relative">
          {/* Dropdown Button */}
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-lg font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-blue-700"
          >
            All Invoices ▼
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              {['All', 'Draft', 'Pending Approval', 'Approved', 'Confirmed', 'For Packaging', 'To be Shipped', 'Shipped', 'On Hold', 'New Custom View'].map((status, index) => (
                <a key={index} href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  {status}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Buttons on the Right */}
        <div className="flex space-x-4">
          <Link to='/dashboard/invoice_form'>
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg transition duration-200 hover:bg-green-600">
              + New Invoice
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">
              Get Paid Effortlessly
            </h2>
            <p className="text-gray-700 mb-6">
              Sending invoices and getting paid is simpler than ever. Create your first invoice today!
            </p>
            <Link to='/dashboard/invoice_form'>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full transition duration-200 hover:bg-blue-700">
                New Invoice
              </button>
            </Link>
          </div>

          {/* Life Cycle of an Invoice */}
          <div className="mt-12">
            <h3 className="text-center text-xl font-semibold mb-6 text-gray-800">
              Life Cycle of an Invoice
            </h3>
            <div className="flex justify-center items-center space-x-4">
              {/* Life Cycle Steps */}
              {['Draft', 'Sent', 'Unpaid', 'Overdue', 'Paid'].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                    {step}
                  </div>
                  {index < 4 && <span className="block text-gray-500 text-sm">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Invoice;
