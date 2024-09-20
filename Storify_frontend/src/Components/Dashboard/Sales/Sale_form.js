import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';
import NewCustomerModal from '../NewCustomerModal';

const Sale_form = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [items, setItems] = useState([{ description: '', quantity: 1, rate: 0, discount: 0, amount: 0 }]);
  const [subtotal, setSubtotal] = useState(0);
  const [file, setFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [salesOrderNumber, setSalesOrderNumber] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [salesOrderDate, setSalesOrderDate] = useState('');
  const [expectedShipmentDate, setExpectedShipmentDate] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('Due On Receipt');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [salesperson, setSalesperson] = useState('');

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
    e.preventDefault();
    setItems([...items, { description: '', quantity: 1, rate: 0, discount: 0, amount: 0 }]);
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle cancel action (redirect to Sales Order page)
  const handleCancel = () => {
    navigate('/dashboard/sales_orders');
  };

  // Handle new customer addition
  const handleAddNewCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
    setSelectedCustomer(newCustomer);
    setIsModalOpen(false); // Close modal after adding
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* New Customer Modal */}
      {isModalOpen && <NewCustomerModal onClose={() => setIsModalOpen(false)} onSave={handleAddNewCustomer} />}

      <div className="bg-white p-8 shadow rounded-lg">
        <h1 className="text-2xl font-semibold mb-6">New Sales Order</h1>
        <form>
          {/* Customer and Sales Order Info */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">Customer Name</label>
              <div className="relative">
                <select
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg"
                  onChange={(e) => {
                    const selected = customers.find((c) => c.id === parseInt(e.target.value));
                    setSelectedCustomer(selected);
                  }}
                >
                  <option value="">Select a Customer</option>
                  {customers.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.name}
                    </option>
                  ))}
                </select>

                {/* Add New Customer */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="absolute top-2 right-6 text-blue-600"
                >
                  <FaUserPlus size={20} />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Sales Order#</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter sales order number"
                value={salesOrderNumber}
                onChange={(e) => setSalesOrderNumber(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Reference#</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter reference number"
                value={referenceNumber}
                onChange={(e) => setReferenceNumber(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Sales Order Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={salesOrderDate}
                onChange={(e) => setSalesOrderDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Expected Shipment Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={expectedShipmentDate}
                onChange={(e) => setExpectedShipmentDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Payment Terms</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={paymentTerms}
                onChange={(e) => setPaymentTerms(e.target.value)}
              >
                <option>Due On Receipt</option>
                <option>Net 30</option>
                <option>Net 60</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Delivery Method</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter delivery method"
                value={deliveryMethod}
                onChange={(e) => setDeliveryMethod(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Salesperson</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter salesperson"
                value={salesperson}
                onChange={(e) => setSalesperson(e.target.value)}
              />
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
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                        className="w-full px-2 py-1 border rounded"
                        placeholder="Enter item description"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        value={item.rate}
                        onChange={(e) => handleItemChange(index, 'rate', parseFloat(e.target.value))}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        value={item.discount}
                        onChange={(e) => handleItemChange(index, 'discount', parseFloat(e.target.value))}
                        className="w-full px-2 py-1 border rounded"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      {item.amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              type="button"
              onClick={addNewRow}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add New Item
            </button>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between mb-6">
            <span className="font-semibold">Subtotal:</span>
            <span>{subtotal.toFixed(2)}</span>
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Upload File</label>
            <input
              type="file"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              onChange={handleFileUpload}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sale_form;
