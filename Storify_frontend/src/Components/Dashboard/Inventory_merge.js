import React, { useState } from 'react';
import Item from './Item';
import InventoryAdjustment from './Inventory_adjustment';
import { FaBox, FaClipboardCheck } from 'react-icons/fa';

const InventoryMerge = () => {
  const [activeComponent, setActiveComponent] = useState('items');

  const handleToggle = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-purple-700">Inventory Management System</h1>
        <p className="mt-2 text-gray-600">Manage your inventory with ease</p>
      </header>

      {/* Toggle Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`flex items-center px-6 py-3 rounded-lg transition duration-300 ${
            activeComponent === 'items' ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-purple-600 border border-purple-300'
          }`}
          onClick={() => handleToggle('items')}
        >
          <FaBox className="mr-2" /> Items
        </button>
        <button
          className={`flex items-center px-6 py-3 rounded-lg transition duration-300 ${
            activeComponent === 'inventory' ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-purple-600 border border-purple-300'
          }`}
          onClick={() => handleToggle('inventory')}
        >
          <FaClipboardCheck className="mr-2" /> Inventory Adjustment
        </button>
      </div>

      {/* Component Rendering */}
      <div className="bg-white rounded-lg shadow-xl p-6">
        {activeComponent === 'items' && <Item />}
        {activeComponent === 'inventory' && <InventoryAdjustment />}
      </div>
    </div>
  );
};

export default InventoryMerge;
