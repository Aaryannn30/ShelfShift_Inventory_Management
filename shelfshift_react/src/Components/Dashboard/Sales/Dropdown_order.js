import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Dropdown_order = () => {
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
            All ▼
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
              {/* Add other statuses as needed */}
            </div>
          )}
        </div>

        {/* + New Button */}
        <div className="flex space-x-4">
            <Link to='/sales_orders'>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">
            + New
          </button></Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Table Section */}
        <div className="bg-white p-8 shadow rounded-lg">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left">DATE</th>
                <th className="border border-gray-200 px-4 py-2 text-left">SALES ORDER#</th>
                <th className="border border-gray-200 px-4 py-2 text-left">REFERENCE#</th>
                <th className="border border-gray-200 px-4 py-2 text-left">CUSTOMER NAME</th>
                <th className="border border-gray-200 px-4 py-2 text-left">ORDER STATUS</th>
                <th className="border border-gray-200 px-4 py-2 text-left">INVOICED</th>
                <th className="border border-gray-200 px-4 py-2 text-left">PAYMENT</th>
                <th className="border border-gray-200 px-4 py-2 text-left">PACKED</th>
                <th className="border border-gray-200 px-4 py-2 text-left">SHIPPED</th>
                <th className="border border-gray-200 px-4 py-2 text-left">AMOUNT</th>
                <th className="border border-gray-200 px-4 py-2 text-left">DELIVERY METHOD</th>
              </tr>
            </thead>
            <tbody>
              {/* If there are no records */}
              <tr>
                <td colSpan="11" className="text-center py-6 text-gray-500">
                  No Records Found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dropdown_order;
