import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';

const InventoryAdjustment = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-200 min-h-screen">
      {/* Navbar */}
      <nav className="bg-purple-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Inventory Management</h1>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center">
            <FaPlus className="mr-1" /> New Adjustment
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8">
        <div className="bg-white shadow-xl rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Inventory Adjustments</h2>

          {/* Filter Section */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Filter By:</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm">
                <option>Type: By Quantity</option>
                <option>Type: By Value</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Period:</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm">
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>
          </div>

          {/* Search Section */}
          <div className="flex mb-6">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="ml-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center">
              <FaSearch />
            </button>
          </div>

          {/* Table with Scrolling Effect */}
          <div className="overflow-auto max-h-96">
            <table className="min-w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-200 text-gray-800 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Reason</th>
                  <th className="py-3 px-4 text-left">Description</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-left">Reference Number</th>
                  <th className="py-3 px-4 text-left">Type</th>
                  <th className="py-3 px-4 text-left">Created By</th>
                  <th className="py-3 px-4 text-left">Created Time</th>
                  <th className="py-3 px-4 text-left">Last Modified By</th>
                  <th className="py-3 px-4 text-left">Last Modified Time</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-center" colSpan="10">No data available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InventoryAdjustment;
