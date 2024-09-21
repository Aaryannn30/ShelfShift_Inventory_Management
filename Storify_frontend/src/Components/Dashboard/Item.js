import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import i1 from './i1.png';
import i2 from './i2.png';
import i3 from './i3.jpeg';
import i4 from './i4.png';
// import Item_group from './Item_group';
// import Item_form from './Item_form';

const Items = () => {
  const [selectedItemType, setSelectedItemType] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedItemType(selectedValue);

    // Redirect to the appropriate page based on the selection
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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">All Items</h1>

          {/* Dropdown for selecting item type */}
          <select
            value={selectedItemType}
            onChange={handleDropdownChange}
            className="border border-gray-300 rounded-md px-4 py-2 bg-white text-gray-700"
          >
            <option value="">Select Item Type</option>
            <option value="active">Active Items</option>
            <option value="returnable">Returnable Items</option>
            <option value="non-returnable">Non-Returnable Items</option>
          </select>

          <Link to="/dashboard/Item_form">
            <button className="bg-blue-600 text-white px-4 py-2 rounded ml-4">
              + New
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Item Group */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={i1} alt="Item Group" className="w-20 mx-auto mb-4" />
            <h2 className="text-lg font-bold">Item Groups</h2>
            <p className="text-sm text-gray-600 mb-4">
              Create multiple variants of the same item using Item Groups.
            </p>
            <Link to='/dashboard/Item_group'>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">New Item Group</button>
            </Link>
          </div>

          {/* Items */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={i2} alt="Items" className="w-20 mx-auto mb-4" />
            <h2 className="text-lg font-bold">Items</h2>
            <p className="text-sm text-gray-600 mb-4">
              Create standalone items and services that you buy and sell.
            </p>
            <Link to='/dashboard/Item_form'>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">New Item</button>
            </Link>
          </div>

          {/* Composite Items */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={i3} alt="Composite Items" className="w-20 mx-auto mb-4" />
            <h2 className="text-lg font-bold">Composite Items</h2>
            <p className="text-sm text-gray-600 mb-4">
              Bundle different items together and sell them as kits.
            </p>
            <Link to='/dashboard/Composite'>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Enable Now</button>
            </Link>
          </div>

          {/* Price Lists */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={i4} alt="Price Lists" className="w-20 mx-auto mb-4" />
            <h2 className="text-lg font-bold">Price Lists</h2>
            <p className="text-sm text-gray-600 mb-4">
              Tweak your item prices for specific contacts or transactions.
            </p>
            <Link to='/dashboard/Price_List'>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Enable Now</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Items;