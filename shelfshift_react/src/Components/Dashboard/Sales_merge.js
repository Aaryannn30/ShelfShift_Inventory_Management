import React, { useState } from 'react';
import Invoice from './Sales/Invoice';
import Packages from './Sales/Packages';
import Payment from './Sales/Payment';
import SaleOrder from './Sales/Sale_order';

const Sales_merge = () => {
  const [activeComponent, setActiveComponent] = useState('invoice');

  const handleToggle = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Buttons Row without spaces */}
      <div className="flex mb-6">
        <button
          className={`px-4 py-2 rounded-l ${
            activeComponent === 'invoice' ? 'bg-blue-600 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleToggle('invoice')}
        >
          Invoice
        </button>
        <button
          className={`px-4 py-2 ${
            activeComponent === 'packages' ? 'bg-blue-600 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleToggle('packages')}
        >
          Packages
        </button>
        <button
          className={`px-4 py-2 ${
            activeComponent === 'payment' ? 'bg-blue-600 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleToggle('payment')}
        >
          Payment
        </button>
        <button
          className={`px-4 py-2 rounded-r ${
            activeComponent === 'sale_order' ? 'bg-blue-600 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleToggle('sale_order')}
        >
          Sale Order
        </button>
      </div>

      {/* Component Rendering */}
      <div>
        {activeComponent === 'invoice' && <Invoice />}
        {activeComponent === 'packages' && <Packages />}
        {activeComponent === 'payment' && <Payment />}
        {activeComponent === 'sale_order' && <SaleOrder />}
      </div>
    </div>
  );
};

export default Sales_merge;
