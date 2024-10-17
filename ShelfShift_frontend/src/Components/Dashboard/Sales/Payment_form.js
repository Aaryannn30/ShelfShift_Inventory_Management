import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payment_form = () => {
  const navigate = useNavigate();

  // Function to handle Cancel button click
  const handleCancel = () => {
    navigate('/dashboard/payments'); // Redirect to payments page
  };

  return (
    <div className="min-h-screen dark:bg-[#030637] p-6">
      {/* Form Container */}
      <div className="bg-white dark:bg-[#17153B] shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Record Payment</h2>

        {/* Form Fields */}
        <form className="space-y-6">
          {/* Customer Name */}
          <div>
            <label className="block text-blue-700 dark:text-blue-400  font-semibold">Customer Name</label>
            <input type="text" className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white" placeholder="Enter Customer Name" />
          </div>

          {/* Amount Received */}
          <div>
            <label className="block text-blue-700 dark:text-blue-400  font-semibold">Amount Received</label>
            <input type="number" className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white" placeholder="Enter Amount" />
          </div>

          {/* Bank Charges */}
          <div>
            <label className="block text-blue-700 dark:text-blue-400  font-semibold">Bank Charges (if any)</label>
            <input type="number" className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white" placeholder="Enter Bank Charges" />
          </div>

          {/* Payment Date */}
          <div>
            <label className="block text-blue-700 dark:text-blue-400  font-semibold">Payment Date</label>
            <input type="date" className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white" />
          </div>

          {/* Payment Number */}
          <div>
            <label className="block text-blue-700 dark:text-blue-400  font-semibold">Payment #</label>
            <input type="number" className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white" placeholder="Enter Payment Number" />
          </div>

          {/* Payment Mode */}
          <div>
            <label className="block text-blue-700 dark:text-blue-400  font-semibold">Payment Mode</label>
            <select className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white">
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>

          {/* Deposit To */}
          <div>
            <label className="block text-blue-700 dark:text-blue-400  font-semibold">Deposit To</label>
            <input type="text" className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white" placeholder="Enter Deposit Location" />
          </div>

          {/* Reference # */}
          <div>
            <label className="block text-blue-700 dark:text-blue-400  font-semibold">Reference #</label>
            <input type="text" className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white" placeholder="Enter Reference Number" />
          </div>

          {/* Tax Deducted */}
          <div>
            <label className="block text-blue-700 dark:text-blue-400  font-semibold">Tax Deducted?</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center text-blue-700 dark:text-blue-400 ">
                <input type="radio" name="tax" value="no" className="mr-2 text-blue-500" />
                <span>No Tax Deducted</span>
              </label>
              <label className="flex items-center text-blue-700 dark:text-blue-400 ">
                <input type="radio" name="tax" value="yes" className="mr-2 text-blue-500" />
                <span>Yes, TDS (Income Tax)</span>
              </label>
            </div>
          </div>

          {/* Unpaid Invoices */}
          <div className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white" placeholder="Enter Reference Number">
            <h3 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-400 ">Unpaid Invoices</h3>
            <p className="text-gray-500">There are no unpaid invoices associated with this customer.</p>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-blue-700 dark:text-blue-400  font-semibold">Notes (Internal use)</label>
            <textarea className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white" rows="4" placeholder="Enter Notes"></textarea>
          </div>

          {/* Attachments */}
          <div>
            <label className="block text-blue-700 dark:text-blue-400  font-semibold">Attachments</label>
            <input type="file" className="p-4 block w-full rounded-md border-[#B9B4C7] border-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-[#030637] dark:border-[#910A67] dark:text-white" placeholder="Enter Reference Number" multiple />
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
