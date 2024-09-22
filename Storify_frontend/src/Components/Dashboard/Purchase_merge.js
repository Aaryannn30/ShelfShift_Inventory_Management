import React, { useState } from 'react';
import Purchase from './Purchase';
import ExpenseForm from './Expenses';
import Bills from './Bills';

const PurchaseMerge = () => {
  const [activeComponent, setActiveComponent] = useState('purchase');

  const handleToggle = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 to-blue-300 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Financial Management</h1>

      {/* Buttons Row without spaces */}
      <div className="flex justify-center mb-6 space-x-2">
        <button
          className={`px-6 py-3 rounded-lg transition duration-200 ${
            activeComponent === 'purchase' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-indigo-600 border border-indigo-600'
          }`}
          onClick={() => handleToggle('purchase')}
        >
          Purchase
        </button>
        <button
          className={`px-6 py-3 rounded-lg transition duration-200 ${
            activeComponent === 'expenses' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-indigo-600 border border-indigo-600'
          }`}
          onClick={() => handleToggle('expenses')}
        >
          Expense
        </button>
        <button
          className={`px-6 py-3 rounded-lg transition duration-200 ${
            activeComponent === 'bills' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-indigo-600 border border-indigo-600'
          }`}
          onClick={() => handleToggle('bills')}
        >
          Bills
        </button>
      </div>

      {/* Component Rendering */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeComponent === 'purchase' && <Purchase />}
        {activeComponent === 'expenses' && <ExpenseForm />}
        {activeComponent === 'bills' && <Bills />}
      </div>
    </div>
  );
};

export default PurchaseMerge;
