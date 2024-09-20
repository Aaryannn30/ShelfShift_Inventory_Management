import React, { useState } from 'react';
import Item from './Item'
import InventoryAdjustment from './Inventory_adjustment';

const Inventory_merge = () => {
  const [activeComponent, setActiveComponent] = useState('items');

  const handleToggle = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-around mb-6">
        <button
          className={`px-4 py-2 rounded ${
            activeComponent === 'items' ? 'bg-blue-600 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleToggle('items')}
        >
          Items
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeComponent === 'inventory' ? 'bg-blue-600 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleToggle('inventory')}
        >
          Inventory Adjustment
        </button>
      </div>

      <div>
        {activeComponent === 'items' && <Item />}
        {activeComponent === 'inventory' && <InventoryAdjustment />}
      </div>
    </div>
  );
};

export default Inventory_merge;
