import React from 'react';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard01() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-8 bg-white dark:bg-[#17153B] shadow-lg rounded-2xl p-8">
      <div className="px-5 pt-5">
        {/* Title */}
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8">Sales Activity</div>

        {/* Sales Numbers and Labels */}
        <div className="grid grid-cols-2 gap-6">
          
          {/* To be Packed */}
          <div className="flex flex-col items-center p-6 bg-white dark:bg-[#1e1b50] rounded-lg shadow-md">
            <div className="text-5xl font-bold text-blue-500">0</div>
            <div className="text-gray-400 dark:text-gray-500">Qty</div>
            <div className="mt-2 flex items-center text-gray-500 text-sm">
              <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              TO BE PACKED
            </div>
          </div>

          {/* To be Shipped */}
          <div className="flex flex-col items-center p-6 bg-white dark:bg-[#1e1b50] rounded-lg shadow-md">
            <div className="text-5xl font-bold text-red-500">0</div>
            <div className="text-gray-400 dark:text-gray-500">Pkgs</div>
            <div className="mt-2 flex items-center text-gray-500 text-sm">
              <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
              </svg>
              TO BE SHIPPED
            </div>
          </div>

          {/* To be Delivered */}
          <div className="flex flex-col items-center p-6 bg-white dark:bg-[#1e1b50] rounded-lg shadow-md">
            <div className="text-5xl font-bold text-green-500">0</div>
            <div className="text-gray-400 dark:text-gray-500">Pkgs</div>
            <div className="mt-2 flex items-center text-gray-500 text-sm">
              <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
              </svg>
              TO BE DELIVERED
            </div>
          </div>

          {/* To be Invoiced */}
          <div className="flex flex-col items-center p-6 bg-white dark:bg-[#1e1b50] rounded-lg shadow-md">
            <div className="text-5xl font-bold text-yellow-500">0</div>
            <div className="text-gray-400 dark:text-gray-500">Qty</div>
            <div className="mt-2 flex items-center text-gray-500 text-sm">
              <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
              </svg>
              TO BE INVOICED
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DashboardCard01;
