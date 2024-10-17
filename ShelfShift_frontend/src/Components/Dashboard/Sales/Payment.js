import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
  return (
    <div className="min-h-screen dark:bg-[#030637] p-8">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-6 bg-white dark:bg-[#17153B] border p-4">
        <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-300 ">All Received Payments</h1>
        <Link to='/dashboard/payment_form'>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
            + New Payment
          </button>
        </Link>
      </div>

      {/* Payment Section */}
      <div className="mt-10 bg-white dark:bg-[#17153B] border shadow-lg rounded-lg p-8">
        <h2 className="text-center text-blue-700 dark:text-blue-300  text-xl font-semibold">No Payments Received Yet</h2>
        <p className="text-center text-blue-800 dark:text-blue-100  mb-6">
          Payments will be recorded once your customers pay their invoices.
        </p>
        <div className="text-center">
          <Link to='/dashboard/payment_form'>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Go to Unpaid Invoices
            </button>
          </Link>
          <button className="mt-4 text-blue-600 underline hover:text-blue-700 p-2 ml-6 transition duration-300">
            Import Payments
          </button>
        </div>  
      </div>
    </div>
  );
};

export default Payment;
