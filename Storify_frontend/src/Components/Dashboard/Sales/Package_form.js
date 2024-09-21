import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Package_form = () => {
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
    <div className="p-8 bg-gray-100 h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-lg">
        <h1 className="text-2xl font-semibold mb-6">New Package</h1>
        
        <div className="grid grid-cols-2 gap-6 mb-4">
          {/* Customer Name */}
          <div>
            <label className="block text-gray-700 mb-2">Customer Name</label>
            <input
              type="text"
              className="border rounded w-full p-2"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter Customer Name"
            />
          </div>

          {/* Sales Order */}
          <div>
            <label className="block text-gray-700 mb-2">Sales Order#</label>
            <select
              className="border rounded w-full p-2"
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
            <label className="block text-gray-700 mb-2">Package Slip#</label>
            <input
              type="text"
              className="border rounded w-full p-2"
              value={packageSlip}
              onChange={(e) => setPackageSlip(e.target.value)}
              placeholder="Enter Package Slip#"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 mb-2">Date</label>
            <input
              type="date"
              className="border rounded w-full p-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        {/* Items Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Items & Description</h2>
          <table className="min-w-full bg-white mb-4">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Description</th>
                <th className="text-left p-2">Ordered</th>
                <th className="text-left p-2">Packed</th>
                <th className="text-left p-2">Quantity to Pack</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">
                    <input
                      type="text"
                      className="border rounded w-full p-1"
                      value={item.description}
                      onChange={(e) =>
                        setItems(items.map((item, i) =>
                          i === index ? { ...item, description: e.target.value } : item
                        ))
                      }
                      placeholder="Enter item description"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="number"
                      className="border rounded w-full p-1"
                      value={item.ordered}
                      onChange={(e) =>
                        setItems(items.map((item, i) =>
                          i === index ? { ...item, ordered: e.target.value } : item
                        ))
                      }
                      placeholder="Ordered"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="number"
                      className="border rounded w-full p-1"
                      value={item.packed}
                      onChange={(e) =>
                        setItems(items.map((item, i) =>
                          i === index ? { ...item, packed: e.target.value } : item
                        ))
                      }
                      placeholder="Packed"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="number"
                      className="border rounded w-full p-1"
                      value={item.toPack}
                      onChange={(e) =>
                        setItems(items.map((item, i) =>
                          i === index ? { ...item, toPack: e.target.value } : item
                        ))
                      }
                      placeholder="Quantity to Pack"
                    />
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="text-red-500 hover:text-red-700"
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
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            + Add Item
          </button>
        </div>

        {/* Internal Notes */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Internal Notes</label>
          <textarea
            className="border rounded w-full p-2"
            rows="4"
            placeholder="Enter internal notes"
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Package_form;
