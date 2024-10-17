import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PackageForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [salesOrder, setSalesOrder] = useState('');
  const [packageSlip, setPackageSlip] = useState('');
  const [date, setDate] = useState('');
  const [items, setItems] = useState([{ description: '', ordered: 0, packed: 0, toPack: 0 }]);

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/dashboard/packages');
  };

  const handleAddItem = () => {
    setItems([...items, { description: '', ordered: 0, packed: 0, toPack: 0 }]);
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    // Logic to save the form data
    console.log({ customerName, salesOrder, packageSlip, date, items });
  };

  return (
    <div className="min-h-screen dark:bg-[#030637] p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-[#17153B] p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Create New Package</h1>
        
        <div className="grid grid-cols-2 gap-6 mb-4">
          {/* Customer Name */}
          <div>
            <label className="block text-blue-700 dark:text-blue-300  mb-2">Customer Name</label>
            <input
              type="text"
              className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter Customer Name"
            />
          </div>

          {/* Sales Order */}
          <div>
            <label className="block text-blue-700 dark:text-blue-300  mb-2">Sales Order#</label>
            <select
              className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
              value={salesOrder}
              onChange={(e) => setSalesOrder(e.target.value)}
            >
              <option value="" disabled>Select Sales Order</option>
              <option value="SO-00001">SO-00001</option>
              <option value="SO-00002">SO-00002</option>
            </select>
          </div>

          {/* Package Slip */}
          <div>
            <label className="block text-blue-700 dark:text-blue-300  mb-2">Package Slip#</label>
            <input
              type="text"
              className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
              value={packageSlip}
              onChange={(e) => setPackageSlip(e.target.value)}
              placeholder="Enter Package Slip#"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-blue-700 dark:text-blue-300  mb-2">Date</label>
            <input
              type="date"
              className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        {/* Items Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Items & Description</h2>
          <table className="w-full border-collapse border border-gray-300 mb-6">
            <thead>
              <tr className="bg-gray-100 dark:bg-[#1E1E2F]">
                <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Description</th>
                <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Ordered</th>
                <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Packed</th>
                <th className="border border-gray-300 p-3 text-left text-gray-700 dark:text-gray-300">Quantity to Pack</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border border-gray-300 p-3">
                  <td className="p-2">
                    <input
                      type="text"
                      className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                      value={item.description}
                      onChange={(e) =>
                        setItems(items.map((itm, i) =>
                          i === index ? { ...itm, description: e.target.value } : itm
                        ))
                      }
                      placeholder="Enter item description"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="number"
                      className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                      value={item.ordered}
                      onChange={(e) =>
                        setItems(items.map((itm, i) =>
                          i === index ? { ...itm, ordered: e.target.value } : itm
                        ))
                      }
                      placeholder="Ordered"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="number"
                      className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                      value={item.packed}
                      onChange={(e) =>
                        setItems(items.map((itm, i) =>
                          i === index ? { ...itm, packed: e.target.value } : itm
                        ))
                      }
                      placeholder="Packed"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="number"
                      className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
                      value={item.toPack}
                      onChange={(e) =>
                        setItems(items.map((itm, i) =>
                          i === index ? { ...itm, toPack: e.target.value } : itm
                        ))
                      }
                      placeholder="Quantity to Pack"
                    />
                  </td>
                  <td className="p-2 text-center">
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="text-red-500 hover:text-red-700 text-lg"
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={handleAddItem}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            + Add Item
          </button>
        </div>

        {/* Internal Notes */}
        <div className="mb-6">
          <label className="block text-blue-700 dark:text-blue-300  mb-2">Internal Notes</label>
          <textarea
            className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white"
            rows="4"
            placeholder="Enter internal notes"
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageForm;
