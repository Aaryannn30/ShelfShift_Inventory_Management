import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import i1 from './i1.png';
import i2 from './i2.png';
import i3 from './i3.jpeg';
import i4 from './i4.png';

const Items = () => {
  const [selectedItemType, setSelectedItemType] = useState('');
  const navigate = useNavigate();

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedItemType(selectedValue);

    switch (selectedValue) {
      case 'active':
        navigate('/dashboard/active_items');
        break;
      case 'returnable':
        navigate('/dashboard/returnable_items');
        break;
      case 'non-returnable':
        navigate('/dashboard/nonreturnable_items');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-[#DDE6ED] dark:bg-[#030637] flex fixed">
      <main className="flex-grow p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-[#364F6B] dark:text-[#EEEDEB]">All Items</h1>

          <select
            value={selectedItemType}
            onChange={handleDropdownChange}
            className="border border-[#526D82] dark:border-[#3C0753] rounded-md px-4 py-2 bg-white dark:bg-[#720455] text-gray-700 dark:text-[#FEFBF6] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Item Type</option>
            <option value="active">Active Items</option>
            <option value="returnable">Returnable Items</option>
            <option value="non-returnable">Non-Returnable Items</option>
          </select>

          <Link to="/dashboard/Item_form">
            <button className="bg-[#364F6B] dark:bg-[#720455] text-white px-5 py-2 rounded-md shadow-lg transition duration-200 hover:bg-[#526D82] dark:hover:bg-[#720455]">
              + New
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Item Group */}
          <div className="bg-white bg-opacity-40 backdrop-blur-md dark:bg-[#3C0753] dark:bg-opacity-40 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <img src={i1} alt="Item Group" className="w-24 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-[#364F6B] dark:text-[#EEEDEB]">Item Groups</h2>
            <p className="text-sm text-gray-600 dark:text-[#FEFBF6] mb-4">
              Create multiple variants of the same item using Item Groups.
            </p>
            <Link to='/dashboard/Item_group'>
              <button className="bg-[#526D82] dark:bg-[#720455] text-white px-4 py-2 rounded-md transition duration-200 hover:bg-[#424874] dark:hover:bg-[#3C0753]">
                New Item Group
              </button>
            </Link>
          </div>

          {/* Items */}
          <div className="bg-white bg-opacity-40 backdrop-blur-md dark:bg-[#3C0753] dark:bg-opacity-40 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <img src={i2} alt="Items" className="w-24 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-[#364F6B] dark:text-[#EEEDEB]">Items</h2>
            <p className="text-sm text-gray-600 dark:text-[#FEFBF6] mb-4">
              Create standalone items and services that you buy and sell.
            </p>
            <Link to='/dashboard/Item_form'>
              <button className="bg-[#526D82] dark:bg-[#720455] text-white px-4 py-2 rounded-md transition duration-200 hover:bg-[#424874] dark:hover:bg-[#3C0753]">
                New Item
              </button>
            </Link>
          </div>

          {/* Composite Items */}
          <div className="bg-white bg-opacity-40 backdrop-blur-md dark:bg-[#3C0753] dark:bg-opacity-40 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <img src={i3} alt="Composite Items" className="w-24 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-[#364F6B] dark:text-[#EEEDEB]">Composite Items</h2>
            <p className="text-sm text-gray-600 dark:text-[#FEFBF6] mb-4">
              Bundle different items together and sell them as kits.
            </p>
            <Link to='/dashboard/Composite'>
              <button className="bg-[#526D82] dark:bg-[#720455] text-white px-4 py-2 rounded-md transition duration-200 hover:bg-[#424874] dark:hover:bg-[#3C0753]">
                Enable Now
              </button>
            </Link>
          </div>

          {/* Price Lists */}
          <div className="bg-white bg-opacity-40 backdrop-blur-md dark:bg-[#3C0753] dark:bg-opacity-40 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <img src={i4} alt="Price Lists" className="w-24 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-[#364F6B] dark:text-[#EEEDEB]">Price Lists</h2>
            <p className="text-sm text-gray-600 dark:text-[#FEFBF6] mb-4">
              Tweak your item prices for specific contacts or transactions.
            </p>
            <Link to='/dashboard/Price_List'>
              <button className="bg-[#526D82] dark:bg-[#720455] text-white px-4 py-2 rounded-md transition duration-200 hover:bg-[#424874] dark:hover:bg-[#3C0753]">
                Enable Now
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Items;
  