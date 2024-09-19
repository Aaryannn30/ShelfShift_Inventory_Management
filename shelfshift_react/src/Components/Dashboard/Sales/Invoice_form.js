import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Invoice_form = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [items, setItems] = useState([
    { description: '', quantity: 1, rate: 0, discount: 0, amount: 0 }
  ]);
  const [subtotal, setSubtotal] = useState(0);
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    let total = 0;
    items.forEach((item) => {
      const itemTotal = (item.rate - item.discount) * item.quantity;
      total += itemTotal;
    });
    setSubtotal(total);
  };

  // Handle changes in the table (updating fields)
  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    if (field === 'quantity' || field === 'rate' || field === 'discount') {
      newItems[index].amount = (newItems[index].rate - newItems[index].discount) * newItems[index].quantity;
    }
    setItems(newItems);
    calculateSubtotal();
  };

  // Add new row to the item table
  const addNewRow = (e) => {
    e.preventDefault(); // Prevents page refresh
    setItems([...items, { description: '', quantity: 1, rate: 0, discount: 0, amount: 0 }]);
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle cancel action (redirect to Sales Order page)
  const handleCancel = () => {
    navigate('/invoice'); // Redirect to the sales order page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="bg-white p-4 shadow mb-6 flex justify-between items-center">
        
      </header>

      {/* Form */}
      <div className="bg-white p-8 shadow rounded-lg">
        <h1 className="text-2xl font-semibold mb-6">New Invoice</h1>
        <form>
          {/* Customer and Sales Order Info */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">Customer Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Select or add a customer" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Invoice#</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Enter sales order number" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Order No#</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Enter reference number" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Invoice Date</label>
              <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Due Date</label>
              <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Terms</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option>Due On Receipt</option>
                <option>Net 30</option>
                <option>Net 60</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Subject</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Select or add a delivery method" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Salesperson</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Select or add a salesperson" />
            </div>
          </div>

          {/* Item Table */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Item Table</h2>
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Item Description</th>
                  <th className="border px-4 py-2">Quantity</th>
                  <th className="border px-4 py-2">Rate</th>
                  <th className="border px-4 py-2">Discount</th>
                  <th className="border px-4 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">
                      <input type="text" value={item.description} onChange={(e) => handleItemChange(index, 'description', e.target.value)} className="w-full px-2 py-1 border rounded" placeholder="Enter item description" />
                    </td>
                    <td className="border px-4 py-2">
                      <input type="number" value={item.quantity} onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))} className="w-full px-2 py-1 border rounded" />
                    </td>
                    <td className="border px-4 py-2">
                      <input type="number" value={item.rate} onChange={(e) => handleItemChange(index, 'rate', parseFloat(e.target.value))} className="w-full px-2 py-1 border rounded" />
                    </td>
                    <td className="border px-4 py-2">
                      <input type="number" value={item.discount} onChange={(e) => handleItemChange(index, 'discount', parseFloat(e.target.value))} className="w-full px-2 py-1 border rounded" />
                    </td>
                    <td className="border px-4 py-2">{item.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button onClick={addNewRow} className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg">
              Add New Row
            </button>
          </div>

          {/* Subtotal and File Upload */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">Attach Files</label>
              <input type="file" onChange={handleFileUpload} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              {file && <p className="mt-2 text-sm text-gray-600">Uploaded file: {file.name}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Adjustment</label>
              <input type="number" placeholder="Enter Adjustment Amount" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold">Subtotal</h4>
              <p className="text-xl">${subtotal.toFixed(2)}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button onClick={handleCancel} className="bg-red-500 text-white py-2 px-4 rounded-lg">
                Cancel
              </button>
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg">
                Save and Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Invoice_form;
