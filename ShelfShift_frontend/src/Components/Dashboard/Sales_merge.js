import React, { useState } from 'react';
import Invoice from './Sales/Invoice';
import Packages from './Sales/Packages';
import Payment from './Sales/Payment';
import SaleOrder from './Sales/Sale_order';

const SalesMerge = () => {
  const [activeComponent, setActiveComponent] = useState('invoice');

  const handleToggle = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="min-h-screen bg-gray-200 p-8 flex flex-col">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Sales Management</h1>

      {/* Button Group */}
      <div className="flex mb-6 space-x-2">
        <button
          className={`flex-1 py-3 rounded-lg transition duration-300 ${
            activeComponent === 'invoice' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
          }`}
          onClick={() => handleToggle('invoice')}
        >
          Invoice
        </button>
        <button
          className={`flex-1 py-3 rounded-lg transition duration-300 ${
            activeComponent === 'packages' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
          }`}
          onClick={() => handleToggle('packages')}
        >
          Packages
        </button>
        <button
          className={`flex-1 py-3 rounded-lg transition duration-300 ${
            activeComponent === 'payment' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
          }`}
          onClick={() => handleToggle('payment')}
        >
          Payment
        </button>
        <button
          className={`flex-1 py-3 rounded-lg transition duration-300 ${
            activeComponent === 'sale_order' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
          }`}
          onClick={() => handleToggle('sale_order')}
        >
          Sale Order
        </button>
      </div>

      {/* Component Rendering */}
      <div className="flex-grow bg-white rounded-lg shadow-md p-6">
        {activeComponent === 'invoice' && <Invoice />}
        {activeComponent === 'packages' && <Packages />}
        {activeComponent === 'payment' && <Payment />}
        {activeComponent === 'sale_order' && <SaleOrder />}
      </div>
    </div>
  );
};

export default SalesMerge;
