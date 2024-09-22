import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-white p-8">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All Received Payments</h1>
        <Link to='/dashboard/payment_form'>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
            + New Payment
          </button>
        </Link>
      </div>

      {/* Payment Section */}
      <div className="mt-10 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-center text-gray-700 text-xl font-semibold">No Payments Received Yet</h2>
        <p className="text-center text-gray-500 mb-6">
          Payments will be recorded once your customers pay their invoices.
        </p>
        <div className="text-center">
          <Link to='/dashboard/payment_form'>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Go to Unpaid Invoices
            </button>
          </Link>
          <button className="mt-4 text-blue-600 underline hover:text-blue-700 transition duration-300">
            Import Payments
          </button>
        </div>
      </div>

      {/* Life Cycle Diagram */}
      <div className="mt-12 bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-center text-gray-800 font-semibold text-lg">
          Life Cycle of a Customer Payment
        </h3>
        <div className="mt-6 flex justify-center">
          <div className="w-full max-w-3xl">
            <img 
              src="https://via.placeholder.com/600x200" 
              alt="Life Cycle Diagram" 
              className="mx-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
