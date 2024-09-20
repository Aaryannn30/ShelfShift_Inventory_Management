import React, { useState } from 'react';
import DashboardCard03 from './DashboardCard03';

function DashboardCard05() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('This Month');
  
  // Dummy data for random items
  const items = [
    { name: 'Product A', quantity: 10 },
    { name: 'Product B', quantity: 7 },
    { name: 'Product C', quantity: 5 }
  ];

  // Dropdown options for timeframes
  const timeframes = ['This Month', 'Last Month', 'Last Year'];

  // Handle dropdown change
  const handleChange = (e) => {
    setSelectedTimeframe(e.target.value);
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center justify-between">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Top Selling Items</h2>
        <select
          className="border p-2 rounded-md"
          value={selectedTimeframe}
          onChange={handleChange}
        >
          {timeframes.map((timeframe) => (
            <option key={timeframe} value={timeframe}>
              {timeframe}
            </option>
          ))}
        </select>
      </header>
      <div className="p-5 text-center">
        {items.length > 0 ? (
          <ul>
            {items.map((item, index) => (
              <li key={index} className="py-2">
                <span className="font-medium">{item.name}</span> - {item.quantity} units sold
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            No items were invoiced in this time frame
          </p>
        )}
      </div>
    </div>
  );
}

export default DashboardCard05;