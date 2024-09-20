import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment_form = () => {
  const navigate = useNavigate();

  // Function to handle Cancel button click
  const handleCancel = () => {
    navigate('/payments');  // Redirect to payments page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Form Container */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Record Payment</h2>

        {/* Form Fields */}
        <form className="space-y-4">
          {/* Customer Name */}
          <div>
            <label className="block text-gray-600">Customer Name</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Enter Customer Name" />
          </div>

          {/* Amount Received */}
          <div>
            <label className="block text-gray-600">Amount Received</label>
            <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Enter Amount" />
          </div>

          {/* Bank Charges */}
          <div>
            <label className="block text-gray-600">Bank Charges (if any)</label>
            <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Enter Bank Charges" />
          </div>

          {/* Payment Date */}
          <div>
            <label className="block text-gray-600">Payment Date</label>
            <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded" />
          </div>

          {/* Payment Number */}
          <div>
            <label className="block text-gray-600">Payment #</label>
            <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Enter Payment Number" />
          </div>

          {/* Payment Mode */}
          <div>
            <label className="block text-gray-600">Payment Mode</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded">
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>

          {/* Deposit To */}
          <div>
            <label className="block text-gray-600">Deposit To</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Enter Deposit Location" />
          </div>

          {/* Reference # */}
          <div>
            <label className="block text-gray-600">Reference #</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Enter Reference Number" />
          </div>

          {/* Tax Deducted */}
          <div>
            <label className="block text-gray-600">Tax Deducted?</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="tax" value="no" className="mr-2" />
                No Tax Deducted
              </label>
              <label className="flex items-center">
                <input type="radio" name="tax" value="yes" className="mr-2" />
                Yes, TDS (Income Tax)
              </label>
            </div>
          </div>

          {/* Unpaid Invoices */}
          <div className="bg-gray-50 border border-gray-200 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Unpaid Invoices</h3>
            <p className="text-gray-500">There are no unpaid invoices associated with this customer.</p>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-gray-600">Notes (Internal use)</label>
            <textarea className="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Enter Notes"></textarea>
          </div>

          {/* Attachments */}
          <div>
            <label className="block text-gray-600">Attachments</label>
            <input type="file" className="w-full px-4 py-2 border border-gray-300 rounded" multiple />
          </div>

          {/* Email Notification */}
          <div className="flex items-center">
            <input type="checkbox" id="emailNotify" className="mr-2" />
            <label htmlFor="emailNotify" className="text-gray-600">Email a "thank you" note for this payment</label>
          </div>
        </form>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment_form;
