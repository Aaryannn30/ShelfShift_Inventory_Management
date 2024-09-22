import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const InvoiceForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [items, setItems] = useState([{ description: '', quantity: 1, rate: 0, discount: 0, amount: 0 }]);
  const [subtotal, setSubtotal] = useState(0);
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    let total = items.reduce((sum, item) => {
      const itemTotal = (item.rate - item.discount) * item.quantity;
      return sum + itemTotal;
    }, 0);
    setSubtotal(total);
  };

  // Handle changes in the table (updating fields)
  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;

    if (['quantity', 'rate', 'discount'].includes(field)) {
      newItems[index].amount = (newItems[index].rate - newItems[index].discount) * newItems[index].quantity;
    }
    
    setItems(newItems);
    calculateSubtotal();
  };

  // Add new row to the item table
  const addNewRow = (e) => {
    e.preventDefault();
    setItems([...items, { description: '', quantity: 1, rate: 0, discount: 0, amount: 0 }]);
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle cancel action (redirect to Sales Order page)
  const handleCancel = () => {
    navigate('/dashboard/invoice');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
      {/* Header */}
      <header className="bg-white p-4 shadow-lg mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-blue-700">Create New Invoice</h1>
      </header>

      {/* Form */}
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <form>
          {/* Customer and Sales Order Info */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {['Customer Name', 'Invoice#', 'Order No#', 'Invoice Date', 'Due Date', 'Terms', 'Subject', 'Salesperson'].map((label, index) => (
              <div key={index}>
                <label className="block text-gray-700 mb-2">{label}</label>
                {label === 'Terms' ? (
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                    <option>Due On Receipt</option>
                    <option>Net 30</option>
                    <option>Net 60</option>
                  </select>
                ) : (
                  <input
                    type={label.includes('Date') ? 'date' : 'text'}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder={label}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Item Table */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Item Table</h2>
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-indigo-100">
                  {['Item Description', 'Quantity', 'Rate', 'Discount', 'Amount'].map((header, index) => (
                    <th key={index} className="border px-4 py-2">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                        className="w-full px-2 py-1 border rounded-lg"
                        placeholder="Enter item description"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value) || 0)}
                        className="w-full px-2 py-1 border rounded-lg"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        value={item.rate}
                        onChange={(e) => handleItemChange(index, 'rate', parseFloat(e.target.value) || 0)}
                        className="w-full px-2 py-1 border rounded-lg"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        value={item.discount}
                        onChange={(e) => handleItemChange(index, 'discount', parseFloat(e.target.value) || 0)}
                        className="w-full px-2 py-1 border rounded-lg"
                      />
                    </td>
                    <td className="border px-4 py-2 text-right">{item.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button onClick={addNewRow} className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg">
              Add New Item
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
          <div className="flex justify-between items-center mt-6">
            <div>
              <h4 className="text-lg font-semibold">Subtotal</h4>
              <p className="text-xl font-bold text-blue-600">${subtotal.toFixed(2)}</p>
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

export default InvoiceForm;
