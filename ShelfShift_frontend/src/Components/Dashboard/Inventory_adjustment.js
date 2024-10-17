import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';

const InventoryAdjustment = () => {
  return (
    <div className="bg-gradient-to-br dark:bg-[#030637] min-h-screen">
      {/* Navbar */}
      <nav className="dark:bg-[#030637] p-10 text-white">
        <div className="container mx-auto flex justify-between items-center p-5 text-blue-600 dark:text-blue-300 bg-white dark:bg-[#17153B]">
          <h1 className="text-2xl font-bold">Inventory Management</h1>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center">
            <FaPlus className="mr-1" /> New Adjustment
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8 ">
        <div className="bg-white dark:bg-[#17153B] shadow-xl rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-300">Inventory Adjustments</h2>

          {/* Filter Section */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-blue-600 dark:text-blue-300">Filter By:</label>
              <select className="p-4 mt-3 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white">
                <option>Type: By Quantity</option>
                <option>Type: By Value</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-600 dark:text-blue-300">Period:</label>
              <select className="p-4 mt-3 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white">
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
              className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
            />
            <button className="ml-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center">
              <FaSearch />
            </button>
          </div>

          {/* Table with Scrolling Effect */}
          <div className="overflow-auto max-h-96">
            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead className="bg-gray-200 text-blue-600 dark:text-blue-300 uppercase text-sm leading-normal">
                <tr className='bg-gray-100 dark:bg-[#1E1E2F]'>
                  <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Date</th>
                  <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Reason</th>
                  <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Description</th>
                  <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Status</th>
                  <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Reference Number</th>
                  <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Type</th>
                  <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Created By</th>
                  <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Created Time</th>
                  <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Last Modified By</th>
                  <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Last Modified Time</th>
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
