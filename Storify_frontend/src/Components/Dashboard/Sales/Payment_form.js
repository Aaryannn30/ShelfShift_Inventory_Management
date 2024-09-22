import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payment_form = () => {
  const navigate = useNavigate();

  // Function to handle Cancel button click
  const handleCancel = () => {
    navigate('/dashboard/payments'); // Redirect to payments page
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white p-6">
      {/* Form Container */}
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Record Payment</h2>

        {/* Form Fields */}
        <form className="space-y-6">
          {/* Customer Name */}
          <div>
            <label className="block text-gray-700 font-semibold">Customer Name</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Customer Name" />
          </div>

          {/* Amount Received */}
          <div>
            <label className="block text-gray-700 font-semibold">Amount Received</label>
            <input type="number" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Amount" />
          </div>

          {/* Bank Charges */}
          <div>
            <label className="block text-gray-700 font-semibold">Bank Charges (if any)</label>
            <input type="number" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Bank Charges" />
          </div>

          {/* Payment Date */}
          <div>
            <label className="block text-gray-700 font-semibold">Payment Date</label>
            <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          {/* Payment Number */}
          <div>
            <label className="block text-gray-700 font-semibold">Payment #</label>
            <input type="number" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Payment Number" />
          </div>

          {/* Payment Mode */}
          <div>
            <label className="block text-gray-700 font-semibold">Payment Mode</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>

          {/* Deposit To */}
          <div>
            <label className="block text-gray-700 font-semibold">Deposit To</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Deposit Location" />
          </div>

          {/* Reference # */}
          <div>
            <label className="block text-gray-700 font-semibold">Reference #</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Reference Number" />
          </div>

          {/* Tax Deducted */}
          <div>
            <label className="block text-gray-700 font-semibold">Tax Deducted?</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input type="radio" name="tax" value="no" className="mr-2 text-blue-500" />
                <span>No Tax Deducted</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="tax" value="yes" className="mr-2 text-blue-500" />
                <span>Yes, TDS (Income Tax)</span>
              </label>
            </div>
          </div>

          {/* Unpaid Invoices */}
          <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Unpaid Invoices</h3>
            <p className="text-gray-500">There are no unpaid invoices associated with this customer.</p>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-gray-700 font-semibold">Notes (Internal use)</label>
            <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Enter Notes"></textarea>
          </div>

          {/* Attachments */}
          <div>
            <label className="block text-gray-700 font-semibold">Attachments</label>
            <input type="file" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm" multiple />
          </div>

          {/* Email Notification */}
          <div className="flex items-center">
            <input type="checkbox" id="emailNotify" className="mr-2 text-blue-500" />
            <label htmlFor="emailNotify" className="text-gray-700">Email a "thank you" note for this payment</label>
          </div>
        </form>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-end space-x-4">
          <button
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md transition hover:bg-gray-400"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md transition hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment_form;
