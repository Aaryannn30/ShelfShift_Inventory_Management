import React from 'react';

function DashboradCard06() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-700 dark:text-gray-100">Purchase Order</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">This Month</p>
      </header>

      <div className="p-5">
        {/* Quantity Ordered */}
        <div className="mb-6">
          <p className="text-base font-medium text-gray-700 dark:text-gray-100">Quantity Ordered</p>
          <p className="text-4xl font-bold text-blue-500 mt-2">0</p>
        </div>

        {/* Total Cost */}
        <div>
          <p className="text-base font-medium text-gray-700 dark:text-gray-100">Total Cost</p>
          <p className="text-3xl font-bold text-blue-500 mt-2">Rs.0.00</p>
        </div>
      </div>
    </div>
  );
}

export default DashboradCard06;
