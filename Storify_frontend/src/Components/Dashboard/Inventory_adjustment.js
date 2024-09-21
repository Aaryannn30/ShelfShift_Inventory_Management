import React from 'react';

const Inventory_adjustment = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Inventory Management</h1>
         
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            + New
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Inventory Adjustments</h2>

          {/* Filter Section */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Filter By:</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <option>Type: By Quantity</option>
                <option>Type: By Value</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Period:</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>
          </div>

          {/* Table with Scrolling Effect */}
          <div className="overflow-auto max-h-96">
            <table className="min-w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-300 text-gray-700 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-6 text-left">Date</th>
                  <th className="py-3 px-6 text-left">Reason</th>
                  <th className="py-3 px-6 text-left">Description</th>
                  <th className="py-3 px-6 text-left">Status</th>
                  <th className="py-3 px-6 text-left">Reference Number</th>
                  <th className="py-3 px-6 text-left">Type</th>
                  <th className="py-3 px-6 text-left">Created By</th>
                  <th className="py-3 px-6 text-left">Created Time</th>
                  <th className="py-3 px-6 text-left">Last Modified By</th>
                  <th className="py-3 px-6 text-left">Last Modified Time</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-6">No data to display</td>
                  <td colSpan="9" className="py-3 px-6 text-center">
                    No data available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inventory_adjustment;
