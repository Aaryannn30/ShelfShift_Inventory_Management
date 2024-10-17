import React from 'react';

function DashboardCard03() {
  return (
    <div className="flex flex-col justify-between col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-[#17153B] shadow-md rounded-lg p-6 min-h-[300px]">
      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Inventory Summary</h2>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 dark:border-gray-700 my-2" />

      {/* Inventory Items */}
      <div className="space-y-6">
        {/* Quantity in Hand */}
        <div className="flex justify-between items-center text-gray-700 dark:text-gray-300 text-lg font-medium">
          <span>Quantity In Hand</span>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">0</span>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 dark:border-gray-700" />

        {/* Quantity to be Received */}
        <div className="flex justify-between items-center text-gray-700 dark:text-gray-300 text-lg font-medium">
          <span>Quantity to be Received</span>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">0</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard03;
