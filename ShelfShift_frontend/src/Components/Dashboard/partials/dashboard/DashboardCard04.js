import React from 'react';

function DashboardCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-[#17153B] shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Product Details</h2>
      </header>
      <div className="grid grid-cols-2 gap-4 p-5">
        {/* Low Stock Items */}
        <div className="border-r border-gray-200 pr-4">
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100">Low Stock Items</h3>
          <p className="text-4xl text-red-500">0</p>
        </div>

        {/* Active Items */}
        <div className="text-center">
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100">Active Items</h3>
          <div className="w-24 h-24 mx-auto bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <p className="text-sm text-gray-500">No Active Items</p>
          </div>
        </div>

        {/* All Item Groups */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100">All Item Groups</h3>
          <p className="text-4xl text-gray-800 dark:text-gray-100">0</p>
        </div>

        {/* All Items */}
        <div className="border-t border-l border-gray-200 pt-4 pl-4">
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100">All Items</h3>
          <p className="text-4xl text-gray-800 dark:text-gray-100">0</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
