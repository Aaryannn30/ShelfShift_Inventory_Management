import React, { useState } from 'react';
import Purchase from './Purchase';
import ExpenseForm from './Expenses';
import Bills from './Bills';

const Purchase_merge = () => {
  const [activeComponent, setActiveComponent] = useState('purchase');

  const handleToggle = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Buttons Row without spaces */}
      <div className="flex mb-6">
        <button
          className={`px-4 py-2 rounded-l ${
            activeComponent === 'purchase' ? 'bg-blue-600 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleToggle('purchase')}
        >
          Purchase
        </button>
        <button
          className={`px-4 py-2 ${
            activeComponent === 'expenses' ? 'bg-blue-600 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleToggle('expenses')}
        >
          Expense
        </button>
        <button
          className={`px-4 py-2 ${
            activeComponent === 'bills' ? 'bg-blue-600 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleToggle('bills')}
        >
          Bills
        </button>
    
      </div>

      {/* Component Rendering */}
      <div>
        {activeComponent === 'purchase' && <Purchase/>}
        {activeComponent === 'bills' && <ExpenseForm />}
        {activeComponent === 'expenses' && <Bills />}
      </div>
    </div>
  );
};

export default Purchase_merge;
